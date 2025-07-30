<script setup lang="ts">
import type { CalendarProps } from './types';

const {} = defineProps<CalendarProps>();
</script>

<template>
  <div class="flex flex-col items-center w-max">
    <div class="flex items-center gap-2 p-4">
      <span class="relative">
        <select
          :class="[
            'w-full',
            'appearance-none',
            'border border-neutral-solid-gray-600',
            'rounded-[8px]',
            '!h-[calc(44/16*1rem)]',
            'bg-neutral-white',
            'pl-4 pr-10 py-[calc(11/16*1rem)]',
            'font-400',
            'text-[1rem]',
            'tracking-[0.025em]',
            'text-neutral-solid-gray-800',
            'hover:border-neutral-black',
            'focus-visible:outline-2 focus-visible:outline-primitive-lime-1200 focus-visible:outline-offset-2',
            'not-aria-disabled:cursor-pointer',
            'not-motion-reduce:transition not-motion-reduce:duration-300',
            'motion-reduce:transition-none'
          ]"
          aria-label="年"
        ></select>
        <svg
          aria-hidden="true"
          class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-solid-gray-900 forced-colors:text-[CanvasText]"
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            d="M13.3344 4.40002L8.00104 9.73336L2.66771 4.40002L1.73438 5.33336L8.00104 11.6L14.2677 5.33336L13.3344 4.40002Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <div class="flex items-center">
        <button
          :class="[
            'text-[1em]',
            'w-[calc(44/16*1rem)] h-[calc(44/16*1rem)]',
            'rounded-[6px]',
            'border border-current',
            'bg-neutral-white',
            'text-primitive-blue-900',
            'hover:bg-primitive-blue-200',
            'hover:text-primitive-blue-1000',
            'active:bg-primitive-blue-300',
            'active:text-primitive-blue-1200',
            'focus-visible:outline-2 focus-visible:outline-primitive-lime-1200 focus-visible:outline-offset-2',
            'aria-disabled:bg-neutral-white',
            'aria-disabled:text-neutral-solid-gray-300',
            'not-aria-disabled:cursor-pointer',
            'not-motion-reduce:transition not-motion-reduce:duration-300',
            'motion-reduce:transition-none'
          ]"
        >
          <svg
            class="mx-auto"
            width="16"
            height="16"
            role="img"
            aria-label="前の月"
          >
            <path
              d="m5.27 8 5.33-5.33-.93-.94L3.4 8l6.27 6.27.93-.94L5.27 8Z"
              fill="currentcolor"
            ></path>
          </svg>
        </button>
        <p
          :class="[
            'grid place-items-center',
            'text-[1rem]',
            'text-neutral-solid-gray-800',
            'font-400',
            'tracking-[0.025em]',
            'w-[calc(56/16*1rem)]'
          ]"
        >
          9月
        </p>
        <button
          :class="[
            'text-[1em]',
            'w-[calc(44/16*1rem)] h-[calc(44/16*1rem)]',
            'rounded-[6px]',
            'border border-current',
            'bg-neutral-white',
            'text-primitive-blue-900',
            'hover:bg-primitive-blue-200',
            'hover:text-primitive-blue-1000',
            'active:bg-primitive-blue-300',
            'active:text-primitive-blue-1200',
            'focus-visible:outline-2 focus-visible:outline-primitive-lime-1200 focus-visible:outline-offset-2',
            'aria-disabled:bg-neutral-white',
            'aria-disabled:text-neutral-solid-gray-300',
            'not-aria-disabled:cursor-pointer',
            'not-motion-reduce:transition not-motion-reduce:duration-300',
            'motion-reduce:transition-none'
          ]"
        >
          <svg
            class="mx-auto"
            width="16"
            height="16"
            role="img"
            aria-label="次の月"
          >
            <path
              d="m6 1.73-.93.94L10.4 8l-5.33 5.33.93.94L12.27 8 6 1.73Z"
              fill="currentcolor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <table></table>
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
      >
        今日
      </button>
    </div>
  </div>
</template>
