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
        calculate: (year: number) => get_pancake_day(year),
    },
    {
        name: 'Internation Beer Day',
        type: 'recurring',
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=8;BYDAY=1FR'
    },
    {
        name: 'Star Wars Day',
        type: 'recurring',
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=4'
    },
    {
        name: 'International Coffee Day',
        type: 'recurring',
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=1'
    },
    {
        name: 'World Pizza Day',
        type: 'recurring',
        recurrenceRule: 'FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=9'
    }
];
