/**
 * Join truthy, non-duplicate argument values into a space-delimited string.
 *
 * @example
 * classnames(
 *   "block",
 *   "block__element",
 *   false && "block__element--modifier",
 *   "block",
 * )
 * // returns "block block__element"
 * @param {string[]} args
 * @return {string}
 */
module.exports = ( ...args ) =>
{
	return args
		.filter( ( arg, index ) => args.indexOf( arg ) === index ) // ensure values are unique
		.filter( ( arg ) => arg ) // only include truthy values
		.join( " " );
};
