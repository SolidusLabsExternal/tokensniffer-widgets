# Token Sniffer Widgets

The `tokensniffer-widgets` package is an [npm package](https://www.npmjs.com/package/tokensniffer-widgets) of React components used to provide subsets of the [Token Sniffer](https://tokensniffer.com) functionality in a small and configurable user interface element.

## Requirements
* React
* [Token Sniffer API](https://tokensniffer.com/TokenSnifferAPI)

## Installation

Install the widgets library via `npm` or `yarn`.

```js
yarn add tokensniffer-widgets
```
or
```js
npm i --save tokensniffer-widgets
```

## Using in a non-React project

See https://react.dev/learn/add-react-to-an-existing-project

## React Components

### ScoreBadge

The ScoreBadge component displays the score of the token with a visual aid.

![Screenshot of ScoreBadge component](https://github.com/SolidusLabsExternal/tokensniffer-widgets/blob/main/score-badge.png?raw=true)

* `data`:  the full response from the Token Sniffer API [Get Token](https://tokensniffer.readme.io/reference/get-token-results) endpoint converted to a Javascript object.  One of the `include_metrics` and `include_tests` query parameters must be set in the request URL.

* `theme`:  select "dark" or "light" predefined themes or pass a custom theme object.  See [themes.js](src/theme/themes.js) for example theme objects.

* `width`:  number (of pixels) or a valid CSS width.  `width="100%"` sets the width to dynamically fill 100% of the parent container

### SmellTestResults

The SmellTestResults component displays the full Smell Test results for a token as shown on tokensniffer.com.

![Screenshot of SmellTestResults component](https://github.com/SolidusLabsExternal/tokensniffer-widgets/blob/main/smell-test-results.png?raw=true)

#### Properties

* `data`:  the full response from the Token Sniffer API [Get Token](https://tokensniffer.readme.io/reference/get-token-results) endpoint converted to a Javascript object.  Both the `include_metrics` and `include_tests` query parameters must be set in the request URL.

* `theme`:  select "dark" or "light" predefined themes or pass a custom theme object.  See [themes.js](src/theme/themes.js) for example theme objects.

* `width`:  number (of pixels) or a valid CSS width.
  *  `width="100%"` sets the width to dynamically fill 100% of the parent container horizontally.
  *  `width="30em" `sets the width to display to 30 font units which is the ideal width for vertical display of the test results.

## Example

See [demo.js](demo/index.js) for example code.
