<script lang="ts">
interface CalendarCellProps {
  date: Date;
}
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useCalendarContext } from './calendar-context';
import { addDay, addWeek, isSameDate, isSameMonth, subtractDay, subtractWeek } from './calendar-utils';
const { date } = defineProps<CalendarCellProps>();

const { calendarDate, controlledDate, focusedDate } = useCalendarContext();

const isVisible = computed(() => isSameMonth(date, calendarDate.value));
const isSelected = computed(() => isSameDate(date, controlledDate.value));
const isFocused = computed(() => isSameDate(date, focusedDate.value));

const handleClick = () => {
  calendarDate.value = date;
  controlledDate.value = date;
  focusedDate.value = date;
};

const handleKeydown = (event: KeyboardEvent) => {
  const key = event.key;

  switch (key) {
    case 'ArrowUp':
      calendarDate.value = subtractWeek(date, 1);
      focusedDate.value = subtractWeek(date, 1);
      break;
    case 'ArrowDown':
      calendarDate.value = addWeek(date, 1);
      focusedDate.value = addWeek(date, 1);
      break;
    case 'ArrowLeft':
      calendarDate.value = subtractDay(date, 1);
      focusedDate.value = subtractDay(date, 1);
      break;
    case 'ArrowRight':
      calendarDate.value = addDay(date, 1);
      focusedDate.value = addDay(date, 1);
      break;
    default:
      break;
  }
};

const buttonRef = ref<HTMLButtonElement | null>(null);

watchEffect(() => {
  if (buttonRef.value === null) {
    return;
  }

  if (isSameDate(date, focusedDate.value)) {
    buttonRef.value.focus();
  }
});
</script>

<template>
  <td
    role="gridcell"
    :class="['grid place-items-center', 'w-[calc(48/16*1rem)] h-[calc(48/16*1rem)]']"
  >
    <button
      ref="buttonRef"
      v-if="isVisible"
      :class="[
        'grid place-items-center',
        'w-full h-full',
        'rounded-[50%]',
        'text-[1rem] tracking-[0.025em] font-400',
        'text-neutral-solid-gray-800',
        'not-aria-disabled:cursor-pointer',
        {
          'bg-primitive-blue-900 text-neutral-white': isSelected,
          'hover:bg-neutral-solid-gray-50': !isSelected,
          'hover:underline hover:underline-offset-[calc(3/16*1rem)]': !isSelected
        },
        'focus-visible:outline-2',
        'focus-visible:outline-primitive-lime-1200',
        'focus-visible:outline-offset-2'
      ]"
      :tabindex="isFocused ? 0 : -1"
      @click="handleClick"
      @keydown="handleKeydown"
    >
      {{ date.getDate() }}
    </button>
  </td>
</template>
