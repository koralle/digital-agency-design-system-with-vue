import type { Ref } from 'vue';

interface CalendarProps {
  minYear?: number;
  maxYear?: number;
}

interface CalendarContext {
  calendarDate: Ref<Date>;
    controlledDate: Ref<Date | null | undefined>;
  focusedDate: Ref<Date>;
  minYear: number;
  maxYear: number;
}

export type { CalendarProps, CalendarContext };
