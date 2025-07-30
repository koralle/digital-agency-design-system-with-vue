import * as CalendarStories from './Calendar.stories';
import { composeStories } from '@storybook/vue3-vite';
import { page } from '@vitest/browser/context';
import { render } from '../../test/render';

const composedStories = composeStories(CalendarStories);

describe('calendar', () => {
  const { Default } = composedStories;

  test('コンポーネントが正しくレンダリングされていること', async () => {
    render(Default);

    const heading = page.getByRole('heading', { level: 1, name: /むぎちゃ/i });
    await expect.element(heading).toBeVisible();
  });
});
