import {writeFileSync} from 'fs';
import * as ics from 'ics';
import {annual_events} from './data.js';
import {get_first_occurrence} from './helpers/get-first-occurrence.js';

const current_year = new Date().getFullYear();
const years_to_generate = [current_year -1, current_year, current_year + 1, current_year + 2];
const all_events: ics.EventAttributes[] = [];

years_to_generate.forEach(year => {
    annual_events.filter(e => e.type === 'calculated').forEach(event => {
        const date = event.calculate!(year);
        all_events.push({
            title: event.name,
            description: event.description,
            start: [date.getFullYear(), date.getMonth() + 1, date.getDate()],
            duration: {days: 1}
        });
    });
});

annual_events.filter(e => e.type === 'recurring').forEach(event => {
    if (!event.recurrenceRule) return;

    const startDate = get_first_occurrence(years_to_generate[0], event.recurrenceRule);

    all_events.push({
        title: event.name,
        description: event.description,
        start: [startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate()],
        duration: {days: 1},
        recurrenceRule: event.recurrenceRule,
        busyStatus: 'FREE'
    });
});

ics.createEvents(all_events, (error, value) => {
    if (!error) writeFileSync('./quirky-holidays.ics', value);
});
