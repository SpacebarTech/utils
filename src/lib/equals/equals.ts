import * as fastDeepEqual from 'fast-deep-equal';

/**
 * equals
 *
 * Returns `true` if its arguments are equivalent, `false`
 * otherwise. Handles cyclical data structures.
 */
export const equals = fastDeepEqual;
