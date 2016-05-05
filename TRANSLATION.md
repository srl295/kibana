Translating Kibana
===

Background
---

Please see [kibana#6515](https://github.com/elastic/kibana/issues/6515)
for background discussion on the Kibana translation work.

Prerequisites
---

Kibana must be installed and operational, see README.md

Audience
---

There are two audiences for this document:
- those that want to contribute translations to Kibana
- those that want to enable translation of Kibana

Contributing Translations
---

For this example, we will demonstrate translation into Maltese (Language code `mt`).

- Check out the `kibana` source code with `git`,
ensure you have an up to date copy of the source.
- Ensure you have signed the agreement as in CONTRIBUTING.md
- Choose the right [bcp47]() language code for your work.
In this example, we will use `mt` for Maltese. Other examples
might be `zh-Hans` for Chinese using Simplified characters, or
`az-Cyrl` for Azerbaijani using Cyrillic characters.
The following links can help:
  - [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
  - [“Picking the right language code”](http://cldr.unicode.org/index/cldr-spec/picking-the-right-language-code)
- Create a new branch for your work:

    git checkout -b translate-mt

- For each translation scope 
(see [Scoping Translations](#Scoping Translations), below), 
copy the `en.json` English source to _languagecode_`.json`:

    cp i18n/main/en.json i18n/main/mt.json
    cp i18n/charts/en.json i18n/main/mt.json
    …
    
- Translate each `mt.json` file in a JSON editor 

- Run the translation unit tests with __TODO TODO__

- Start up Kibana and verify the translation works as expected

- Commit the `mt.json` files and push them to your own
fork of `kibana`

- Open a pull request titled `Translation: Maltese (mt)`


Scoping Translations
---
Kibana translates according to app scope, so there are
different `.json` files according to scope ……

Translating Angular views
---
- TODO

Translating Chart components
---
- TODO