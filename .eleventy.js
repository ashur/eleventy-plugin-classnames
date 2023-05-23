/* eslint-disable valid-jsdoc */
const classnames = require( "./src/classnames" );

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
	eleventyConfig.addFilter( "classnames", classnames );
	eleventyConfig.addShortcode( "classnames", classnames );
};
