import { thinkingLevelOptions } from '../settings/settingsRegistry';

export type ThinkingLevelStepDirection = 'raise' | 'lower';

const thinkingLevelOrder = thinkingLevelOptions.map((option) => option.value);

export function getSteppedThinkingLevel(
  currentLevel: string,
  direction: ThinkingLevelStepDirection
): string | undefined {
  const currentIndex = thinkingLevelOrder.indexOf(currentLevel as typeof thinkingLevelOrder[number]);

  if (currentIndex === -1) {
    return undefined;
  }

  const delta = direction === 'raise' ? 1 : -1;
  const nextIndex = (currentIndex + delta + thinkingLevelOrder.length) % thinkingLevelOrder.length;

  return thinkingLevelOrder[nextIndex];
}
