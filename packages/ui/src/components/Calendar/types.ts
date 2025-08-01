import type { Ref } from 'vue';

export interface CalendarProps {
  minYear?: number;
  maxYear?: number;
}

export interface CalendarContext {
  calendarDate: Ref<Date>;
    controlledDate: Ref<Date | null | undefined>;
  focusedDate: Ref<Date>;
  minYear: number;
  maxYear: number;
}
