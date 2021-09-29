This repo reproduces mini-css-extract-plugin import ordering issue.

- `repro` is a fake node_module — it has a `package.json` with `"sideEffects": "*.css"`.
- `repro` exports 2 React components:
    - `Text` is `<div className={'Text' + props.className}>`, `.Text` is black
    - `RedText` imports `Text` and passes `<Text className="RedText">`, and `.RedText` overrides
- I expect the CSS bundle to be in depth-first order: `.Text { color: black } .RedText { color: red }`
- The CSS bundle is `.RedText { color: red } .Text { color: black }` instead.

To reproduce yourself:

- `yarn install`
- `yarn reproduce`

The issue magically disappears if I remove `sideEffects` from `repro`'s `package.json` (but not by setting it to `[]`, `["*.js"]` (anything not matching css) or `false`)

Adding an explicit `import '../Text/Text.css';` in `RedText.js` also does the trick.
