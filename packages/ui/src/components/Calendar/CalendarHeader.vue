<script lang="ts"></script>
<script setup lang="ts">
import { computed } from 'vue';
import { useCalendarContext } from './calendar-context';
import { addMonth, buildDate, subtractMonth, updateMonth, updateYear } from './calendar-utils';
import { yearIntlFormatter } from './intl';

const { calendarDate, focusedDate, minYear, maxYear } = useCalendarContext();

const yearOptions = computed(() =>
  Array.from({ length: maxYear - (minYear - 1) }, (_, index) => minYear + index).map((year) => buildDate(year))
);

const onChangeYearSelect = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const selectedYear = Number(target.value);

  calendarDate.value = updateYear(calendarDate.value, selectedYear);
  focusedDate.value = updateYear(focusedDate.value, selectedYear);
};

/**
 * @todo 取りうる年の最小値の1月にクリックしたときに、取りうる年の最大値の12月に移動する処理
 */
const JANUARY_INDEX = 0;
const DECEMBER_INDEX = 11;
const DECEMBER_MONTH = 12;
const JANUARY_MONTH = 1;

const onClickPrevMonthButton = () => {
  if (calendarDate.value.getFullYear() === minYear && calendarDate.value.getMonth() === JANUARY_INDEX) {
    calendarDate.value = updateYear(calendarDate.value, maxYear);
    focusedDate.value = updateYear(focusedDate.value, maxYear);

    calendarDate.value = updateMonth(calendarDate.value, DECEMBER_MONTH);
    focusedDate.value = updateMonth(focusedDate.value, DECEMBER_MONTH);
  } else {
    calendarDate.value = subtractMonth(calendarDate.value, JANUARY_MONTH);
    focusedDate.value = subtractMonth(focusedDate.value, JANUARY_MONTH);
  }
};

/**
 * @todo 取りうる年の最大値の12月にクリックしたときに、取りうる年の最小値の1月に移動する処理
 */
const onClickNextMonthButton = () => {
  if (calendarDate.value.getFullYear() === maxYear && calendarDate.value.getMonth() === DECEMBER_INDEX) {
    calendarDate.value = updateYear(calendarDate.value, minYear);
    focusedDate.value = updateYear(focusedDate.value, minYear);

    calendarDate.value = updateMonth(calendarDate.value, JANUARY_MONTH);
    focusedDate.value = updateMonth(focusedDate.value, JANUARY_MONTH);
  } else {
    calendarDate.value = addMonth(calendarDate.value, JANUARY_MONTH);
    focusedDate.value = addMonth(focusedDate.value, JANUARY_MONTH);
  }
};
</script>

<template>
  <div class="flex items-center gap-2 p-4">
    <span class="relative">
      <select
        :class="[
          'w-full',
          'appearance-none',
          'inline-flex',
          'items-center',
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
        @change="onChangeYearSelect"
      >
        <option
          v-for="yearOption of yearOptions"
          :key="yearOption.getFullYear()"
          :value="yearOption.getFullYear()"
          :selected="calendarDate.getFullYear() === yearOption.getFullYear()"
        >
          {{ yearOption.getFullYear() }}年 ({{ yearIntlFormatter.format(yearOption) }})
        </option>
      </select>
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
        @click="onClickPrevMonthButton"
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
        {{ calendarDate?.getMonth() + 1 }} 月
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
        @click="onClickNextMonthButton"
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
</template>
