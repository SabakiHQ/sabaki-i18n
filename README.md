# Sabaki I18n ![Daily Sync](https://github.com/SabakiHQ/sabaki-i18n/workflows/Daily%20Sync/badge.svg?branch=master)

Home of Sabaki's translation efforts.

## Progress

<!-- begin-progress-table -->

| Language                       | File              | Progress |
| ------------------------------ | ----------------- | -------- |
| English (English)              | `en.i18n.js`      | 100%     |
| 日本語 (Japanese)              | `ja.i18n.js`      | 0%       |
| 한국어 (Korean)                | `ko.i18n.js`      | 0%       |
| 简体中文 (Simplified Chinese)  | `zh-Hans.i18n.js` | 0%       |
| 繁體中文 (Traditional Chinese) | `zh-Hant.i18n.js` | 0%       |

<!-- end-progress-table -->

## Contributing

If you speak multiple languages, you can help us translate Sabaki. First, look
at the progress table to see which languages are missing translations.

### Translate for an existing language

Open the language file in the `src` directory as specified in the progress
table. All translation strings are grouped by their context, a string which
determines the component of Sabaki the string belongs to:

```js
module.exports = {
  '<context>': {
    '<English string to be translated>': '<translation>'
    // ...
  }
  // ...
}
```

Entries that don't have a translation will have the value `null` and you can
replace it with an actual translation. Look at `en.i18n.js` for a model
translation file.

Once you finish translating, commit your work, and open a pull request to this
repository. Once your work gets merged, the translation will be available in the
next Sabaki release.

#### Try out your translation

Make sure you have Sabaki v0.50.1 or higher installed and
[developer mode turned on](https://github.com/SabakiHQ/Sabaki/blob/master/docs/guides/debugging.md).
Once you start Sabaki, choose 'Developer' > 'Load Language File…' from the main
menu. Dismiss the warning and you can choose your language file.

#### Guidelines

- Don't introduce standalone functions/variables outside of `module.exports`. In particular, don't import third party libraries or other files.
- Always use UTF-8 encoding for all files.
- Always use real typographic punctuation symbols, such as apostrophe (’), or quotation marks (“ ”), etc.
- There's no need to update your progress in the README or `index.json` file. They will be automatically updated every day.

### Add a new language

First, find the
[ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
for the language you want to add and the
[country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) or
other subtags if necessary, e.g. `en-US`. Open `index.json` and add a new entry
for the new language:

```js
{
  "ja": {
    "name": "Japanese",
    "nativeName": "日本語"
  },
  // ...
}
```

Set `name` to the English name of the language and `nativeName` to the name of
the language in its own language. Once the language entry is there, copy the
file `template.i18n.js` inside the `src` directory and name your copy
`<language code>.i18n.js`.
