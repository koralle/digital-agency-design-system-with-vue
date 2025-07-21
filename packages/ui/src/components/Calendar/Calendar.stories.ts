import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Calendar from './Calendar.vue';

const meta: Meta<typeof Calendar> = {
  component: Calendar
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
