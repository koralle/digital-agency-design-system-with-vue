<script setup lang="ts">
import { computed } from 'vue';
import { useCalendarContext } from './calendar-context';
import { getMonthDays, getWeekdays } from './calendar-utils';
import CalendarCell from './CalendarCell.vue';

const { calendarDate } = useCalendarContext();

const days = computed(() => getMonthDays(calendarDate.value));
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
          v-for="(cell, colIndex) of cells"
          :key="`${rowIndex}-${colIndex}`"
          :date="cell"
          @focus-next="(date) => console.log(date)"
        />
      </tr>
    </tbody>
  </table>
</template>
