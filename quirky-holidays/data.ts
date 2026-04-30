import { get_pancake_day } from './helpers/get-pancake-day.js';

export interface AnnualEvent {
    name: string;
    type: 'recurring' | 'calculated';
    calculate?: (year: number) => Date;
    recurrenceRule?: string;
}
export const annual_events: AnnualEvent[] = [
    {
        name: 'International Pancake Day',
        type: 'calculated',
        // 47 days before Easter
        calculate: (year: number) => get_pancake_day(year),
    },
    {
        name: 'World Pizza Day',
        type: 'recurring',
        // February 9th
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=9'
    },
    {
        name: "Dentist's Day",
        type: 'recurring',
        // March 6th
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=6'
    },
    {
        name: "PI Day",
        type: 'recurring',
        // March 6th
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=14'
    },
    {
        name: "Waffle Day",
        type: 'recurring',
        // March 6th
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=25'
    },
    {
        name: 'Star Wars Day',
        type: 'recurring',
        // May 4th
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=4'
    },
    {
        name: 'International Beer Day',
        type: 'recurring',
        // First Friday of August
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=8;BYDAY=1FR'
    },
    {
        name: 'National Girlfriend Day',
        type: 'recurring',
        // August 1st
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=8;BYMONTHDAY=1'
    },
    {
        name: 'International Coffee Day',
        type: 'recurring',
        // October 1st
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=1'
    },
    {
        name: 'OIE VOALDYN',
        type: 'recurring',
        // First Sunday of May
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=5;BYDAY=1SU'
    }
];
