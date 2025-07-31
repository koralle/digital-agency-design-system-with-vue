import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const getFirstOfWeek = (date: Date): Date => {
  const value = new Date(date);
  const day = value.getDay() || 7;

  if (day !== 0) value.setHours(-24 * day);

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
