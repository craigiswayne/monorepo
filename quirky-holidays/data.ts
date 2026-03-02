import { get_pancake_day } from './helpers/get-pancake-day.js';

export interface AnnualEvent {
    name: string;
    type: 'recurring' | 'calculated';
    calculate?: (year: number) => Date;
    cron?: string;
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
        cron: '0 0 4 5 *',
        recurrenceRule: 'FREQ=YEARLY;INTERVAL=1'
    },
    {
        name: 'International Coffee Day',
        type: 'recurring',
        cron: '0 0 1 10 *',
        recurrenceRule: 'FREQ=YEARLY;INTERVAL=1'
    },
    {
        name: 'World Pizza Day',
        type: 'recurring',
        cron: '0 0 9 2 *',
        recurrenceRule: 'FREQ=YEARLY;INTERVAL=1'
    }
];
