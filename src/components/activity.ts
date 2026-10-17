import { projects } from '../data/projects';
import { DOM, formatActivityDate } from '../utils/dom';
import { buildGlobalActivityEvents, getChangeTypeStyle } from '../data/changelog-builder';

declare const lucide: any;

function truncateSummary(text: string, limit = 160): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= limit) return cleaned;
  return `${cleaned.slice(0, limit).trim()}…`;
}

export function renderGlobalActivityFeed() {
  if (!DOM.activityTimeline) return;
  DOM.activityTimeline.innerHTML = '';

  const events = buildGlobalActivityEvents(projects);

  if (events.length === 0) {
    DOM.activityTimeline.innerHTML = `
      <div class="activity-empty-state">
        <div class="activity-empty-icon"><i data-lucide="git-commit"></i></div>
        <h3>No recorded changelog events</h3>
        <p>Activity is built only from commits documented in the project changelog source. Nothing is fabricated when history is unavailable.</p>
      </div>
    `;
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
    return;
  }

  events.forEach(ev => {
    const eventEl = document.createElement('div');
    eventEl.className = 'activity-event';
    // eventKey is a commit SHA where available, so DOM ids stay unique.
    eventEl.id = `activity-event-${ev.projectId}-${ev.eventKey}`;

    const style = getChangeTypeStyle(ev.changeType);

    eventEl.innerHTML = `
      <div class="activity-node ${style.nodeClass}"></div>
      <div class="activity-header">
        <span class="activity-date">${formatActivityDate(ev.date)}</span>
        <span class="activity-badge ${style.badgeClass}">${style.badgeText}</span>
        <span class="activity-project-tag">${ev.projectName}</span>
      </div>
      <div class="activity-card">
        <h3 class="activity-title">
          <a href="#/project/${ev.projectId}">${ev.projectName}</a>
        </h3>
        <p class="activity-summary">${truncateSummary(ev.summary)}</p>
        ${ev.details.length > 1 ? `
          <ul class="activity-changes-list">
            ${ev.details.map(d => `<li>${truncateSummary(d, 220)}</li>`).join('')}
          </ul>
        ` : ''}
        <div class="activity-footer">
          <div class="activity-meta">
            ${ev.commitSha ? `<span class="activity-sha" title="Short commit SHA">${ev.commitSha.slice(0, 7)}</span>` : '<span class="activity-sha">commit unavailable</span>'}
          </div>
          <div class="activity-actions">
            ${ev.commitUrl ? `
              <a class="activity-footer-link" href="${ev.commitUrl}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="git-commit" style="width:14px; height:14px;"></i> View Commit
              </a>
            ` : ''}
            <a class="activity-footer-link" href="#/project/${ev.projectId}">
              <i data-lucide="info" style="width:14px; height:14px;"></i> Details
            </a>
          </div>
        </div>
      </div>
    `;

    DOM.activityTimeline.appendChild(eventEl);
  });

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}
