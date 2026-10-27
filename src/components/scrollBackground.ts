/**
 * Scroll-scrubbed page background.
 *
 * `Background.zip` held 62 potrace traces of a logo-reveal video, one file per
 * frame. Traced output is an opaque dark canvas with the artwork punched out as
 * transparent holes, so each frame is stored in `public/frames/` wrapped in a
 * mask that keeps only the holes — light line art on transparency. That is the
 * form a CSS mask wants, which lets a single flat accent panel stand in for the
 * artwork and keeps the palette to one hue.
 */

export const FRAME_COUNT = 62;

/**
 * Frame index for a 0–1 scroll progress, starting from frame 1 (index 1)
 * when at the top and animating through the sequence on scroll.
 */
export function frameIndexFor(progress: number, frameCount: number = FRAME_COUNT): number {
  if (!Number.isFinite(progress) || frameCount < 1) return 1;
  const clamped = Math.min(1, Math.max(0, progress));
  if (clamped === 0) return 1;
  const idx = Math.round(clamped * (frameCount - 1));
  return idx < 1 ? 1 : idx;
}

/** 0 at the very top of the document, 1 once the last pixel is in view. */
export function documentProgress(scrollTop: number, scrollHeight: number, viewportHeight: number): number {
  const scrollable = scrollHeight - viewportHeight;
  // A document shorter than the viewport has no scrollable range at all, and
  // dividing by it would hand back NaN.
  if (scrollable <= 0) return 0;
  return Math.min(1, Math.max(0, scrollTop / scrollable));
}

function frameSources(): string[] {
  // Resolved against the document base so the `/Portfolio/` base tag applies.
  return Array.from({ length: FRAME_COUNT }, (_, index) =>
    new URL(`frames/frame-${String(index).padStart(3, '0')}.png`, document.baseURI).href);
}

export function initScrollBackground(element: HTMLElement | null): void {
  if (!element) return;

  const sources = frameSources();
  let applied = -1;

  const apply = (index: number) => {
    if (index === applied) return;
    applied = index;
    element.style.setProperty("--scroll-frame", `url("${sources[index]}")`);
  };

  const render = () => {
    apply(frameIndexFor(documentProgress(window.scrollY, document.documentElement.scrollHeight, window.innerHeight)));
  };

  // The reveal is decoration only. A reader who asked for reduced motion gets
  // the resolved frame rather than a background that tracks the scrollbar.
  if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    apply(FRAME_COUNT - 1);
    element.classList.add("active");
    return;
  }

  render();
  element.classList.add("active");

  // A mask swap that waits on the network stalls mid-scroll, so decode every
  // frame once the first paint is out of the way.
  window.setTimeout(() => {
    for (const src of sources) {
      const frame = new Image();
      frame.src = src;
    }
  }, 200);

  let ticking = false;
  const schedule = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      render();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);

  // Switching between the homepage and a project page rebuilds the document at
  // a different height, which changes the progress for the same scrollTop.
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(schedule).observe(document.documentElement);
  }
}
