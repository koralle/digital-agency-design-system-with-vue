import { composeStories } from '@storybook/vue3-vite';
import * as CalendarStories from './Calendar.stories';
import { render } from '../../test/render';
import { page } from '@vitest/browser/context';

const composedStories = composeStories(CalendarStories);

describe('Calendar', () => {
  const { Default } = composedStories;

  test('コンポーネントが正しくレンダリングされていること', async () => {
    render(Default);

    const heading = page.getByRole('heading', { level: 1, name: /むぎちゃ/i });
    await expect.element(heading).toBeVisible();
  });
});
