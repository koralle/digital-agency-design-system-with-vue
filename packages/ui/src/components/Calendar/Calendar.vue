<script setup lang="ts">
import type { CalendarProps } from './types';
import CalendarHeader from './CalendarHeader.vue';

import CalendarFooter from './CalendarFooter.vue';
import { useProvideCalendarContext } from './calendar-context';
import { useCalendar } from './use-calendar';
import CalendarGrid from './CalendarGrid.vue';

const { minYear = 1901, maxYear = 2050 } = defineProps<CalendarProps>();

const calendarDateModel = defineModel<Date | null | undefined>({ default: undefined });

const { ...rest } = useCalendar({ controlledDate: calendarDateModel, minYear, maxYear });

useProvideCalendarContext({ ...rest });
</script>

<template>
  <div class="flex flex-col items-center w-max">
    <CalendarHeader />
    <CalendarGrid />
    <CalendarFooter />
  </div>
</template>
