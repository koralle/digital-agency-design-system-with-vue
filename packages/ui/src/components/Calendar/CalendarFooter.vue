<script setup lang="ts">
import { useCalendarContext } from './calendar-context';
import { getTodayDate } from './calendar-utils';

const { calendarDate, controlledDate, focusedDate } = useCalendarContext();

const handleClickDeleteCalendarDateButton = () => {
  controlledDate.value = null;
};

const handleClickTodayButtonButton = () => {
  const today = getTodayDate();

  controlledDate.value = today;
  calendarDate.value = today;
  focusedDate.value = today;
};
</script>

<template>
  <div class="flex self-stretch justify-between gap-4 p-4">
    <button
      :class="[
        'relative',
        'text-[1em]',
        'min-w-[5rem] min-h-[2.25rem]',
        'rounded-[6px]',
        'px-3 py-0.5',
        'font-700',
        'text-primitive-blue-900',
        'tracking-[0.04em]',
        'cursor-pointer',
        'underline underline-offset-[calc(3/16*1rem)]',
        'hover:bg-primitive-blue-50',
        'hover:text-primitive-blue-1000',
        'hover:decoration-[calc(3/16*1rem)]',
        'active:bg-primitive-blue-100',
        'active:text-primitive-blue-1100',
        'focus-visible:outline-2 focus-visible:outline-primitive-lime-1200 focus-visible:outline-offset-2',
        'aria-disabled:bg-transparent',
        'aria-disabled:pointer-events-none',
        'not-motion-reduce:transition not-motion-reduce:duration-300',
        'motion-reduce:transition-none',
        'after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]'
      ]"
      @click="handleClickDeleteCalendarDateButton"
    >
      削除
    </button>
    <button
      :class="[
        'relative',
        'text-[1em]',
        'min-w-[5rem] min-h-[2.25rem]',
        'rounded-[6px]',
        'px-3 py-0.5',
        'font-700',
        'text-primitive-blue-900',
        'underline-offset-[calc(3/16*1rem)]',
        'tracking-[0.04em]',
        'cursor-pointer',
        'border',
        'border-current',
        'bg-neutral-white',
        'hover:bg-primitive-blue-200',
        'hover:text-primitive-blue-1000',
        'hover:underline',
        'active:bg-primitive-blue-300',
        'active:text-primitive-blue-1200',
        'active:underline',
        'focus-visible:outline-2 focus-visible:outline-primitive-lime-1200 focus-visible:outline-offset-2',
        'aria-disabled:bg-white',
        'aria-disabled:text-neutral-solid-gray-300',
        'aria-disabled:pointer-events-none',
        'not-motion-reduce:transition not-motion-reduce:duration-300',
        'motion-reduce:transition-none',
        'after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]'
      ]"
      @click="handleClickTodayButtonButton"
    >
      今日
    </button>
  </div>
</template>
