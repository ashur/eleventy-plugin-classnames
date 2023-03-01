# eleventy-plugin-classnames

An [Eleventy](https://11ty.dev/) shortcode for joining truthy, non-duplicate argument values into a space-delimited string.

> Inspired by the [classnames](https://www.npmjs.com/package/classnames) package by [JedWatson](https://github.com/JedWatson/classnames)

## Setup

Run the following command at the root of your Eleventy project

```shell
npm install @aaashur/eleventy-plugin-classnames
```

then include it in your `.eleventy.js` config file:

```javascript
const classnames = require("@aaashur/eleventy-plugin-classnames");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(classnames);
};
```

## Usage

```njk
{%- set color = "turquoise" -%}
{%- set primary = false -%}
{%- set sectionTitle = "Section Title" -%}

<h2 class="{% classnames
    "block__element",
    "block__element--primary" if primary,
    "block__element--" + color if color
%}">
    {{ sectionTitle }}
</h2>
```

would return

```html
<h2 class="block__element block__element--turquoise">
    Section Title
</h2>
```
