<script setup lang="ts">
import { useCalendarContext } from './calendar-context';
import { getWeekdays } from './calendar-utils';

useCalendarContext();
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
    <tbody></tbody>
  </table>
</template>
