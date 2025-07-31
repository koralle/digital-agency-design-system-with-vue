import { ref, type Ref } from 'vue';
import { getTodayDate } from './calendar-utils';

export interface UseCalendarProps {
  controledDate: Ref<Date | null | undefined>;
  minYear: number;
  maxYear: number;
}

export const useCalendar = ({ controledDate, minYear, maxYear }: UseCalendarProps) => {
  const today = getTodayDate();

  const calendarDate = ref<Date>(today);

  const focusedDate = ref<Date>(today);

  return {
    calendarDate,
    controledDate,
    focusedDate,
    minYear,
    maxYear
  };
};

export type UseCalendarReturn = ReturnType<typeof useCalendar>;
