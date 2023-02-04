import {DateTime} from 'luxon'

export const makeRandomPastDate = () => {
  const value = new Date().valueOf()
  const n = 100000
  return new Date(value - Math.floor(Math.random() * n * n))
}

export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf('day').toRelative()//? '19시간 전'같은 문자열 만들기
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate())

export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate())
