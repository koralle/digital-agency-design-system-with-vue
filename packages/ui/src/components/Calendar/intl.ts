/**
 * @description 年のフォーマッター
 *
 * @example
 * const date = new Date('2025-07-30T12:00:00+09:00')
 * yearIntlFormatter.format(date) // 令和7年
 */
export const yearIntlFormatter = new Intl.DateTimeFormat('ja-JP', {
  calendar: 'japanese',
  era: 'long',
  year: 'numeric'
});
