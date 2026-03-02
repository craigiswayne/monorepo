import {writeFileSync} from 'fs';
import * as ics from 'ics';
import {annual_events} from './data.js';
import {get_first_occurrence} from './helpers/get-first-occurrence.js';

const yearsToGenerate = [2026, 2027, 2028];
const allEntries: ics.EventAttributes[] = [];

yearsToGenerate.forEach(year => {
    annual_events.filter(e => e.type === 'calculated').forEach(event => {
        const date = event.calculate!(year);
        allEntries.push({
            title: event.name,
            start: [date.getFullYear(), date.getMonth() + 1, date.getDate()],
            duration: {days: 1}
        });
    });
});

annual_events.filter(e => e.type === 'recurring').forEach(event => {
    if (!event.recurrenceRule) return;

    const startDate = get_first_occurrence(yearsToGenerate[0], event.recurrenceRule);

    allEntries.push({
        title: event.name,
        start: [startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate()],
        duration: {days: 1},
        recurrenceRule: event.recurrenceRule,
        busyStatus: 'FREE'
    });
});

ics.createEvents(allEntries, (error, value) => {
    if (!error) writeFileSync('./quirky-holidays.ics', value);
});
