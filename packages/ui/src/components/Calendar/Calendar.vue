<script setup lang="ts">
import type { CalendarProps } from './types';
import CalendarHeader from './CalendarHeader.vue';

import CalendarFooter from './CalendarFooter.vue';

const {} = defineProps<CalendarProps>();
</script>

<template>
  <div class="flex flex-col items-center w-max">
    <CalendarHeader />
    <table></table>
    <CalendarFooter />
  </div>
</template>
