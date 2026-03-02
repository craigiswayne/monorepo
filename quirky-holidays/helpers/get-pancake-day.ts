import {get_easter} from './get-easter.js';

/**
 * Pancake Day is 47 days before Easter
 *
 * @param year
 */
export const get_pancake_day = (year: number) => {
    const easter = get_easter(year);
    easter.setDate(easter.getDate() - 47);
    return easter;
}
