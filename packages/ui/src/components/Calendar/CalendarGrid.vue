<script setup lang="ts">
import { computed, nextTick, ref, useTemplateRef, watchEffect } from 'vue';
import type { ShallowRef } from 'vue';
import { useCalendarContext } from './calendar-context';
import { getMonthDays, getWeekdays, isSameMonth } from './calendar-utils';
import CalendarCell from './CalendarCell.vue';

const { calendarDate } = useCalendarContext();

const days = computed(() => getMonthDays(calendarDate.value));

const buildRefKey = (date: Date): `${number}-${number}-${number}` =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const daysMap = ref(new Map<string, Readonly<ShallowRef<typeof CalendarCell | null>>>());

watchEffect(() => {
  for (const date of days.value.flat().filter((date) => isSameMonth(date, calendarDate.value))) {
    const calendarCellRefKey = buildRefKey(date);
    const calendarRefCellRef = useTemplateRef<typeof CalendarCell | null>(calendarCellRefKey);

    daysMap.value.set(calendarCellRefKey, calendarRefCellRef);
  }
});

const handleFocusNext = async (date: Date) => {
  if (!isSameMonth(date, calendarDate.value)) {
    await nextTick();
  }

  const nextKey = buildRefKey(date);
  const buttonRef = daysMap.value.get(nextKey);

  if (typeof buttonRef === 'undefined') {
    return;
  }

  if (buttonRef.value === null) {
    return;
  }
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
          :ref="buildRefKey(cell)"
          v-for="(cell, colIndex) of cells"
          :key="`${rowIndex}-${colIndex}`"
          :date="cell"
          @focus-next="handleFocusNext"
        />
      </tr>
    </tbody>
  </table>
</template>
