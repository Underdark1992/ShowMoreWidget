## ShowMoreWidget
A text widget which gives the ability to the developer to truncate text based on character count or lines. The widget supports string attributes and templates. 

## Features
- Text template can be used as the input field (with attributes or static text).
- Text tag can be customised eg.: `<h1><h2><h3><div>....etc`.
- Character count or line count can be selected to truncate the text.
- Expand/Collapse can be configured to be a button/icon or link.
- Caption of the button/link can be configured.
- Dev can decide to hide or show the text by default.
- Extra styling can be applied to the button/icon/link/text in the styling tab. Just enter css class saved in Mendix CSS to apply the styling to the selected element.

## Usage
When a text needs to be displayed without taking up too much screen space.

## Issues, suggestions and feature requests
[Report issues](https://github.com/Underdark1992/ShowMoreWidget/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
