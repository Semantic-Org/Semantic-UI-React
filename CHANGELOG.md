# Change Log

## [v0.74.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.74.2) (2017-09-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.74.1...v0.74.2)

**Implemented enhancements:**

- Dropdown: `selectOnKeydown` option from docs is not implemented [\#1993](https://github.com/Semantic-Org/Semantic-UI-React/issues/1993)

**Fixed bugs:**

- Dropdown: Error occurred with keyboard action [\#1875](https://github.com/Semantic-Org/Semantic-UI-React/issues/1875)

**Closed issues:**

- Request: Search Dropdown onAddItem should optionally prevent onChange call [\#1186](https://github.com/Semantic-Org/Semantic-UI-React/issues/1186)

**Merged pull requests:**

- fix\(Dropdown\): omit `moveSelectionBy\(\)` when `options` aren't defined [\#2119](https://github.com/Semantic-Org/Semantic-UI-React/pull/2119) ([layershifter](https://github.com/layershifter))
- fix\(Sticky\): `scrollContext` is used from actual props, rename doc examples [\#2118](https://github.com/Semantic-Org/Semantic-UI-React/pull/2118) ([layershifter](https://github.com/layershifter))
- fix\(eventStack\): correct handling of removed targets [\#2117](https://github.com/Semantic-Org/Semantic-UI-React/pull/2117) ([layershifter](https://github.com/layershifter))

## [v0.74.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.74.1) (2017-09-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.74.0...v0.74.1)

**Fixed bugs:**

- Visibility: Invalid Prop 'offset' [\#2116](https://github.com/Semantic-Org/Semantic-UI-React/issues/2116)

## [v0.74.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.74.0) (2017-09-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.73.1...v0.74.0)

**Implemented enhancements:**

- eventStack: Multiple Popups do not behave correctly [\#2075](https://github.com/Semantic-Org/Semantic-UI-React/issues/2075)
- Feature Request: Support Popup close onClick when hoverable [\#2034](https://github.com/Semantic-Org/Semantic-UI-React/issues/2034)
- Dropdown: how to stop it from clearing the input field? \[feature request\] [\#1829](https://github.com/Semantic-Org/Semantic-UI-React/issues/1829)
- feat\(Dropdown\): add `searchQuery` prop [\#2109](https://github.com/Semantic-Org/Semantic-UI-React/pull/2109) ([layershifter](https://github.com/layershifter))
- feat\(eventStack\): support for different targets [\#2094](https://github.com/Semantic-Org/Semantic-UI-React/pull/2094) ([layershifter](https://github.com/layershifter))
- feat\(Sticky|Visibility\): listen for `resize` events [\#2091](https://github.com/Semantic-Org/Semantic-UI-React/pull/2091) ([layershifter](https://github.com/layershifter))
- feat\(Visibility\): add `direction` for calculations [\#2090](https://github.com/Semantic-Org/Semantic-UI-React/pull/2090) ([layershifter](https://github.com/layershifter))
- breaking\(Accordion\): Refactor component [\#1375](https://github.com/Semantic-Org/Semantic-UI-React/pull/1375) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Dropdown: call onAddItem after onChange [\#2106](https://github.com/Semantic-Org/Semantic-UI-React/issues/2106)
- Button: `attached` prop should accept `true` as value [\#2104](https://github.com/Semantic-Org/Semantic-UI-React/issues/2104)
- Dropdown: tabIndex rendered incorrectly [\#2093](https://github.com/Semantic-Org/Semantic-UI-React/issues/2093)
- Sticky: `active` prop doesn't reset sticky state [\#2082](https://github.com/Semantic-Org/Semantic-UI-React/issues/2082)
- Dropdown: onSearchChange signature should match that of Search [\#2052](https://github.com/Semantic-Org/Semantic-UI-React/issues/2052)

**Closed issues:**

- Vertical divider appears to be rendering incorrectly in Chrome [\#2085](https://github.com/Semantic-Org/Semantic-UI-React/issues/2085)
- Docs: parse {custom} and display correct values [\#2078](https://github.com/Semantic-Org/Semantic-UI-React/issues/2078)
- Checkbox slider with lose animation if label changes [\#1881](https://github.com/Semantic-Org/Semantic-UI-React/issues/1881)

**Merged pull requests:**

- fix\(Dropdown\): fix call order of `onAddItem` and `onChange` handlers [\#2113](https://github.com/Semantic-Org/Semantic-UI-React/pull/2113) ([layershifter](https://github.com/layershifter))
- breaking\(Dropdown\): clean searchQuery after selection in multiple search Dropdown [\#2112](https://github.com/Semantic-Org/Semantic-UI-React/pull/2112) ([layershifter](https://github.com/layershifter))
- docs\(Dropdown\): fix searchQuery example [\#2110](https://github.com/Semantic-Org/Semantic-UI-React/pull/2110) ([layershifter](https://github.com/layershifter))
- fix\(Button\): Add bool to propTypes of attached [\#2105](https://github.com/Semantic-Org/Semantic-UI-React/pull/2105) ([kasbah](https://github.com/kasbah))
- breaking\(Dropdown\): correct onSearchChange signature [\#2102](https://github.com/Semantic-Org/Semantic-UI-React/pull/2102) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): fix tabIndex behaviour [\#2101](https://github.com/Semantic-Org/Semantic-UI-React/pull/2101) ([layershifter](https://github.com/layershifter))
- fix\(Modal|Popup|Portal\): fix usage of eventStack sub/unsub [\#2099](https://github.com/Semantic-Org/Semantic-UI-React/pull/2099) ([austinfox](https://github.com/austinfox))
- fix\(Icon\): fix typings of Icon.Group [\#2095](https://github.com/Semantic-Org/Semantic-UI-React/pull/2095) ([mihai-dinculescu](https://github.com/mihai-dinculescu))
- fix\(Visibility\): fix behaviour of reverse calls [\#2088](https://github.com/Semantic-Org/Semantic-UI-React/pull/2088) ([layershifter](https://github.com/layershifter))
- docs\(parser\): parse custom values and mixed enums [\#2086](https://github.com/Semantic-Org/Semantic-UI-React/pull/2086) ([layershifter](https://github.com/layershifter))
- fix\(Sticky\): disable styles when `active` is false [\#2083](https://github.com/Semantic-Org/Semantic-UI-React/pull/2083) ([layershifter](https://github.com/layershifter))
- chore\(package\): replace npm with yarn [\#2081](https://github.com/Semantic-Org/Semantic-UI-React/pull/2081) ([levithomason](https://github.com/levithomason))
- feat\(Dropdown\): implement `selectOnNavigation` prop [\#2009](https://github.com/Semantic-Org/Semantic-UI-React/pull/2009) ([rijk](https://github.com/rijk))

## [v0.73.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.73.1) (2017-09-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.73.0...v0.73.1)

**Implemented enhancements:**

- feat\(Sticky\): add `active` prop [\#2053](https://github.com/Semantic-Org/Semantic-UI-React/pull/2053) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Popup component does not clean event handlers attached to window when it unmounts [\#2062](https://github.com/Semantic-Org/Semantic-UI-React/issues/2062)

**Closed issues:**

- wide columns [\#2073](https://github.com/Semantic-Org/Semantic-UI-React/issues/2073)
- No CHANGELOG for v0.73.0 [\#2066](https://github.com/Semantic-Org/Semantic-UI-React/issues/2066)
- \(Dropdown\): when used as Menu Item, 'description' overlays 'text' [\#2031](https://github.com/Semantic-Org/Semantic-UI-React/issues/2031)

**Merged pull requests:**

- fix\(Popup\): Remove hideOnScroll from window scroll [\#2063](https://github.com/Semantic-Org/Semantic-UI-React/pull/2063) ([mkarajohn](https://github.com/mkarajohn))

## [v0.73.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.73.0) (2017-09-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.72.0...v0.73.0)

**Implemented enhancements:**

- Card subcomponents are missing `textAlign` props [\#2027](https://github.com/Semantic-Org/Semantic-UI-React/issues/2027)
- Visibility: onOnScreen doesn't fire if element is onScreen on first render [\#1911](https://github.com/Semantic-Org/Semantic-UI-React/issues/1911)
- RFC: ability to make Table columns resizable [\#1513](https://github.com/Semantic-Org/Semantic-UI-React/issues/1513)
- TextArea autoHeight initialState with SSR [\#1478](https://github.com/Semantic-Org/Semantic-UI-React/issues/1478)
- Dropdown: prop useLabels [\#1134](https://github.com/Semantic-Org/Semantic-UI-React/issues/1134)
- feat\(Card\): add textAlign prop to Card subcomponents [\#2038](https://github.com/Semantic-Org/Semantic-UI-React/pull/2038) ([itamar244](https://github.com/itamar244))
- feat\(Dropdown\): remove diacritics on filter [\#2021](https://github.com/Semantic-Org/Semantic-UI-React/pull/2021) ([AgentChris](https://github.com/AgentChris))
- feat\(Visibility\): add fireOnMount [\#2018](https://github.com/Semantic-Org/Semantic-UI-React/pull/2018) ([layershifter](https://github.com/layershifter))
- feat\(Visibility\): add offset [\#2016](https://github.com/Semantic-Org/Semantic-UI-React/pull/2016) ([layershifter](https://github.com/layershifter))
- feat\(Responsive\): add component [\#1872](https://github.com/Semantic-Org/Semantic-UI-React/pull/1872) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Rating: RatingIcon throws warning in React 16 [\#2057](https://github.com/Semantic-Org/Semantic-UI-React/issues/2057)
- Value of input not updating correctly when inside Transition.Group [\#2040](https://github.com/Semantic-Org/Semantic-UI-React/issues/2040)
- Checkbox onClick provides wrong data \[onChange works fine\] [\#1936](https://github.com/Semantic-Org/Semantic-UI-React/issues/1936)
- IE: TextArea: wrong autoHeight counting [\#1925](https://github.com/Semantic-Org/Semantic-UI-React/issues/1925)
- Modal: getting unknown prop warning on `triggerClose` for shorthand actions [\#1642](https://github.com/Semantic-Org/Semantic-UI-React/issues/1642)

**Closed issues:**

- fix\(Advertisement\): your description [\#2044](https://github.com/Semantic-Org/Semantic-UI-React/issues/2044)
- Wrong position for Icon in Input when are \(action || labeled\) [\#2036](https://github.com/Semantic-Org/Semantic-UI-React/issues/2036)
- Can't input chinese - the cursor move to the end automatically [\#2035](https://github.com/Semantic-Org/Semantic-UI-React/issues/2035)
- fix\(Container\): Fluid Container gets width when using semantic-ui-less package [\#2028](https://github.com/Semantic-Org/Semantic-UI-React/issues/2028)
- Image can't be centered if href is provided [\#2022](https://github.com/Semantic-Org/Semantic-UI-React/issues/2022)
- Layouts: Sticky layout sample does not work [\#1994](https://github.com/Semantic-Org/Semantic-UI-React/issues/1994)
- Using rollup.js for web builds instead of webpack has unexpected results. [\#1238](https://github.com/Semantic-Org/Semantic-UI-React/issues/1238)

**Merged pull requests:**

- fix\(Rating\): make defaultProps static [\#2061](https://github.com/Semantic-Org/Semantic-UI-React/pull/2061) ([nel-co](https://github.com/nel-co))
- docs\(readme\): add according.to.localsourc.es [\#2059](https://github.com/Semantic-Org/Semantic-UI-React/pull/2059) ([martin-ericsson](https://github.com/martin-ericsson))
- chore\(debug\): remove debug from builds [\#2058](https://github.com/Semantic-Org/Semantic-UI-React/pull/2058) ([layershifter](https://github.com/layershifter))
- fix\(childMapping\): correct argument order for getValue\(\) [\#2047](https://github.com/Semantic-Org/Semantic-UI-React/pull/2047) ([layershifter](https://github.com/layershifter))
- fix\(Image\): relax `wrapped` propType [\#2043](https://github.com/Semantic-Org/Semantic-UI-React/pull/2043) ([layershifter](https://github.com/layershifter))
- docs\(readme\): add appfollow  to built with [\#2030](https://github.com/Semantic-Org/Semantic-UI-React/pull/2030) ([lisonok](https://github.com/lisonok))
- chore\(tests\): replace phantomjs with chromium [\#2024](https://github.com/Semantic-Org/Semantic-UI-React/pull/2024) ([layershifter](https://github.com/layershifter))
- perf\(Visibility\): use RAF [\#2019](https://github.com/Semantic-Org/Semantic-UI-React/pull/2019) ([layershifter](https://github.com/layershifter))
- docs\(Layouts\): make StickyLayout fully functional [\#2017](https://github.com/Semantic-Org/Semantic-UI-React/pull/2017) ([layershifter](https://github.com/layershifter))
- breaking\(Checkbox\): callback with new checked value in onClick [\#2014](https://github.com/Semantic-Org/Semantic-UI-React/pull/2014) ([areinmeyer](https://github.com/areinmeyer))
- perf\(docs\): optimize ComponentProps [\#2012](https://github.com/Semantic-Org/Semantic-UI-React/pull/2012) ([layershifter](https://github.com/layershifter))
- perf\(Flag|Icon\): add shouldComponentUpdate with shallowEqual [\#2011](https://github.com/Semantic-Org/Semantic-UI-React/pull/2011) ([layershifter](https://github.com/layershifter))
- fix\(Modal\): fix typo in className [\#2004](https://github.com/Semantic-Org/Semantic-UI-React/pull/2004) ([layershifter](https://github.com/layershifter))
- fix\(TextArea\): use onInput for updating height for IE compatibility [\#1982](https://github.com/Semantic-Org/Semantic-UI-React/pull/1982) ([nickpedersen](https://github.com/nickpedersen))
- docs\(Example\): add ShorthandExample and ability to version docs [\#1868](https://github.com/Semantic-Org/Semantic-UI-React/pull/1868) ([layershifter](https://github.com/layershifter))

## [v0.72.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.72.0) (2017-08-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.71.5...v0.72.0)

**Implemented enhancements:**

- \<Tab /\> re-renders child pane on switching. [\#1877](https://github.com/Semantic-Org/Semantic-UI-React/issues/1877)
- feat\(Tab\): add `renderActiveOnly` prop [\#1976](https://github.com/Semantic-Org/Semantic-UI-React/pull/1976) ([layershifter](https://github.com/layershifter))
- feat\(events\): add eventStack [\#1733](https://github.com/Semantic-Org/Semantic-UI-React/pull/1733) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- ReferenceError: window is not defined [\#1987](https://github.com/Semantic-Org/Semantic-UI-React/issues/1987)
- Docs site is not working [\#1984](https://github.com/Semantic-Org/Semantic-UI-React/issues/1984)
- Menu.Item - disabled=true - onClick still firing...intentional? [\#1964](https://github.com/Semantic-Org/Semantic-UI-React/issues/1964)
- Modal: Enter ESC should only close the top layer modal [\#1657](https://github.com/Semantic-Org/Semantic-UI-React/issues/1657)

**Closed issues:**

- Modal Dimmer Blur Bug [\#2007](https://github.com/Semantic-Org/Semantic-UI-React/issues/2007)
- closeOnBlur={false} doesn't work [\#1995](https://github.com/Semantic-Org/Semantic-UI-React/issues/1995)
- Floated segments do not align vertically [\#1988](https://github.com/Semantic-Org/Semantic-UI-React/issues/1988)
- Credit Card icon is adding "card" class to css. [\#1957](https://github.com/Semantic-Org/Semantic-UI-React/issues/1957)

**Merged pull requests:**

- fix\(Button|Menu|List|Step\): fix behaviour of `onClick` when is disabled [\#2006](https://github.com/Semantic-Org/Semantic-UI-React/pull/2006) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): closeOnBlur={false} does not work [\#1998](https://github.com/Semantic-Org/Semantic-UI-React/pull/1998) ([ChrisNLott](https://github.com/ChrisNLott))
- fix\(Sticky|Visibility\): add null check on window [\#1990](https://github.com/Semantic-Org/Semantic-UI-React/pull/1990) ([ChrisNLott](https://github.com/ChrisNLott))
- fix\(TextArea\): fix typings definition [\#1989](https://github.com/Semantic-Org/Semantic-UI-React/pull/1989) ([pierre-H](https://github.com/pierre-H))
- perf\(docs\): optimize performance [\#1981](https://github.com/Semantic-Org/Semantic-UI-React/pull/1981) ([layershifter](https://github.com/layershifter))
- breaking\(Modal\): update shorthand functionality [\#1599](https://github.com/Semantic-Org/Semantic-UI-React/pull/1599) ([levithomason](https://github.com/levithomason))

## [v0.71.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.71.5) (2017-08-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.71.4...v0.71.5)

**Implemented enhancements:**

- Feature request: context prop to Visibility component [\#1959](https://github.com/Semantic-Org/Semantic-UI-React/issues/1959)
- feat\(Sticky|Visibility\): add scroll context [\#1978](https://github.com/Semantic-Org/Semantic-UI-React/pull/1978) ([mariolamacchia](https://github.com/mariolamacchia))
- feat\(Popup\): Multiple event triggering a Popup [\#1977](https://github.com/Semantic-Org/Semantic-UI-React/pull/1977) ([vipul-21](https://github.com/vipul-21))
- feat\(Transition\): make `duration` prop more advanced [\#1967](https://github.com/Semantic-Org/Semantic-UI-React/pull/1967) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Input: 'focus' method does not exist in typings [\#1970](https://github.com/Semantic-Org/Semantic-UI-React/issues/1970)
- SearchField triggers blur & focus event twice [\#1962](https://github.com/Semantic-Org/Semantic-UI-React/issues/1962)
- Multi-select Dropdown does not clear value after "onAddItem" [\#1952](https://github.com/Semantic-Org/Semantic-UI-React/issues/1952)
- Tab.Pane unknown prop warning when using as='div' [\#1941](https://github.com/Semantic-Org/Semantic-UI-React/issues/1941)

**Closed issues:**

- Portal/Popups incompatible with preact-compat [\#1969](https://github.com/Semantic-Org/Semantic-UI-React/issues/1969)
- react warning props `input`, `meta` on \<div\> tag in Form.Select [\#1961](https://github.com/Semantic-Org/Semantic-UI-React/issues/1961)
- Docs: Cannot access the site [\#1958](https://github.com/Semantic-Org/Semantic-UI-React/issues/1958)
- RFC: Multiple Search Dropdown -\> not clearing search query on select [\#1954](https://github.com/Semantic-Org/Semantic-UI-React/issues/1954)
- Cannot access docs site [\#1870](https://github.com/Semantic-Org/Semantic-UI-React/issues/1870)
- Attached \<Button /\> does not respond on keyboard events [\#1797](https://github.com/Semantic-Org/Semantic-UI-React/issues/1797)

**Merged pull requests:**

- fix\(Input|Button|TextArea\): add `focus` method to typings [\#1972](https://github.com/Semantic-Org/Semantic-UI-React/pull/1972) ([layershifter](https://github.com/layershifter))
- fix\(Search\): only call onBlur & onFocus event handler once [\#1963](https://github.com/Semantic-Org/Semantic-UI-React/pull/1963) ([chopstikk](https://github.com/chopstikk))
- chore\(webpack\): switch rawgit to github [\#1960](https://github.com/Semantic-Org/Semantic-UI-React/pull/1960) ([levithomason](https://github.com/levithomason))
- fix\(Dropdown\): more logic for clearing search [\#1956](https://github.com/Semantic-Org/Semantic-UI-React/pull/1956) ([ChrisNLott](https://github.com/ChrisNLott))
- fix\(TabPane\): remove extra loading prop [\#1953](https://github.com/Semantic-Org/Semantic-UI-React/pull/1953) ([levithomason](https://github.com/levithomason))
- docs\(Button\): add example with replicating button behaviour [\#1951](https://github.com/Semantic-Org/Semantic-UI-React/pull/1951) ([layershifter](https://github.com/layershifter))
- chore\(package\): switch to react-hot-loader [\#1946](https://github.com/Semantic-Org/Semantic-UI-React/pull/1946) ([layershifter](https://github.com/layershifter))
- chore\(package\): replace deprecated babel-plugin-\_\_coverage\_\_ [\#1940](https://github.com/Semantic-Org/Semantic-UI-React/pull/1940) ([layershifter](https://github.com/layershifter))
- style\(tests\): mixed lint updates [\#1939](https://github.com/Semantic-Org/Semantic-UI-React/pull/1939) ([layershifter](https://github.com/layershifter))
- chore\(package\): update all dependencies [\#1895](https://github.com/Semantic-Org/Semantic-UI-React/pull/1895) ([layershifter](https://github.com/layershifter))
- feat\(Tab\): Add vertical tabbing [\#1894](https://github.com/Semantic-Org/Semantic-UI-React/pull/1894) ([mclarentgp](https://github.com/mclarentgp))

## [v0.71.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.71.4) (2017-08-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.71.3...v0.71.4)

**Implemented enhancements:**

- Form: add unstackable [\#1919](https://github.com/Semantic-Org/Semantic-UI-React/issues/1919)
- feat\(Form\): add `unstackable` prop [\#1921](https://github.com/Semantic-Org/Semantic-UI-React/pull/1921) ([layershifter](https://github.com/layershifter))
- feat\(Search\): prop to return the active result [\#1825](https://github.com/Semantic-Org/Semantic-UI-React/pull/1825) ([treyhuffine](https://github.com/treyhuffine))

**Fixed bugs:**

- Step: Step.Group with unstackable prop generates incorrect classname [\#1942](https://github.com/Semantic-Org/Semantic-UI-React/issues/1942)
- "Edit Code" button in docs website reveals a broken source editor in Firefox [\#1912](https://github.com/Semantic-Org/Semantic-UI-React/issues/1912)
- verticalAlign does not function for Grid component [\#1908](https://github.com/Semantic-Org/Semantic-UI-React/issues/1908)

**Closed issues:**

- Input: when both `value` and `onChange` are set, will produce the `uncontrolled/controlled input` error [\#1923](https://github.com/Semantic-Org/Semantic-UI-React/issues/1923)
- Attribute the icons to FontAwesome [\#1901](https://github.com/Semantic-Org/Semantic-UI-React/issues/1901)

**Merged pull requests:**

- docs\(Icon\): add FontAwesome attribution [\#1950](https://github.com/Semantic-Org/Semantic-UI-React/pull/1950) ([layershifter](https://github.com/layershifter))
- style\(mixed\): update components styling [\#1949](https://github.com/Semantic-Org/Semantic-UI-React/pull/1949) ([layershifter](https://github.com/layershifter))
- docs\(README\): mark Sticky as implemented [\#1948](https://github.com/Semantic-Org/Semantic-UI-React/pull/1948) ([layershifter](https://github.com/layershifter))
- fix\(Step\): fixed typo in Step.Group className [\#1943](https://github.com/Semantic-Org/Semantic-UI-React/pull/1943) ([Joel-Raju](https://github.com/Joel-Raju))
- style\(docs\): update formatting of Menu and Table examples [\#1938](https://github.com/Semantic-Org/Semantic-UI-React/pull/1938) ([layershifter](https://github.com/layershifter))
- docs\(Layouts\): fix LoginLayout [\#1926](https://github.com/Semantic-Org/Semantic-UI-React/pull/1926) ([layershifter](https://github.com/layershifter))
- docs\(ComponentExample\): fix width in Firefox [\#1916](https://github.com/Semantic-Org/Semantic-UI-React/pull/1916) ([layershifter](https://github.com/layershifter))
- Added new application written in Semantic-UI react [\#1913](https://github.com/Semantic-Org/Semantic-UI-React/pull/1913) ([bwoodlt](https://github.com/bwoodlt))
- fix\(Statistic\): fix wrong inverted type [\#1909](https://github.com/Semantic-Org/Semantic-UI-React/pull/1909) ([tadashi-aikawa](https://github.com/tadashi-aikawa))
- docs\(Portal\): add Example under Addons Section of Docs [\#1860](https://github.com/Semantic-Org/Semantic-UI-React/pull/1860) ([alexUXUI](https://github.com/alexUXUI))

## [v0.71.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.71.3) (2017-07-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.71.2...v0.71.3)

**Implemented enhancements:**

- Embed: add shorthand for iframe [\#1804](https://github.com/Semantic-Org/Semantic-UI-React/issues/1804)
- feat\(Sticky\): add component [\#1747](https://github.com/Semantic-Org/Semantic-UI-React/pull/1747) ([mariolamacchia](https://github.com/mariolamacchia))
- feat\(Transition\): add component [\#1435](https://github.com/Semantic-Org/Semantic-UI-React/pull/1435) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- fix\(Header\): 'mini' size does not work [\#1903](https://github.com/Semantic-Org/Semantic-UI-React/issues/1903)
- Dropdown: Filtered list resets when using arrow keys [\#1858](https://github.com/Semantic-Org/Semantic-UI-React/issues/1858)
- TextArea: wrong autoHeight counting [\#1843](https://github.com/Semantic-Org/Semantic-UI-React/issues/1843)
- Dropdown: problems with minCharacters [\#1787](https://github.com/Semantic-Org/Semantic-UI-React/issues/1787)

**Closed issues:**

- Popup position is not respected when near corner of window [\#1482](https://github.com/Semantic-Org/Semantic-UI-React/issues/1482)

**Merged pull requests:**

- fix\(Header\): remove absent `mini` size [\#1904](https://github.com/Semantic-Org/Semantic-UI-React/pull/1904) ([layershifter](https://github.com/layershifter))
- fix\(Progress\): fix wrong inverted type [\#1900](https://github.com/Semantic-Org/Semantic-UI-React/pull/1900) ([tadashi-aikawa](https://github.com/tadashi-aikawa))
- fix\(TextArea\): update autoHeight on text wrap [\#1898](https://github.com/Semantic-Org/Semantic-UI-React/pull/1898) ([slunecniborecek](https://github.com/slunecniborecek))
- feat\(Embed\): add iframe shorthand [\#1810](https://github.com/Semantic-Org/Semantic-UI-React/pull/1810) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): fix multiple problems [\#1795](https://github.com/Semantic-Org/Semantic-UI-React/pull/1795) ([layershifter](https://github.com/layershifter))
- fix\(Popup\): use original position if none fit in viewport [\#1483](https://github.com/Semantic-Org/Semantic-UI-React/pull/1483) ([MindFreeze](https://github.com/MindFreeze))

## [v0.71.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.71.2) (2017-07-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.71.1...v0.71.2)

**Fixed bugs:**

- Tab: data.activeIndex is overwritten in onTabChange for controlled Tab [\#1888](https://github.com/Semantic-Org/Semantic-UI-React/issues/1888)
- Form: action prop is missing in generated markup [\#1882](https://github.com/Semantic-Org/Semantic-UI-React/issues/1882)
- fix\(Form\): Disable Form.Select open dropdown in onfocus event [\#1115](https://github.com/Semantic-Org/Semantic-UI-React/issues/1115)

**Closed issues:**

- Invalid HTML from Header [\#1893](https://github.com/Semantic-Org/Semantic-UI-React/issues/1893)
- Dropdown: Receive Warning even requested props are given [\#1874](https://github.com/Semantic-Org/Semantic-UI-React/issues/1874)
- Creating a Checkbox or Modal emits an error in the console when using Preact [\#1869](https://github.com/Semantic-Org/Semantic-UI-React/issues/1869)
- Improve Tab Props [\#1859](https://github.com/Semantic-Org/Semantic-UI-React/issues/1859)

**Merged pull requests:**

- fix\(Button\): fix animated prop type definition [\#1891](https://github.com/Semantic-Org/Semantic-UI-React/pull/1891) ([ecozoic](https://github.com/ecozoic))
- fix\(Tab\): use correct onTabChange activeIndex [\#1890](https://github.com/Semantic-Org/Semantic-UI-React/pull/1890) ([levithomason](https://github.com/levithomason))
- feat\(FormField\): pass disabled prop to form control [\#1889](https://github.com/Semantic-Org/Semantic-UI-React/pull/1889) ([levithomason](https://github.com/levithomason))
- fix\(Form\): fix handling of `action` prop [\#1887](https://github.com/Semantic-Org/Semantic-UI-React/pull/1887) ([layershifter](https://github.com/layershifter))
- tests\(shorthand\): allow non-strict assert [\#1845](https://github.com/Semantic-Org/Semantic-UI-React/pull/1845) ([layershifter](https://github.com/layershifter))
- docs\(layouts\): add layout examples [\#1039](https://github.com/Semantic-Org/Semantic-UI-React/pull/1039) ([iamcaleberic](https://github.com/iamcaleberic))

## [v0.71.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.71.1) (2017-07-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.71.0...v0.71.1)

**Implemented enhancements:**

- feat\(Modal\): add `scrolling` prop to Modal.Content [\#1857](https://github.com/Semantic-Org/Semantic-UI-React/pull/1857) ([layershifter](https://github.com/layershifter))
- feat\(Step\): add `unstackable` prop to Step.Group [\#1856](https://github.com/Semantic-Org/Semantic-UI-React/pull/1856) ([layershifter](https://github.com/layershifter))
- feat\(Modal\): add `mini` and `tiny` sizes [\#1853](https://github.com/Semantic-Org/Semantic-UI-React/pull/1853) ([layershifter](https://github.com/layershifter))
- feat\(Menu\): add `left` value to the position prop [\#1852](https://github.com/Semantic-Org/Semantic-UI-React/pull/1852) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Tab: browser throwing a warning - getInitialState [\#1863](https://github.com/Semantic-Org/Semantic-UI-React/issues/1863)
- Dropdown: accessibility problem \(screen readers\) [\#1834](https://github.com/Semantic-Org/Semantic-UI-React/issues/1834)
- IE11 long modal scrolling [\#1759](https://github.com/Semantic-Org/Semantic-UI-React/issues/1759)

**Closed issues:**

- fix\(Menu\): your description [\#1862](https://github.com/Semantic-Org/Semantic-UI-React/issues/1862)
- website is down? [\#1854](https://github.com/Semantic-Org/Semantic-UI-React/issues/1854)
- SUI: release 2.2.11 [\#1851](https://github.com/Semantic-Org/Semantic-UI-React/issues/1851)
- Search: examples broken [\#1846](https://github.com/Semantic-Org/Semantic-UI-React/issues/1846)
- RFC: New types for typings [\#1289](https://github.com/Semantic-Org/Semantic-UI-React/issues/1289)

**Merged pull requests:**

- fix\(AutoControlledComponent\): rename state method [\#1865](https://github.com/Semantic-Org/Semantic-UI-React/pull/1865) ([layershifter](https://github.com/layershifter))
- fix\(Dimmer|Modal\): fix compatibility with IE [\#1861](https://github.com/Semantic-Org/Semantic-UI-React/pull/1861) ([layershifter](https://github.com/layershifter))
- chore\(package\): update SUI version [\#1855](https://github.com/Semantic-Org/Semantic-UI-React/pull/1855) ([layershifter](https://github.com/layershifter))
- docs\(Search\): fix examples [\#1847](https://github.com/Semantic-Org/Semantic-UI-React/pull/1847) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): accessibility problem \(screen readers\) [\#1836](https://github.com/Semantic-Org/Semantic-UI-React/pull/1836) ([Sole-Valero](https://github.com/Sole-Valero))
- style\(typings\): add new types [\#1782](https://github.com/Semantic-Org/Semantic-UI-React/pull/1782) ([layershifter](https://github.com/layershifter))

## [v0.71.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.71.0) (2017-07-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.70.0...v0.71.0)

**Implemented enhancements:**

- Input: onChange event triggered when IME character \(ex. Chinese\) is not completely entered  [\#1744](https://github.com/Semantic-Org/Semantic-UI-React/issues/1744)
- Infinite scrolling [\#1173](https://github.com/Semantic-Org/Semantic-UI-React/issues/1173)
- feat\(Dropdown\): add DropdownSearchInput component [\#1619](https://github.com/Semantic-Org/Semantic-UI-React/pull/1619) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Input: list prop should be passed to input [\#1835](https://github.com/Semantic-Org/Semantic-UI-React/issues/1835)
- Tab.Pane's children data type needs to be updated [\#1798](https://github.com/Semantic-Org/Semantic-UI-React/issues/1798)
- AutoControlledComponent throws warning in React 16 [\#1761](https://github.com/Semantic-Org/Semantic-UI-React/issues/1761)

**Closed issues:**

- Modal closeIcon is invisible with dimmer='inverted' [\#1838](https://github.com/Semantic-Org/Semantic-UI-React/issues/1838)
- Typed by mistake :\( [\#1827](https://github.com/Semantic-Org/Semantic-UI-React/issues/1827)
- ipt [\#1826](https://github.com/Semantic-Org/Semantic-UI-React/issues/1826)
- Dropdown always open  [\#1824](https://github.com/Semantic-Org/Semantic-UI-React/issues/1824)
- RFC: Tab, allow custom menuItem [\#1822](https://github.com/Semantic-Org/Semantic-UI-React/issues/1822)
- Hey people, [\#1821](https://github.com/Semantic-Org/Semantic-UI-React/issues/1821)
- Console error for Form Textarea rows requiring number [\#1814](https://github.com/Semantic-Org/Semantic-UI-React/issues/1814)
- Country dropdown box, pressing the backspace key will not delete the first character typed in [\#1805](https://github.com/Semantic-Org/Semantic-UI-React/issues/1805)
- onSearchChange randomly misses keys on IE11 if typing quickly [\#1785](https://github.com/Semantic-Org/Semantic-UI-React/issues/1785)
- Dropdown value not populated on initial render w/ react 16 [\#1682](https://github.com/Semantic-Org/Semantic-UI-React/issues/1682)

**Merged pull requests:**

- docs\(readme\): add Sublime Fund to the built with list [\#1839](https://github.com/Semantic-Org/Semantic-UI-React/pull/1839) ([dguo](https://github.com/dguo))
- fix\(Input\): list prop should be passed to the input [\#1837](https://github.com/Semantic-Org/Semantic-UI-React/pull/1837) ([layershifter](https://github.com/layershifter))
- breaking\(Search\): update onResultSelect and onSearchChange signature [\#1828](https://github.com/Semantic-Org/Semantic-UI-React/pull/1828) ([layershifter](https://github.com/layershifter))
- fix\(Tab\): relax menuItem prop type [\#1823](https://github.com/Semantic-Org/Semantic-UI-React/pull/1823) ([levithomason](https://github.com/levithomason))
- fix\(Input\): add typings update [\#1820](https://github.com/Semantic-Org/Semantic-UI-React/pull/1820) ([layershifter](https://github.com/layershifter))
- fix\(TextArea\): simplify propTypes [\#1817](https://github.com/Semantic-Org/Semantic-UI-React/pull/1817) ([layershifter](https://github.com/layershifter))
- style\(typings\): Add tab panes prop definition [\#1812](https://github.com/Semantic-Org/Semantic-UI-React/pull/1812) ([pierre-H](https://github.com/pierre-H))
- fix\(Tab\): fix children propType [\#1811](https://github.com/Semantic-Org/Semantic-UI-React/pull/1811) ([layershifter](https://github.com/layershifter))
- style\(typings\): export Tab definitions [\#1808](https://github.com/Semantic-Org/Semantic-UI-React/pull/1808) ([pierre-H](https://github.com/pierre-H))
- fix\(AutoControlledComponent\): use setState instead of an assign [\#1799](https://github.com/Semantic-Org/Semantic-UI-React/pull/1799) ([layershifter](https://github.com/layershifter))
- docs\(ComponentProps\): fix compatibility with IE [\#1796](https://github.com/Semantic-Org/Semantic-UI-React/pull/1796) ([layershifter](https://github.com/layershifter))
- chore\(package\): update chai to version 4.0.2 [\#1725](https://github.com/Semantic-Org/Semantic-UI-React/pull/1725) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.70.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.70.0) (2017-06-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.69.0...v0.70.0)

**Fixed bugs:**

- Popup: button class applied to Popup [\#1703](https://github.com/Semantic-Org/Semantic-UI-React/issues/1703)
- Failed to build webpack2 example [\#1701](https://github.com/Semantic-Org/Semantic-UI-React/issues/1701)
- TextArea incorrect height with autoHeight prop when element is not visible [\#1405](https://github.com/Semantic-Org/Semantic-UI-React/issues/1405)
- Field.Input, Field.Select Get Rendered w/ Different Heights  [\#1382](https://github.com/Semantic-Org/Semantic-UI-React/issues/1382)

**Closed issues:**

- Form: using a third-party form library causes "Uncaught TypeError: e.preventDefault is not a function" [\#1790](https://github.com/Semantic-Org/Semantic-UI-React/issues/1790)

**Merged pull requests:**

- chore\(package\): use satisfied react version [\#1794](https://github.com/Semantic-Org/Semantic-UI-React/pull/1794) ([levithomason](https://github.com/levithomason))
- fix\(TextArea\): compute height when hidden [\#1793](https://github.com/Semantic-Org/Semantic-UI-React/pull/1793) ([levithomason](https://github.com/levithomason))
- chore\(package\): add missing eslint dev dep [\#1792](https://github.com/Semantic-Org/Semantic-UI-React/pull/1792) ([levithomason](https://github.com/levithomason))
- breaking\(Input\): remove shorthand action button class [\#1791](https://github.com/Semantic-Org/Semantic-UI-React/pull/1791) ([levithomason](https://github.com/levithomason))
- fix\(children\): handle empty array children [\#1789](https://github.com/Semantic-Org/Semantic-UI-React/pull/1789) ([brianjd](https://github.com/brianjd))
- fix\(Form\): call preventDefault in onSubmit only when it exists [\#1788](https://github.com/Semantic-Org/Semantic-UI-React/pull/1788) ([layershifter](https://github.com/layershifter))
- docs\(examples\): add dependency for babel-plugin-lodash [\#1713](https://github.com/Semantic-Org/Semantic-UI-React/pull/1713) ([layershifter](https://github.com/layershifter))

## [v0.69.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.69.0) (2017-06-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.68.5...v0.69.0)

**Implemented enhancements:**

- Button: the disabled attribute doesn't apply to the button element [\#1775](https://github.com/Semantic-Org/Semantic-UI-React/issues/1775)
- RFC: Form submition [\#1769](https://github.com/Semantic-Org/Semantic-UI-React/issues/1769)
- Button: add focus\(\) method [\#1740](https://github.com/Semantic-Org/Semantic-UI-React/issues/1740)
- Input: remove need for icon to support 'loading' prop [\#1716](https://github.com/Semantic-Org/Semantic-UI-React/issues/1716)
- TextArea: add minHeight property with autoHeight [\#1647](https://github.com/Semantic-Org/Semantic-UI-React/issues/1647)
- feat\(Button\): add advanced handling of disabled prop [\#1781](https://github.com/Semantic-Org/Semantic-UI-React/pull/1781) ([layershifter](https://github.com/layershifter))
- feat\(Icon\): add ability use the loading prop without an icon [\#1768](https://github.com/Semantic-Org/Semantic-UI-React/pull/1768) ([layershifter](https://github.com/layershifter))
- feat\(Button\): add focus method [\#1764](https://github.com/Semantic-Org/Semantic-UI-React/pull/1764) ([layershifter](https://github.com/layershifter))
- feat\(TextArea\): add minHeight property, docs example [\#1679](https://github.com/Semantic-Org/Semantic-UI-React/pull/1679) ([josie11](https://github.com/josie11))

**Fixed bugs:**

- Checkbox|Input: aria-\* attributes incorrectly applied [\#1750](https://github.com/Semantic-Org/Semantic-UI-React/issues/1750)
- Missing attributes in html [\#1743](https://github.com/Semantic-Org/Semantic-UI-React/issues/1743)
- Dropdown: minCharacters breaks search input [\#1718](https://github.com/Semantic-Org/Semantic-UI-React/issues/1718)
- Dropdown: change active item on keyboard up/down [\#1487](https://github.com/Semantic-Org/Semantic-UI-React/issues/1487)
- Checkbox: focus not properly activated on click [\#1335](https://github.com/Semantic-Org/Semantic-UI-React/issues/1335)
- Dropdown sizer not always hidden [\#1298](https://github.com/Semantic-Org/Semantic-UI-React/issues/1298)

**Closed issues:**

- Import absolute path of the component [\#1776](https://github.com/Semantic-Org/Semantic-UI-React/issues/1776)
- Button animated="fade" doesnt work. [\#1774](https://github.com/Semantic-Org/Semantic-UI-React/issues/1774)
- Dropdown won't accept defaultValue change! [\#1772](https://github.com/Semantic-Org/Semantic-UI-React/issues/1772)
- fix\(Menu\): I type "&" to name of Menu.Item but it is not show [\#1765](https://github.com/Semantic-Org/Semantic-UI-React/issues/1765)
- Support Dropdown : multiple + label/icon [\#1760](https://github.com/Semantic-Org/Semantic-UI-React/issues/1760)
- Dropdown: override default onSearchChange behaviour if prop is passed [\#1738](https://github.com/Semantic-Org/Semantic-UI-React/issues/1738)

**Merged pull requests:**

- feat\(Form\): safely prevent default on submit [\#1786](https://github.com/Semantic-Org/Semantic-UI-React/pull/1786) ([levithomason](https://github.com/levithomason))
- fix\(Dropdown\): Sizer rendering incorrectly; Fixes \#1298 [\#1783](https://github.com/Semantic-Org/Semantic-UI-React/pull/1783) ([tobijoh](https://github.com/tobijoh))
- docs\(props\): fix uniqueness [\#1780](https://github.com/Semantic-Org/Semantic-UI-React/pull/1780) ([layershifter](https://github.com/layershifter))
- docs\(Introduction\): fix declarative example [\#1771](https://github.com/Semantic-Org/Semantic-UI-React/pull/1771) ([aabustamante](https://github.com/aabustamante))
- docs\(images\): add missing images, update urls [\#1763](https://github.com/Semantic-Org/Semantic-UI-React/pull/1763) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): focus should be obtained on mouseDown [\#1762](https://github.com/Semantic-Org/Semantic-UI-React/pull/1762) ([layershifter](https://github.com/layershifter))
- fix\(Accordion\): typings inverted to boolean [\#1758](https://github.com/Semantic-Org/Semantic-UI-React/pull/1758) ([mcrawshaw](https://github.com/mcrawshaw))
- fix\(Checkbox|Input\): fix handling of aria-attributes [\#1752](https://github.com/Semantic-Org/Semantic-UI-React/pull/1752) ([layershifter](https://github.com/layershifter))
- fix\(htmlInputProps\): fix handling of falsy values [\#1746](https://github.com/Semantic-Org/Semantic-UI-React/pull/1746) ([layershifter](https://github.com/layershifter))
- fix\(Search\): Allow default action if there is no selected result [\#1742](https://github.com/Semantic-Org/Semantic-UI-React/pull/1742) ([nanego](https://github.com/nanego))
- docs\(TableExampleSortable\): pass in null when that column isn't sorted [\#1737](https://github.com/Semantic-Org/Semantic-UI-React/pull/1737) ([jayphelps](https://github.com/jayphelps))
- fix\(Dropdown\): change active item on keyboard up/down [\#1735](https://github.com/Semantic-Org/Semantic-UI-React/pull/1735) ([Bebersohl](https://github.com/Bebersohl))
- fix\(Input\): add missing minLength prop [\#1734](https://github.com/Semantic-Org/Semantic-UI-React/pull/1734) ([traverse](https://github.com/traverse))
- breaking\(Dropdown\): remove hidden select [\#1730](https://github.com/Semantic-Org/Semantic-UI-React/pull/1730) ([levithomason](https://github.com/levithomason))
- fix\(Dropdown\): fix `minCharacter` prop behaviour [\#1722](https://github.com/Semantic-Org/Semantic-UI-React/pull/1722) ([layershifter](https://github.com/layershifter))

## [v0.68.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.68.5) (2017-06-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.68.4...v0.68.5)

**Implemented enhancements:**

- feat\(typings\): expose FormComponent in typings [\#1680](https://github.com/Semantic-Org/Semantic-UI-React/pull/1680) ([tomitrescak](https://github.com/tomitrescak))

**Fixed bugs:**

- Dropdown: option keys fallback to values incorrectly [\#1720](https://github.com/Semantic-Org/Semantic-UI-React/issues/1720)
- Browser tab not showing `Icon` when viewing Icon docs [\#1709](https://github.com/Semantic-Org/Semantic-UI-React/issues/1709)

**Closed issues:**

- 'npm install semantic-ui-react' has error [\#1723](https://github.com/Semantic-Org/Semantic-UI-React/issues/1723)

**Merged pull requests:**

- chore\(package\): update chai-enzyme to 0.7.1 [\#1731](https://github.com/Semantic-Org/Semantic-UI-React/pull/1731) ([levithomason](https://github.com/levithomason))
- fix\(factories\): handle falsy `key` values [\#1729](https://github.com/Semantic-Org/Semantic-UI-React/pull/1729) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): add addition item key [\#1727](https://github.com/Semantic-Org/Semantic-UI-React/pull/1727) ([levithomason](https://github.com/levithomason))
- chore\(package\): update require-dir@0.3.2 [\#1721](https://github.com/Semantic-Org/Semantic-UI-React/pull/1721) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(Item\): cleanup Item's floated example [\#1719](https://github.com/Semantic-Org/Semantic-UI-React/pull/1719) ([qoalu](https://github.com/qoalu))
- docs\(Icon\): fix selector for input [\#1714](https://github.com/Semantic-Org/Semantic-UI-React/pull/1714) ([layershifter](https://github.com/layershifter))
- chore\(package\): update react-ace to version 5.0.1 [\#1712](https://github.com/Semantic-Org/Semantic-UI-React/pull/1712) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.68.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.68.4) (2017-05-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.68.3...v0.68.4)

**Implemented enhancements:**

- Grid: should have inverted prop [\#1673](https://github.com/Semantic-Org/Semantic-UI-React/issues/1673)
- Search: invalid PropType noResultMessage [\#1664](https://github.com/Semantic-Org/Semantic-UI-React/issues/1664)
- minCharacters and saveRemoteData for Dropdown setting missing? [\#1124](https://github.com/Semantic-Org/Semantic-UI-React/issues/1124)
- feat\(Item\): add unstackable prop to ItemGroup [\#1706](https://github.com/Semantic-Org/Semantic-UI-React/pull/1706) ([layershifter](https://github.com/layershifter))
- feat\(typings\): export generic types [\#1698](https://github.com/Semantic-Org/Semantic-UI-React/pull/1698) ([fabien0102](https://github.com/fabien0102))
- feat\(Visibility\): add component [\#1174](https://github.com/Semantic-Org/Semantic-UI-React/pull/1174) ([mariolamacchia](https://github.com/mariolamacchia))

**Fixed bugs:**

- Button: Icon button has different width if content is 0 \(number\) [\#1691](https://github.com/Semantic-Org/Semantic-UI-React/issues/1691)
- Progress: indicating bar displaying wrong color with decimal value [\#1671](https://github.com/Semantic-Org/Semantic-UI-React/issues/1671)
- Dropdown won't open in IE if openOnFocus is false [\#1315](https://github.com/Semantic-Org/Semantic-UI-React/issues/1315)

**Closed issues:**

- Failed to Compile error using react-scripts@1.0.2 [\#1700](https://github.com/Semantic-Org/Semantic-UI-React/issues/1700)
- Button: redundant prop in Vertical Group example [\#1697](https://github.com/Semantic-Org/Semantic-UI-React/issues/1697)
- fix\(Modal\): your description [\#1696](https://github.com/Semantic-Org/Semantic-UI-React/issues/1696)
- Render button with content and icon take about 70ms [\#1686](https://github.com/Semantic-Org/Semantic-UI-React/issues/1686)
- Modal:  Flickering when size is set to Large or small [\#1675](https://github.com/Semantic-Org/Semantic-UI-React/issues/1675)
- Suggestion: Arbitrary objects passed to Search results? [\#1670](https://github.com/Semantic-Org/Semantic-UI-React/issues/1670)
- Popup with grid + map doesn't layout properly [\#1660](https://github.com/Semantic-Org/Semantic-UI-React/issues/1660)
- Search component value [\#1655](https://github.com/Semantic-Org/Semantic-UI-React/issues/1655)
- Dropdown: Should work with keys instead of values [\#1634](https://github.com/Semantic-Org/Semantic-UI-React/issues/1634)
- Docs -\> Form -\> Props -\> Size property - Showing lodash 'without' function [\#1563](https://github.com/Semantic-Org/Semantic-UI-React/issues/1563)

**Merged pull requests:**

- docs\(Introduction\): fix declarative example [\#1704](https://github.com/Semantic-Org/Semantic-UI-React/pull/1704) ([aabustamante](https://github.com/aabustamante))
- docs\(Button\): remove redundant prop in Vertical Group example [\#1699](https://github.com/Semantic-Org/Semantic-UI-React/pull/1699) ([andreipfeiffer](https://github.com/andreipfeiffer))
- docs\(Dropdown\): fix world icon in search example [\#1695](https://github.com/Semantic-Org/Semantic-UI-React/pull/1695) ([aabustamante](https://github.com/aabustamante))
- fix\(Checkbox\): fix value prop types [\#1694](https://github.com/Semantic-Org/Semantic-UI-React/pull/1694) ([fabien0102](https://github.com/fabien0102))
- fix\(Button\): fix handling of icon class [\#1693](https://github.com/Semantic-Org/Semantic-UI-React/pull/1693) ([layershifter](https://github.com/layershifter))
- chore\(package\): update chai-enzyme to version 0.7.0 [\#1692](https://github.com/Semantic-Org/Semantic-UI-React/pull/1692) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Dropdown\): Add minCharacters prop [\#1690](https://github.com/Semantic-Org/Semantic-UI-React/pull/1690) ([dyesseyumba](https://github.com/dyesseyumba))
- docs\(Form\): fix typo [\#1685](https://github.com/Semantic-Org/Semantic-UI-React/pull/1685) ([gitname](https://github.com/gitname))
- docs\(Introduction\): fix typo [\#1684](https://github.com/Semantic-Org/Semantic-UI-React/pull/1684) ([gitname](https://github.com/gitname))
- feat\(Search\): noResultsMessage prop can be a node [\#1683](https://github.com/Semantic-Org/Semantic-UI-React/pull/1683) ([b0gok](https://github.com/b0gok))
- docs\(types\): fix type definitions [\#1678](https://github.com/Semantic-Org/Semantic-UI-React/pull/1678) ([layershifter](https://github.com/layershifter))
- feat\(Grid\): add inverted prop and usage example to docs [\#1677](https://github.com/Semantic-Org/Semantic-UI-React/pull/1677) ([josie11](https://github.com/josie11))
- fix\(Progress\): use floor for data-percent attribute [\#1672](https://github.com/Semantic-Org/Semantic-UI-React/pull/1672) ([patrickgaskill](https://github.com/patrickgaskill))
- fix\(Dropdown\): fix compatibility with IE [\#1667](https://github.com/Semantic-Org/Semantic-UI-React/pull/1667) ([layershifter](https://github.com/layershifter))
- Update gh-pages to version 1.0.0 🚀 [\#1662](https://github.com/Semantic-Org/Semantic-UI-React/pull/1662) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(docs\): fix compatibility with IE [\#1659](https://github.com/Semantic-Org/Semantic-UI-React/pull/1659) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): fix key handling for options [\#1639](https://github.com/Semantic-Org/Semantic-UI-React/pull/1639) ([davezuko](https://github.com/davezuko))
- docs\(bundlers\): add webpack 2 example [\#1497](https://github.com/Semantic-Org/Semantic-UI-React/pull/1497) ([layershifter](https://github.com/layershifter))

## [v0.68.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.68.3) (2017-05-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.68.2...v0.68.3)

**Implemented enhancements:**

- fix\(Progress\): indicating progressbar does not change its color [\#1653](https://github.com/Semantic-Org/Semantic-UI-React/pull/1653) ([Bebersohl](https://github.com/Bebersohl))

**Fixed bugs:**

- Progress: indicating progressbar does not change its color [\#1650](https://github.com/Semantic-Org/Semantic-UI-React/issues/1650)
- TypeScript compile errors [\#1621](https://github.com/Semantic-Org/Semantic-UI-React/issues/1621)
- Input does not get disabled attibute [\#1565](https://github.com/Semantic-Org/Semantic-UI-React/issues/1565)

**Closed issues:**

- Semantic UI not working when lodash installed separately as dependency [\#1656](https://github.com/Semantic-Org/Semantic-UI-React/issues/1656)
- scrolling issue w/multiple long modals  [\#1652](https://github.com/Semantic-Org/Semantic-UI-React/issues/1652)
- Fixed menu inside a Sidebar pushable? [\#1646](https://github.com/Semantic-Org/Semantic-UI-React/issues/1646)
- fix\(Menu\): only first element shows when is active [\#1640](https://github.com/Semantic-Org/Semantic-UI-React/issues/1640)

**Merged pull requests:**

- docs\(Search\): add example of input shorthand  [\#1649](https://github.com/Semantic-Org/Semantic-UI-React/pull/1649) ([josie11](https://github.com/josie11))
- fix\(MenuExampleText\): activeItem logic [\#1641](https://github.com/Semantic-Org/Semantic-UI-React/pull/1641) ([aabustamante](https://github.com/aabustamante))
- chore\(package\): update typescript@2.3.1 [\#1637](https://github.com/Semantic-Org/Semantic-UI-React/pull/1637) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(ComponentExample\): typo "loose" to "lose" [\#1635](https://github.com/Semantic-Org/Semantic-UI-React/pull/1635) ([mikelyons](https://github.com/mikelyons))
- docs\(README\): add React-Semantic.UI-Starter [\#1626](https://github.com/Semantic-Org/Semantic-UI-React/pull/1626) ([layershifter](https://github.com/layershifter))
- test\(typings\): add rendering test [\#1625](https://github.com/Semantic-Org/Semantic-UI-React/pull/1625) ([layershifter](https://github.com/layershifter))
- test\(typings\): additional tests for typings and fixes [\#1624](https://github.com/Semantic-Org/Semantic-UI-React/pull/1624) ([layershifter](https://github.com/layershifter))
- fix\(Input\): replace disabled class with disabled attribute [\#1591](https://github.com/Semantic-Org/Semantic-UI-React/pull/1591) ([davezuko](https://github.com/davezuko))

## [v0.68.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.68.2) (2017-04-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.68.1...v0.68.2)

**Fixed bugs:**

- Docs are not properly generated with Type column of component [\#1608](https://github.com/Semantic-Org/Semantic-UI-React/issues/1608)

**Closed issues:**

- Auto-controlled props emit spurious warning when set to undefined \(missing undefined check\). [\#1586](https://github.com/Semantic-Org/Semantic-UI-React/issues/1586)

**Merged pull requests:**

- chore\(package\): update mocha@3.3.0 [\#1615](https://github.com/Semantic-Org/Semantic-UI-React/pull/1615) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(acc\): fix default prop dev warning [\#1613](https://github.com/Semantic-Org/Semantic-UI-React/pull/1613) ([jonmajorc](https://github.com/jonmajorc))
- test\(typings\): initial tests for typings [\#1611](https://github.com/Semantic-Org/Semantic-UI-React/pull/1611) ([layershifter](https://github.com/layershifter))
- chore\(package\): update copy-to-clipboard@3.0.6 [\#1610](https://github.com/Semantic-Org/Semantic-UI-React/pull/1610) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.68.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.68.1) (2017-04-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.68.0...v0.68.1)

**Implemented enhancements:**

- Feature request: handler for \<List selection/\> [\#1301](https://github.com/Semantic-Org/Semantic-UI-React/issues/1301)
- feat\(TextArea\): add focus\(\) method [\#1602](https://github.com/Semantic-Org/Semantic-UI-React/pull/1602) ([gnowoel](https://github.com/gnowoel))

**Fixed bugs:**

- Search: Pressing up/down arrow in the search input with no results throws errors to console [\#1592](https://github.com/Semantic-Org/Semantic-UI-React/issues/1592)

**Closed issues:**

- Thank you, maintainers and contributors [\#1604](https://github.com/Semantic-Org/Semantic-UI-React/issues/1604)
- Discussion: Abstract out prop mapping to independent lib [\#1601](https://github.com/Semantic-Org/Semantic-UI-React/issues/1601)
- Deprecation warnings on PropTypes with React \>= 15.5.0 [\#1587](https://github.com/Semantic-Org/Semantic-UI-React/issues/1587)
- Add docs for `sortable` Table and `sorted` TableCell [\#1195](https://github.com/Semantic-Org/Semantic-UI-React/issues/1195)

**Merged pull requests:**

- Add StackForge to Built With section [\#1607](https://github.com/Semantic-Org/Semantic-UI-React/pull/1607) ([joshmanders](https://github.com/joshmanders))
- docs\(readme\): Add Netflix EDX as a user [\#1606](https://github.com/Semantic-Org/Semantic-UI-React/pull/1606) ([jayphelps](https://github.com/jayphelps))
- Update babel-loader to version 7.0.0 🚀 [\#1605](https://github.com/Semantic-Org/Semantic-UI-React/pull/1605) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Dropdown\): add upward prop [\#1603](https://github.com/Semantic-Org/Semantic-UI-React/pull/1603) ([levithomason](https://github.com/levithomason))
- fix\(Search\): pressing up/down arrow in the search input causes error [\#1600](https://github.com/Semantic-Org/Semantic-UI-React/pull/1600) ([josie11](https://github.com/josie11))
- feat\(docs\): use https url [\#1598](https://github.com/Semantic-Org/Semantic-UI-React/pull/1598) ([levithomason](https://github.com/levithomason))
- docs\(examples\): fix in webpack1 example [\#1596](https://github.com/Semantic-Org/Semantic-UI-React/pull/1596) ([layershifter](https://github.com/layershifter))
- docs\(Table\): add sortable table example [\#1594](https://github.com/Semantic-Org/Semantic-UI-React/pull/1594) ([josie11](https://github.com/josie11))
- docs\(Container\): Fix a typo [\#1589](https://github.com/Semantic-Org/Semantic-UI-React/pull/1589) ([eu42](https://github.com/eu42))
- fix\(Dropdown\): fix warning on PropTypes with React \>= 15.5.0 [\#1588](https://github.com/Semantic-Org/Semantic-UI-React/pull/1588) ([g1eny0ung](https://github.com/g1eny0ung))
- fix\(Form\): pass shorthand ids to the label's htmlFor prop [\#1517](https://github.com/Semantic-Org/Semantic-UI-React/pull/1517) ([pedrocostadev](https://github.com/pedrocostadev))
- feat\(Modal\): Create a Modal using shorthand props [\#1508](https://github.com/Semantic-Org/Semantic-UI-React/pull/1508) ([josie11](https://github.com/josie11))

## [v0.68.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.68.0) (2017-04-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.67.2...v0.68.0)

**Implemented enhancements:**

- Support autocorrect on input [\#1572](https://github.com/Semantic-Org/Semantic-UI-React/issues/1572)
- index.d.ts file with semanticUIReact [\#1392](https://github.com/Semantic-Org/Semantic-UI-React/issues/1392)
- feat\(Input\): add autoCorrect to Input props [\#1573](https://github.com/Semantic-Org/Semantic-UI-React/pull/1573) ([layershifter](https://github.com/layershifter))
- feat\(factories\): add overrideProps [\#1428](https://github.com/Semantic-Org/Semantic-UI-React/pull/1428) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Dropdown renderLabel expects a ReactElement\<any\> to be returned [\#1568](https://github.com/Semantic-Org/Semantic-UI-React/issues/1568)
- Can't get ref on \<input\> if it's a child of \<Input\> [\#1536](https://github.com/Semantic-Org/Semantic-UI-React/issues/1536)
- Issue with props merging on Menu [\#1424](https://github.com/Semantic-Org/Semantic-UI-React/issues/1424)

**Closed issues:**

- setting color on Menu.Item has no effect [\#1583](https://github.com/Semantic-Org/Semantic-UI-React/issues/1583)
- Dropdown onChange [\#1571](https://github.com/Semantic-Org/Semantic-UI-React/issues/1571)
- Warning `Accessing PropTypes via the main React package is deprecated` in React 15.5+ [\#1564](https://github.com/Semantic-Org/Semantic-UI-React/issues/1564)
- fix\(Divider\): Vertical Divider on docs rendered incorrectly [\#1544](https://github.com/Semantic-Org/Semantic-UI-React/issues/1544)
- Modal breaks SSR [\#1531](https://github.com/Semantic-Org/Semantic-UI-React/issues/1531)
- Dropdown does not repopulate without clicking away from the component. [\#1523](https://github.com/Semantic-Org/Semantic-UI-React/issues/1523)
- Wrong submit [\#1511](https://github.com/Semantic-Org/Semantic-UI-React/issues/1511)
- Add `required` Form.Field example [\#1444](https://github.com/Semantic-Org/Semantic-UI-React/issues/1444)

**Merged pull requests:**

- fix\(MenuExampleNameProp\): fix activeItem logic [\#1585](https://github.com/Semantic-Org/Semantic-UI-React/pull/1585) ([levithomason](https://github.com/levithomason))
- fix\(Input\): add handling of input's ref [\#1581](https://github.com/Semantic-Org/Semantic-UI-React/pull/1581) ([layershifter](https://github.com/layershifter))
- chore\(package\): use prop-types package [\#1576](https://github.com/Semantic-Org/Semantic-UI-React/pull/1576) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): simplify typings validation for renderLabel [\#1574](https://github.com/Semantic-Org/Semantic-UI-React/pull/1574) ([layershifter](https://github.com/layershifter))
- chore\(package\): update react-dom to version 15.5.4 [\#1570](https://github.com/Semantic-Org/Semantic-UI-React/pull/1570) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- chore\(package\): update react to version 15.5.4 [\#1569](https://github.com/Semantic-Org/Semantic-UI-React/pull/1569) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- chore\(package\): react-addons-test-utils to version 15.5.1 [\#1562](https://github.com/Semantic-Org/Semantic-UI-React/pull/1562) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(package\): install gulp 4 from github [\#1554](https://github.com/Semantic-Org/Semantic-UI-React/pull/1554) ([levithomason](https://github.com/levithomason))
- docs\(Usage\): add instructions for semantic-ui-css [\#1549](https://github.com/Semantic-Org/Semantic-UI-React/pull/1549) ([kulakowka](https://github.com/kulakowka))
- chore\(view\): update cdn for faker [\#1543](https://github.com/Semantic-Org/Semantic-UI-React/pull/1543) ([layershifter](https://github.com/layershifter))
- chore\(package\): ensure node\_modules satisfies package.json [\#1540](https://github.com/Semantic-Org/Semantic-UI-React/pull/1540) ([levithomason](https://github.com/levithomason))
- chore\(package\): update file-loader to version 0.11.1 [\#1537](https://github.com/Semantic-Org/Semantic-UI-React/pull/1537) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update cross-env to version 4.0.0 🚀 [\#1534](https://github.com/Semantic-Org/Semantic-UI-React/pull/1534) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- chore\(issue\_template\): simplify and update [\#1532](https://github.com/Semantic-Org/Semantic-UI-React/pull/1532) ([levithomason](https://github.com/levithomason))
- feat\(List\): handler for \<List selection/\> [\#1530](https://github.com/Semantic-Org/Semantic-UI-React/pull/1530) ([josie11](https://github.com/josie11))
- chore\(package\): update tslint to version 5.0.0 🚀 [\#1527](https://github.com/Semantic-Org/Semantic-UI-React/pull/1527) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(Form\): add data usage examples [\#1521](https://github.com/Semantic-Org/Semantic-UI-React/pull/1521) ([levithomason](https://github.com/levithomason))
- docs\(Form\): add required and width examples [\#1515](https://github.com/Semantic-Org/Semantic-UI-React/pull/1515) ([layershifter](https://github.com/layershifter))
- babel-standalone@6.24.0 untested ⚠️ [\#1512](https://github.com/Semantic-Org/Semantic-UI-React/pull/1512) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- chore\(package\): update to webpack 2 [\#1502](https://github.com/Semantic-Org/Semantic-UI-React/pull/1502) ([layershifter](https://github.com/layershifter))
- Update all dependencies 🌴 [\#1418](https://github.com/Semantic-Org/Semantic-UI-React/pull/1418) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.67.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.67.2) (2017-03-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.67.1...v0.67.2)

**Implemented enhancements:**

- Add focus method to Input component [\#1475](https://github.com/Semantic-Org/Semantic-UI-React/issues/1475)
- Suggestion : change Button.Or text for i18n [\#1461](https://github.com/Semantic-Org/Semantic-UI-React/issues/1461)
- Cannot pass `name` props to Search component [\#1437](https://github.com/Semantic-Org/Semantic-UI-React/issues/1437)
- Add `textAlign` and `verticalAlign` to Table component [\#1389](https://github.com/Semantic-Org/Semantic-UI-React/issues/1389)
- Active Dropdown item should be scrolled into view on open [\#1388](https://github.com/Semantic-Org/Semantic-UI-React/issues/1388)
- Modal window fixed height [\#1308](https://github.com/Semantic-Org/Semantic-UI-React/issues/1308)
- fix\(Portal\): make compatible with React Fiber [\#1470](https://github.com/Semantic-Org/Semantic-UI-React/pull/1470) ([cpunion](https://github.com/cpunion))
- feat\(Button\): add text prop to ButtonOr [\#1466](https://github.com/Semantic-Org/Semantic-UI-React/pull/1466) ([layershifter](https://github.com/layershifter))
- feat\(Search\): add handling of html input props [\#1442](https://github.com/Semantic-Org/Semantic-UI-React/pull/1442) ([layershifter](https://github.com/layershifter))
- feat\(Grid\): Add grid support for multiple device visibility breakpoints [\#1347](https://github.com/Semantic-Org/Semantic-UI-React/pull/1347) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Button: floated doesn't work for Labeled Button [\#1488](https://github.com/Semantic-Org/Semantic-UI-React/issues/1488)
- TypeScript definition errors in v0.67.1 [\#1456](https://github.com/Semantic-Org/Semantic-UI-React/issues/1456)
- Dropdown: Clicking on "No results found." leads to hard to remove text from input [\#1451](https://github.com/Semantic-Org/Semantic-UI-React/issues/1451)
- Form.Field required label [\#1387](https://github.com/Semantic-Org/Semantic-UI-React/issues/1387)

**Closed issues:**

- Modal\(Portal\) not compatible with React Fiber \(react@16\) [\#1458](https://github.com/Semantic-Org/Semantic-UI-React/issues/1458)
- New Basic Usage Example: `semantic-ui-react-todos` [\#1426](https://github.com/Semantic-Org/Semantic-UI-React/issues/1426)

**Merged pull requests:**

- style\(tests\): refactor tests [\#1501](https://github.com/Semantic-Org/Semantic-UI-React/pull/1501) ([layershifter](https://github.com/layershifter))
- fix\(Modal\): spread the user's style prop on the Modal [\#1492](https://github.com/Semantic-Org/Semantic-UI-React/pull/1492) ([rajchourasia](https://github.com/rajchourasia))
- fix\(Form\): relax the label propType validator on FormField [\#1491](https://github.com/Semantic-Org/Semantic-UI-React/pull/1491) ([rajchourasia](https://github.com/rajchourasia))
- fix\(Dropdown\): do not close on click when search is empty [\#1490](https://github.com/Semantic-Org/Semantic-UI-React/pull/1490) ([rajchourasia](https://github.com/rajchourasia))
- fix\(Button\): update handling of floated prop [\#1489](https://github.com/Semantic-Org/Semantic-UI-React/pull/1489) ([layershifter](https://github.com/layershifter))
- docs\(readme\): add FAQ [\#1480](https://github.com/Semantic-Org/Semantic-UI-React/pull/1480) ([levithomason](https://github.com/levithomason))
- feat\(Input\): add focus\(\) method [\#1477](https://github.com/Semantic-Org/Semantic-UI-React/pull/1477) ([levithomason](https://github.com/levithomason))
- fix\(docs\): images, anchors, show html [\#1471](https://github.com/Semantic-Org/Semantic-UI-React/pull/1471) ([levithomason](https://github.com/levithomason))
- docs\(readme\): add Examples & Tutorials [\#1469](https://github.com/Semantic-Org/Semantic-UI-React/pull/1469) ([wyc](https://github.com/wyc))
- docs\(Menu\): add vertical fitted menu example [\#1468](https://github.com/Semantic-Org/Semantic-UI-React/pull/1468) ([levithomason](https://github.com/levithomason))
- style\(typings\): export all props interfaces [\#1467](https://github.com/Semantic-Org/Semantic-UI-React/pull/1467) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\):make active dropdown item scroll into view on open [\#1465](https://github.com/Semantic-Org/Semantic-UI-React/pull/1465) ([mchirkin](https://github.com/mchirkin))
- chore\(package\): update sinon to version 2.0.0 [\#1464](https://github.com/Semantic-Org/Semantic-UI-React/pull/1464) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update style-loader to version 0.14.0 🚀 [\#1463](https://github.com/Semantic-Org/Semantic-UI-React/pull/1463) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(typings\): fix import errors, remove dependency [\#1460](https://github.com/Semantic-Org/Semantic-UI-React/pull/1460) ([layershifter](https://github.com/layershifter))
- debug@2.6.3 untested ⚠️ [\#1455](https://github.com/Semantic-Org/Semantic-UI-React/pull/1455) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(bundlers\): add webpack 1 example [\#1452](https://github.com/Semantic-Org/Semantic-UI-React/pull/1452) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): onFocus and onBlur events [\#1361](https://github.com/Semantic-Org/Semantic-UI-React/pull/1361) ([tarang9211](https://github.com/tarang9211))

## [v0.67.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.67.1) (2017-03-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.67.0...v0.67.1)

**Implemented enhancements:**

- feat\(Table\) add missing Table alignment props [\#1411](https://github.com/Semantic-Org/Semantic-UI-React/pull/1411) ([ctlusto](https://github.com/ctlusto))
- style\(typings\): Update structure [\#1395](https://github.com/Semantic-Org/Semantic-UI-React/pull/1395) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Cannot specify File Input multiple attribute [\#1386](https://github.com/Semantic-Org/Semantic-UI-React/issues/1386)
- TypeScript: can't import components individually [\#1182](https://github.com/Semantic-Org/Semantic-UI-React/issues/1182)

**Closed issues:**

- Examples with images in React Docs are broken due to protocol change [\#1441](https://github.com/Semantic-Org/Semantic-UI-React/issues/1441)
- The http://react.semantic-ui.com website is down [\#1429](https://github.com/Semantic-Org/Semantic-UI-React/issues/1429)
- Search mouse clicks does not work on setting the state of open to true [\#1417](https://github.com/Semantic-Org/Semantic-UI-React/issues/1417)
- Composition with react-redux-form components causing Element type undefined error [\#1416](https://github.com/Semantic-Org/Semantic-UI-React/issues/1416)
- Missing responsive navbar? [\#1415](https://github.com/Semantic-Org/Semantic-UI-React/issues/1415)
- Cannot load the react semantic-ui.com site: http://react.semantic-ui.com/ [\#1412](https://github.com/Semantic-Org/Semantic-UI-React/issues/1412)
- "Your docs are so great that I want a build of them w/ my theme" tips [\#1410](https://github.com/Semantic-Org/Semantic-UI-React/issues/1410)
- Input with side label will not color label red, if input is given error prop [\#1409](https://github.com/Semantic-Org/Semantic-UI-React/issues/1409)
- Question: Custom result list rendering [\#1406](https://github.com/Semantic-Org/Semantic-UI-React/issues/1406)
- Doc site is down, react.semantic-ui.com does not load [\#1404](https://github.com/Semantic-Org/Semantic-UI-React/issues/1404)
-  position='right center' is not working? [\#1403](https://github.com/Semantic-Org/Semantic-UI-React/issues/1403)

**Merged pull requests:**

- docs\(Progress\): fix incorrect example names [\#1450](https://github.com/Semantic-Org/Semantic-UI-React/pull/1450) ([yangshun](https://github.com/yangshun))
- docs\(examples\): direct links, maximize, better props [\#1448](https://github.com/Semantic-Org/Semantic-UI-React/pull/1448) ([levithomason](https://github.com/levithomason))
- docs\(readme\): add Advertisement component to list [\#1447](https://github.com/Semantic-Org/Semantic-UI-React/pull/1447) ([layershifter](https://github.com/layershifter))
- docs\(callbacks\): updates in typings [\#1446](https://github.com/Semantic-Org/Semantic-UI-React/pull/1446) ([layershifter](https://github.com/layershifter))
- docs\(callbacks\): document remaining callbacks [\#1445](https://github.com/Semantic-Org/Semantic-UI-React/pull/1445) ([levithomason](https://github.com/levithomason))
- Update react-router to version 4.0.0 🚀 [\#1438](https://github.com/Semantic-Org/Semantic-UI-React/pull/1438) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update css-loader to version 0.27.1 🚀 [\#1434](https://github.com/Semantic-Org/Semantic-UI-React/pull/1434) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Form\): convert component to stateless [\#1433](https://github.com/Semantic-Org/Semantic-UI-React/pull/1433) ([layershifter](https://github.com/layershifter))
- Update yargs to version 7.0.2 🚀 [\#1431](https://github.com/Semantic-Org/Semantic-UI-React/pull/1431) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Confirm\): update typings [\#1425](https://github.com/Semantic-Org/Semantic-UI-React/pull/1425) ([layershifter](https://github.com/layershifter))
- fix\(Input\): add multiple to propNames [\#1422](https://github.com/Semantic-Org/Semantic-UI-React/pull/1422) ([layershifter](https://github.com/layershifter))
- docs\(readme\): add Advertisement component to list [\#1421](https://github.com/Semantic-Org/Semantic-UI-React/pull/1421) ([layershifter](https://github.com/layershifter))
- chore\(package\): update babel-plugin-transform-react-handled-props [\#1419](https://github.com/Semantic-Org/Semantic-UI-React/pull/1419) ([layershifter](https://github.com/layershifter))
- Thanks a lot for this awesome package ! [\#1414](https://github.com/Semantic-Org/Semantic-UI-React/pull/1414) ([GautierT](https://github.com/GautierT))
- fix\(typings\): Change some props of Search to optional [\#1407](https://github.com/Semantic-Org/Semantic-UI-React/pull/1407) ([koenvg](https://github.com/koenvg))
- docs\(Progress\): fix label/progress prop docs [\#1402](https://github.com/Semantic-Org/Semantic-UI-React/pull/1402) ([levithomason](https://github.com/levithomason))
- feat\(Advertisement\): add new component [\#1292](https://github.com/Semantic-Org/Semantic-UI-React/pull/1292) ([tarang9211](https://github.com/tarang9211))

## [v0.67.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.67.0) (2017-03-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.66.0...v0.67.0)

**Implemented enhancements:**

- feat\(Accordion\): support Title 'as' prop in dynamic accordion titles [\#1144](https://github.com/Semantic-Org/Semantic-UI-React/issues/1144)

**Fixed bugs:**

- Progress bar always shows progress label when using value/total [\#1352](https://github.com/Semantic-Org/Semantic-UI-React/issues/1352)
- Popup - allow mouseEnter, mouseLeave delay to be set via props [\#1163](https://github.com/Semantic-Org/Semantic-UI-React/issues/1163)

**Closed issues:**

- Modal, how to get access to onBlur method?  [\#1400](https://github.com/Semantic-Org/Semantic-UI-React/issues/1400)
- Modal missing property declaration \(TypeScript\) for closeOnDimmerClick, closeOnDocumentClick [\#1398](https://github.com/Semantic-Org/Semantic-UI-React/issues/1398)
- Dispatch 2 time when click submit form [\#1396](https://github.com/Semantic-Org/Semantic-UI-React/issues/1396)
- fix github topic [\#1394](https://github.com/Semantic-Org/Semantic-UI-React/issues/1394)
- Loader isn't run in Modal [\#1393](https://github.com/Semantic-Org/Semantic-UI-React/issues/1393)
- Modal with passed trigger element, buttons can't close modal- usage question/feature request [\#1390](https://github.com/Semantic-Org/Semantic-UI-React/issues/1390)
- fix\(Segment\): using loading and clearing together makes clearing lose its effect [\#1385](https://github.com/Semantic-Org/Semantic-UI-React/issues/1385)
- fix\(Segment\): loading with clearing does not show the icon [\#1384](https://github.com/Semantic-Org/Semantic-UI-React/issues/1384)
- Docs site is down [\#1383](https://github.com/Semantic-Org/Semantic-UI-React/issues/1383)
- No clear way to make the "Search" component fill the width of its container [\#1381](https://github.com/Semantic-Org/Semantic-UI-React/issues/1381)
- Dropdown gets ugly when "selection" attribute is missing.  [\#1379](https://github.com/Semantic-Org/Semantic-UI-React/issues/1379)
- Dropdown search doesn't work if Dropdown items are defined using JSX [\#1378](https://github.com/Semantic-Org/Semantic-UI-React/issues/1378)
- Unable to get react.semantic-ui.com to load [\#1373](https://github.com/Semantic-Org/Semantic-UI-React/issues/1373)
- Icon component PropType update to FontAwesome 4.7.0 [\#1371](https://github.com/Semantic-Org/Semantic-UI-React/issues/1371)
- Modal & redux-form doesn't work : focus lose. [\#1370](https://github.com/Semantic-Org/Semantic-UI-React/issues/1370)
- breaking\(Popup\): rename `positioning` to `position` [\#1259](https://github.com/Semantic-Org/Semantic-UI-React/issues/1259)

**Merged pull requests:**

- fix\(Dropdown|Select|Form\): fixes in typings [\#1401](https://github.com/Semantic-Org/Semantic-UI-React/pull/1401) ([layershifter](https://github.com/layershifter))
- We Love you guys! [\#1397](https://github.com/Semantic-Org/Semantic-UI-React/pull/1397) ([UnbrandedTech](https://github.com/UnbrandedTech))
- docs\(README\): add built with list [\#1391](https://github.com/Semantic-Org/Semantic-UI-React/pull/1391) ([levithomason](https://github.com/levithomason))
- docs\(Dropdown\): fix examples and update messages [\#1380](https://github.com/Semantic-Org/Semantic-UI-React/pull/1380) ([levithomason](https://github.com/levithomason))
- docs\(Feed\): add missing docs [\#1374](https://github.com/Semantic-Org/Semantic-UI-React/pull/1374) ([kamdz](https://github.com/kamdz))
- fix\(Icon\): Icon component PropType update to FontAwesome 4.7.0 [\#1372](https://github.com/Semantic-Org/Semantic-UI-React/pull/1372) ([kamdz](https://github.com/kamdz))
- fix\(Card\): add link prop to typings [\#1369](https://github.com/Semantic-Org/Semantic-UI-React/pull/1369) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown|Modal|TextArea\): update refs handlers [\#1360](https://github.com/Semantic-Org/Semantic-UI-React/pull/1360) ([layershifter](https://github.com/layershifter))
- breaking\(Progress\): control progress solely with progress [\#1355](https://github.com/Semantic-Org/Semantic-UI-React/pull/1355) ([BrainMaestro](https://github.com/BrainMaestro))
- docs\(usage\): update usage page with import examples [\#1336](https://github.com/Semantic-Org/Semantic-UI-React/pull/1336) ([andrewhl](https://github.com/andrewhl))

## [v0.66.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.66.0) (2017-02-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.65.0...v0.66.0)

**Implemented enhancements:**

- feat\(Menu\): Add missing MenuItem `disabled` prop [\#1363](https://github.com/Semantic-Org/Semantic-UI-React/issues/1363)
- fix\(Form\): Remove Form `onSubmit` prop and serializer [\#1362](https://github.com/Semantic-Org/Semantic-UI-React/issues/1362)
- feat\(Card\): Add `link` prop to Card [\#1350](https://github.com/Semantic-Org/Semantic-UI-React/issues/1350)
- fix\(typings\): unable to set many typical html element props [\#1072](https://github.com/Semantic-Org/Semantic-UI-React/issues/1072)

**Fixed bugs:**

- bug\(Popup\): invalid usage of oneOfType in propTypes [\#1344](https://github.com/Semantic-Org/Semantic-UI-React/issues/1344)
- bug\(Form\): incomplete typings for Form.TextArea [\#1304](https://github.com/Semantic-Org/Semantic-UI-React/issues/1304)

**Closed issues:**

- Dropdown suggestion: allow "value" to be an object [\#1368](https://github.com/Semantic-Org/Semantic-UI-React/issues/1368)
- bug\(Input\): cannot backspace / delete if Input has predefined `value` prop [\#1358](https://github.com/Semantic-Org/Semantic-UI-React/issues/1358)
- Message of type warning, success and error does not show up inside Form. [\#1357](https://github.com/Semantic-Org/Semantic-UI-React/issues/1357)
- Usage with webpack [\#1353](https://github.com/Semantic-Org/Semantic-UI-React/issues/1353)
- Add `label` docs usage example for Progress [\#1351](https://github.com/Semantic-Org/Semantic-UI-React/issues/1351)
- UTF8 support for Menu Labels [\#1349](https://github.com/Semantic-Org/Semantic-UI-React/issues/1349)
- How to programatically submit a \<Form\> component [\#1348](https://github.com/Semantic-Org/Semantic-UI-React/issues/1348)
- Sidebar Menu UI Bugs [\#1346](https://github.com/Semantic-Org/Semantic-UI-React/issues/1346)
- Progress bar issue in Meteor [\#1339](https://github.com/Semantic-Org/Semantic-UI-React/issues/1339)
- Please document how to import  js into a 'create-react-app' project [\#1330](https://github.com/Semantic-Org/Semantic-UI-React/issues/1330)
- Remove missing name warning on Form submit [\#1310](https://github.com/Semantic-Org/Semantic-UI-React/issues/1310)

**Merged pull requests:**

- breaking\(Form\): remove onSubmit serializer [\#1367](https://github.com/Semantic-Org/Semantic-UI-React/pull/1367) ([levithomason](https://github.com/levithomason))
- feat\(MenuItem\): Add missing MenuItem `disabled` prop  [\#1366](https://github.com/Semantic-Org/Semantic-UI-React/pull/1366) ([kamdz](https://github.com/kamdz))
- feat\(Card\): add link prop [\#1359](https://github.com/Semantic-Org/Semantic-UI-React/pull/1359) ([BrainMaestro](https://github.com/BrainMaestro))
- docs\(Progress\): added example for progress label prop [\#1356](https://github.com/Semantic-Org/Semantic-UI-React/pull/1356) ([tarang9211](https://github.com/tarang9211))
- fix\(Popup\): fix in propTypes [\#1345](https://github.com/Semantic-Org/Semantic-UI-React/pull/1345) ([layershifter](https://github.com/layershifter))
- docs\(Grid\): fix some typos [\#1343](https://github.com/Semantic-Org/Semantic-UI-React/pull/1343) ([dguo](https://github.com/dguo))
- breaking\(Popup\): rename `positioning` to `position` [\#1342](https://github.com/Semantic-Org/Semantic-UI-React/pull/1342) ([kamdz](https://github.com/kamdz))
- style\(Dropdown\): update typings and propTypes usage [\#1334](https://github.com/Semantic-Org/Semantic-UI-React/pull/1334) ([layershifter](https://github.com/layershifter))
- style\(Accordion\): update typings [\#1333](https://github.com/Semantic-Org/Semantic-UI-React/pull/1333) ([layershifter](https://github.com/layershifter))
- style\(Search\): update typings [\#1332](https://github.com/Semantic-Org/Semantic-UI-React/pull/1332) ([layershifter](https://github.com/layershifter))
- style\(Form\): update typings and propTypes usage [\#1320](https://github.com/Semantic-Org/Semantic-UI-React/pull/1320) ([layershifter](https://github.com/layershifter))
- feat\(Accordion\): support panel's title as custom element \#1144 [\#1281](https://github.com/Semantic-Org/Semantic-UI-React/pull/1281) ([rkostrzewski](https://github.com/rkostrzewski))
- fix\(DropdownItem\): add className to element shorthands [\#1256](https://github.com/Semantic-Org/Semantic-UI-React/pull/1256) ([levithomason](https://github.com/levithomason))

## [v0.65.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.65.0) (2017-02-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.8...v0.65.0)

**Implemented enhancements:**

- Form.Input not honouring autoCapitalize prop [\#1312](https://github.com/Semantic-Org/Semantic-UI-React/issues/1312)
- Add `size` prop to Comment.Group [\#1311](https://github.com/Semantic-Org/Semantic-UI-React/issues/1311)

**Fixed bugs:**

- Popups and Tooltips steal focus from input fields [\#1324](https://github.com/Semantic-Org/Semantic-UI-React/issues/1324)

**Closed issues:**

- Corner Label on List.Items rendering Label on List corner [\#1328](https://github.com/Semantic-Org/Semantic-UI-React/issues/1328)
- How to test dropdown when calls e.nativeEvent.stopImmediatePropogation [\#1319](https://github.com/Semantic-Org/Semantic-UI-React/issues/1319)
- Very thin bug [\#1316](https://github.com/Semantic-Org/Semantic-UI-React/issues/1316)
- Doc bug to keep data in clipboard [\#1314](https://github.com/Semantic-Org/Semantic-UI-React/issues/1314)
- fix\(Sidebar\): your description [\#1313](https://github.com/Semantic-Org/Semantic-UI-React/issues/1313)
- Modals aren't displaying in Internet Explorer  [\#1227](https://github.com/Semantic-Org/Semantic-UI-React/issues/1227)

**Merged pull requests:**

- breaking\(Portal|Popup|Modal\): do not autofocus [\#1341](https://github.com/Semantic-Org/Semantic-UI-React/pull/1341) ([levithomason](https://github.com/levithomason))
- docs\(Layout\): fix scroll to anchor [\#1338](https://github.com/Semantic-Org/Semantic-UI-React/pull/1338) ([levithomason](https://github.com/levithomason))
- style\(Modal\): update typings and propTypes usage [\#1331](https://github.com/Semantic-Org/Semantic-UI-React/pull/1331) ([layershifter](https://github.com/layershifter))
- feat\(Comment\): add size prop to Group [\#1327](https://github.com/Semantic-Org/Semantic-UI-React/pull/1327) ([tarang9211](https://github.com/tarang9211))
- docs\(Grid\): fix a typo [\#1325](https://github.com/Semantic-Org/Semantic-UI-React/pull/1325) ([dguo](https://github.com/dguo))
- style\(Popup\): fix tests, update typings and propTypes usage [\#1322](https://github.com/Semantic-Org/Semantic-UI-React/pull/1322) ([layershifter](https://github.com/layershifter))
- feat\(Input\): add `autoCapitalize` to html input props [\#1318](https://github.com/Semantic-Org/Semantic-UI-React/pull/1318) ([flipvrijn](https://github.com/flipvrijn))
- docs\(IconSearch\): fix copy to clipboard [\#1317](https://github.com/Semantic-Org/Semantic-UI-React/pull/1317) ([levithomason](https://github.com/levithomason))
- test\(ACC\): use deterministic test props [\#1309](https://github.com/Semantic-Org/Semantic-UI-React/pull/1309) ([levithomason](https://github.com/levithomason))
- tests\(mixed\): remove usage of `meta.props` [\#1239](https://github.com/Semantic-Org/Semantic-UI-React/pull/1239) ([layershifter](https://github.com/layershifter))

## [v0.64.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.8) (2017-02-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.7...v0.64.8)

**Implemented enhancements:**

- feat\(Confirm\): use shorthands for content and buttons definition [\#1290](https://github.com/Semantic-Org/Semantic-UI-React/issues/1290)
- style\(Confirm\): refactor, update typings and propTypes usage [\#1282](https://github.com/Semantic-Org/Semantic-UI-React/pull/1282) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- bug\(Dropdown\): Arrow keys are not working after `No results found.` [\#1275](https://github.com/Semantic-Org/Semantic-UI-React/issues/1275)
- Uncaught Error: Cannot find module 'babel-runtime/helpers/get' from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown.js' [\#1260](https://github.com/Semantic-Org/Semantic-UI-React/issues/1260)

**Closed issues:**

- Feature Request: AllowAdditions in dropdown to retain text on focus [\#1305](https://github.com/Semantic-Org/Semantic-UI-React/issues/1305)
- Programatically set value for Dropdown? [\#1302](https://github.com/Semantic-Org/Semantic-UI-React/issues/1302)
- Dropping Component on runtime  [\#1295](https://github.com/Semantic-Org/Semantic-UI-React/issues/1295)
- fix\(Label\): Label not appearing as it is shown in the example [\#1291](https://github.com/Semantic-Org/Semantic-UI-React/issues/1291)
- fix\(Form\): your description [\#1288](https://github.com/Semantic-Org/Semantic-UI-React/issues/1288)
- Menu onClick reloads page with react-router [\#1286](https://github.com/Semantic-Org/Semantic-UI-React/issues/1286)
- Dropdown performance [\#1278](https://github.com/Semantic-Org/Semantic-UI-React/issues/1278)
- label is not changing style if field is inline [\#1277](https://github.com/Semantic-Org/Semantic-UI-React/issues/1277)

**Merged pull requests:**

- fix\(package\): add babel-runtime for commonjs builds [\#1306](https://github.com/Semantic-Org/Semantic-UI-React/pull/1306) ([levithomason](https://github.com/levithomason))
- style\(Portal\): update typings and propTypes usage [\#1300](https://github.com/Semantic-Org/Semantic-UI-React/pull/1300) ([layershifter](https://github.com/layershifter))
- chore\(eslint\): disable aria rules for docs [\#1297](https://github.com/Semantic-Org/Semantic-UI-React/pull/1297) ([layershifter](https://github.com/layershifter))
- style\(Sidebar\): update typings and propTypes usage [\#1296](https://github.com/Semantic-Org/Semantic-UI-React/pull/1296) ([layershifter](https://github.com/layershifter))
- style\(Item\): update typings and propTypes usage [\#1294](https://github.com/Semantic-Org/Semantic-UI-React/pull/1294) ([layershifter](https://github.com/layershifter))
- style\(Comment\): update typings and propTypes usage [\#1293](https://github.com/Semantic-Org/Semantic-UI-React/pull/1293) ([layershifter](https://github.com/layershifter))
- style\(Feed\): update typings and propTypes usage [\#1285](https://github.com/Semantic-Org/Semantic-UI-React/pull/1285) ([layershifter](https://github.com/layershifter))
- style\(Card\): update typings and propTypes usage [\#1284](https://github.com/Semantic-Org/Semantic-UI-React/pull/1284) ([layershifter](https://github.com/layershifter))
- chore\(coverage\): remove docs from coverage reports [\#1283](https://github.com/Semantic-Org/Semantic-UI-React/pull/1283) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): fix arrow keys after no results [\#1279](https://github.com/Semantic-Org/Semantic-UI-React/pull/1279) ([levithomason](https://github.com/levithomason))

## [v0.64.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.7) (2017-02-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.6...v0.64.7)

## [v0.64.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.6) (2017-02-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.5...v0.64.6)

**Implemented enhancements:**

- feat\(Dropdown\): add `closeOnChange` prop [\#1244](https://github.com/Semantic-Org/Semantic-UI-React/issues/1244)
- bug\(Dropdown\): `multiple search` dropdown should refocus the `input` element on select of an option [\#1243](https://github.com/Semantic-Org/Semantic-UI-React/issues/1243)

**Fixed bugs:**

- fix\(Portal\): focus is stolen when clicking away to close [\#1271](https://github.com/Semantic-Org/Semantic-UI-React/issues/1271)
- bug\(Menu\): incorrect inheritance in MenuItemProps typings [\#1262](https://github.com/Semantic-Org/Semantic-UI-React/issues/1262)
- Bug\(Popup\): Clicking on another Popup's trigger doesn't close open Popups. [\#1251](https://github.com/Semantic-Org/Semantic-UI-React/issues/1251)
- Popup doesn't work with modal [\#1076](https://github.com/Semantic-Org/Semantic-UI-React/issues/1076)

**Closed issues:**

- Dropdown laggy if there are more than 1000 elements [\#1268](https://github.com/Semantic-Org/Semantic-UI-React/issues/1268)
- Popup not working [\#1255](https://github.com/Semantic-Org/Semantic-UI-React/issues/1255)

**Merged pull requests:**

- fix\(Modal\): add missing typings [\#1274](https://github.com/Semantic-Org/Semantic-UI-React/pull/1274) ([levithomason](https://github.com/levithomason))
- fix\(Portal\): fix several event related behaviors [\#1273](https://github.com/Semantic-Org/Semantic-UI-React/pull/1273) ([levithomason](https://github.com/levithomason))
- style\(List\): update typings and remove propTypes [\#1270](https://github.com/Semantic-Org/Semantic-UI-React/pull/1270) ([layershifter](https://github.com/layershifter))
- style\(Progress\): refactor, update typings and remove propTypes [\#1269](https://github.com/Semantic-Org/Semantic-UI-React/pull/1269) ([layershifter](https://github.com/layershifter))
- fix\(Portal\): evaulate mountNode at runtime in Portal component [\#1267](https://github.com/Semantic-Org/Semantic-UI-React/pull/1267) ([SirWaddles](https://github.com/SirWaddles))
- feat\(docs\): restore enum expansion on docs page [\#1266](https://github.com/Semantic-Org/Semantic-UI-React/pull/1266) ([fracmak](https://github.com/fracmak))
- style\(Label\): update typings and remove propTypes [\#1265](https://github.com/Semantic-Org/Semantic-UI-React/pull/1265) ([layershifter](https://github.com/layershifter))
- style\(Menu\): update typings and remove propTypes [\#1264](https://github.com/Semantic-Org/Semantic-UI-React/pull/1264) ([layershifter](https://github.com/layershifter))
- fix\(docs\): fix checkbox inputType docs to use correct props [\#1263](https://github.com/Semantic-Org/Semantic-UI-React/pull/1263) ([fracmak](https://github.com/fracmak))
- feat\(Dropdown\): multiple search dropdown should refocus the search on select of an option [\#1257](https://github.com/Semantic-Org/Semantic-UI-React/pull/1257) ([apiv](https://github.com/apiv))
- style\(Rating\): update typings and propTypes usage [\#1253](https://github.com/Semantic-Org/Semantic-UI-React/pull/1253) ([layershifter](https://github.com/layershifter))
- fix\(typings\): inherit Radio props from Checkbox [\#1250](https://github.com/Semantic-Org/Semantic-UI-React/pull/1250) ([wcatron](https://github.com/wcatron))

## [v0.64.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.5) (2017-01-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.4...v0.64.5)

**Implemented enhancements:**

- feat\(Button\): add `floated` prop to Button.Group [\#1245](https://github.com/Semantic-Org/Semantic-UI-React/issues/1245)
- style\(Message\): update typings and remove propTypes [\#1254](https://github.com/Semantic-Org/Semantic-UI-React/pull/1254) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- fix\(docs\): fix usage of arrow function [\#1228](https://github.com/Semantic-Org/Semantic-UI-React/pull/1228) ([layershifter](https://github.com/layershifter))
- fix\(Icon\): Incorrect definition in typings [\#1225](https://github.com/Semantic-Org/Semantic-UI-React/pull/1225) ([layershifter](https://github.com/layershifter))
- fix\(Button\): fix `tabIndex` in typings [\#1224](https://github.com/Semantic-Org/Semantic-UI-React/pull/1224) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- Checkbox onClick and onChange fire too late [\#1247](https://github.com/Semantic-Org/Semantic-UI-React/issues/1247)
- Dropdown options update triggered by onSearchChange [\#1242](https://github.com/Semantic-Org/Semantic-UI-React/issues/1242)
- Date Picker Component [\#1230](https://github.com/Semantic-Org/Semantic-UI-React/issues/1230)
- Compile errors about missing babel-runtime after update to latest [\#1229](https://github.com/Semantic-Org/Semantic-UI-React/issues/1229)
- Typings: missing prop "item" for Dropdown [\#1222](https://github.com/Semantic-Org/Semantic-UI-React/issues/1222)
- Modal Cannot read property 'appendChild' of null [\#1213](https://github.com/Semantic-Org/Semantic-UI-React/issues/1213)
- Dropdown's options can cause key warnings [\#1211](https://github.com/Semantic-Org/Semantic-UI-React/issues/1211)

**Merged pull requests:**

- fix\(Editor\): use handledProps instead of propTypes [\#1258](https://github.com/Semantic-Org/Semantic-UI-React/pull/1258) ([levithomason](https://github.com/levithomason))
- feat\(Dropdown\): add closeOnChange prop [\#1252](https://github.com/Semantic-Org/Semantic-UI-React/pull/1252) ([apiv](https://github.com/apiv))
- fix\(Button\): add `floated` to typings of ButtonGroup [\#1248](https://github.com/Semantic-Org/Semantic-UI-React/pull/1248) ([layershifter](https://github.com/layershifter))
- feat\(Button\): add `floated` prop to Button.Group [\#1246](https://github.com/Semantic-Org/Semantic-UI-React/pull/1246) ([mohammed88](https://github.com/mohammed88))
- fix\(typings\): make TableHeaderCell `sorted` optional [\#1236](https://github.com/Semantic-Org/Semantic-UI-React/pull/1236) ([squirly](https://github.com/squirly))
- fix\(Menu\): fix typings for Menu.Item [\#1235](https://github.com/Semantic-Org/Semantic-UI-React/pull/1235) ([shanehyde](https://github.com/shanehyde))
- style\(Statistic\): update typings and propTypes usage [\#1232](https://github.com/Semantic-Org/Semantic-UI-React/pull/1232) ([layershifter](https://github.com/layershifter))
- style\(Grid\): update typings and propTypes usage [\#1231](https://github.com/Semantic-Org/Semantic-UI-React/pull/1231) ([layershifter](https://github.com/layershifter))
- fix\(typings\): add item prop to the DropdownProps [\#1223](https://github.com/Semantic-Org/Semantic-UI-React/pull/1223) ([rokoroku](https://github.com/rokoroku))
- docs\(examples\): add missing `key` props [\#1220](https://github.com/Semantic-Org/Semantic-UI-React/pull/1220) ([levithomason](https://github.com/levithomason))

## [v0.64.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.4) (2017-01-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.3...v0.64.4)

**Implemented enhancements:**

- feat\(Form\): add `inverted` boolean property [\#1212](https://github.com/Semantic-Org/Semantic-UI-React/issues/1212)
- No way to make search input fluid [\#1104](https://github.com/Semantic-Org/Semantic-UI-React/issues/1104)

**Fixed bugs:**

- Modal TextArea / Input Bug [\#1199](https://github.com/Semantic-Org/Semantic-UI-React/issues/1199)
- The typings for FormInput and Divider are broken [\#1180](https://github.com/Semantic-Org/Semantic-UI-React/issues/1180)

**Closed issues:**

- Modal "trigger" missing in Typescript Typings [\#1202](https://github.com/Semantic-Org/Semantic-UI-React/issues/1202)
- Form inside modal? [\#1197](https://github.com/Semantic-Org/Semantic-UI-React/issues/1197)
- How to upgrade to newer semantic-ui-react ? [\#1196](https://github.com/Semantic-Org/Semantic-UI-React/issues/1196)

**Merged pull requests:**

- fix\(ComponentExample\): use explicit babel presets [\#1219](https://github.com/Semantic-Org/Semantic-UI-React/pull/1219) ([levithomason](https://github.com/levithomason))
- feat\(Form\): add `inverted` prop [\#1218](https://github.com/Semantic-Org/Semantic-UI-React/pull/1218) ([vageeshb](https://github.com/vageeshb))
- style\(Embed\): update typings and propTypes usage [\#1217](https://github.com/Semantic-Org/Semantic-UI-React/pull/1217) ([layershifter](https://github.com/layershifter))
- style\(Button\): update typings and propTypes usage [\#1216](https://github.com/Semantic-Org/Semantic-UI-React/pull/1216) ([layershifter](https://github.com/layershifter))
- fix\(Portal\): do not take focus after first render [\#1215](https://github.com/Semantic-Org/Semantic-UI-React/pull/1215) ([levithomason](https://github.com/levithomason))
- chore\(package\): support for jsnext:main [\#1210](https://github.com/Semantic-Org/Semantic-UI-React/pull/1210) ([layershifter](https://github.com/layershifter))
- style\(Breadcrumb\): update typings and propTypes usage [\#1209](https://github.com/Semantic-Org/Semantic-UI-React/pull/1209) ([layershifter](https://github.com/layershifter))
- style\(Dimmer\): update typings [\#1208](https://github.com/Semantic-Org/Semantic-UI-React/pull/1208) ([layershifter](https://github.com/layershifter))
- enzyme@2.7.1 untested ⚠️ [\#1204](https://github.com/Semantic-Org/Semantic-UI-React/pull/1204) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Step\): update typings, tests and propTypes usage [\#1203](https://github.com/Semantic-Org/Semantic-UI-React/pull/1203) ([layershifter](https://github.com/layershifter))
- style\(Table|mixed\): update typings, tests and propTypes usage [\#1200](https://github.com/Semantic-Org/Semantic-UI-React/pull/1200) ([layershifter](https://github.com/layershifter))
- fix\(Divider|FormInput\): fix the broken typings [\#1179](https://github.com/Semantic-Org/Semantic-UI-React/pull/1179) ([dennari](https://github.com/dennari))
- fix\(Dropdown\): respect `closeOnBlur={false}` [\#1148](https://github.com/Semantic-Org/Semantic-UI-React/pull/1148) ([tarang9211](https://github.com/tarang9211))

## [v0.64.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.3) (2017-01-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.2...v0.64.3)

**Closed issues:**

- docs\(Popup\): Props description of "hideOnScroll" [\#1192](https://github.com/Semantic-Org/Semantic-UI-React/issues/1192)
- Dropdown.Item ignores 'value' property [\#1191](https://github.com/Semantic-Org/Semantic-UI-React/issues/1191)
- Scroll and fixed column in table ? [\#1185](https://github.com/Semantic-Org/Semantic-UI-React/issues/1185)
- Typescript: TS2307/TS2688 \(Cannot Find Module/Cannot Find Type Definition\) Errors [\#1183](https://github.com/Semantic-Org/Semantic-UI-React/issues/1183)

**Merged pull requests:**

- docs\(ComponentProps\): show func signatures [\#1194](https://github.com/Semantic-Org/Semantic-UI-React/pull/1194) ([levithomason](https://github.com/levithomason))
- docs\(Popup\): Changed description of "hideOnScroll" prop [\#1193](https://github.com/Semantic-Org/Semantic-UI-React/pull/1193) ([jos0003](https://github.com/jos0003))
- react-router@3.0.2 untested ⚠️ [\#1178](https://github.com/Semantic-Org/Semantic-UI-React/pull/1178) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Table\): add `sortable` and `sorted` props [\#1109](https://github.com/Semantic-Org/Semantic-UI-React/pull/1109) ([svrcekmichal](https://github.com/svrcekmichal))

## [v0.64.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.2) (2017-01-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.1...v0.64.2)

**Fixed bugs:**

- Invalid argument to oneOf [\#1177](https://github.com/Semantic-Org/Semantic-UI-React/issues/1177)
- bug\(Modal\): "trigger" component prop disappears on production build [\#1175](https://github.com/Semantic-Org/Semantic-UI-React/issues/1175)
- fix\(Modal|Popup\): fix propTypes usage [\#1176](https://github.com/Semantic-Org/Semantic-UI-React/pull/1176) ([layershifter](https://github.com/layershifter))

## [v0.64.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.1) (2017-01-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.0...v0.64.1)

**Closed issues:**

- Dropdown defaultValue with fetched options [\#1149](https://github.com/Semantic-Org/Semantic-UI-React/issues/1149)
- Feat\(Dropdown\): Optionally return new text value pair from onAddItem [\#1132](https://github.com/Semantic-Org/Semantic-UI-React/issues/1132)

**Merged pull requests:**

- style\(Rail|Select|TextArea\): cleanup typings [\#1171](https://github.com/Semantic-Org/Semantic-UI-React/pull/1171) ([layershifter](https://github.com/layershifter))
- style\(Input\): propTypes cleanups and typings update [\#1167](https://github.com/Semantic-Org/Semantic-UI-React/pull/1167) ([layershifter](https://github.com/layershifter))
- babel-plugin-transform-react-handled-props@0.2.2 untested ⚠️ [\#1166](https://github.com/Semantic-Org/Semantic-UI-React/pull/1166) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Loader|Reveal|Segment\): propTypes cleanups and typings update [\#1165](https://github.com/Semantic-Org/Semantic-UI-React/pull/1165) ([layershifter](https://github.com/layershifter))
- typings\(Popup, Menu\): Fixed Popup inverted and MenuItem content types [\#1164](https://github.com/Semantic-Org/Semantic-UI-React/pull/1164) ([dstpierre](https://github.com/dstpierre))
- karma@1.4.0 untested ⚠️ [\#1161](https://github.com/Semantic-Org/Semantic-UI-React/pull/1161) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- chore\(package\): remove transform-react-constant-elements [\#1160](https://github.com/Semantic-Org/Semantic-UI-React/pull/1160) ([layershifter](https://github.com/layershifter))
- style\(Container|Divider|Header|Icon\): propTypes cleanups and typings update [\#1159](https://github.com/Semantic-Org/Semantic-UI-React/pull/1159) ([layershifter](https://github.com/layershifter))
- chore\(package\): Add ts-lint for typings [\#1156](https://github.com/Semantic-Org/Semantic-UI-React/pull/1156) ([layershifter](https://github.com/layershifter))
- style\(Checkbox|Flag|Image|Radio\): propTypes cleanups and typings update [\#1155](https://github.com/Semantic-Org/Semantic-UI-React/pull/1155) ([layershifter](https://github.com/layershifter))
- fix\(Portal\): take focus on  mount and restore on unmount [\#1154](https://github.com/Semantic-Org/Semantic-UI-React/pull/1154) ([fracmak](https://github.com/fracmak))
- style\(Search\): several cleanups [\#1150](https://github.com/Semantic-Org/Semantic-UI-React/pull/1150) ([layershifter](https://github.com/layershifter))

## [v0.64.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.0) (2017-01-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.6...v0.64.0)

**Fixed bugs:**

- Typings: Modal [\#1152](https://github.com/Semantic-Org/Semantic-UI-React/issues/1152)
- fix\(Table\): Cannot convert a Symbol value to a string [\#1057](https://github.com/Semantic-Org/Semantic-UI-React/issues/1057)

**Merged pull requests:**

- fix\(typings\): fix Modal mountnode -\> mountNode [\#1153](https://github.com/Semantic-Org/Semantic-UI-React/pull/1153) ([levithomason](https://github.com/levithomason))
- feat\(typings\): add closeOnBlur and openOnFocus [\#1151](https://github.com/Semantic-Org/Semantic-UI-React/pull/1151) ([levithomason](https://github.com/levithomason))
- breaking\(shorthand\): only generate keys from strings and numbers [\#1062](https://github.com/Semantic-Org/Semantic-UI-React/pull/1062) ([levithomason](https://github.com/levithomason))

## [v0.63.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.6) (2017-01-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.5...v0.63.6)

**Implemented enhancements:**

- Typings: allow including only used components in app bundle [\#1080](https://github.com/Semantic-Org/Semantic-UI-React/issues/1080)

**Closed issues:**

- fix\(Menu\): blur error [\#1145](https://github.com/Semantic-Org/Semantic-UI-React/issues/1145)
- correct way to import CSS ? [\#1143](https://github.com/Semantic-Org/Semantic-UI-React/issues/1143)
- Loading Form.Button can't be set disabled [\#1142](https://github.com/Semantic-Org/Semantic-UI-React/issues/1142)
- Why don't you allow style tag in components? [\#1139](https://github.com/Semantic-Org/Semantic-UI-React/issues/1139)
- Expose palette feature? [\#1138](https://github.com/Semantic-Org/Semantic-UI-React/issues/1138)
- Dropdown: combine allowAdditions\(selection, search\) with Dropdown Content [\#1137](https://github.com/Semantic-Org/Semantic-UI-React/issues/1137)
- If a Popup has child popup, modal or other widgets, the parent popup closes [\#1125](https://github.com/Semantic-Org/Semantic-UI-React/issues/1125)
- support other labelable controls in Form.Field in addition to Checkbox and Radio [\#1122](https://github.com/Semantic-Org/Semantic-UI-React/issues/1122)
- Add key to options in Dropdown menu [\#1120](https://github.com/Semantic-Org/Semantic-UI-React/issues/1120)
- Modal triggered from menu item issues [\#1106](https://github.com/Semantic-Org/Semantic-UI-React/issues/1106)
- Typings: Missing Typings for Components Portal, Reveal and Embed [\#1096](https://github.com/Semantic-Org/Semantic-UI-React/issues/1096)

**Merged pull requests:**

- feat\(Input\): add shorthand create method [\#1140](https://github.com/Semantic-Org/Semantic-UI-React/pull/1140) ([levithomason](https://github.com/levithomason))
- feat\(typings\): add Popup, Embed, Reveal and other updates [\#1136](https://github.com/Semantic-Org/Semantic-UI-React/pull/1136) ([koenvg](https://github.com/koenvg))
- fix\(Input\): allow conditional rendering of children [\#1131](https://github.com/Semantic-Org/Semantic-UI-React/pull/1131) ([kyrasteen](https://github.com/kyrasteen))
- Update react to version 15.4.2 🚀 [\#1130](https://github.com/Semantic-Org/Semantic-UI-React/pull/1130) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update react-dom to version 15.4.2 🚀 [\#1129](https://github.com/Semantic-Org/Semantic-UI-React/pull/1129) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update react-addons-test-utils to version 15.4.2 🚀 [\#1128](https://github.com/Semantic-Org/Semantic-UI-React/pull/1128) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(Search\): Search input can be made fluid [\#1123](https://github.com/Semantic-Org/Semantic-UI-React/pull/1123) ([Rohanhacker](https://github.com/Rohanhacker))
- feat\(typings\): support modular imports [\#1121](https://github.com/Semantic-Org/Semantic-UI-React/pull/1121) ([sagax85](https://github.com/sagax85))
- react-ace@4.1.1 untested ⚠️ [\#1119](https://github.com/Semantic-Org/Semantic-UI-React/pull/1119) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- webpack-hot-middleware@2.15.0 untested ⚠️ [\#1116](https://github.com/Semantic-Org/Semantic-UI-React/pull/1116) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Dropdown\): add `openOnFocus` and `closeOnBlur` [\#1101](https://github.com/Semantic-Org/Semantic-UI-React/pull/1101) ([tarang9211](https://github.com/tarang9211))

## [v0.63.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.5) (2017-01-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.4...v0.63.5)

**Closed issues:**

- Steps overflow container when cummulative step width exceeds container width [\#1114](https://github.com/Semantic-Org/Semantic-UI-React/issues/1114)
- Pagination Support for Table Component [\#1110](https://github.com/Semantic-Org/Semantic-UI-React/issues/1110)
- Typings: dimmer property in ImageProps is not optional. [\#1102](https://github.com/Semantic-Org/Semantic-UI-React/issues/1102)

**Merged pull requests:**

- feat\(Dropdown\): remove noResultsMessage when null [\#1113](https://github.com/Semantic-Org/Semantic-UI-React/pull/1113) ([levithomason](https://github.com/levithomason))
- cross-env@3.1.4 untested ⚠️ [\#1112](https://github.com/Semantic-Org/Semantic-UI-React/pull/1112) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-standalone@6.21.1 untested ⚠️ [\#1111](https://github.com/Semantic-Org/Semantic-UI-React/pull/1111) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- js-beautify@1.6.8 untested ⚠️ [\#1107](https://github.com/Semantic-Org/Semantic-UI-React/pull/1107) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(typings\): make dimmer in ImageProps optional [\#1103](https://github.com/Semantic-Org/Semantic-UI-React/pull/1103) ([rokoroku](https://github.com/rokoroku))

## [v0.63.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.4) (2016-12-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.3...v0.63.4)

**Implemented enhancements:**

- Typings: Add Comments from Source Files [\#1075](https://github.com/Semantic-Org/Semantic-UI-React/issues/1075)

**Merged pull requests:**

- fix\(tabIndex\): use -1 when disabled, allow override [\#1100](https://github.com/Semantic-Org/Semantic-UI-React/pull/1100) ([levithomason](https://github.com/levithomason))
- yargs@6.6.0 untested ⚠️ [\#1097](https://github.com/Semantic-Org/Semantic-UI-React/pull/1097) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.63.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.3) (2016-12-30)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.2...v0.63.3)

**Implemented enhancements:**

- Typescript: Dimmer component doesn't exist. [\#1091](https://github.com/Semantic-Org/Semantic-UI-React/issues/1091)
- feat\(typings\): Add declarations for Dimmer [\#1092](https://github.com/Semantic-Org/Semantic-UI-React/pull/1092) ([wcatron](https://github.com/wcatron))
- feat\(Grid\): add `container` prop [\#1085](https://github.com/Semantic-Org/Semantic-UI-React/pull/1085) ([tarang9211](https://github.com/tarang9211))

**Fixed bugs:**

- Table.Cell with child {0} doesn't render [\#1069](https://github.com/Semantic-Org/Semantic-UI-React/issues/1069)

**Merged pull requests:**

- docs\(Introduction\): Fix augmentation example [\#1094](https://github.com/Semantic-Org/Semantic-UI-React/pull/1094) ([radekmie](https://github.com/radekmie))
- fix\(Components\): render with children or shorthand of `0` [\#1077](https://github.com/Semantic-Org/Semantic-UI-React/pull/1077) ([lusarz](https://github.com/lusarz))

## [v0.63.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.2) (2016-12-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.1...v0.63.2)

**Closed issues:**

- Allow including only used LODASH functions in app bundle [\#1082](https://github.com/Semantic-Org/Semantic-UI-React/issues/1082)
- Dropdown onAddItem gets called on value change when text and value aren't equal [\#1064](https://github.com/Semantic-Org/Semantic-UI-React/issues/1064)
- Examples importing `../common` cannot be edited [\#1037](https://github.com/Semantic-Org/Semantic-UI-React/issues/1037)

**Merged pull requests:**

- docs\(Dropdown\): added comments for shape of options [\#1086](https://github.com/Semantic-Org/Semantic-UI-React/pull/1086) ([fobbyal](https://github.com/fobbyal))
- fix\(typings\): Add comments from source and fix minor inconsistencies [\#1084](https://github.com/Semantic-Org/Semantic-UI-React/pull/1084) ([sagax85](https://github.com/sagax85))
- feat\(TextArea\): add `autoHeight` prop [\#1083](https://github.com/Semantic-Org/Semantic-UI-React/pull/1083) ([luski](https://github.com/luski))
- fix\(docs\): importing `../common` on doc site can be edited [\#1078](https://github.com/Semantic-Org/Semantic-UI-React/pull/1078) ([lusarz](https://github.com/lusarz))
- react-docgen@2.13.0 untested ⚠️ [\#1074](https://github.com/Semantic-Org/Semantic-UI-React/pull/1074) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(Dropdown\): prevent overzealous onAddItem calls [\#1071](https://github.com/Semantic-Org/Semantic-UI-React/pull/1071) ([keeslinp](https://github.com/keeslinp))

## [v0.63.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.1) (2016-12-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.0...v0.63.1)

**Closed issues:**

- \[Question\]   Form.Field control={Checkbox}   vs   Form.Checkbox [\#1070](https://github.com/Semantic-Org/Semantic-UI-React/issues/1070)
- manage the popup appearance and BG click to close [\#1067](https://github.com/Semantic-Org/Semantic-UI-React/issues/1067)

**Merged pull requests:**

- fix\(typings\): use boolean `vertical` Segment attribute [\#1073](https://github.com/Semantic-Org/Semantic-UI-React/pull/1073) ([dennari](https://github.com/dennari))
- feat\(AutoControlledComponent\): Default values [\#1066](https://github.com/Semantic-Org/Semantic-UI-React/pull/1066) ([jeffcarbs](https://github.com/jeffcarbs))
- node-sass@4.1.1 untested ⚠️ [\#1063](https://github.com/Semantic-Org/Semantic-UI-React/pull/1063) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- debug@2.4.5 untested ⚠️ [\#1049](https://github.com/Semantic-Org/Semantic-UI-React/pull/1049) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.63.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.0) (2016-12-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.4...v0.63.0)

**Merged pull requests:**

- docs\(Statistic\): add description [\#1060](https://github.com/Semantic-Org/Semantic-UI-React/pull/1060) ([levithomason](https://github.com/levithomason))
- docs\(StatisticGroup\): add color, size, and inverted examples [\#1058](https://github.com/Semantic-Org/Semantic-UI-React/pull/1058) ([tarang9211](https://github.com/tarang9211))

## [v0.62.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.4) (2016-12-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.3...v0.62.4)

**Closed issues:**

- Popup documentation page is broken [\#1055](https://github.com/Semantic-Org/Semantic-UI-React/issues/1055)
- Modal doesn't support animations [\#1054](https://github.com/Semantic-Org/Semantic-UI-React/issues/1054)
- Dropdown selection sets value on blur [\#1052](https://github.com/Semantic-Org/Semantic-UI-React/issues/1052)
- react.semantic-ui.com doesn't work ! [\#1051](https://github.com/Semantic-Org/Semantic-UI-React/issues/1051)
- Sidebar docs's broken [\#1048](https://github.com/Semantic-Org/Semantic-UI-React/issues/1048)

**Merged pull requests:**

- fix\(docs\): more permissive exampleContext regex [\#1056](https://github.com/Semantic-Org/Semantic-UI-React/pull/1056) ([levithomason](https://github.com/levithomason))
- feat\(typings\): Added sidebar, Update to Search and Textarea [\#1053](https://github.com/Semantic-Org/Semantic-UI-React/pull/1053) ([koenvg](https://github.com/koenvg))

## [v0.62.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.3) (2016-12-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.2...v0.62.3)

**Merged pull requests:**

- Feat\(typings\): Added typings for Radio, Confirm, Select and Textarea [\#1047](https://github.com/Semantic-Org/Semantic-UI-React/pull/1047) ([koenvg](https://github.com/koenvg))
- fix\(dropdown\): clear value when dropdown is blurred [\#1046](https://github.com/Semantic-Org/Semantic-UI-React/pull/1046) ([vageeshb](https://github.com/vageeshb))
- babel-core@6.21.0 untested ⚠️ [\#1045](https://github.com/Semantic-Org/Semantic-UI-React/pull/1045) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(typings\): fix typings spelling on `Accordion` [\#1044](https://github.com/Semantic-Org/Semantic-UI-React/pull/1044) ([ericl85](https://github.com/ericl85))
- feat\(Checkbox\): Indeterminate state [\#1043](https://github.com/Semantic-Org/Semantic-UI-React/pull/1043) ([jeffcarbs](https://github.com/jeffcarbs))
- fix\(docs\): Fix check icon [\#1042](https://github.com/Semantic-Org/Semantic-UI-React/pull/1042) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.62.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.2) (2016-12-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.1...v0.62.2)

**Merged pull requests:**

- fix\(Header\): Remove duplicate class [\#1040](https://github.com/Semantic-Org/Semantic-UI-React/pull/1040) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.62.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.1) (2016-12-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.0...v0.62.1)

## [v0.62.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.0) (2016-12-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.10...v0.62.0)

## [v0.61.10](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.10) (2016-12-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.9...v0.61.10)

## [v0.61.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.9) (2016-12-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.8...v0.61.9)

## [v0.61.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.8) (2016-11-30)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.7...v0.61.8)

## [v0.61.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.7) (2016-11-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.6...v0.61.7)

## [v0.61.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.6) (2016-11-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.5...v0.61.6)

## [v0.61.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.5) (2016-11-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.4...v0.61.5)

## [v0.61.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.4) (2016-11-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.3...v0.61.4)

## [v0.61.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.3) (2016-11-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.2...v0.61.3)

## [v0.61.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.2) (2016-11-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.1...v0.61.2)

## [v0.61.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.1) (2016-11-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.0...v0.61.1)

## [v0.61.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.0) (2016-11-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.10...v0.61.0)

## [v0.60.10](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.10) (2016-11-15)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.9...v0.60.10)

## [v0.60.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.9) (2016-11-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.8...v0.60.9)

## [v0.60.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.8) (2016-11-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.7...v0.60.8)

## [v0.60.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.7) (2016-11-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.6...v0.60.7)

## [v0.60.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.6) (2016-11-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.5...v0.60.6)

## [v0.60.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.5) (2016-11-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.4...v0.60.5)

## [v0.60.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.4) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.3...v0.60.4)

## [v0.60.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.3) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.2...v0.60.3)

## [v0.60.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.2) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.1...v0.60.2)

## [v0.60.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.1) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.0...v0.60.1)

## [v0.60.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.0) (2016-11-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.59.0...v0.60.0)

## [v0.59.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.59.0) (2016-11-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.3...v0.59.0)

## [v0.58.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.3) (2016-11-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.2...v0.58.3)

## [v0.58.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.2) (2016-11-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.1...v0.58.2)

## [v0.58.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.1) (2016-10-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.0...v0.58.1)

## [v0.58.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.0) (2016-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.57.1...v0.58.0)

## [v0.57.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.57.1) (2016-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.57.0...v0.57.1)

## [v0.57.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.57.0) (2016-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.14...v0.57.0)

## [v0.56.14](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.14) (2016-10-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.13...v0.56.14)

## [v0.56.13](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.13) (2016-10-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.12...v0.56.13)

## [v0.56.12](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.12) (2016-10-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.11...v0.56.12)

## [v0.56.11](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.11) (2016-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.10...v0.56.11)

## [v0.56.10](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.10) (2016-10-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.9...v0.56.10)

## [v0.56.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.9) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.8...v0.56.9)

## [v0.56.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.8) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.7...v0.56.8)

## [v0.56.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.7) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.6...v0.56.7)

## [v0.56.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.6) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.5...v0.56.6)

## [v0.56.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.5) (2016-10-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.4...v0.56.5)

## [v0.56.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.4) (2016-10-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.3...v0.56.4)

## [v0.56.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.3) (2016-10-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.2...v0.56.3)

## [v0.56.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.2) (2016-10-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.1...v0.56.2)

## [v0.56.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.1) (2016-10-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.0...v0.56.1)

## [v0.56.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.0) (2016-10-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.55.2...v0.56.0)

## [v0.55.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.55.2) (2016-10-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.55.1...v0.55.2)

## [v0.55.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.55.1) (2016-10-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.55.0...v0.55.1)

## [v0.55.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.55.0) (2016-10-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.5...v0.55.0)

## [v0.54.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.5) (2016-10-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.4...v0.54.5)

## [v0.54.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.4) (2016-10-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.3...v0.54.4)

## [v0.54.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.3) (2016-10-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.2...v0.54.3)

## [v0.54.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.2) (2016-10-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.1...v0.54.2)

## [v0.54.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.1) (2016-10-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.0...v0.54.1)

## [v0.54.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.0) (2016-10-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.53.0...v0.54.0)

## [v0.53.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.53.0) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.5...v0.53.0)

## [v0.52.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.5) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.4...v0.52.5)

## [v0.52.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.4) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.3...v0.52.4)

## [v0.52.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.3) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.2...v0.52.3)

## [v0.52.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.2) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.1...v0.52.2)

## [v0.52.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.1) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.0...v0.52.1)

## [v0.52.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.0) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.51.1...v0.52.0)

## [v0.51.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.51.1) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.51.0...v0.51.1)

## [v0.51.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.51.0) (2016-10-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.50.0...v0.51.0)

## [v0.50.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.50.0) (2016-10-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.49.0...v0.50.0)

## [v0.49.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.49.0) (2016-10-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.3...v0.49.0)

## [v0.48.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.3) (2016-09-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.2...v0.48.3)

## [v0.48.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.2) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.1...v0.48.2)

## [v0.48.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.1) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.0...v0.48.1)

## [v0.48.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.0) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.47.2...v0.48.0)

## [v0.47.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.47.2) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.47.1...v0.47.2)

## [v0.47.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.47.1) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.47.0...v0.47.1)

## [v0.47.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.47.0) (2016-09-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.3...v0.47.0)

## [v0.46.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.3) (2016-09-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.2...v0.46.3)

## [v0.46.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.2) (2016-09-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.1...v0.46.2)

## [v0.46.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.1) (2016-09-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.0...v0.46.1)

## [v0.46.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.0) (2016-09-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.3...v0.46.0)

## [v0.45.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.3) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.2...v0.45.3)

## [v0.45.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.2) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.1...v0.45.2)

## [v0.45.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.1) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.0...v0.45.1)

## [v0.45.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.0) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.9...v0.45.0)

## [v0.44.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.9) (2016-09-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.8...v0.44.9)

## [v0.44.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.8) (2016-09-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.7...v0.44.8)

## [v0.44.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.7) (2016-09-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.6...v0.44.7)

## [v0.44.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.6) (2016-09-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.5...v0.44.6)

## [v0.44.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.5) (2016-09-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.4...v0.44.5)

## [v0.44.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.4) (2016-09-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.3...v0.44.4)

## [v0.44.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.3) (2016-09-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.2...v0.44.3)

## [v0.44.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.2) (2016-09-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.1...v0.44.2)

## [v0.44.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.1) (2016-09-15)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.0...v0.44.1)

## [v0.44.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.0) (2016-09-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.3...v0.44.0)

## [v0.43.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.3) (2016-09-12)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.2...v0.43.3)

## [v0.43.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.2) (2016-09-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.1...v0.43.2)

## [v0.43.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.1) (2016-09-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.0...v0.43.1)

## [v0.43.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.0) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.6...v0.43.0)

## [v0.42.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.6) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.5...v0.42.6)

## [v0.42.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.5) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.4...v0.42.5)

## [v0.42.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.4) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.3...v0.42.4)

## [v0.42.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.3) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.2...v0.42.3)

## [v0.42.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.2) (2016-09-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.1...v0.42.2)

## [v0.42.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.1) (2016-09-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.0...v0.42.1)

## [v0.42.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.0) (2016-09-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.4...v0.42.0)

## [v0.41.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.4) (2016-09-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.3...v0.41.4)

## [v0.41.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.3) (2016-09-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.2...v0.41.3)

## [v0.41.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.2) (2016-09-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.1...v0.41.2)

## [v0.41.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.1) (2016-09-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.0...v0.41.1)

## [v0.41.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.0) (2016-09-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.40.0...v0.41.0)

## [v0.40.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.40.0) (2016-09-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.39.0...v0.40.0)

## [v0.39.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.39.0) (2016-08-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.38.1...v0.39.0)

## [v0.38.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.38.1) (2016-08-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.38.0...v0.38.1)

## [v0.38.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.38.0) (2016-08-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.4...v0.38.0)

## [v0.37.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.4) (2016-08-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.3...v0.37.4)

## [v0.37.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.3) (2016-08-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.2...v0.37.3)

## [v0.37.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.2) (2016-08-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.1...v0.37.2)

## [v0.37.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.1) (2016-08-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.0...v0.37.1)

## [v0.37.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.0) (2016-08-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.3...v0.37.0)

## [v0.36.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.3) (2016-08-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.2...v0.36.3)

## [v0.36.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.2) (2016-08-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.1...v0.36.2)

## [v0.36.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.1) (2016-08-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.0...v0.36.1)

## [v0.36.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.0) (2016-08-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.35.1...v0.36.0)

## [v0.35.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.35.1) (2016-08-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.35.0...v0.35.1)

## [v0.35.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.35.0) (2016-08-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.4...v0.35.0)

## [v0.34.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.4) (2016-08-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.3...v0.34.4)

## [v0.34.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.3) (2016-08-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.2...v0.34.3)

## [v0.34.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.2) (2016-08-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.1...v0.34.2)

## [v0.34.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.1) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.0...v0.34.1)

## [v0.34.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.0) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.33.0...v0.34.0)

## [v0.33.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.33.0) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.32.0...v0.33.0)

## [v0.32.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.32.0) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.31.0...v0.32.0)

## [v0.31.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.31.0) (2016-08-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.30.0...v0.31.0)

## [v0.30.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.30.0) (2016-08-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.29.0...v0.30.0)

## [v0.29.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.29.0) (2016-08-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.28.1...v0.29.0)

## [v0.28.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.28.1) (2016-08-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.28.0...v0.28.1)

## [v0.28.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.28.0) (2016-08-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.7...v0.28.0)

## [v0.27.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.7) (2016-08-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.6...v0.27.7)

## [v0.27.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.6) (2016-08-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.5...v0.27.6)

## [v0.27.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.5) (2016-08-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.4...v0.27.5)

## [v0.27.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.4) (2016-08-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.3...v0.27.4)

## [v0.27.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.3) (2016-08-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.2...v0.27.3)

## [v0.27.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.2) (2016-07-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.1...v0.27.2)

## [v0.27.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.1) (2016-07-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.0...v0.27.1)

## [v0.27.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.0) (2016-07-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.26.0...v0.27.0)

## [v0.26.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.26.0) (2016-07-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.25.1...v0.26.0)

## [v0.25.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.25.1) (2016-07-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.25.0...v0.25.1)

## [v0.25.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.25.0) (2016-07-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.24.1...v0.25.0)

## [v0.24.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.24.1) (2016-07-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.24.0...v0.24.1)

## [v0.24.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.24.0) (2016-07-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.23.0...v0.24.0)

## [v0.23.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.23.0) (2016-07-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.22.0...v0.23.0)

## [v0.22.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.22.0) (2016-07-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.21.1...v0.22.0)

## [v0.21.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.21.1) (2016-07-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.21.0...v0.21.1)

## [v0.21.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.21.0) (2016-07-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.20.0...v0.21.0)

## [v0.20.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.20.0) (2016-07-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.19.0...v0.20.0)

## [v0.19.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.19.0) (2016-07-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.18.0...v0.19.0)

## [v0.18.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.18.0) (2016-07-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.17.0...v0.18.0)

## [v0.17.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.17.0) (2016-07-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.4...v0.17.0)

## [v0.16.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.4) (2016-06-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.3...v0.16.4)

## [v0.16.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.3) (2016-06-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.2...v0.16.3)

## [v0.16.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.2) (2016-06-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.1...v0.16.2)

## [v0.16.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.1) (2016-06-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.0...v0.16.1)

## [v0.16.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.0) (2016-06-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.15.2...v0.16.0)

## [v0.15.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.15.2) (2016-06-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.15.1...v0.15.2)

## [v0.15.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.15.1) (2016-06-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.15.0...v0.15.1)

## [v0.15.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.15.0) (2016-06-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.14.1...v0.15.0)

## [v0.14.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.14.1) (2016-06-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.14.0...v0.14.1)

## [v0.14.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.14.0) (2016-06-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.4...v0.14.0)

## [v0.12.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.4) (2016-05-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.3...v0.12.4)

## [v0.13.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.3) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.2...v0.13.3)

## [v0.13.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.2) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.1...v0.13.2)

## [v0.13.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.1) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.0...v0.13.1)

## [v0.13.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.0) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.3...v0.13.0)

## [v0.12.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.3) (2016-03-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.2...v0.12.3)

## [v0.12.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.2) (2016-03-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.1...v0.12.2)

## [v0.12.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.1) (2016-02-15)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.0...v0.12.1)

## [v0.12.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.0) (2016-02-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.11.1...v0.12.0)

## [v0.11.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.11.1) (2016-02-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.11.0...v0.11.1)

## [v0.11.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.11.0) (2016-02-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.10.2...v0.11.0)

## [v0.10.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.10.2) (2016-02-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.10.1...v0.10.2)

## [v0.10.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.10.1) (2016-01-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.10.0...v0.10.1)

## [v0.10.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.10.0) (2016-01-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.9...v0.10.0)

## [v0.9.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.9) (2016-01-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.8...v0.9.9)

## [v0.9.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.8) (2016-01-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.7...v0.9.8)

## [v0.9.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.7) (2016-01-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.6...v0.9.7)

## [v0.9.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.6) (2016-01-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.5...v0.9.6)

## [v0.9.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.5) (2016-01-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.4...v0.9.5)

## [v0.9.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.4) (2016-01-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.2...v0.9.4)

## [v0.9.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.2) (2016-01-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.1...v0.9.2)

## [v0.9.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.1) (2015-12-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.0...v0.9.1)

## [v0.9.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.0) (2015-12-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.8.1...v0.9.0)

## [v0.8.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.8.1) (2015-12-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.8.0...v0.8.1)

## [v0.8.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.8.0) (2015-11-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.7.1...v0.8.0)

## [v0.7.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.7.1) (2015-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.7.0...v0.7.1)

## [v0.7.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.7.0) (2015-10-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.3...v0.7.0)

## [v0.6.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.3) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.2...v0.6.3)

## [v0.6.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.2) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.1...v0.6.2)

## [v0.6.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.1) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.0...v0.6.1)

## [v0.6.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.0) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.5.1...v0.6.0)

## [v0.5.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.5.1) (2015-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.5.0...v0.5.1)

## [v0.5.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.5.0) (2015-10-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.4.0...v0.5.0)

## [v0.4.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.4.0) (2015-10-12)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.3.0...v0.4.0)

## [v0.3.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.3.0) (2015-10-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.2.1...v0.3.0)

## [v0.2.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.2.1) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.2.0...v0.2.1)

## [v0.2.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.2.0) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.7...v0.2.0)

## [v0.1.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.7) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.6...v0.1.7)

## [v0.1.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.6) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.5...v0.1.6)

## [v0.1.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.5) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.4...v0.1.5)

## [v0.1.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.4) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.3...v0.1.4)

## [v0.1.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.3) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.2...v0.1.3)

## [v0.1.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.2) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.1...v0.1.2)

## [v0.1.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.1.1) (2015-10-03)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*