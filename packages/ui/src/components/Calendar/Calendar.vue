<script setup lang="ts">
import type { CalendarProps } from './types';
import CalendarHeader from './CalendarHeader.vue';

import CalendarFooter from './CalendarFooter.vue';
import { useProvideCalendarContext } from './calendar-context';
import { useCalendar } from './use-calendar';
import CalendarGrid from './CalendarGrid.vue';

const {} = defineProps<CalendarProps>();

const context = useCalendar();

useProvideCalendarContext(context);
</script>

<template>
  <div class="flex flex-col items-center w-max">
    <CalendarHeader />
    <CalendarGrid />
    <CalendarFooter />
  </div>
</template>
