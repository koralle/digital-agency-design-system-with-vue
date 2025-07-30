import * as CalendarStories from './Calendar.stories';
import { composeStories } from '@storybook/vue3-vite';
import { page } from '@vitest/browser/context';
import { render } from '../../test/render';

const composedStories = composeStories(CalendarStories);

describe('calendar', () => {
  describe('コンポーネントが正しくレンダリングされていること', async () => {
    const { Default } = composedStories;

    test('年を切り替えるセレクトボックスが表示されていること', async () => {
      render(Default);

      const yearSelect = page.getByRole('combobox', { name: '年', exact: true });
      await expect.element(yearSelect).toBeVisible();
      await expect.element(yearSelect).toBeEnabled();
    });

    test('前の月に切り替えるボタンが表示されていること', async () => {
      render(Default);

      const button = page.getByRole('button').filter({ has: page.getByLabelText('前の月') });
      await expect.element(button).toBeVisible();
      await expect.element(button).toBeEnabled();
    });

    test('次の月に切り替えるボタンが表示されていること', async () => {
      render(Default);

      const button = page.getByRole('button').filter({ has: page.getByLabelText('次の月') });
      await expect.element(button).toBeVisible();
      await expect.element(button).toBeEnabled();
    });
  });
});
