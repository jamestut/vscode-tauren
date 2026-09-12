import * as assert from 'assert';
import { getSteppedThinkingLevel } from '../../controller/thinkingLevelSteps';

suite('thinkingLevelSteps', () => {
  test('raises through existing thinking picker order', () => {
    assert.strictEqual(getSteppedThinkingLevel('off', 'raise'), 'minimal');
    assert.strictEqual(getSteppedThinkingLevel('minimal', 'raise'), 'low');
    assert.strictEqual(getSteppedThinkingLevel('low', 'raise'), 'medium');
    assert.strictEqual(getSteppedThinkingLevel('medium', 'raise'), 'high');
    assert.strictEqual(getSteppedThinkingLevel('high', 'raise'), 'xhigh');
    assert.strictEqual(getSteppedThinkingLevel('xhigh', 'raise'), 'max');
  });

  test('lowers through existing thinking picker order', () => {
    assert.strictEqual(getSteppedThinkingLevel('max', 'lower'), 'xhigh');
    assert.strictEqual(getSteppedThinkingLevel('xhigh', 'lower'), 'high');
    assert.strictEqual(getSteppedThinkingLevel('high', 'lower'), 'medium');
    assert.strictEqual(getSteppedThinkingLevel('medium', 'lower'), 'low');
    assert.strictEqual(getSteppedThinkingLevel('low', 'lower'), 'minimal');
    assert.strictEqual(getSteppedThinkingLevel('minimal', 'lower'), 'off');
  });

  test('wraps at the ends and ignores unknown levels', () => {
    assert.strictEqual(getSteppedThinkingLevel('max', 'raise'), 'off');
    assert.strictEqual(getSteppedThinkingLevel('off', 'lower'), 'max');
    assert.strictEqual(getSteppedThinkingLevel('', 'raise'), undefined);
  });
});
