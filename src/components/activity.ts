import { projects } from '../data/projects';
import { DOM, formatActivityDate, showToastNotification } from '../utils/dom';
import { projectChangelogs, buildGlobalActivityEvents, getChangeTypeStyle } from '../data/changelog-builder';

declare const lucide: any;
// Track which project history is currently expanded (only one at a time)
let expandedProjectId: string | null = null;
// Truncate text for display
function truncateSummary(text: string, limit = 120): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= limit) return cleaned;
  return `${cleaned.slice(0, limit).trim()}…`;
}
// Build the project road HTML - one node per project, ordered by creation date
function buildProjectRoad(): string {
  // Sort projects by repositoryCreatedAt (oldest first), Master Controller last (undated)  const sortedProjects = [...projects].sort((a, b) => {    const aDate = a.repositoryCreatedAt;    const bDate = b.repositoryCreatedAt;    if (!aDate && !bDate) return 0;    if (!aDate) return 1; // b has a date, a doesn't -> b comes first    if (!bDate) return -1; // a has a date, b doesn't -> a comes first    return (Date.parse(aDate) || 0) - (Date.parse(bDate) || 0);  });
  return sortedProjects.map(project => {    const entryCount = projectChangelogs[project.id]?.length || 0;    const isArchived = project.status === 'archived';        // Format the creation date for display    let dateDisplay = '';    if (project.repositoryCreatedAt) {      dateDisplay = formatActivityDate(project.repositoryCreatedAt);    } else {      dateDisplay = 'Archived';    }        // Determine the label for the toggle button    const toggleLabel = isArchived ? 'View History' : 'View History';        return `<div class="project-road-item" data-project-id="${project.id}" role="button" tabindex="0" aria-label="${project.name} roadmap - ${dateDisplay}" aria-controls="history-${project.id}" aria-expanded="false">      <div class="road-node">        <span class="road-name">${project.name}</span>        <span class="road-date">${dateDisplay}</span>        <span class="road-status ${project.status}">${project.status}</span>      </div>      <div class="road-toggle" aria-label="Expand ${project.name} history">        <i data-lucide="chevron-down" class="road-toggle-icon"></i>      </div>    </div>    <div id="history-${project.id}" class="project-history" role="region" aria-label="${project.name} commit history" style="display: none;">      <h4 class="history-title">        ${project.name} ${isArchived ? '(archived)' : ''}        <span class="history-count">(${entryCount} recorded changelog entries)</span>      </h4>      <div class="history-list">        ${project.changelog.map((entry, idx) => {          // Build event info from changelog entry without depending on buildChangelogEvent          const commitSha = entry.commitSha;          const commitUrl = entry.commitUrl;          const changeType = entry.type || 'maintenance';          const style = getChangeTypeStyle(changeType);          const shortSha = commitSha ? commitSha.slice(0, 7) : 'N/A';          const summary = truncateSummary(entry.summary || entry.changes?.[0] || '');                    return `<div class="history-entry" data-index="${idx}">            <div class="entry-date">${formatActivityDate(entry.date)}</div>            <span class="entry-badge ${style.badgeClass}">${style.badgeText}</span>            <div class="entry-summary">${summary}</div>            ${shortSha !== 'N/A' ? `<span class="entry-sha" title="Commit SHA">${shortSha}</span>` : ''}            ${commitUrl ? `              <a class="entry-link" href="${commitUrl}" target="_blank" rel="noopener noreferrer">                View Commit              </a>            ` : ''}          </div>`;        }).join('')}      </div>    </div>`;
  }).join('');
}
// Render the global activity feed (backward-compatible alias for main.ts and tests)
export function renderGlobalActivityFeed() {  if (!DOM.activityTimeline) return;  DOM.activityTimeline.innerHTML = '';

  const events = buildGlobalActivityEvents(projects);

  if (events.length === 0) {    DOM.activityTimeline.innerHTML = `
      <div class="activity-empty-state">        <div class="activity-empty-icon"><i data-lucide="git-commit"></i></div>        <h3>No recorded changelog events</h3>        <p>Activity is built only from commits documented in the project changelog source. Nothing is fabricated when history is unavailable.</p>      </div>
    `;    if (typeof lucide !== 'undefined' && lucide.createIcons) {      lucide.createIcons();    }    return;  }

  events.forEach(ev => {    const eventEl = document.createElement('div');    eventEl.className = 'activity-event';    eventEl.id = `activity-event-${ev.projectId}-${ev.eventKey}`;

    const style = getChangeTypeStyle(ev.changeType);

    eventEl.innerHTML = `
      <div class="activity-node ${style.nodeClass}"></div>      <div class="activity-header">        <span class="activity-date">${formatActivityDate(ev.date)}</span>        <span class="activity-badge ${style.badgeClass}">${style.badgeText}</span>        <span class="activity-project-tag">${ev.projectName}</span>      </div>      <div class="activity-card">        <h3 class="activity-title">          <a href="#/project/${ev.projectId}">${ev.projectName}</a>        </h3>        <p class="activity-summary">${ev.summary}</p>        ${ev.details.length > 1 ? `
          <ul class="activity-changes-list">
            ${ev.details.map(d => `<li>${truncateSummary(d, 220)}</li>`).join('')}          </ul>        ` : ''}        <div class="activity-footer">          <div class="activity-meta">            ${ev.commitSha ? `<span class="activity-sha" title="Short commit SHA">${ev.commitSha.slice(0, 7)}</span>` : '<span class="activity-sha">commit unavailable</span>'}          </div>          <div class="activity-actions">            ${ev.commitUrl ? `
              <a class="activity-footer-link" href="${ev.commitUrl}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="git-commit" style="width:14px; height:14px;"></i> View Commit
              </a>
            ` : ''}            <a class="activity-footer-link" href="#/project/${ev.projectId}">              <i data-lucide="info" style="width:14px; height:14px;"></i> Details            </a>          </div>        </div>      </div>    `;

    DOM.activityTimeline.appendChild(eventEl);
  });

  if (typeof lucide !== 'undefined' && lucide.createIcons) {    lucide.createIcons();  }}
// Initialize the two-layer timeline (new architecture)
export function renderTwoLayerTimeline() {  if (!DOM.activityTimeline) return;  DOM.activityTimeline.innerHTML = buildProjectRoad();    // Initialize Lucide icons  if (typeof lucide !== 'undefined' && lucide.createIcons) {    lucide.createIcons();  }    // Attach expand/collapse handlers  attachHistoryToggles();}// Attach expand/collapse handlers for project history sections
function attachHistoryToggles() {  const roadItems = document.querySelectorAll<HTMLElement>('.project-road-item');    roadItems.forEach(item => {    const projectId = item.dataset.projectId;    const historyDiv = document.getElementById(`history-${projectId}`) as HTMLElement;        if (!historyDiv) return;        const toggleBtn = item.querySelector<HTMLElement>('.road-toggle');        if (!toggleBtn) return;        // Handle keyboard Enter/Space activation    const handleKeyDown = (e: KeyboardEvent) => {      if (e.key === 'Enter' || e.key === 'Space') {        e.preventDefault();        toggleHistory(projectId, historyDiv, item, toggleBtn);      }    };        toggleBtn.addEventListener('click', () => toggleHistory(projectId, historyDiv, item, toggleBtn));        // Also allow clicking the entire road item    item.addEventListener('click', () => toggleHistory(projectId, historyDiv, item, toggleBtn));        item.addEventListener('keydown', handleKeyDown);  });    // Close any previously expanded history when clicking a new road item  document.addEventListener('click', (e) => {    const target = e.target as HTMLElement;    if (target.closest('.project-road-item') || target.closest('.road-toggle')) {      const clickedItem = target.closest('.project-road-item') || target.closest('.road-toggle')?.parentElement;      if (clickedItem) {        const id = (clickedItem as HTMLElement).dataset.projectId;        roadItems.forEach(item => {          if (item.dataset.projectId !== id) {            const otherHistory = document.getElementById(`history-${item.dataset.projectId}`) as HTMLElement;
            if (otherHistory) {              otherHistory.style.display = 'none';              const otherToggle = item.querySelector<HTMLElement>('.road-toggle');
              if (otherToggle) {                otherToggle.setAttribute('aria-expanded', 'false');                otherToggle.querySelector('.road-toggle-icon')?.setAttribute('data-lucide', 'chevron-right');
              }
            }          }        });        // Toggle the clicked item        toggleHistory(id, document.getElementById(`history-${id}`) as HTMLElement, clickedItem as HTMLElement, clickedItem.querySelector<HTMLElement>('.road-toggle'));
      }
    }
  });}
// Toggle a project's history expansion
function toggleHistory(projectId: string, historyDiv: HTMLElement, roadItem: HTMLElement, toggleBtn: HTMLElement) {  // Close all other histories first  const allHistories = document.querySelectorAll<HTMLElement>('.project-history');  allHistories.forEach(history => {
    if (history.id !== `history-${projectId}`) {
      history.style.display = 'none';
      const correspondingRoad = document.querySelector<HTMLElement>(`[data-project-id="${history.id.replace('history-', '')}"]`);
      if (correspondingRoad) {
        const otherToggle = correspondingRoad.querySelector<HTMLElement>('.road-toggle');
        if (otherToggle) {
          otherToggle.setAttribute('aria-expanded', 'false');
          otherToggle.querySelector('.road-toggle-icon')?.setAttribute('data-lucide', 'chevron-right');
        }
      }
    }
  });    // Toggle the clicked history  const isCurrentlyExpanded = historyDiv.style.display !== 'none';    if (isCurrentlyExpanded) {    historyDiv.style.display = 'none';
    roadItem.setAttribute('aria-expanded', 'false');
    toggleBtn.querySelector('.road-toggle-icon')?.setAttribute('data-lucide', 'chevron-down');
    expandedProjectId = null;  } else {    // Hide all others first (already done above)    historyDiv.style.display = 'block';
    roadItem.setAttribute('aria-expanded', 'true');
    toggleBtn.querySelector('.road-toggle-icon')?.setAttribute('data-lucide', 'chevron-up');
    expandedProjectId = projectId;  }}

