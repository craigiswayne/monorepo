import pkg from 'rrule';
const { rrulestr } = pkg;

/**
 * Finds the first occurrence of an RRULE within a specific year.
 */
export function get_first_occurrence(year: number, rruleString: string): Date {
    // Create a rule object from the string.
    // We set dtstart to Jan 1st of the target year to ensure we search from the beginning.
    const rule = rrulestr(`DTSTART:${year}0101T000000Z\nRRULE:${rruleString}`);

    // Get the first occurrence after or on Jan 1st
    const firstDate = rule.all()[0];

    if (!firstDate) {
        throw new Error(`Could not find an occurrence for rule: ${rruleString} in year ${year}`);
    }

    return firstDate;
}
