import { ref, type Ref } from 'vue';
import { getTodayDate } from './calendar-utils';

export interface UseCalendarProps {
  controlledDate: Ref<Date | null | undefined>;
  minYear: number;
  maxYear: number;
}

export const useCalendar = ({ controlledDate, minYear, maxYear }: UseCalendarProps) => {
  const today = getTodayDate();

  const calendarDate = ref<Date>(today);

  const focusedDate = ref<Date>(today);

  return {
    calendarDate,
    controlledDate,
    focusedDate,
    minYear,
    maxYear
  };
};

export type UseCalendarReturn = ReturnType<typeof useCalendar>;
