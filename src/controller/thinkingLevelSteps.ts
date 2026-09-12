import { thinkingLevelOptions } from '../settings/settingsRegistry';

export type ThinkingLevelStepDirection = 'raise' | 'lower';

const thinkingLevelOrder = thinkingLevelOptions.map((option) => option.value);

export function getSteppedThinkingLevel(
  currentLevel: string,
  direction: ThinkingLevelStepDirection,
  availableLevels?: readonly string[]
): string | undefined {
  const levels = availableLevels && availableLevels.length > 0 ? availableLevels : thinkingLevelOrder;
  const currentIndex = levels.indexOf(currentLevel);

  if (currentIndex === -1) {
    return undefined;
  }

  const delta = direction === 'raise' ? 1 : -1;
  const nextIndex = (currentIndex + delta + thinkingLevelOrder.length) % thinkingLevelOrder.length;

  if (nextIndex < 0 || nextIndex >= levels.length) {
    return undefined;
  }

  return levels[nextIndex];
}
