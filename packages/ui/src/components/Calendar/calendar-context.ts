import { createInjectionState } from '@vueuse/core';
import type { CalendarContext } from './types';

const [useProvideCalendarContext, _useCalendarContext] = createInjectionState((context: CalendarContext) => context, {
  injectionKey: Symbol('CalendarContext')
});

const useCalendarContext = () => {
  const context = _useCalendarContext();
  if (typeof context === 'undefined') {
    throw new Error('CalendarContext: `context` is undefined. Seems to you forget to provide context.');
  }

  return context;
};

export { useProvideCalendarContext, useCalendarContext };
