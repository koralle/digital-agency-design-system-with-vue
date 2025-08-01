import { ref, type Ref } from 'vue';
import { getTodayDate } from './calendar-utils';

interface UseCalendarProps {
  controlledDate: Ref<Date | null | undefined>;
  minYear: number;
  maxYear: number;
}

const useCalendar = ({ controlledDate, minYear, maxYear }: UseCalendarProps): {
  calendarDate: Ref<Date>;
  controlledDate: Ref<Date | null | undefined>;
  focusedDate: Ref<Date>;
  minYear: number;
  maxYear: number;
} => {
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

type UseCalendarReturn = ReturnType<typeof useCalendar>;

export { useCalendar, type UseCalendarProps, type UseCalendarReturn };
