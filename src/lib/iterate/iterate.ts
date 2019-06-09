import { map } from '../..';

/**
 * iterate
 * @deprecated
 *
 * Takes a function and a functor, applies the function to
 * each of the functor's values, and returns a functor of
 * the same shape.
 *
 * This is a suitable `map` implementation for Array and
 * Object, so this may be applied to `[1, 2, 3]` or
 * `{x: 1, y: 2, z: 3}`.
 */

export const iterate = map;
