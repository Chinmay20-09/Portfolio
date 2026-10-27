import { describe, expect, it } from 'vitest';
import { FRAME_COUNT, documentProgress, frameIndexFor } from '../src/components/scrollBackground';

describe('scroll background progress', () => {
  it('reports no scrollable range for a document shorter than the viewport', () => {
    // Without the guard this divides by zero and hands the frame mapper a NaN,
    // which would leave the background stuck on whichever frame rendered first.
    expect(documentProgress(0, 500, 900)).toBe(0);
    expect(documentProgress(120, 900, 900)).toBe(0);
  });

  it('reaches 1 only at the very bottom of the document', () => {
    expect(documentProgress(0, 3000, 1000)).toBe(0);
    expect(documentProgress(1000, 3000, 1000)).toBe(0.5);
    expect(documentProgress(2000, 3000, 1000)).toBe(1);
  });

  it('clamps overscroll and negative offsets into the sequence', () => {
    expect(documentProgress(-400, 3000, 1000)).toBe(0);
    expect(documentProgress(9000, 3000, 1000)).toBe(1);
  });
});

describe('scroll background frames', () => {
  it('spans the first and last frame inclusively starting from frame 1', () => {
    expect(frameIndexFor(0)).toBe(1);
    expect(frameIndexFor(1)).toBe(FRAME_COUNT - 1);
  });

  it('never returns an index outside the sequence', () => {
    for (let step = -5; step <= 105; step += 1) {
      const index = frameIndexFor(step / 100);
      expect(index).toBeGreaterThanOrEqual(1);
      expect(index).toBeLessThan(FRAME_COUNT);
    }
  });

  it('advances monotonically so scrolling down never rewinds the reveal', () => {
    let previous = 0;
    for (let step = 0; step <= 100; step += 1) {
      const index = frameIndexFor(step / 100);
      expect(index).toBeGreaterThanOrEqual(previous);
      previous = index;
    }
  });

  it('survives the NaN a zero-height document would produce', () => {
    expect(frameIndexFor(Number.NaN)).toBe(1);
  });
});
