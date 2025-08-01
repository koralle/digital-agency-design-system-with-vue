<script setup lang="ts">
import { computed, nextTick, ref, watchEffect, type ComponentPublicInstance } from 'vue';
import { useCalendarContext } from './calendar-context';
import { getMonthDays, getWeekdays, isSameMonth } from './calendar-utils';
import CalendarCell from './CalendarCell.vue';
import { dateIntlFormatter } from './intl';

const { calendarDate } = useCalendarContext();

const days = computed(() => getMonthDays(calendarDate.value));

const buildRefKey = (date: Date) => dateIntlFormatter.format(date);

const cellRefs = ref(new Map<string, Element | InstanceType<typeof CalendarCell> | null>());

watchEffect(() => {
  const currentDays = getMonthDays(calendarDate.value)
    .flat()
    .filter((date) => isSameMonth(date, calendarDate.value));
  const currentDayKeys = new Set<string>();

  for (const day of currentDays) {
    currentDayKeys.add(buildRefKey(day));
  }

  for (const key of Array.from(cellRefs.value.keys())) {
    if (!currentDayKeys.has(key)) {
      cellRefs.value.delete(key);
    }
  }
});

// テンプレート参照を設定する関数
const setCalendarCellRef = (date: Date) => {
  return (el: Element | ComponentPublicInstance<typeof CalendarCell> | null) => {
    const key = buildRefKey(date);
    if (el === null) {
      return;
    }

    const calendarCell = el as InstanceType<typeof CalendarCell>;
    if (calendarCell.buttonRef !== null) {
      cellRefs.value.set(key, calendarCell);
    }
  };
};

const handleFocusNext = async (date: Date) => {
  await nextTick();
  const nextKey = buildRefKey(date);
  const cellInstance = cellRefs.value.get(nextKey) as InstanceType<typeof CalendarCell>;

  cellInstance.buttonRef?.focus();
};
</script>

<template>
  <table
    role="grid"
    :class="['grid place-items-center', 'px-3 pb-2']"
  >
    <thead aria-hidden="true">
      <tr :class="['grid grid-cols-[repeat(7,calc(48/16*1rem))]', '!h-[calc(48/16*1rem)]']">
        <th
          v-for="day of getWeekdays()"
          :key="day"
          :class="[
            'grid place-items-center',
            'text-[1rem]',
            'font-700',
            'text-neutral-solid-gray-800',
            'tracking-[0.04em]'
          ]"
        >
          {{ day }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(cells, rowIndex) of days"
        :key="rowIndex"
        :class="['grid grid-cols-[repeat(7,calc(48/16*1rem))]', '!h-[calc(48/16*1rem)]']"
      >
        <CalendarCell
          :data-date="buildRefKey(cell)"
          :ref="(el) => setCalendarCellRef(cell)(el)"
          v-for="(cell, colIndex) of cells"
          :key="`${rowIndex}-${colIndex}`"
          :date="cell"
          @focus-next="handleFocusNext"
        />
      </tr>
    </tbody>
  </table>
</template>
