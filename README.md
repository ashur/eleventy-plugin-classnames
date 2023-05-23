# eleventy-plugin-classnames

An [Eleventy](https://11ty.dev/) plugin — available as a filter and a shortcode — for joining truthy, non-duplicate argument values into a space-delimited string, suitable for use in an HTML element's `class` attribute:

```javascript
classnames(
  "block",
  "block__element",
  false && "block__element--modifier",
  "block",
)
// returns "block block__element"
```

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

`classnames` is exposed both as a [filter](https://www.11ty.dev/docs/filters/) and as a [shortcode](https://www.11ty.dev/docs/shortcodes/) everywhere Eleventy supports them.

### Filter

> ✨ Added in v0.2.0

You might use the filter in a [WebC template](https://www.11ty.dev/docs/languages/webc/) like this:

```html
---
color: turquoise
primary: false
sectionTitle: Section Title
---
<h2 :class="classnames(
        'block__element',
        primary && 'block__element--primary',
        color && 'block__element--' + color,
    )"
    @text="sectionTitle"
></h2>
```

which would return:

```html
<h2 class="block__element block__element--turquoise">
    Section Title
</h2>
```

### Shortcode

You might use the shortcode in a [Nunjucks template](https://www.11ty.dev/docs/languages/nunjucks/) like this:

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

which would return:

```html
<h2 class="block__element block__element--turquoise">
    Section Title
</h2>
```
