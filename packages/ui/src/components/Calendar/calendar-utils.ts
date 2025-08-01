import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const getTodayDate = () => dayjs().toDate();

export const buildDate = (year: number, month: number = 1, day: number = 1) =>
  dayjs()
    .set('year', year)
    .set('month', month - 1)
    .set('date', day)
    .toDate();

export const updateYear = (date: Date, newYear: number) => dayjs(date).set('year', newYear).toDate();

export const updateMonth = (date: Date, newMonth: number) =>
  dayjs(date)
    .set('month', newMonth - 1)
    .toDate();

export const addMonth = (date: Date, diff: number) => dayjs(date).add(diff, 'month').toDate();

export const subtractMonth = (date: Date, diff: number) => dayjs(date).subtract(diff, 'month').toDate();

export const addWeek = (date: Date, diff: number) => dayjs(date).add(diff, 'week').toDate();

export const subtractWeek = (date: Date, diff: number) => dayjs(date).subtract(diff, 'week').toDate();

export const addDay = (date: Date, diff: number) => dayjs(date).add(diff, 'day').toDate();

export const subtractDay = (date: Date, diff: number) => dayjs(date).subtract(diff, 'day').toDate();

export const getFirstOfWeek = (date: Date, firstDayOfWeek: 'monday' | 'sunday' = 'sunday'): Date => {
  const value = new Date(date);
  const day = value.getDay();
  const sunday = firstDayOfWeek === 'sunday';

  const diff = sunday ? day : day === 0 ? 6 : day - 1;

  value.setDate(value.getDate() - diff);

  return value;
};

export const getLastOfWeek = (date: Date, firstDayOfWeek: 'monday' | 'sunday' = 'sunday'): Date => {
  const value = new Date(date);
  const day = value.getDay();
  const sunday = firstDayOfWeek === 'sunday';

  const clampToLastDay = 7 - (sunday ? day + 1 : day);

  if ((sunday && day !== 6) || day !== 0) value.setDate(value.getDate() + clampToLastDay);

  return value;
};

export const getWeekdays = (): string[] => {
  let weekdays: string[] = [];

  const date = getFirstOfWeek(new Date());

  for (let i = 0; i < 7; i += 1) {
    const weekday = dayjs(date).locale('ja').format('dd');

    weekdays = [...weekdays, weekday];

    date.setDate(date.getDate() + 1);
  }

  return weekdays;
};

export const getMonthDays = (date: Date): Date[][] => {
  const currentMonth = date.getMonth();
  const firstOfMonth = new Date(date.getFullYear(), currentMonth, 1);
  const lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const endDate = getLastOfWeek(lastOfMonth);
  let firstDate = getFirstOfWeek(firstOfMonth);

  const weeks: Date[][] = [];

  while (firstDate <= endDate) {
    const days: Date[] = [];

    for (let i = 0; i < 7; i += 1) {
      days.push(dayjs(firstDate).toDate());

      firstDate = dayjs(firstDate).add(1, 'day').toDate();
    }

    weeks.push(days);
  }

  return weeks;
};

export const isSameMonth = (date: Date | null | undefined, comparison: Date | null | undefined): boolean =>
  date?.getFullYear() === comparison?.getFullYear() && date?.getMonth() === comparison?.getMonth();

export const isSameDate = (date: Date | null | undefined, comparison: Date | null | undefined) =>
  isSameMonth(date, comparison) && date?.getDate() === comparison?.getDate();
