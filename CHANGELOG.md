# Change Log

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
- \<Transition /\> Component [\#200](https://github.com/Semantic-Org/Semantic-UI-React/issues/200)
- \<Sticky /\> Component [\#198](https://github.com/Semantic-Org/Semantic-UI-React/issues/198)
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

**Implemented enhancements:**

- Dropdown: support an array of string|element options [\#470](https://github.com/Semantic-Org/Semantic-UI-React/issues/470)
- RFC: Form Validation [\#407](https://github.com/Semantic-Org/Semantic-UI-React/issues/407)

**Fixed bugs:**

- Tab: data.activeIndex is overwritten in onTabChange for controlled Tab [\#1888](https://github.com/Semantic-Org/Semantic-UI-React/issues/1888)
- Form: action prop is missing in generated markup [\#1882](https://github.com/Semantic-Org/Semantic-UI-React/issues/1882)
- fix\(Form\): Disable Form.Select open dropdown in onfocus event [\#1115](https://github.com/Semantic-Org/Semantic-UI-React/issues/1115)
- Modal as Form returns error, and Modal no longer centers on screen [\#1012](https://github.com/Semantic-Org/Semantic-UI-React/issues/1012)

**Closed issues:**

- Invalid HTML from Header [\#1893](https://github.com/Semantic-Org/Semantic-UI-React/issues/1893)
- Dropdown: Receive Warning even requested props are given [\#1874](https://github.com/Semantic-Org/Semantic-UI-React/issues/1874)
- Creating a Checkbox or Modal emits an error in the console when using Preact [\#1869](https://github.com/Semantic-Org/Semantic-UI-React/issues/1869)
- Improve Tab Props [\#1859](https://github.com/Semantic-Org/Semantic-UI-React/issues/1859)
- Basic semantic-ui examples [\#836](https://github.com/Semantic-Org/Semantic-UI-React/issues/836)
- RFC: Abstract base component to handle similarities b/w Dropdown and Search \(and possibly Select as a unique component\) [\#509](https://github.com/Semantic-Org/Semantic-UI-React/issues/509)

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
- Modal: Better uncontrolled usage support [\#891](https://github.com/Semantic-Org/Semantic-UI-React/issues/891)

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

**Implemented enhancements:**

- \<Tab /\> Component [\#199](https://github.com/Semantic-Org/Semantic-UI-React/issues/199)
- feat\(Tab\): Add component [\#430](https://github.com/Semantic-Org/Semantic-UI-React/pull/430) ([levithomason](https://github.com/levithomason))

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
- fix\(Input\): add missing minLength prop [\#1734](https://github.com/Semantic-Org/Semantic-UI-React/pull/1734) ([Traverse](https://github.com/Traverse))
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
- Label click for input element \(accessibility\)  [\#980](https://github.com/Semantic-Org/Semantic-UI-React/issues/980)
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
- RFC: remove production propTypes, allow small custom builds [\#524](https://github.com/Semantic-Org/Semantic-UI-React/issues/524)
- RFC: Delegate/Pool DOM Event Listeners [\#284](https://github.com/Semantic-Org/Semantic-UI-React/issues/284)

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
- Add grid support for multiple device visibility breakpoints? [\#1024](https://github.com/Semantic-Org/Semantic-UI-React/issues/1024)
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

- \<Advertisement /\> Component [\#185](https://github.com/Semantic-Org/Semantic-UI-React/issues/185)
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
- RFC: all event handlers should callback with \(event, data\) [\#623](https://github.com/Semantic-Org/Semantic-UI-React/issues/623)

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
- Disabled Button with Label leaves Label enabled [\#1026](https://github.com/Semantic-Org/Semantic-UI-React/issues/1026)

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
- fix\(Button\): Disabled Button with Label leaves Label enabled [\#1035](https://github.com/Semantic-Org/Semantic-UI-React/pull/1035) ([luski](https://github.com/luski))

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
- Dropdown keyboard arrows don't work when rendering with children dropdown menu [\#993](https://github.com/Semantic-Org/Semantic-UI-React/issues/993)
- docs\(ComponentExample\): perma links for all examples [\#578](https://github.com/Semantic-Org/Semantic-UI-React/issues/578)

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
- Table sortable [\#926](https://github.com/Semantic-Org/Semantic-UI-React/issues/926)

**Fixed bugs:**

- Modal TextArea / Input Bug [\#1199](https://github.com/Semantic-Org/Semantic-UI-React/issues/1199)
- The typings for FormInput and Divider are broken [\#1180](https://github.com/Semantic-Org/Semantic-UI-React/issues/1180)
- fix\(Dropdown\): use `item` instead of `as={Menu.Item}` [\#659](https://github.com/Semantic-Org/Semantic-UI-React/pull/659) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Modal "trigger" missing in Typescript Typings [\#1202](https://github.com/Semantic-Org/Semantic-UI-React/issues/1202)
- Form inside modal? [\#1197](https://github.com/Semantic-Org/Semantic-UI-React/issues/1197)
- How to upgrade to newer semantic-ui-react ? [\#1196](https://github.com/Semantic-Org/Semantic-UI-React/issues/1196)
- Support jsnext:main and module fields [\#862](https://github.com/Semantic-Org/Semantic-UI-React/issues/862)

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

**Implemented enhancements:**

- perf\(props\): Remove propTypes from production build [\#731](https://github.com/Semantic-Org/Semantic-UI-React/pull/731) ([layershifter](https://github.com/layershifter))

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
- feat\(Dropdown\): add `openOnFocus` and `closeOnBlur` [\#517](https://github.com/Semantic-Org/Semantic-UI-React/issues/517)

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
- Consider Adding "container" prop to Grid.js [\#983](https://github.com/Semantic-Org/Semantic-UI-React/issues/983)

**Fixed bugs:**

- Input/Dropdown/Button should not have tab stops when disabled [\#966](https://github.com/Semantic-Org/Semantic-UI-React/issues/966)

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

**Implemented enhancements:**

- Textarea does not auto height [\#982](https://github.com/Semantic-Org/Semantic-UI-React/issues/982)

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
- fix\(Dropdown\): added role/aria attributes to Dropdown and DropdownItem [\#1006](https://github.com/Semantic-Org/Semantic-UI-React/pull/1006) ([fracmak](https://github.com/fracmak))

## [v0.63.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.1) (2016-12-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.0...v0.63.1)

**Fixed bugs:**

- Support defaultProps in AutoControlledComponent [\#764](https://github.com/Semantic-Org/Semantic-UI-React/issues/764)

**Closed issues:**

- \[Question\]   Form.Field control={Checkbox}   vs   Form.Checkbox [\#1070](https://github.com/Semantic-Org/Semantic-UI-React/issues/1070)
- manage the popup appearance and BG click to close [\#1067](https://github.com/Semantic-Org/Semantic-UI-React/issues/1067)
- Add doc examples for color, size, and inverted Statistic Groups [\#974](https://github.com/Semantic-Org/Semantic-UI-React/issues/974)

**Merged pull requests:**

- fix\(typings\): use boolean `vertical` Segment attribute [\#1073](https://github.com/Semantic-Org/Semantic-UI-React/pull/1073) ([dennari](https://github.com/dennari))
- feat\(AutoControlledComponent\): Default values [\#1066](https://github.com/Semantic-Org/Semantic-UI-React/pull/1066) ([jeffcarbs](https://github.com/jeffcarbs))
- node-sass@4.1.1 untested ⚠️ [\#1063](https://github.com/Semantic-Org/Semantic-UI-React/pull/1063) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- debug@2.4.5 untested ⚠️ [\#1049](https://github.com/Semantic-Org/Semantic-UI-React/pull/1049) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.63.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.0) (2016-12-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.4...v0.63.0)

**Fixed bugs:**

- Portal `mouseOver` should be `mouseEnter` [\#978](https://github.com/Semantic-Org/Semantic-UI-React/issues/978)

**Merged pull requests:**

- docs\(Statistic\): add description [\#1060](https://github.com/Semantic-Org/Semantic-UI-React/pull/1060) ([levithomason](https://github.com/levithomason))
- docs\(StatisticGroup\): add color, size, and inverted examples [\#1058](https://github.com/Semantic-Org/Semantic-UI-React/pull/1058) ([tarang9211](https://github.com/tarang9211))
- breaking\(Portal|Popup\): replace mouseOver event listener with mouseEnter [\#989](https://github.com/Semantic-Org/Semantic-UI-React/pull/989) ([davezuko](https://github.com/davezuko))

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

**Implemented enhancements:**

- Dropdown not resetting value when blurred [\#1019](https://github.com/Semantic-Org/Semantic-UI-React/issues/1019)

**Merged pull requests:**

- Feat\(typings\): Added typings for Radio, Confirm, Select and Textarea [\#1047](https://github.com/Semantic-Org/Semantic-UI-React/pull/1047) ([koenvg](https://github.com/koenvg))
- fix\(dropdown\): clear value when dropdown is blurred [\#1046](https://github.com/Semantic-Org/Semantic-UI-React/pull/1046) ([vageeshb](https://github.com/vageeshb))
- babel-core@6.21.0 untested ⚠️ [\#1045](https://github.com/Semantic-Org/Semantic-UI-React/pull/1045) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(typings\): fix typings spelling on `Accordion` [\#1044](https://github.com/Semantic-Org/Semantic-UI-React/pull/1044) ([ericl85](https://github.com/ericl85))
- feat\(Checkbox\): Indeterminate state [\#1043](https://github.com/Semantic-Org/Semantic-UI-React/pull/1043) ([jeffcarbs](https://github.com/jeffcarbs))
- fix\(docs\): Fix check icon [\#1042](https://github.com/Semantic-Org/Semantic-UI-React/pull/1042) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.62.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.2) (2016-12-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.1...v0.62.2)

**Implemented enhancements:**

- feat\(Accordion\): ability to open multiple items [\#499](https://github.com/Semantic-Org/Semantic-UI-React/issues/499)
- Config: support i18n [\#378](https://github.com/Semantic-Org/Semantic-UI-React/issues/378)

**Fixed bugs:**

- docs\(Example\): Fix warnings [\#599](https://github.com/Semantic-Org/Semantic-UI-React/issues/599)

**Closed issues:**

- fix\(Table\): Keys warning when using renderBodyRow [\#1030](https://github.com/Semantic-Org/Semantic-UI-React/issues/1030)
- Importing single module bundles entire library [\#1025](https://github.com/Semantic-Org/Semantic-UI-React/issues/1025)
- RFC: Use PureComponent [\#1020](https://github.com/Semantic-Org/Semantic-UI-React/issues/1020)
- how to render Header when defined as a const like your docs [\#1017](https://github.com/Semantic-Org/Semantic-UI-React/issues/1017)
- Form Within Modal - formData submitted returns undefined [\#1016](https://github.com/Semantic-Org/Semantic-UI-React/issues/1016)
- Search Module can't be made a11y compliant [\#885](https://github.com/Semantic-Org/Semantic-UI-React/issues/885)
- RFC: Open questions around "Collection Shorthand" [\#604](https://github.com/Semantic-Org/Semantic-UI-React/issues/604)
- Remove or update use of refs [\#405](https://github.com/Semantic-Org/Semantic-UI-React/issues/405)

**Merged pull requests:**

- fix\(Header\): Remove duplicate class [\#1040](https://github.com/Semantic-Org/Semantic-UI-React/pull/1040) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(docs\): Active className on Sidebar item [\#1031](https://github.com/Semantic-Org/Semantic-UI-React/pull/1031) ([pradel](https://github.com/pradel))
- debug@2.4.1 untested ⚠️ [\#1028](https://github.com/Semantic-Org/Semantic-UI-React/pull/1028) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- test\(Accordion\): add inclusive tests for opening and closing panels [\#1023](https://github.com/Semantic-Org/Semantic-UI-React/pull/1023) ([koenvg](https://github.com/koenvg))
- Update node-sass to version 4.0.0 🚀 [\#1015](https://github.com/Semantic-Org/Semantic-UI-React/pull/1015) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Accordion\): ability to open multiple items [\#988](https://github.com/Semantic-Org/Semantic-UI-React/pull/988) ([levithomason](https://github.com/levithomason))
- test\(Examples\): assert no console errors [\#645](https://github.com/Semantic-Org/Semantic-UI-React/pull/645) ([levithomason](https://github.com/levithomason))

## [v0.62.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.1) (2016-12-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.0...v0.62.1)

**Closed issues:**

- Checkbox does not toggle [\#1014](https://github.com/Semantic-Org/Semantic-UI-React/issues/1014)
- Add typescript definitions for Intellisense support [\#655](https://github.com/Semantic-Org/Semantic-UI-React/issues/655)

**Merged pull requests:**

- docs\(Usage\): fix import path to minified stylesheet [\#1013](https://github.com/Semantic-Org/Semantic-UI-React/pull/1013) ([aaronang](https://github.com/aaronang))
- docs\(Step\): remove object destructuring for Step subcomponents [\#1008](https://github.com/Semantic-Org/Semantic-UI-React/pull/1008) ([tomjnsn](https://github.com/tomjnsn))
- docs\(StepExampleGroups\): remove object destructuring [\#1007](https://github.com/Semantic-Org/Semantic-UI-React/pull/1007) ([tomjnsn](https://github.com/tomjnsn))
- fix\(Dropdown\): fix crash when setting defaultOpen on a search dropdown [\#1005](https://github.com/Semantic-Org/Semantic-UI-React/pull/1005) ([fracmak](https://github.com/fracmak))
- Update imports-loader to version 0.7.0 🚀 [\#1004](https://github.com/Semantic-Org/Semantic-UI-React/pull/1004) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(Icon\): added aria-hidden attribute to icon [\#1002](https://github.com/Semantic-Org/Semantic-UI-React/pull/1002) ([fracmak](https://github.com/fracmak))
- fix\(List\): Added aria roles for list/list-item [\#1001](https://github.com/Semantic-Org/Semantic-UI-React/pull/1001) ([fracmak](https://github.com/fracmak))

## [v0.62.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.0) (2016-12-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.10...v0.62.0)

**Closed issues:**

- Reveal alignment  \(feature request\) [\#994](https://github.com/Semantic-Org/Semantic-UI-React/issues/994)
- Modal close icon color [\#986](https://github.com/Semantic-Org/Semantic-UI-React/issues/986)
- Draggable List item? [\#984](https://github.com/Semantic-Org/Semantic-UI-React/issues/984)
- Form.Select onChange is not working as it should [\#981](https://github.com/Semantic-Org/Semantic-UI-React/issues/981)

**Merged pull requests:**

- feat\(typings\): add first draft typings [\#995](https://github.com/Semantic-Org/Semantic-UI-React/pull/995) ([levithomason](https://github.com/levithomason))
- fix\(Accordion\): allow contentShorthand for panel prop [\#991](https://github.com/Semantic-Org/Semantic-UI-React/pull/991) ([wassname](https://github.com/wassname))
- docs\(Popup\): make allowed content types statically analyzable [\#990](https://github.com/Semantic-Org/Semantic-UI-React/pull/990) ([davezuko](https://github.com/davezuko))
- fix\(Sidebar\) sidebar is a module, not a collection [\#987](https://github.com/Semantic-Org/Semantic-UI-React/pull/987) ([fracmak](https://github.com/fracmak))
- breaking\(Form|RatingIcon|Search|SearchResult\): Pass data to event handlers [\#951](https://github.com/Semantic-Org/Semantic-UI-React/pull/951) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.61.10](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.10) (2016-12-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.9...v0.61.10)

**Implemented enhancements:**

- FormField support `label` shorthand [\#939](https://github.com/Semantic-Org/Semantic-UI-React/issues/939)
- \<Sidebar /\> Component [\#197](https://github.com/Semantic-Org/Semantic-UI-React/issues/197)
- feat\(Checkbox|FormField\) support `label` shorthand [\#967](https://github.com/Semantic-Org/Semantic-UI-React/pull/967) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- docs\(Icon\): add icon search [\#977](https://github.com/Semantic-Org/Semantic-UI-React/pull/977) ([levithomason](https://github.com/levithomason))
- feat\(Sidebar\): add component [\#905](https://github.com/Semantic-Org/Semantic-UI-React/pull/905) ([fracmak](https://github.com/fracmak))

## [v0.61.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.9) (2016-12-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.8...v0.61.9)

**Closed issues:**

- Delete icon for multiselect dropdown generates warning [\#971](https://github.com/Semantic-Org/Semantic-UI-React/issues/971)
- Statistic size Prop doesn't work inside Statistic.Group [\#970](https://github.com/Semantic-Org/Semantic-UI-React/issues/970)
- Modal continuously updating [\#969](https://github.com/Semantic-Org/Semantic-UI-React/issues/969)
- Preact? [\#965](https://github.com/Semantic-Org/Semantic-UI-React/issues/965)

**Merged pull requests:**

- fix\(Modal\): prevent unnecessary renders [\#973](https://github.com/Semantic-Org/Semantic-UI-React/pull/973) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(StatisticGroup\): Add missing props [\#972](https://github.com/Semantic-Org/Semantic-UI-React/pull/972) ([jeffcarbs](https://github.com/jeffcarbs))
- fix\(Select\): add missing subcomponents [\#964](https://github.com/Semantic-Org/Semantic-UI-React/pull/964) ([levithomason](https://github.com/levithomason))

## [v0.61.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.8) (2016-11-30)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.7...v0.61.8)

**Fixed bugs:**

- bug\(Icon\): Redundant size value [\#962](https://github.com/Semantic-Org/Semantic-UI-React/issues/962)

**Closed issues:**

- fix\(Dropdown\): your description [\#956](https://github.com/Semantic-Org/Semantic-UI-React/issues/956)
- \<button\> does not get emphasis on hover [\#952](https://github.com/Semantic-Org/Semantic-UI-React/issues/952)

## [v0.61.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.7) (2016-11-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.6...v0.61.7)

**Closed issues:**

- Card  onClick\(\) callback function signature. [\#949](https://github.com/Semantic-Org/Semantic-UI-React/issues/949)
- Wrappin the search results in a scrollable container [\#946](https://github.com/Semantic-Org/Semantic-UI-React/issues/946)
- feat\(search\): allow multiple search terms [\#558](https://github.com/Semantic-Org/Semantic-UI-React/issues/558)

**Merged pull requests:**

- feat\(Card\): pass props to onClick [\#950](https://github.com/Semantic-Org/Semantic-UI-React/pull/950) ([jeffcarbs](https://github.com/jeffcarbs))
- through2@2.0.2 untested ⚠️ [\#945](https://github.com/Semantic-Org/Semantic-UI-React/pull/945) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Rating\): Rating now keyboard navigable and visually impaired accessible [\#892](https://github.com/Semantic-Org/Semantic-UI-React/pull/892) ([fracmak](https://github.com/fracmak))

## [v0.61.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.6) (2016-11-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.5...v0.61.6)

**Fixed bugs:**

- Message Component Warning [\#936](https://github.com/Semantic-Org/Semantic-UI-React/issues/936)

**Merged pull requests:**

- feat\(customPropTypes\): add suggest prop type checker [\#944](https://github.com/Semantic-Org/Semantic-UI-React/pull/944) ([levithomason](https://github.com/levithomason))

## [v0.61.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.5) (2016-11-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.4...v0.61.5)

**Fixed bugs:**

- Accordion does not work properly when defaultActiveIndex is 0 [\#772](https://github.com/Semantic-Org/Semantic-UI-React/issues/772)

**Merged pull requests:**

- mocha@3.2.0 untested ⚠️ [\#940](https://github.com/Semantic-Org/Semantic-UI-React/pull/940) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(Accordion\): Fixed incorrect defaultActiveIndex check [\#928](https://github.com/Semantic-Org/Semantic-UI-React/pull/928) ([Arthelon](https://github.com/Arthelon))

## [v0.61.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.4) (2016-11-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.3...v0.61.4)

**Implemented enhancements:**

- Modal: Support showing Close \(X\) Icon [\#436](https://github.com/Semantic-Org/Semantic-UI-React/issues/436)
- feat\(Modal\): Add closeIcon [\#932](https://github.com/Semantic-Org/Semantic-UI-React/pull/932) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(Button\): Prevent click on disabled button [\#930](https://github.com/Semantic-Org/Semantic-UI-React/pull/930) ([jeffcarbs](https://github.com/jeffcarbs))

**Fixed bugs:**

- dropdown icon [\#927](https://github.com/Semantic-Org/Semantic-UI-React/issues/927)
- fix\(sui\): add "dropdown" to icons [\#933](https://github.com/Semantic-Org/Semantic-UI-React/pull/933) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Docs site down due to react version not on cloudflare [\#934](https://github.com/Semantic-Org/Semantic-UI-React/issues/934)
- Better handle `\<Button disabled /\>` [\#929](https://github.com/Semantic-Org/Semantic-UI-React/issues/929)

**Merged pull requests:**

- Added Select example [\#925](https://github.com/Semantic-Org/Semantic-UI-React/pull/925) ([iamcaleberic](https://github.com/iamcaleberic))
- react@15.4.1 untested ⚠️ [\#923](https://github.com/Semantic-Org/Semantic-UI-React/pull/923) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- react-dom@15.4.1 untested ⚠️ [\#922](https://github.com/Semantic-Org/Semantic-UI-React/pull/922) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- react-addons-test-utils@15.4.1 untested ⚠️ [\#921](https://github.com/Semantic-Org/Semantic-UI-React/pull/921) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.61.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.3) (2016-11-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.2...v0.61.3)

**Implemented enhancements:**

- FormField: `required` prop not passed to control [\#911](https://github.com/Semantic-Org/Semantic-UI-React/issues/911)

**Fixed bugs:**

- fix\(Input\): onChange callback does not pass the value of the input when using Input with children [\#909](https://github.com/Semantic-Org/Semantic-UI-React/issues/909)
- TextArea onChange callback does not pass the Input object [\#907](https://github.com/Semantic-Org/Semantic-UI-React/issues/907)
- Header `subheader` shorthand element missing `className='sub header'` [\#902](https://github.com/Semantic-Org/Semantic-UI-React/issues/902)

**Closed issues:**

- Unable to access documentation [\#915](https://github.com/Semantic-Org/Semantic-UI-React/issues/915)
- react.semantic-ui.com is down [\#914](https://github.com/Semantic-Org/Semantic-UI-React/issues/914)
- DISCUSSION: Use of react-form \(problem with prop validations\) [\#856](https://github.com/Semantic-Org/Semantic-UI-React/issues/856)
- RFC: Formally document prop function signatures [\#487](https://github.com/Semantic-Org/Semantic-UI-React/issues/487)

**Merged pull requests:**

- feat\(TextArea\): add onChange\(e, data\) callback signature [\#920](https://github.com/Semantic-Org/Semantic-UI-React/pull/920) ([levithomason](https://github.com/levithomason))
- fix\(Header\): add `sub header` className to subheader shorthand [\#919](https://github.com/Semantic-Org/Semantic-UI-React/pull/919) ([levithomason](https://github.com/levithomason))
- feat\(FormField\): pass `required` to the control [\#917](https://github.com/Semantic-Org/Semantic-UI-React/pull/917) ([levithomason](https://github.com/levithomason))
- fix\(Input\): spread input props on the input child [\#916](https://github.com/Semantic-Org/Semantic-UI-React/pull/916) ([levithomason](https://github.com/levithomason))
- babel-plugin-lodash@3.2.10 untested ⚠️ [\#913](https://github.com/Semantic-Org/Semantic-UI-React/pull/913) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Added TextArea Example [\#910](https://github.com/Semantic-Org/Semantic-UI-React/pull/910) ([iamcaleberic](https://github.com/iamcaleberic))
- feat\(docs\): show enum values [\#906](https://github.com/Semantic-Org/Semantic-UI-React/pull/906) ([fracmak](https://github.com/fracmak))

## [v0.61.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.2) (2016-11-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.1...v0.61.2)

**Implemented enhancements:**

- refactor\(docs\): rename file name to be the same as class name, etc [\#564](https://github.com/Semantic-Org/Semantic-UI-React/issues/564)

**Fixed bugs:**

- Dropdown selection auto select first option [\#811](https://github.com/Semantic-Org/Semantic-UI-React/issues/811)

**Merged pull requests:**

- Update react-ace to version 4.1.0 🚀 [\#904](https://github.com/Semantic-Org/Semantic-UI-React/pull/904) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-loader@6.2.8 untested ⚠️ [\#900](https://github.com/Semantic-Org/Semantic-UI-React/pull/900) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(Dropdown\): unselected dropdown to have empty value [\#898](https://github.com/Semantic-Org/Semantic-UI-React/pull/898) ([Arthelon](https://github.com/Arthelon))
- chai-enzyme@0.6.1 untested ⚠️ [\#896](https://github.com/Semantic-Org/Semantic-UI-React/pull/896) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- karma-mocha-reporter@2.2.1 untested ⚠️ [\#894](https://github.com/Semantic-Org/Semantic-UI-React/pull/894) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- test\(lint\): Added eslint-plugin-jsx-a11y plugin in warning mode [\#890](https://github.com/Semantic-Org/Semantic-UI-React/pull/890) ([fracmak](https://github.com/fracmak))
- babel-standalone@6.19.0 untested ⚠️ [\#887](https://github.com/Semantic-Org/Semantic-UI-React/pull/887) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.61.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.1) (2016-11-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.61.0...v0.61.1)

**Fixed bugs:**

- Support onKeyDown in Input [\#884](https://github.com/Semantic-Org/Semantic-UI-React/issues/884)

**Closed issues:**

- Modal is missing "open" in the documentation of props. [\#690](https://github.com/Semantic-Org/Semantic-UI-React/issues/690)

**Merged pull requests:**

- fix\(Input\): pass all handlers to the html input [\#886](https://github.com/Semantic-Org/Semantic-UI-React/pull/886) ([levithomason](https://github.com/levithomason))
- Update css-loader to version 0.26.0 🚀 [\#883](https://github.com/Semantic-Org/Semantic-UI-React/pull/883) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Item\): update docs to the latest standards  [\#881](https://github.com/Semantic-Org/Semantic-UI-React/pull/881) ([dpkwhan](https://github.com/dpkwhan))
- Update gh-pages to version 0.12.0 🚀 [\#880](https://github.com/Semantic-Org/Semantic-UI-React/pull/880) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- react-dom@15.4.0 untested ⚠️ [\#874](https://github.com/Semantic-Org/Semantic-UI-React/pull/874) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- lodash@4.17.2 untested ⚠️ [\#869](https://github.com/Semantic-Org/Semantic-UI-React/pull/869) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(Modal\): Add controlled modal example [\#769](https://github.com/Semantic-Org/Semantic-UI-React/pull/769) ([lewisblackwood](https://github.com/lewisblackwood))

## [v0.61.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.61.0) (2016-11-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.10...v0.61.0)

**Closed issues:**

- Docs site down [\#863](https://github.com/Semantic-Org/Semantic-UI-React/issues/863)
- Improve doc build time and load time performance [\#765](https://github.com/Semantic-Org/Semantic-UI-React/issues/765)

**Merged pull requests:**

- Docs/item [\#868](https://github.com/Semantic-Org/Semantic-UI-React/pull/868) ([dpkwhan](https://github.com/dpkwhan))
- style\(Statistic\): update docs to the latest standards [\#866](https://github.com/Semantic-Org/Semantic-UI-React/pull/866) ([dpkwhan](https://github.com/dpkwhan))
- perf\(docs\): improve doc bundle and load experience [\#865](https://github.com/Semantic-Org/Semantic-UI-React/pull/865) ([levithomason](https://github.com/levithomason))
- Update doctrine to version 2.0.0 🚀 [\#861](https://github.com/Semantic-Org/Semantic-UI-React/pull/861) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- breaking\(AutoControlledProps\): Ignore undefined [\#788](https://github.com/Semantic-Org/Semantic-UI-React/pull/788) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.60.10](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.10) (2016-11-15)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.9...v0.60.10)

**Closed issues:**

- Very low performance caused by `getUnhandledProps` [\#859](https://github.com/Semantic-Org/Semantic-UI-React/issues/859)

**Merged pull requests:**

- perf\(getUnhandledProps\): replace lodash with vanilla js [\#860](https://github.com/Semantic-Org/Semantic-UI-React/pull/860) ([levithomason](https://github.com/levithomason))
- node-sass@3.12.5 untested ⚠️ [\#858](https://github.com/Semantic-Org/Semantic-UI-React/pull/858) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.60.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.9) (2016-11-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.8...v0.60.9)

**Closed issues:**

- Dropdown: Customize selected label for single-select [\#852](https://github.com/Semantic-Org/Semantic-UI-React/issues/852)

**Merged pull requests:**

- yargs@6.4.0 untested ⚠️ [\#855](https://github.com/Semantic-Org/Semantic-UI-React/pull/855) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- feat\(Dropdown\): Enable custom DropdownItem render [\#854](https://github.com/Semantic-Org/Semantic-UI-React/pull/854) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.60.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.8) (2016-11-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.7...v0.60.8)

**Merged pull requests:**

- fix\(Input\): use e.target.value in onChange data.value [\#853](https://github.com/Semantic-Org/Semantic-UI-React/pull/853) ([levithomason](https://github.com/levithomason))

## [v0.60.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.7) (2016-11-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.6...v0.60.7)

**Fixed bugs:**

- Accordion indexes [\#773](https://github.com/Semantic-Org/Semantic-UI-React/issues/773)

**Merged pull requests:**

- node-sass@3.12.1 untested ⚠️ [\#849](https://github.com/Semantic-Org/Semantic-UI-React/pull/849) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(Accordion\) fix wrong indexes when using Accordion.Title and Accordion.Content [\#832](https://github.com/Semantic-Org/Semantic-UI-React/pull/832) ([saitonakamura](https://github.com/saitonakamura))

## [v0.60.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.6) (2016-11-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.5...v0.60.6)

**Closed issues:**

- Server side rendering failing  [\#848](https://github.com/Semantic-Org/Semantic-UI-React/issues/848)

## [v0.60.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.5) (2016-11-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.4...v0.60.5)

**Implemented enhancements:**

- Consistent Input change API  [\#842](https://github.com/Semantic-Org/Semantic-UI-React/issues/842)
- Better handling of boolean props with related callback props [\#384](https://github.com/Semantic-Org/Semantic-UI-React/issues/384)

**Fixed bugs:**

- fix\(Docs\): fix find\(\) usage for IE [\#844](https://github.com/Semantic-Org/Semantic-UI-React/pull/844) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- Knob dial component  [\#843](https://github.com/Semantic-Org/Semantic-UI-React/issues/843)

**Merged pull requests:**

- feat\(Input\): add onChange\(e, props\) [\#846](https://github.com/Semantic-Org/Semantic-UI-React/pull/846) ([levithomason](https://github.com/levithomason))
- fix\(debug\): add bug work around [\#845](https://github.com/Semantic-Org/Semantic-UI-React/pull/845) ([levithomason](https://github.com/levithomason))
- style\(Rating\): update docs to the latest standards [\#841](https://github.com/Semantic-Org/Semantic-UI-React/pull/841) ([dpkwhan](https://github.com/dpkwhan))
- style\(Checkbox\): update docs to the latest standards [\#839](https://github.com/Semantic-Org/Semantic-UI-React/pull/839) ([dpkwhan](https://github.com/dpkwhan))
- style\(Accordion\): update docs to the latest standards [\#838](https://github.com/Semantic-Org/Semantic-UI-React/pull/838) ([dpkwhan](https://github.com/dpkwhan))
- style\(Menu\): update docs to the latest standards [\#835](https://github.com/Semantic-Org/Semantic-UI-React/pull/835) ([dpkwhan](https://github.com/dpkwhan))

## [v0.60.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.4) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.3...v0.60.4)

**Fixed bugs:**

- bug\(customPropTypes\): demand validation is broken with defaultProps [\#827](https://github.com/Semantic-Org/Semantic-UI-React/issues/827)
- docs\(Embed\): props renaming [\#831](https://github.com/Semantic-Org/Semantic-UI-React/pull/831) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- fix\(Dropdown|Label\): Remove overzealous prop validations [\#828](https://github.com/Semantic-Org/Semantic-UI-React/pull/828) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.60.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.3) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.2...v0.60.3)

**Implemented enhancements:**

- \[Table\] Add Possibility to Make Table.Cell Selectable [\#812](https://github.com/Semantic-Org/Semantic-UI-React/issues/812)
- \<Embed /\> Component [\#191](https://github.com/Semantic-Org/Semantic-UI-React/issues/191)
- feat\(Embed\): Add component [\#783](https://github.com/Semantic-Org/Semantic-UI-React/pull/783) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- IE Modal error [\#750](https://github.com/Semantic-Org/Semantic-UI-React/issues/750)

**Merged pull requests:**

- feat\(Table.Cell\) make Table.Cell selectable [\#829](https://github.com/Semantic-Org/Semantic-UI-React/pull/829) ([saitonakamura](https://github.com/saitonakamura))
- fix\(Portal\): ignore document click if no node or portal [\#823](https://github.com/Semantic-Org/Semantic-UI-React/pull/823) ([levithomason](https://github.com/levithomason))
- Update chai-enzyme to version 0.6.0 🚀 [\#796](https://github.com/Semantic-Org/Semantic-UI-React/pull/796) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.60.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.2) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.1...v0.60.2)

**Closed issues:**

- Make text property of dropdown accept React.Node not only text [\#825](https://github.com/Semantic-Org/Semantic-UI-React/issues/825)

**Merged pull requests:**

- test\(isBrowser\): add tests [\#826](https://github.com/Semantic-Org/Semantic-UI-React/pull/826) ([levithomason](https://github.com/levithomason))
- fix\(isBrowser\): replace OR with AND operator [\#824](https://github.com/Semantic-Org/Semantic-UI-React/pull/824) ([dcurletti](https://github.com/dcurletti))
- debug@2.3.2 untested ⚠️ [\#822](https://github.com/Semantic-Org/Semantic-UI-React/pull/822) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.60.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.1) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.0...v0.60.1)

**Closed issues:**

- Modal relies on document as default renderNode, breaks SSR [\#712](https://github.com/Semantic-Org/Semantic-UI-React/issues/712)

**Merged pull requests:**

- chore\(build\): simplify and fix hmr [\#821](https://github.com/Semantic-Org/Semantic-UI-React/pull/821) ([levithomason](https://github.com/levithomason))
- debug@2.3.1 untested ⚠️ [\#820](https://github.com/Semantic-Org/Semantic-UI-React/pull/820) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- enzyme@2.6.0 untested ⚠️ [\#818](https://github.com/Semantic-Org/Semantic-UI-React/pull/818) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- karma-mocha@1.3.0 untested ⚠️ [\#817](https://github.com/Semantic-Org/Semantic-UI-React/pull/817) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- webpack-hot-middleware@2.13.2 untested ⚠️ [\#808](https://github.com/Semantic-Org/Semantic-UI-React/pull/808) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(package\): do not access window/document in ssr [\#806](https://github.com/Semantic-Org/Semantic-UI-React/pull/806) ([levithomason](https://github.com/levithomason))

## [v0.60.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.0) (2016-11-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.59.0...v0.60.0)

**Implemented enhancements:**

- breaking\(Dropdown|Label\): Multi-select customization [\#809](https://github.com/Semantic-Org/Semantic-UI-React/pull/809) ([jeffcarbs](https://github.com/jeffcarbs))

**Closed issues:**

- Docs about webpack + custom css [\#802](https://github.com/Semantic-Org/Semantic-UI-React/issues/802)

**Merged pull requests:**

- docs\(IconExampleLoadingGroup\): typo use to user [\#815](https://github.com/Semantic-Org/Semantic-UI-React/pull/815) ([UnbrandedTech](https://github.com/UnbrandedTech))

## [v0.59.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.59.0) (2016-11-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.3...v0.59.0)

**Fixed bugs:**

- docs for DropdownItem incorrectly list `text` as a onClick param [\#804](https://github.com/Semantic-Org/Semantic-UI-React/issues/804)

**Closed issues:**

- Search Results Not Visible With Default Example [\#803](https://github.com/Semantic-Org/Semantic-UI-React/issues/803)
- Library request in cdnjs. [\#778](https://github.com/Semantic-Org/Semantic-UI-React/issues/778)

**Merged pull requests:**

- breaking\(DropdownItem\): callback with \(e, props\) onClick [\#805](https://github.com/Semantic-Org/Semantic-UI-React/pull/805) ([levithomason](https://github.com/levithomason))
- docs\(Modal\): fix icon prop in Button, fix labeled prop, add index.js and trailing . in description [\#800](https://github.com/Semantic-Org/Semantic-UI-React/pull/800) ([dpkwhan](https://github.com/dpkwhan))
- fix\(Dimmer\): Fix "simple" usage, add disabled prop [\#795](https://github.com/Semantic-Org/Semantic-UI-React/pull/795) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.58.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.3) (2016-11-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.2...v0.58.3)

**Fixed bugs:**

- Prevent dropdown from opening when disabled [\#791](https://github.com/Semantic-Org/Semantic-UI-React/issues/791)
- Docs site is down [\#786](https://github.com/Semantic-Org/Semantic-UI-React/issues/786)

**Closed issues:**

- \(question\) how to open modal programmatically? [\#793](https://github.com/Semantic-Org/Semantic-UI-React/issues/793)

**Merged pull requests:**

- feat\(Dropdown\): Prevent open when disabled [\#792](https://github.com/Semantic-Org/Semantic-UI-React/pull/792) ([jeffcarbs](https://github.com/jeffcarbs))
- style\(Message\):  update docs to the latest standards [\#789](https://github.com/Semantic-Org/Semantic-UI-React/pull/789) ([dpkwhan](https://github.com/dpkwhan))
- feat\(Image\): Render children appropriately [\#784](https://github.com/Semantic-Org/Semantic-UI-React/pull/784) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.58.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.2) (2016-11-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.1...v0.58.2)

**Fixed bugs:**

- Dimmer - Inactive dimmer still overlays segment contents, making them unclickable [\#780](https://github.com/Semantic-Org/Semantic-UI-React/issues/780)

**Merged pull requests:**

- docs\(Icon\): correct `link` propType description typo [\#785](https://github.com/Semantic-Org/Semantic-UI-React/pull/785) ([hoppy-kamper](https://github.com/hoppy-kamper))
- fix\(Dimmer\): allow children to be clicked [\#782](https://github.com/Semantic-Org/Semantic-UI-React/pull/782) ([ben174](https://github.com/ben174))

## [v0.58.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.1) (2016-10-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.0...v0.58.1)

**Implemented enhancements:**

- Dropdown enhancements: Better remote API support, item customization [\#416](https://github.com/Semantic-Org/Semantic-UI-React/issues/416)
- \<Dimmer /\> Component [\#190](https://github.com/Semantic-Org/Semantic-UI-React/issues/190)
- feat\(Dimmer\): Add component [\#447](https://github.com/Semantic-Org/Semantic-UI-React/pull/447) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- class !important issue [\#777](https://github.com/Semantic-Org/Semantic-UI-React/issues/777)

**Merged pull requests:**

- docs\(Table\): update docs to the latest standards [\#771](https://github.com/Semantic-Org/Semantic-UI-React/pull/771) ([dpkwhan](https://github.com/dpkwhan))
- babel-standalone@6.18.1 untested ⚠️ [\#768](https://github.com/Semantic-Org/Semantic-UI-React/pull/768) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(Form\): update to latest standards and make minor fixes  [\#767](https://github.com/Semantic-Org/Semantic-UI-React/pull/767) ([dpkwhan](https://github.com/dpkwhan))
- react-ace@3.7.0 untested ⚠️ [\#766](https://github.com/Semantic-Org/Semantic-UI-React/pull/766) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(usage\): Add usage section to docs [\#759](https://github.com/Semantic-Org/Semantic-UI-React/pull/759) ([lewisblackwood](https://github.com/lewisblackwood))
- feat\(Dropdown\): support additionLabel components [\#757](https://github.com/Semantic-Org/Semantic-UI-React/pull/757) ([jayphelps](https://github.com/jayphelps))

## [v0.58.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.0) (2016-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.57.1...v0.58.0)

**Fixed bugs:**

- Accordion defaultActiveIndex [\#761](https://github.com/Semantic-Org/Semantic-UI-React/issues/761)

**Merged pull requests:**

- fix\(Accordion\): respect defaultActiveIndex [\#763](https://github.com/Semantic-Org/Semantic-UI-React/pull/763) ([levithomason](https://github.com/levithomason))
- docs\(ComponentDoc\): show props by default [\#762](https://github.com/Semantic-Org/Semantic-UI-React/pull/762) ([levithomason](https://github.com/levithomason))
- breaking\(Reveal\): change prop name [\#760](https://github.com/Semantic-Org/Semantic-UI-React/pull/760) ([layershifter](https://github.com/layershifter))
- webpack-hot-middleware@2.13.1 untested ⚠️ [\#758](https://github.com/Semantic-Org/Semantic-UI-React/pull/758) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Button\): update docs to the latest standards, add missing prop … [\#756](https://github.com/Semantic-Org/Semantic-UI-React/pull/756) ([dpkwhan](https://github.com/dpkwhan))
- Update brace to version 0.9.0 🚀 [\#753](https://github.com/Semantic-Org/Semantic-UI-React/pull/753) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update react-router to version 3.0.0 🚀 [\#743](https://github.com/Semantic-Org/Semantic-UI-React/pull/743) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- fix\(dropdown\): render text when option.value = 0 [\#686](https://github.com/Semantic-Org/Semantic-UI-React/pull/686) ([Chris-R3](https://github.com/Chris-R3))

## [v0.57.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.57.1) (2016-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.57.0...v0.57.1)

**Implemented enhancements:**

- feat\(Item.Image\): Add size prop [\#747](https://github.com/Semantic-Org/Semantic-UI-React/pull/747) ([clemensw](https://github.com/clemensw))

**Fixed bugs:**

- Item.Image doesn't honor size prop [\#746](https://github.com/Semantic-Org/Semantic-UI-React/issues/746)

## [v0.57.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.57.0) (2016-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.14...v0.57.0)

**Merged pull requests:**

- breaking\(BreadcrumbSection\): change `text` prop to `content` [\#755](https://github.com/Semantic-Org/Semantic-UI-React/pull/755) ([levithomason](https://github.com/levithomason))

## [v0.56.14](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.14) (2016-10-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.13...v0.56.14)

**Implemented enhancements:**

- \<Reveal /\> Component [\#182](https://github.com/Semantic-Org/Semantic-UI-React/issues/182)
- feat\(Popup\): Enabled controlled usage [\#749](https://github.com/Semantic-Org/Semantic-UI-React/pull/749) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(Reveal\): Add component [\#748](https://github.com/Semantic-Org/Semantic-UI-React/pull/748) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- Grid centered not rendered properly [\#752](https://github.com/Semantic-Org/Semantic-UI-React/issues/752)
- Does the \<Popup/\> Component have 'manual' behavior as the normal popup does? [\#727](https://github.com/Semantic-Org/Semantic-UI-React/issues/727)

**Merged pull requests:**

- style\(Segment\): update docs to latest standards [\#751](https://github.com/Semantic-Org/Semantic-UI-React/pull/751) ([dpkwhan](https://github.com/dpkwhan))

## [v0.56.13](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.13) (2016-10-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.12...v0.56.13)

**Fixed bugs:**

- IE support? [\#733](https://github.com/Semantic-Org/Semantic-UI-React/issues/733)

**Closed issues:**

- \<Sidebar/\> component [\#730](https://github.com/Semantic-Org/Semantic-UI-React/issues/730)

**Merged pull requests:**

- fix\(AutoControlledComponent\): replace startsWith call [\#745](https://github.com/Semantic-Org/Semantic-UI-React/pull/745) ([levithomason](https://github.com/levithomason))
- babel-standalone@6.18.0 untested ⚠️ [\#744](https://github.com/Semantic-Org/Semantic-UI-React/pull/744) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- chai@3.5.0 untested ⚠️ [\#742](https://github.com/Semantic-Org/Semantic-UI-React/pull/742) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-register@6.18.0 untested ⚠️ [\#741](https://github.com/Semantic-Org/Semantic-UI-React/pull/741) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-preset-es2015@6.18.0 untested ⚠️ [\#740](https://github.com/Semantic-Org/Semantic-UI-React/pull/740) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-cli@6.18.0 untested ⚠️ [\#739](https://github.com/Semantic-Org/Semantic-UI-React/pull/739) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-core@6.17.0 untested ⚠️ [\#736](https://github.com/Semantic-Org/Semantic-UI-React/pull/736) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- style\(Image\): update docs to the latest standards [\#726](https://github.com/Semantic-Org/Semantic-UI-React/pull/726) ([dpkwhan](https://github.com/dpkwhan))

## [v0.56.12](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.12) (2016-10-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.11...v0.56.12)

**Fixed bugs:**

- 0.56.11 fails to install correctly [\#724](https://github.com/Semantic-Org/Semantic-UI-React/issues/724)

**Merged pull requests:**

- fix\(Dropdown-test\): fix selection range test [\#729](https://github.com/Semantic-Org/Semantic-UI-React/pull/729) ([levithomason](https://github.com/levithomason))
- fix\(package\): build before release [\#728](https://github.com/Semantic-Org/Semantic-UI-React/pull/728) ([levithomason](https://github.com/levithomason))
- style\(Header\): update docs to the latest standards [\#725](https://github.com/Semantic-Org/Semantic-UI-React/pull/725) ([dpkwhan](https://github.com/dpkwhan))
- style\(Flag\): refactor docs to latest standards [\#722](https://github.com/Semantic-Org/Semantic-UI-React/pull/722) ([dpkwhan](https://github.com/dpkwhan))

## [v0.56.11](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.11) (2016-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.10...v0.56.11)

**Closed issues:**

- Segment does not support "middle" attachment [\#716](https://github.com/Semantic-Org/Semantic-UI-React/issues/716)
- fix\(Dropdown\) Call Modal onClose handler when clicking on dropdown item cross icon [\#708](https://github.com/Semantic-Org/Semantic-UI-React/issues/708)

**Merged pull requests:**

- fix\(Modal\): Only set position when modal is open [\#721](https://github.com/Semantic-Org/Semantic-UI-React/pull/721) ([jeffcarbs](https://github.com/jeffcarbs))
- html-webpack-plugin@2.24.0 untested ⚠️ [\#719](https://github.com/Semantic-Org/Semantic-UI-React/pull/719) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(ComponentExample\): default commit message on edit [\#718](https://github.com/Semantic-Org/Semantic-UI-React/pull/718) ([levithomason](https://github.com/levithomason))
- docs\(FormFormExample\): remove extra checkbox label [\#717](https://github.com/Semantic-Org/Semantic-UI-React/pull/717) ([server-monitor](https://github.com/server-monitor))
- docs\(Divider\): refactor, use functional components, add trailing period [\#715](https://github.com/Semantic-Org/Semantic-UI-React/pull/715) ([dpkwhan](https://github.com/dpkwhan))
- yargs@6.3.0 untested ⚠️ [\#714](https://github.com/Semantic-Org/Semantic-UI-React/pull/714) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- docs\(Container\): refactor, functional components, trailing period, misspelling [\#713](https://github.com/Semantic-Org/Semantic-UI-React/pull/713) ([dpkwhan](https://github.com/dpkwhan))
- react-docgen@2.12.0 untested ⚠️ [\#710](https://github.com/Semantic-Org/Semantic-UI-React/pull/710) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.56.10](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.10) (2016-10-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.9...v0.56.10)

**Closed issues:**

- docs\(Dropdown\): add missing examples [\#562](https://github.com/Semantic-Org/Semantic-UI-React/issues/562)

**Merged pull requests:**

- chore\(circleci\): use ta-scripts auto-release and changelog [\#707](https://github.com/Semantic-Org/Semantic-UI-React/pull/707) ([levithomason](https://github.com/levithomason))
- chore\(auto-release\): skip non-consequential and unknown commits [\#706](https://github.com/Semantic-Org/Semantic-UI-React/pull/706) ([levithomason](https://github.com/levithomason))
- feat\(Dropdown\): Add missing examples and begin feature support [\#682](https://github.com/Semantic-Org/Semantic-UI-React/pull/682) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.56.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.9) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.8...v0.56.9)

**Merged pull requests:**

- chore\(scripts\): setup auto release [\#705](https://github.com/Semantic-Org/Semantic-UI-React/pull/705) ([levithomason](https://github.com/levithomason))

## [v0.56.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.8) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.7...v0.56.8)

**Fixed bugs:**

- \(0.56.6\) semantic-ui-react unable to find React or ReactDOM module [\#703](https://github.com/Semantic-Org/Semantic-UI-React/issues/703)

**Merged pull requests:**

- feat\(Search|Dropdown\): Improve arrow navigation [\#701](https://github.com/Semantic-Org/Semantic-UI-React/pull/701) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.56.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.7) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.6...v0.56.7)

**Merged pull requests:**

- fix\(package\): revert define browser field \(\#702\) [\#704](https://github.com/Semantic-Org/Semantic-UI-React/pull/704) ([levithomason](https://github.com/levithomason))

## [v0.56.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.6) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.5...v0.56.6)

**Merged pull requests:**

- chore\(package\): define browser field [\#702](https://github.com/Semantic-Org/Semantic-UI-React/pull/702) ([levithomason](https://github.com/levithomason))

## [v0.56.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.5) (2016-10-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.4...v0.56.5)

**Closed issues:**

- Props warning with modals [\#699](https://github.com/Semantic-Org/Semantic-UI-React/issues/699)
- fix\(Menu\): There is a flaw while using image in the menu. [\#698](https://github.com/Semantic-Org/Semantic-UI-React/issues/698)

**Merged pull requests:**

- fix\(customPropTypes\): ignore nil and false in disallow\(\) [\#700](https://github.com/Semantic-Org/Semantic-UI-React/pull/700) ([levithomason](https://github.com/levithomason))
- Update all dependencies 🌴 [\#696](https://github.com/Semantic-Org/Semantic-UI-React/pull/696) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))

## [v0.56.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.4) (2016-10-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.3...v0.56.4)

**Merged pull requests:**

- fix\(Dropdown\): over zealous propType warnings [\#694](https://github.com/Semantic-Org/Semantic-UI-React/pull/694) ([levithomason](https://github.com/levithomason))

## [v0.56.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.3) (2016-10-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.2...v0.56.3)

**Fixed bugs:**

- Dropdown 'openOnSpace' triggered through TextArea [\#692](https://github.com/Semantic-Org/Semantic-UI-React/issues/692)
- fix\(Dropdown\): blur virtual DOM with real DOM [\#693](https://github.com/Semantic-Org/Semantic-UI-React/pull/693) ([levithomason](https://github.com/levithomason))

## [v0.56.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.2) (2016-10-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.1...v0.56.2)

**Implemented enhancements:**

- feat\(Modal\): support opening/closing multiple modals [\#636](https://github.com/Semantic-Org/Semantic-UI-React/issues/636)
- feat\(Portal\): Improve rendering [\#666](https://github.com/Semantic-Org/Semantic-UI-React/pull/666) ([jeffcarbs](https://github.com/jeffcarbs))

**Fixed bugs:**

- feat\\(Portal\\): Improve rendering [\#666](https://github.com/Semantic-Org/Semantic-UI-React/pull/666) ([jeffcarbs](https://github.com/jeffcarbs))

**Closed issues:**

- fix\(Menu\): SyntaxError:Unexpected token\(6:8\) [\#691](https://github.com/Semantic-Org/Semantic-UI-React/issues/691)

**Merged pull requests:**

- feat\(ButtonGroup\): Add missing props [\#687](https://github.com/Semantic-Org/Semantic-UI-React/pull/687) ([jeffcarbs](https://github.com/jeffcarbs))
- docs\(Icon\): refactor naming and descriptions, use function components [\#685](https://github.com/Semantic-Org/Semantic-UI-React/pull/685) ([dpkwhan](https://github.com/dpkwhan))
- docs\(Input\): refactor, add trailing . in description, fix imports [\#679](https://github.com/Semantic-Org/Semantic-UI-React/pull/679) ([dpkwhan](https://github.com/dpkwhan))

## [v0.56.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.1) (2016-10-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.0...v0.56.1)

**Fixed bugs:**

- Menu.Item allows icon to be set as boolean [\#681](https://github.com/Semantic-Org/Semantic-UI-React/issues/681)

**Merged pull requests:**

- fix\(MenuItem\): allow bool/string icon proptype [\#683](https://github.com/Semantic-Org/Semantic-UI-React/pull/683) ([levithomason](https://github.com/levithomason))
- docs\(Breadcrumb\): refactor and use index.js [\#671](https://github.com/Semantic-Org/Semantic-UI-React/pull/671) ([dpkwhan](https://github.com/dpkwhan))
- docs\(Step\): refactor and fix an issue [\#668](https://github.com/Semantic-Org/Semantic-UI-React/pull/668) ([dpkwhan](https://github.com/dpkwhan))
- docs\(Card\): refactor, add trailing . in description and fix typo [\#667](https://github.com/Semantic-Org/Semantic-UI-React/pull/667) ([dpkwhan](https://github.com/dpkwhan))
- docs\(progress\): refactor, add trailing . to description and use stateless functional expression [\#664](https://github.com/Semantic-Org/Semantic-UI-React/pull/664) ([dpkwhan](https://github.com/dpkwhan))
- docs\(confirm\): add trailing . to description [\#663](https://github.com/Semantic-Org/Semantic-UI-React/pull/663) ([dpkwhan](https://github.com/dpkwhan))
- docs\(Radio\): refactor, use stateless functional expression and fix a typo [\#662](https://github.com/Semantic-Org/Semantic-UI-React/pull/662) ([dpkwhan](https://github.com/dpkwhan))

## [v0.56.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.0) (2016-10-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.55.2...v0.56.0)

**Implemented enhancements:**

- BREAKING CHANGE: Loader component refactor [\#654](https://github.com/Semantic-Org/Semantic-UI-React/pull/654) ([layershifter](https://github.com/layershifter))

## [v0.55.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.55.2) (2016-10-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.55.1...v0.55.2)

**Implemented enhancements:**

- refactor\(Rail\): update component [\#658](https://github.com/Semantic-Org/Semantic-UI-React/pull/658) ([layershifter](https://github.com/layershifter))
- refactor\(Grid\): update Component [\#656](https://github.com/Semantic-Org/Semantic-UI-React/pull/656) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- refactor\\(Rail\\): update component [\#658](https://github.com/Semantic-Org/Semantic-UI-React/pull/658) ([layershifter](https://github.com/layershifter))

## [v0.55.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.55.1) (2016-10-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.55.0...v0.55.1)

**Implemented enhancements:**

- refactor\(Rating\): add rating icon component [\#640](https://github.com/Semantic-Org/Semantic-UI-React/pull/640) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- fix\(Dropdown\): reopens after switching back to browser window [\#627](https://github.com/Semantic-Org/Semantic-UI-React/issues/627)
- fix\(ItemImage\): wrap image to prevent vertical strech [\#646](https://github.com/Semantic-Org/Semantic-UI-React/pull/646) ([debrice](https://github.com/debrice))

**Merged pull requests:**

- fix\(Dropdown\): blur dropdown on close\(\) [\#628](https://github.com/Semantic-Org/Semantic-UI-React/pull/628) ([Chris-R3](https://github.com/Chris-R3))

## [v0.55.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.55.0) (2016-10-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.5...v0.55.0)

**Merged pull requests:**

- BREAKING CHANGE: update Confirm to Modal v1 API [\#634](https://github.com/Semantic-Org/Semantic-UI-React/pull/634) ([levithomason](https://github.com/levithomason))

## [v0.54.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.5) (2016-10-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.4...v0.54.5)

**Implemented enhancements:**

- feat\(ListItem\): add shorthand [\#589](https://github.com/Semantic-Org/Semantic-UI-React/issues/589)
- \<Popup /\> Component [\#193](https://github.com/Semantic-Org/Semantic-UI-React/issues/193)
- \<Comment /\> Component [\#187](https://github.com/Semantic-Org/Semantic-UI-React/issues/187)
- feat\(List\): Shorthand for list and list items [\#637](https://github.com/Semantic-Org/Semantic-UI-React/pull/637) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(Comment\): Add component [\#584](https://github.com/Semantic-Org/Semantic-UI-React/pull/584) ([layershifter](https://github.com/layershifter))
- feat\(Popup\): add component [\#570](https://github.com/Semantic-Org/Semantic-UI-React/pull/570) ([debrice](https://github.com/debrice))

## [v0.54.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.4) (2016-10-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.3...v0.54.4)

**Fixed bugs:**

- fix\(Label\): fix shorthand create method [\#644](https://github.com/Semantic-Org/Semantic-UI-React/pull/644) ([levithomason](https://github.com/levithomason))

## [v0.54.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.3) (2016-10-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.2...v0.54.3)

**Fixed bugs:**

- bug\(Docs\): 404 on old docs [\#635](https://github.com/Semantic-Org/Semantic-UI-React/issues/635)
- Update \<ListItem /\> propType validation [\#111](https://github.com/Semantic-Org/Semantic-UI-React/issues/111)

**Closed issues:**

- fix\(Form\): not render icon in select [\#620](https://github.com/Semantic-Org/Semantic-UI-React/issues/620)
- Move docs to react.semantic-ui.com [\#611](https://github.com/Semantic-Org/Semantic-UI-React/issues/611)
- Standardize childKey and shorthand props [\#449](https://github.com/Semantic-Org/Semantic-UI-React/issues/449)
- Migrating to Semantic-UI-React [\#243](https://github.com/Semantic-Org/Semantic-UI-React/issues/243)

**Merged pull requests:**

- fix\(deploy\): create CNAME pre deploy [\#633](https://github.com/Semantic-Org/Semantic-UI-React/pull/633) ([levithomason](https://github.com/levithomason))
- fix\(customPropTypes\): itemsShorthand -\> collectionShorthand [\#632](https://github.com/Semantic-Org/Semantic-UI-React/pull/632) ([levithomason](https://github.com/levithomason))
- refactor\(project\): stardust repo to Semantic-UI-React [\#631](https://github.com/Semantic-Org/Semantic-UI-React/pull/631) ([levithomason](https://github.com/levithomason))
- docs\(Confirm\): refactor and use index.js [\#630](https://github.com/Semantic-Org/Semantic-UI-React/pull/630) ([dpkwhan](https://github.com/dpkwhan))
- fix\(CONTRIBUTING\): fix angular contributing link [\#629](https://github.com/Semantic-Org/Semantic-UI-React/pull/629) ([Chris-R3](https://github.com/Chris-R3))

## [v0.54.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.2) (2016-10-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.1...v0.54.2)

**Closed issues:**

- Add key to 'Support' section in README? [\#624](https://github.com/Semantic-Org/Semantic-UI-React/issues/624)

**Merged pull requests:**

- chore\(warnings\): Fix warnings in Form and Modal [\#626](https://github.com/Semantic-Org/Semantic-UI-React/pull/626) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(shorthand\): Custom shorthand proptypes [\#618](https://github.com/Semantic-Org/Semantic-UI-React/pull/618) ([jeffcarbs](https://github.com/jeffcarbs))
- test\(factories\): add factory tests [\#552](https://github.com/Semantic-Org/Semantic-UI-React/pull/552) ([levithomason](https://github.com/levithomason))

## [v0.54.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.1) (2016-10-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.54.0...v0.54.1)

**Fixed bugs:**

- fix\(Checkbox\): prevent onChange and onClick when disabled  [\#600](https://github.com/Semantic-Org/Semantic-UI-React/issues/600)

**Merged pull requests:**

- refactor\(Components\): use a class if there are event handlers [\#619](https://github.com/Semantic-Org/Semantic-UI-React/pull/619) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): no onChange/onClick when disabled [\#601](https://github.com/Semantic-Org/Semantic-UI-React/pull/601) ([sprmn](https://github.com/sprmn))

## [v0.54.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.54.0) (2016-10-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.53.0...v0.54.0)

**Fixed bugs:**

- fix\(Button\): revert rendering `labeled` buttons as \<button\> [\#612](https://github.com/Semantic-Org/Semantic-UI-React/issues/612)

**Closed issues:**

- refactor\(Button\): rework `labeled` for consistency with Input [\#510](https://github.com/Semantic-Org/Semantic-UI-React/issues/510)
- RFC: Standardize Component Parts [\#325](https://github.com/Semantic-Org/Semantic-UI-React/issues/325)

**Merged pull requests:**

- BREAKING CHANGE: refactor `labeled` Button API [\#616](https://github.com/Semantic-Org/Semantic-UI-React/pull/616) ([levithomason](https://github.com/levithomason))
- chore\(icon\): cleanup icon doc data [\#615](https://github.com/Semantic-Org/Semantic-UI-React/pull/615) ([levithomason](https://github.com/levithomason))
- chore\(style\): Make some common patterns more consistent [\#614](https://github.com/Semantic-Org/Semantic-UI-React/pull/614) ([jeffcarbs](https://github.com/jeffcarbs))
- chore\(ComponentExamples\): example context todo [\#613](https://github.com/Semantic-Org/Semantic-UI-React/pull/613) ([levithomason](https://github.com/levithomason))
- chore\(imports\): Direct internal imports [\#610](https://github.com/Semantic-Org/Semantic-UI-React/pull/610) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.53.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.53.0) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.5...v0.53.0)

**Fixed bugs:**

- labeled icon \<Button /\> not rendered as \<button\> [\#596](https://github.com/Semantic-Org/Semantic-UI-React/issues/596)

**Merged pull requests:**

- refactor\(project\): stardust =\> semantic-ui-react [\#608](https://github.com/Semantic-Org/Semantic-UI-React/pull/608) ([levithomason](https://github.com/levithomason))

## [v0.52.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.5) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.4...v0.52.5)

**Merged pull requests:**

- fix\(Button\): render `labeled` as a \<button\> [\#597](https://github.com/Semantic-Org/Semantic-UI-React/pull/597) ([dmitriyshmatov](https://github.com/dmitriyshmatov))

## [v0.52.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.4) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.3...v0.52.4)

**Implemented enhancements:**

- feat\(GridRow\): add missing `divided` prop [\#560](https://github.com/Semantic-Org/Semantic-UI-React/issues/560)
- feat\(GridRow\): add missing `divided` prop [\#602](https://github.com/Semantic-Org/Semantic-UI-React/pull/602) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- Question: direct importing vs deconstruction [\#609](https://github.com/Semantic-Org/Semantic-UI-React/issues/609)

**Merged pull requests:**

- docs\(readme\): update development warning [\#605](https://github.com/Semantic-Org/Semantic-UI-React/pull/605) ([levithomason](https://github.com/levithomason))

## [v0.52.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.3) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.2...v0.52.3)

**Implemented enhancements:**

- feat\(Image\): add `label` shorthand [\#538](https://github.com/Semantic-Org/Semantic-UI-React/issues/538)
- feat\(Image\): add `label` shorthand [\#603](https://github.com/Semantic-Org/Semantic-UI-React/pull/603) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- docs\(Table\): add `attached` example [\#595](https://github.com/Semantic-Org/Semantic-UI-React/issues/595)
- Notifying of breaking changes in the changelog [\#592](https://github.com/Semantic-Org/Semantic-UI-React/issues/592)

**Merged pull requests:**

- docs\(Table\): add `attached` example  [\#598](https://github.com/Semantic-Org/Semantic-UI-React/pull/598) ([layershifter](https://github.com/layershifter))

## [v0.52.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.2) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.1...v0.52.2)

**Implemented enhancements:**

- feat\(Table\): add `attached` prop [\#591](https://github.com/Semantic-Org/Semantic-UI-React/issues/591)
- feat\(Table\): add `attached` prop [\#593](https://github.com/Semantic-Org/Semantic-UI-React/pull/593) ([dmitriyshmatov](https://github.com/dmitriyshmatov))

## [v0.52.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.1) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.0...v0.52.1)

**Implemented enhancements:**

- feat\(Portal\): More flexible configuration [\#590](https://github.com/Semantic-Org/Semantic-UI-React/pull/590) ([jeffcarbs](https://github.com/jeffcarbs))

**Merged pull requests:**

- docs\(Card\): fix Feed usage [\#594](https://github.com/Semantic-Org/Semantic-UI-React/pull/594) ([levithomason](https://github.com/levithomason))

## [v0.52.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.0) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.51.1...v0.52.0)

**Implemented enhancements:**

- feat\(Table\): add shorthand for generating tables [\#565](https://github.com/Semantic-Org/Semantic-UI-React/issues/565)
- All event handlers should return the event data first [\#218](https://github.com/Semantic-Org/Semantic-UI-React/issues/218)
- feat\(Dropdown\): Pass object with name to onChange [\#581](https://github.com/Semantic-Org/Semantic-UI-React/pull/581) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(Table\): add table row shorthand [\#567](https://github.com/Semantic-Org/Semantic-UI-React/pull/567) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.51.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.51.1) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.51.0...v0.51.1)

**Implemented enhancements:**

- feat\(ComponentExample\): add copy JSX button  [\#574](https://github.com/Semantic-Org/Semantic-UI-React/issues/574)
- RFC: Could/should the modal rely more heavily on React.Portal? [\#553](https://github.com/Semantic-Org/Semantic-UI-React/issues/553)
- feat\(Label\): add LabelGroup and missing docs [\#576](https://github.com/Semantic-Org/Semantic-UI-React/pull/576) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- fix\(MenuItem\): do not add `icon` class given `name` or `content` [\#585](https://github.com/Semantic-Org/Semantic-UI-React/pull/585) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Update legacy component APIs to the v1 API [\#269](https://github.com/Semantic-Org/Semantic-UI-React/issues/269)

**Merged pull requests:**

- feat\(ComponentExample\): add github links to editor [\#586](https://github.com/Semantic-Org/Semantic-UI-React/pull/586) ([levithomason](https://github.com/levithomason))
- fix\(tests\): Add coverage to missing lines [\#583](https://github.com/Semantic-Org/Semantic-UI-React/pull/583) ([jeffcarbs](https://github.com/jeffcarbs))
- feat\(ComponentExample\): add copy JSX button [\#582](https://github.com/Semantic-Org/Semantic-UI-React/pull/582) ([jeffcarbs](https://github.com/jeffcarbs))
- fix\(package\): remove semantic-ui-css dependency [\#580](https://github.com/Semantic-Org/Semantic-UI-React/pull/580) ([levithomason](https://github.com/levithomason))

## [v0.51.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.51.0) (2016-10-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.50.0...v0.51.0)

**Merged pull requests:**

- fix\(Feed\): update propTypes, shorthand and docs [\#575](https://github.com/Semantic-Org/Semantic-UI-React/pull/575) ([levithomason](https://github.com/levithomason))

## [v0.50.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.50.0) (2016-10-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.49.0...v0.50.0)

**Merged pull requests:**

- feat\(Modal\): Enable usage without wrapper, add custom Portal [\#571](https://github.com/Semantic-Org/Semantic-UI-React/pull/571) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.49.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.49.0) (2016-10-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.3...v0.49.0)

**Implemented enhancements:**

- feat\(docs\): editable examples [\#566](https://github.com/Semantic-Org/Semantic-UI-React/pull/566) ([levithomason](https://github.com/levithomason))
- fix\(List\): Update to v1 API [\#551](https://github.com/Semantic-Org/Semantic-UI-React/pull/551) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- fix\(customPropTypes\): fix logic and warning messages [\#579](https://github.com/Semantic-Org/Semantic-UI-React/pull/579) ([levithomason](https://github.com/levithomason))
- test\(commonTests\): ensure top level exports [\#572](https://github.com/Semantic-Org/Semantic-UI-React/pull/572) ([levithomason](https://github.com/levithomason))

## [v0.48.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.3) (2016-09-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.2...v0.48.3)

**Implemented enhancements:**

- feat\(Segment\): add `size` prop [\#568](https://github.com/Semantic-Org/Semantic-UI-React/issues/568)
- feat\(Segment\): add `size` prop [\#569](https://github.com/Semantic-Org/Semantic-UI-React/pull/569) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- fix\(dll\): fix dll build order [\#563](https://github.com/Semantic-Org/Semantic-UI-React/pull/563) ([levithomason](https://github.com/levithomason))

## [v0.48.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.2) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.1...v0.48.2)

## [v0.48.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.1) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.48.0...v0.48.1)

**Implemented enhancements:**

- Spread unhandled props on the root element [\#91](https://github.com/Semantic-Org/Semantic-UI-React/issues/91)

## [v0.48.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.48.0) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.47.2...v0.48.0)

**Implemented enhancements:**

- feat\(Dropdown\): support label prop [\#291](https://github.com/Semantic-Org/Semantic-UI-React/issues/291)
- feat\(ComponentExample\): show code on direct link [\#557](https://github.com/Semantic-Org/Semantic-UI-React/pull/557) ([levithomason](https://github.com/levithomason))
- feat\(Input\): update to v1 API [\#281](https://github.com/Semantic-Org/Semantic-UI-React/pull/281) ([jamiehill](https://github.com/jamiehill))

## [v0.47.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.47.2) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.47.1...v0.47.2)

**Fixed bugs:**

- fix\(Menu\): add left/right `fixed` enums [\#556](https://github.com/Semantic-Org/Semantic-UI-React/pull/556) ([levithomason](https://github.com/levithomason))

**Merged pull requests:**

- fix\(docs\): update sidebar to use Menu v1 API [\#555](https://github.com/Semantic-Org/Semantic-UI-React/pull/555) ([levithomason](https://github.com/levithomason))

## [v0.47.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.47.1) (2016-09-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.47.0...v0.47.1)

**Implemented enhancements:**

- refactor\(sub components\): export at the top level [\#519](https://github.com/Semantic-Org/Semantic-UI-React/issues/519)
- feat\(index\): export sub components at the top level [\#554](https://github.com/Semantic-Org/Semantic-UI-React/pull/554) ([levithomason](https://github.com/levithomason))

## [v0.47.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.47.0) (2016-09-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.3...v0.47.0)

**Implemented enhancements:**

- fix\(ComponentExample\): title, desc, and icon alignments [\#549](https://github.com/Semantic-Org/Semantic-UI-React/pull/549) ([levithomason](https://github.com/levithomason))
- feat\(Table\): update to v1 API [\#451](https://github.com/Semantic-Org/Semantic-UI-React/pull/451) ([levithomason](https://github.com/levithomason))

**Fixed bugs:**

- fix\(factories\): remove circular references [\#550](https://github.com/Semantic-Org/Semantic-UI-React/pull/550) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- refactor\(commonTests\): rename for consistency and clarity [\#481](https://github.com/Semantic-Org/Semantic-UI-React/issues/481)

**Merged pull requests:**

- feat\(commonTests\): add options and expected className [\#548](https://github.com/Semantic-Org/Semantic-UI-React/pull/548) ([levithomason](https://github.com/levithomason))

## [v0.46.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.3) (2016-09-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.2...v0.46.3)

**Implemented enhancements:**

- feat\(ComponentExample\): add show html button to docs [\#547](https://github.com/Semantic-Org/Semantic-UI-React/pull/547) ([levithomason](https://github.com/levithomason))
- feat\(common\): Improve shorthand array handling [\#543](https://github.com/Semantic-Org/Semantic-UI-React/pull/543) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.46.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.2) (2016-09-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.1...v0.46.2)

**Fixed bugs:**

- bug\(Header\): Invalid propTypes validation [\#542](https://github.com/Semantic-Org/Semantic-UI-React/issues/542)
- Nested dropdown/menu does not expand on hover [\#533](https://github.com/Semantic-Org/Semantic-UI-React/issues/533)
- fix\(Header\): Fix `image` prop [\#545](https://github.com/Semantic-Org/Semantic-UI-React/pull/545) ([layershifter](https://github.com/layershifter))
- docs\(Menu\): open nested dropdown item on hover [\#541](https://github.com/Semantic-Org/Semantic-UI-React/pull/541) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- RFC: Standardize shorthand prop names for primary content [\#391](https://github.com/Semantic-Org/Semantic-UI-React/issues/391)

## [v0.46.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.1) (2016-09-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.46.0...v0.46.1)

**Fixed bugs:**

- fix\(Label\): pointing examples are incorrect [\#534](https://github.com/Semantic-Org/Semantic-UI-React/issues/534)
- docs\(Menu\): MenuItem icon and dropdown item example [\#540](https://github.com/Semantic-Org/Semantic-UI-React/pull/540) ([levithomason](https://github.com/levithomason))
- fix\(factories\): explicitly handle each value type [\#539](https://github.com/Semantic-Org/Semantic-UI-React/pull/539) ([levithomason](https://github.com/levithomason))
- docs\(Label\): fix pointing docs [\#537](https://github.com/Semantic-Org/Semantic-UI-React/pull/537) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- chore\(commonTests\): Standardize the assertions in common tests [\#535](https://github.com/Semantic-Org/Semantic-UI-React/pull/535) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.46.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.46.0) (2016-09-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.3...v0.46.0)

**Implemented enhancements:**

- fix\(Label\): add missing Detail sub component [\#488](https://github.com/Semantic-Org/Semantic-UI-React/issues/488)
- feat\(factories\): add shorthand factory [\#529](https://github.com/Semantic-Org/Semantic-UI-React/pull/529) ([levithomason](https://github.com/levithomason))
- feat\(Label\): Refactor, docs and new props [\#526](https://github.com/Semantic-Org/Semantic-UI-React/pull/526) ([layershifter](https://github.com/layershifter))
- refactor\(docs\): replace react-highlighjs with react-ace [\#525](https://github.com/Semantic-Org/Semantic-UI-React/pull/525) ([levithomason](https://github.com/levithomason))

**Merged pull requests:**

- feat\(commonTests\): add implementsShorthandProp [\#530](https://github.com/Semantic-Org/Semantic-UI-React/pull/530) ([levithomason](https://github.com/levithomason))
- feat\(customPropTypes\): add "as" prop type [\#528](https://github.com/Semantic-Org/Semantic-UI-React/pull/528) ([levithomason](https://github.com/levithomason))

## [v0.45.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.3) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.2...v0.45.3)

**Implemented enhancements:**

- feat\(Menu\): add `floated` and MenuItem `icon` props [\#523](https://github.com/Semantic-Org/Semantic-UI-React/pull/523) ([layershifter](https://github.com/layershifter))

## [v0.45.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.2) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.1...v0.45.2)

**Fixed bugs:**

- fix\(Label\): Fix `ribbon` propType [\#522](https://github.com/Semantic-Org/Semantic-UI-React/pull/522) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- docs\(.github\): create ISSUE\_TEMPLATE [\#521](https://github.com/Semantic-Org/Semantic-UI-React/pull/521) ([levithomason](https://github.com/levithomason))

## [v0.45.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.1) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.45.0...v0.45.1)

**Fixed bugs:**

- fix\(src/index\): use module exports [\#520](https://github.com/Semantic-Org/Semantic-UI-React/pull/520) ([levithomason](https://github.com/levithomason))

## [v0.45.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.45.0) (2016-09-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.9...v0.45.0)

**Merged pull requests:**

- chore\(build\): add browser build [\#518](https://github.com/Semantic-Org/Semantic-UI-React/pull/518) ([levithomason](https://github.com/levithomason))

## [v0.44.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.9) (2016-09-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.8...v0.44.9)

**Implemented enhancements:**

- feat\(Menu\): Add `items` shorthand [\#506](https://github.com/Semantic-Org/Semantic-UI-React/pull/506) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- docs\(PageNotFound\): fix layout and embed atari [\#515](https://github.com/Semantic-Org/Semantic-UI-React/pull/515) ([levithomason](https://github.com/levithomason))

## [v0.44.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.8) (2016-09-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.7...v0.44.8)

**Fixed bugs:**

- Selecting an item from a Dropdown menu in search mode \(non multi\) does not work [\#513](https://github.com/Semantic-Org/Semantic-UI-React/issues/513)
- fix\(Dropdown\): abort handleBlur on click inside [\#514](https://github.com/Semantic-Org/Semantic-UI-React/pull/514) ([levithomason](https://github.com/levithomason))

## [v0.44.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.7) (2016-09-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.6...v0.44.7)

**Implemented enhancements:**

- \<Search /\> Component [\#195](https://github.com/Semantic-Org/Semantic-UI-React/issues/195)

**Fixed bugs:**

- fix\(Header\): subheader and image shorthand [\#511](https://github.com/Semantic-Org/Semantic-UI-React/issues/511)

**Merged pull requests:**

- fix\(Header\): properly wrap contents in HeaderContent [\#512](https://github.com/Semantic-Org/Semantic-UI-React/pull/512) ([levithomason](https://github.com/levithomason))

## [v0.44.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.6) (2016-09-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.5...v0.44.6)

**Merged pull requests:**

- Search: add component [\#424](https://github.com/Semantic-Org/Semantic-UI-React/pull/424) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.44.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.5) (2016-09-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.4...v0.44.5)

**Merged pull requests:**

- Dropdown: Dropdown.Header via shorthand prop [\#501](https://github.com/Semantic-Org/Semantic-UI-React/pull/501) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.44.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.4) (2016-09-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.3...v0.44.4)

**Fixed bugs:**

- Dropdown events triggering twice [\#504](https://github.com/Semantic-Org/Semantic-UI-React/issues/504)
- fix\(MenuItem\): remove `down` prop [\#502](https://github.com/Semantic-Org/Semantic-UI-React/issues/502)
- fix\(Dropdown\): skip select item on blur when closed [\#508](https://github.com/Semantic-Org/Semantic-UI-React/pull/508) ([levithomason](https://github.com/levithomason))

## [v0.44.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.3) (2016-09-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.2...v0.44.3)

**Fixed bugs:**

- fix\(MenuItem\): remove `down` prop [\#503](https://github.com/Semantic-Org/Semantic-UI-React/pull/503) ([layershifter](https://github.com/layershifter))

## [v0.44.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.2) (2016-09-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.1...v0.44.2)

**Fixed bugs:**

- Dropdown: \<Dropdown.Item as={'a'} /\> with href does not function appropriately [\#493](https://github.com/Semantic-Org/Semantic-UI-React/issues/493)

**Merged pull requests:**

- fix\(Dropdown\): open/close on focus/blur [\#500](https://github.com/Semantic-Org/Semantic-UI-React/pull/500) ([levithomason](https://github.com/levithomason))

## [v0.44.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.1) (2016-09-15)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.0...v0.44.1)

**Fixed bugs:**

- fix\(dropdown\): Label props for multi-select [\#495](https://github.com/Semantic-Org/Semantic-UI-React/pull/495) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.44.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.0) (2016-09-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.3...v0.44.0)

**Fixed bugs:**

- refactor\(deprecate\): remove all deprecated [\#498](https://github.com/Semantic-Org/Semantic-UI-React/pull/498) ([levithomason](https://github.com/levithomason))

## [v0.43.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.3) (2016-09-12)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.2...v0.43.3)

**Fixed bugs:**

- Deprecated functional components throw TypeError: Cannot call a class as a function [\#367](https://github.com/Semantic-Org/Semantic-UI-React/issues/367)
- fix\(deprecate\): handle functional components [\#494](https://github.com/Semantic-Org/Semantic-UI-React/pull/494) ([levithomason](https://github.com/levithomason))

## [v0.43.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.2) (2016-09-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.1...v0.43.2)

**Closed issues:**

- Engine requirements in package.json are out of date [\#491](https://github.com/Semantic-Org/Semantic-UI-React/issues/491)

**Merged pull requests:**

- fix\(package\): remove bad engines versions [\#492](https://github.com/Semantic-Org/Semantic-UI-React/pull/492) ([davezuko](https://github.com/davezuko))

## [v0.43.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.1) (2016-09-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.43.0...v0.43.1)

**Implemented enhancements:**

- Dropdown: support `disabled` items [\#478](https://github.com/Semantic-Org/Semantic-UI-React/issues/478)
- refactor\(Label\): update props to the latest specs [\#474](https://github.com/Semantic-Org/Semantic-UI-React/issues/474)
- Rename plural group components \(Fields\) -\> Group [\#203](https://github.com/Semantic-Org/Semantic-UI-React/issues/203)
- feat\(Button\): support all features, update to v1 API [\#295](https://github.com/Semantic-Org/Semantic-UI-React/pull/295) ([jamiehill](https://github.com/jamiehill))

**Fixed bugs:**

- Create attached button element [\#46](https://github.com/Semantic-Org/Semantic-UI-React/issues/46)

**Merged pull requests:**

- chore\(karma\): clean and format stacktraces [\#490](https://github.com/Semantic-Org/Semantic-UI-React/pull/490) ([levithomason](https://github.com/levithomason))
- feat\(ComponentProps\): sort doc props alphabetically [\#489](https://github.com/Semantic-Org/Semantic-UI-React/pull/489) ([levithomason](https://github.com/levithomason))

## [v0.43.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.43.0) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.6...v0.43.0)

**Merged pull requests:**

- refactor\(Label\): update props to the latest specs [\#486](https://github.com/Semantic-Org/Semantic-UI-React/pull/486) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.42.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.6) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.5...v0.42.6)

**Implemented enhancements:**

- Dropdown: support custom search function [\#469](https://github.com/Semantic-Org/Semantic-UI-React/issues/469)

**Merged pull requests:**

- feat\(Dropdown\): support disabled items [\#482](https://github.com/Semantic-Org/Semantic-UI-React/pull/482) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.42.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.5) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.4...v0.42.5)

**Merged pull requests:**

- feat\(Dropdown\): support custom search function [\#484](https://github.com/Semantic-Org/Semantic-UI-React/pull/484) ([dylankiss](https://github.com/dylankiss))

## [v0.42.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.4) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.3...v0.42.4)

**Fixed bugs:**

- fix\(createFactory\): do not create elements from `null` values [\#480](https://github.com/Semantic-Org/Semantic-UI-React/pull/480) ([jeffcarbs](https://github.com/jeffcarbs))

**Closed issues:**

- fix\(Label\): do not auto apply the `empty` className [\#485](https://github.com/Semantic-Org/Semantic-UI-React/issues/485)

## [v0.42.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.3) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.2...v0.42.3)

**Implemented enhancements:**

- Dropdown: Support arbitrary element for `text` [\#477](https://github.com/Semantic-Org/Semantic-UI-React/issues/477)

**Merged pull requests:**

- Dropdown: Custom trigger element [\#479](https://github.com/Semantic-Org/Semantic-UI-React/pull/479) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.42.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.2) (2016-09-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.1...v0.42.2)

**Implemented enhancements:**

- Header: add subheader shorthand [\#461](https://github.com/Semantic-Org/Semantic-UI-React/issues/461)
- feat\(Header\): Add subheader prop [\#476](https://github.com/Semantic-Org/Semantic-UI-React/pull/476) ([layershifter](https://github.com/layershifter))

## [v0.42.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.1) (2016-09-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.0...v0.42.1)

**Merged pull requests:**

- fix\(customPropTypes\): show all errors if some\(\) fails [\#473](https://github.com/Semantic-Org/Semantic-UI-React/pull/473) ([levithomason](https://github.com/levithomason))

## [v0.42.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.0) (2016-09-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.4...v0.42.0)

**Implemented enhancements:**

- feat\(Menu\): Update to v1 API  [\#382](https://github.com/Semantic-Org/Semantic-UI-React/pull/382) ([layershifter](https://github.com/layershifter))

## [v0.41.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.4) (2016-09-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.3...v0.41.4)

**Merged pull requests:**

- feat\(Dropdown\): Select highlighted item on blur [\#468](https://github.com/Semantic-Org/Semantic-UI-React/pull/468) ([dylankiss](https://github.com/dylankiss))

## [v0.41.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.3) (2016-09-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.2...v0.41.3)

**Implemented enhancements:**

- feat\(Dropdown\): Add Header sub-component [\#471](https://github.com/Semantic-Org/Semantic-UI-React/pull/471) ([layershifter](https://github.com/layershifter))

## [v0.41.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.2) (2016-09-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.1...v0.41.2)

**Implemented enhancements:**

- feat\(Dropdown\): close on blur [\#467](https://github.com/Semantic-Org/Semantic-UI-React/pull/467) ([dylankiss](https://github.com/dylankiss))

## [v0.41.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.1) (2016-09-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.41.0...v0.41.1)

**Implemented enhancements:**

- feat\(Grid\): add stretched prop [\#466](https://github.com/Semantic-Org/Semantic-UI-React/pull/466) ([layershifter](https://github.com/layershifter))
- docs\(Loader\): update docs [\#463](https://github.com/Semantic-Org/Semantic-UI-React/pull/463) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- Adding animation effects to component [\#465](https://github.com/Semantic-Org/Semantic-UI-React/issues/465)

**Merged pull requests:**

- feature\(docs\): show sub component descriptions [\#462](https://github.com/Semantic-Org/Semantic-UI-React/pull/462) ([levithomason](https://github.com/levithomason))

## [v0.41.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.41.0) (2016-09-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.40.0...v0.41.0)

**Implemented enhancements:**

- Segment: update to v1 API [\#287](https://github.com/Semantic-Org/Semantic-UI-React/pull/287) ([jamiehill](https://github.com/jamiehill))

**Closed issues:**

- MenuItem is rendered as active link with React 15.3.1 [\#460](https://github.com/Semantic-Org/Semantic-UI-React/issues/460)

**Merged pull requests:**

- Provide callback for default element type [\#459](https://github.com/Semantic-Org/Semantic-UI-React/pull/459) ([levithomason](https://github.com/levithomason))

## [v0.40.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.40.0) (2016-09-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.39.0...v0.40.0)

**Implemented enhancements:**

- Doc: show sub component props [\#428](https://github.com/Semantic-Org/Semantic-UI-React/pull/428) ([levithomason](https://github.com/levithomason))
- feat\(Form\): update to v1 API [\#400](https://github.com/Semantic-Org/Semantic-UI-React/pull/400) ([levithomason](https://github.com/levithomason))

**Fixed bugs:**

- Docs: Fix absolute anchor links [\#455](https://github.com/Semantic-Org/Semantic-UI-React/issues/455)

**Closed issues:**

- Hoist propTypes for all wrapper components [\#432](https://github.com/Semantic-Org/Semantic-UI-React/issues/432)
- Remove jQuery dependency [\#247](https://github.com/Semantic-Org/Semantic-UI-React/issues/247)

**Merged pull requests:**

- fix\(docs\): anchor links [\#457](https://github.com/Semantic-Org/Semantic-UI-React/pull/457) ([levithomason](https://github.com/levithomason))

## [v0.39.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.39.0) (2016-08-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.38.1...v0.39.0)

**Fixed bugs:**

- Header: update doc usage of shorthand props [\#454](https://github.com/Semantic-Org/Semantic-UI-React/issues/454)
- fix\(Header\): correct shorthand props API [\#456](https://github.com/Semantic-Org/Semantic-UI-React/pull/456) ([levithomason](https://github.com/levithomason))

## [v0.38.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.38.1) (2016-08-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.38.0...v0.38.1)

**Fixed bugs:**

- Dropdown: support Menu classname [\#448](https://github.com/Semantic-Org/Semantic-UI-React/issues/448)

**Merged pull requests:**

- fix\(Dropdown\): merge Dropdown.Menu className [\#453](https://github.com/Semantic-Org/Semantic-UI-React/pull/453) ([levithomason](https://github.com/levithomason))

## [v0.38.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.38.0) (2016-08-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.4...v0.38.0)

**Implemented enhancements:**

- Item: Update to v1 API [\#431](https://github.com/Semantic-Org/Semantic-UI-React/pull/431) ([layershifter](https://github.com/layershifter))

## [v0.37.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.4) (2016-08-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.3...v0.37.4)

**Implemented enhancements:**

- Modal: Support configurable close behaviors [\#437](https://github.com/Semantic-Org/Semantic-UI-React/issues/437)
- React Router `Links` and `MenuItems` [\#142](https://github.com/Semantic-Org/Semantic-UI-React/issues/142)
- feat\(Modal\): add configurable close behaviors \(\#440\) [\#440](https://github.com/Semantic-Org/Semantic-UI-React/pull/440) ([brsanthu](https://github.com/brsanthu))

## [v0.37.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.3) (2016-08-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.2...v0.37.3)

**Fixed bugs:**

- Dropdown: fix search type issues [\#397](https://github.com/Semantic-Org/Semantic-UI-React/issues/397)

**Merged pull requests:**

- fix\(Dropdown\): fix search width [\#443](https://github.com/Semantic-Org/Semantic-UI-React/pull/443) ([levithomason](https://github.com/levithomason))

## [v0.37.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.2) (2016-08-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.1...v0.37.2)

**Merged pull requests:**

- feat\(Header\): support size prop [\#444](https://github.com/Semantic-Org/Semantic-UI-React/pull/444) ([levithomason](https://github.com/levithomason))
- feat\(docs\): complete keyboard nav search [\#441](https://github.com/Semantic-Org/Semantic-UI-React/pull/441) ([levithomason](https://github.com/levithomason))

## [v0.37.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.1) (2016-08-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.37.0...v0.37.1)

**Fixed bugs:**

- Docs: Generation issue of docgenInfo.json on Windows [\#434](https://github.com/Semantic-Org/Semantic-UI-React/issues/434)
- fix\(Checkbox\): render required empty labels [\#439](https://github.com/Semantic-Org/Semantic-UI-React/pull/439) ([levithomason](https://github.com/levithomason))

## [v0.37.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.37.0) (2016-08-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.3...v0.37.0)

**Implemented enhancements:**

- RFC: Consider component augmentation [\#403](https://github.com/Semantic-Org/Semantic-UI-React/issues/403)
- Breaking Changes: Add component augmentation [\#414](https://github.com/Semantic-Org/Semantic-UI-React/pull/414) ([levithomason](https://github.com/levithomason))

**Fixed bugs:**

- Docs: Comparison width error [\#433](https://github.com/Semantic-Org/Semantic-UI-React/issues/433)
- Bug: Doc website prevents the use of cmd + c [\#425](https://github.com/Semantic-Org/Semantic-UI-React/issues/425)
- Docs: use platform path sep [\#435](https://github.com/Semantic-Org/Semantic-UI-React/pull/435) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Doc: CI deploys a broken doc site build [\#423](https://github.com/Semantic-Org/Semantic-UI-React/issues/423)

**Merged pull requests:**

- Docs: Comparison width fix [\#438](https://github.com/Semantic-Org/Semantic-UI-React/pull/438) ([layershifter](https://github.com/layershifter))
- docs\(Card\): add component descriptions [\#429](https://github.com/Semantic-Org/Semantic-UI-React/pull/429) ([levithomason](https://github.com/levithomason))
- Docs: fix search focus [\#426](https://github.com/Semantic-Org/Semantic-UI-React/pull/426) ([levithomason](https://github.com/levithomason))
- Update dependencies [\#422](https://github.com/Semantic-Org/Semantic-UI-React/pull/422) ([levithomason](https://github.com/levithomason))
- chore\(codeclimate\): remove codeclimate [\#421](https://github.com/Semantic-Org/Semantic-UI-React/pull/421) ([levithomason](https://github.com/levithomason))
- Update codeclimate [\#420](https://github.com/Semantic-Org/Semantic-UI-React/pull/420) ([levithomason](https://github.com/levithomason))

## [v0.36.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.3) (2016-08-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.2...v0.36.3)

**Implemented enhancements:**

- Dropdown: Pass 'options' objects as props to Dropdown.Item [\#418](https://github.com/Semantic-Org/Semantic-UI-React/pull/418) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.36.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.2) (2016-08-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.1...v0.36.2)

**Implemented enhancements:**

- feat\(Dropdown\): add custom noResultsMessage [\#417](https://github.com/Semantic-Org/Semantic-UI-React/pull/417) ([jeffcarbs](https://github.com/jeffcarbs))

## [v0.36.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.1) (2016-08-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.0...v0.36.1)

**Fixed bugs:**

- fix\(Input\): remove extra curly brace [\#415](https://github.com/Semantic-Org/Semantic-UI-React/pull/415) ([fuatsengul](https://github.com/fuatsengul))

**Merged pull requests:**

- feat\(useWidthProp\): tools/tests for width props [\#413](https://github.com/Semantic-Org/Semantic-UI-React/pull/413) ([levithomason](https://github.com/levithomason))
- fix\(commonTests\): handle deeply nested subcomponents [\#412](https://github.com/Semantic-Org/Semantic-UI-React/pull/412) ([levithomason](https://github.com/levithomason))

## [v0.36.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.0) (2016-08-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.35.1...v0.36.0)

**Merged pull requests:**

- refactor\(TextArea\): rename and use functional component [\#409](https://github.com/Semantic-Org/Semantic-UI-React/pull/409) ([levithomason](https://github.com/levithomason))

## [v0.35.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.35.1) (2016-08-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.35.0...v0.35.1)

**Implemented enhancements:**

- \<Card /\> Component [\#186](https://github.com/Semantic-Org/Semantic-UI-React/issues/186)

**Fixed bugs:**

- fix\(customPropTypes\): false demand\(\) errors [\#411](https://github.com/Semantic-Org/Semantic-UI-React/pull/411) ([levithomason](https://github.com/levithomason))

**Merged pull requests:**

- Docs: fixes and updates [\#410](https://github.com/Semantic-Org/Semantic-UI-React/pull/410) ([levithomason](https://github.com/levithomason))
- chore\(package\): update react 15.3.1 [\#408](https://github.com/Semantic-Org/Semantic-UI-React/pull/408) ([levithomason](https://github.com/levithomason))

## [v0.35.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.35.0) (2016-08-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.4...v0.35.0)

**Merged pull requests:**

- Card: add component [\#387](https://github.com/Semantic-Org/Semantic-UI-React/pull/387) ([athurman](https://github.com/athurman))

## [v0.34.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.4) (2016-08-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.3...v0.34.4)

**Implemented enhancements:**

- Dropdown: add support for allowAdditions [\#356](https://github.com/Semantic-Org/Semantic-UI-React/pull/356) ([dylankiss](https://github.com/dylankiss))

## [v0.34.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.3) (2016-08-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.2...v0.34.3)

**Fixed bugs:**

- Support to change Icon in Dropdown Component [\#401](https://github.com/Semantic-Org/Semantic-UI-React/issues/401)

**Merged pull requests:**

- Dropdown: fix icon prop [\#402](https://github.com/Semantic-Org/Semantic-UI-React/pull/402) ([levithomason](https://github.com/levithomason))
- Docs: update Grid usages [\#399](https://github.com/Semantic-Org/Semantic-UI-React/pull/399) ([levithomason](https://github.com/levithomason))
- Docs: add Introduction image prop example [\#396](https://github.com/Semantic-Org/Semantic-UI-React/pull/396) ([levithomason](https://github.com/levithomason))
- Docs: add TA attribution [\#395](https://github.com/Semantic-Org/Semantic-UI-React/pull/395) ([levithomason](https://github.com/levithomason))

## [v0.34.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.2) (2016-08-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.1...v0.34.2)

**Implemented enhancements:**

- Statistic: enhance shorthand props and propTypes [\#390](https://github.com/Semantic-Org/Semantic-UI-React/pull/390) ([layershifter](https://github.com/layershifter))

**Closed issues:**

- Remove bluebird dependency [\#84](https://github.com/Semantic-Org/Semantic-UI-React/issues/84)

**Merged pull requests:**

- Image: add inline prop [\#394](https://github.com/Semantic-Org/Semantic-UI-React/pull/394) ([layershifter](https://github.com/layershifter))
- Add Introduction page [\#377](https://github.com/Semantic-Org/Semantic-UI-React/pull/377) ([levithomason](https://github.com/levithomason))

## [v0.34.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.1) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.34.0...v0.34.1)

## [v0.34.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.34.0) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.33.0...v0.34.0)

**Implemented enhancements:**

- \<Feed /\> Component [\#188](https://github.com/Semantic-Org/Semantic-UI-React/issues/188)

**Merged pull requests:**

- Feed: add component [\#363](https://github.com/Semantic-Org/Semantic-UI-React/pull/363) ([layershifter](https://github.com/layershifter))

## [v0.33.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.33.0) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.32.0...v0.33.0)

**Implemented enhancements:**

- Modal Keyboard Event Handlers [\#175](https://github.com/Semantic-Org/Semantic-UI-React/issues/175)
- Modal: full feature support with Dimmer and docs [\#383](https://github.com/Semantic-Org/Semantic-UI-React/pull/383) ([levithomason](https://github.com/levithomason))

## [v0.32.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.32.0) (2016-08-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.31.0...v0.32.0)

**Implemented enhancements:**

- \<Step /\> Component [\#183](https://github.com/Semantic-Org/Semantic-UI-React/issues/183)
- Validate commonTest arguments [\#389](https://github.com/Semantic-Org/Semantic-UI-React/pull/389) ([levithomason](https://github.com/levithomason))
- Image Component updated to v1 API [\#280](https://github.com/Semantic-Org/Semantic-UI-React/pull/280) ([jamiehill](https://github.com/jamiehill))

**Merged pull requests:**

- Refactor utils [\#388](https://github.com/Semantic-Org/Semantic-UI-React/pull/388) ([levithomason](https://github.com/levithomason))
- Add Step component [\#335](https://github.com/Semantic-Org/Semantic-UI-React/pull/335) ([layershifter](https://github.com/layershifter))

## [v0.31.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.31.0) (2016-08-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.30.0...v0.31.0)

**Merged pull requests:**

- Fix baseHref, refactor config and build [\#385](https://github.com/Semantic-Org/Semantic-UI-React/pull/385) ([levithomason](https://github.com/levithomason))
- Update Message to v1 API [\#344](https://github.com/Semantic-Org/Semantic-UI-React/pull/344) ([levithomason](https://github.com/levithomason))

## [v0.30.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.30.0) (2016-08-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.29.0...v0.30.0)

**Implemented enhancements:**

- Modal: update to v1 API [\#379](https://github.com/Semantic-Org/Semantic-UI-React/pull/379) ([asiniy](https://github.com/asiniy))

## [v0.29.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.29.0) (2016-08-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.28.1...v0.29.0)

**Implemented enhancements:**

- Add typings for typescript [\#361](https://github.com/Semantic-Org/Semantic-UI-React/issues/361)
- \<Rating /\> Component [\#194](https://github.com/Semantic-Org/Semantic-UI-React/issues/194)

**Fixed bugs:**

- Invalid argument supplied to oneOf, expected an instance of array. [\#375](https://github.com/Semantic-Org/Semantic-UI-React/issues/375)

**Merged pull requests:**

- Remove \_meta.library [\#380](https://github.com/Semantic-Org/Semantic-UI-React/pull/380) ([levithomason](https://github.com/levithomason))
- fix\(breadcrumb\): do not apply index to component keys [\#376](https://github.com/Semantic-Org/Semantic-UI-React/pull/376) ([davezuko](https://github.com/davezuko))
- Add Rating Component [\#339](https://github.com/Semantic-Org/Semantic-UI-React/pull/339) ([levithomason](https://github.com/levithomason))

## [v0.28.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.28.1) (2016-08-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.28.0...v0.28.1)

**Implemented enhancements:**

- Update MenuItem label propType to node [\#373](https://github.com/Semantic-Org/Semantic-UI-React/pull/373) ([Johnsel](https://github.com/Johnsel))

**Merged pull requests:**

- Support React 15.3.0 [\#374](https://github.com/Semantic-Org/Semantic-UI-React/pull/374) ([levithomason](https://github.com/levithomason))

## [v0.28.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.28.0) (2016-08-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.7...v0.28.0)

**Merged pull requests:**

- Add logo and links to docs [\#372](https://github.com/Semantic-Org/Semantic-UI-React/pull/372) ([levithomason](https://github.com/levithomason))
- Update Grid to v1 API [\#351](https://github.com/Semantic-Org/Semantic-UI-React/pull/351) ([layershifter](https://github.com/layershifter))

## [v0.27.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.7) (2016-08-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.6...v0.27.7)

**Fixed bugs:**

- Dropdown \(multiple\) search box does not grow with input [\#370](https://github.com/Semantic-Org/Semantic-UI-React/issues/370)

**Merged pull requests:**

- Dropdown: resize search on change [\#371](https://github.com/Semantic-Org/Semantic-UI-React/pull/371) ([levithomason](https://github.com/levithomason))

## [v0.27.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.6) (2016-08-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.5...v0.27.6)

**Fixed bugs:**

- Importing SELECT causes error [\#368](https://github.com/Semantic-Org/Semantic-UI-React/issues/368)

**Merged pull requests:**

- Label: fix color propType argument [\#369](https://github.com/Semantic-Org/Semantic-UI-React/pull/369) ([levithomason](https://github.com/levithomason))

## [v0.27.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.5) (2016-08-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.4...v0.27.5)

**Implemented enhancements:**

- Support server side rendering [\#364](https://github.com/Semantic-Org/Semantic-UI-React/issues/364)
- Use a transitions enum for transition propTypes [\#164](https://github.com/Semantic-Org/Semantic-UI-React/issues/164)

**Merged pull requests:**

- Support server side rendering [\#365](https://github.com/Semantic-Org/Semantic-UI-React/pull/365) ([levithomason](https://github.com/levithomason))
- Add Flag examples [\#357](https://github.com/Semantic-Org/Semantic-UI-React/pull/357) ([fodurrr](https://github.com/fodurrr))

## [v0.27.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.4) (2016-08-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.3...v0.27.4)

**Implemented enhancements:**

- How to access input value while typing on Dropdown [\#355](https://github.com/Semantic-Org/Semantic-UI-React/issues/355)
- Dropdown: add onSearchChange callback [\#360](https://github.com/Semantic-Org/Semantic-UI-React/pull/360) ([levithomason](https://github.com/levithomason))

**Merged pull requests:**

- Flag: update rest props and propTypes [\#359](https://github.com/Semantic-Org/Semantic-UI-React/pull/359) ([levithomason](https://github.com/levithomason))

## [v0.27.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.3) (2016-08-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.2...v0.27.3)

**Merged pull requests:**

- Flag: fix names of countries [\#358](https://github.com/Semantic-Org/Semantic-UI-React/pull/358) ([layershifter](https://github.com/layershifter))

## [v0.27.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.2) (2016-07-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.1...v0.27.2)

**Implemented enhancements:**

- Don't throw error if jquery is detected [\#352](https://github.com/Semantic-Org/Semantic-UI-React/issues/352)

**Merged pull requests:**

- fix\(jQuery\): weaken window.jQuery error [\#353](https://github.com/Semantic-Org/Semantic-UI-React/pull/353) ([davezuko](https://github.com/davezuko))

## [v0.27.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.1) (2016-07-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.27.0...v0.27.1)

**Merged pull requests:**

- Dropdown propTypes and docs update [\#348](https://github.com/Semantic-Org/Semantic-UI-React/pull/348) ([levithomason](https://github.com/levithomason))

## [v0.27.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.27.0) (2016-07-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.26.0...v0.27.0)

**Implemented enhancements:**

- Dropdown.Item doesn't render [\#346](https://github.com/Semantic-Org/Semantic-UI-React/issues/346)

**Merged pull requests:**

- Support Dropdown sub component markup [\#347](https://github.com/Semantic-Org/Semantic-UI-React/pull/347) ([levithomason](https://github.com/levithomason))

## [v0.26.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.26.0) (2016-07-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.25.1...v0.26.0)

**Merged pull requests:**

- Icon Component updated to v1 API [\#343](https://github.com/Semantic-Org/Semantic-UI-React/pull/343) ([levithomason](https://github.com/levithomason))

## [v0.25.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.25.1) (2016-07-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.25.0...v0.25.1)

**Fixed bugs:**

- Error trying to run in webpack cannot resolve module 'utils/Meta' [\#340](https://github.com/Semantic-Org/Semantic-UI-React/issues/340)
- Fixed broken reference to utils/Meta [\#342](https://github.com/Semantic-Org/Semantic-UI-React/pull/342) ([tslater](https://github.com/tslater))

**Merged pull requests:**

- Fix import path in Breadcrumb [\#341](https://github.com/Semantic-Org/Semantic-UI-React/pull/341) ([layershifter](https://github.com/layershifter))

## [v0.25.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.25.0) (2016-07-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.24.1...v0.25.0)

**Merged pull requests:**

- Cleanup docs for Loader [\#338](https://github.com/Semantic-Org/Semantic-UI-React/pull/338) ([layershifter](https://github.com/layershifter))
- Add doc site routes [\#337](https://github.com/Semantic-Org/Semantic-UI-React/pull/337) ([levithomason](https://github.com/levithomason))
- Update Statistic to v1 API [\#334](https://github.com/Semantic-Org/Semantic-UI-React/pull/334) ([layershifter](https://github.com/layershifter))

## [v0.24.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.24.1) (2016-07-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.24.0...v0.24.1)

## [v0.24.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.24.0) (2016-07-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.23.0...v0.24.0)

**Implemented enhancements:**

- \<Breadcrumb /\> Component [\#184](https://github.com/Semantic-Org/Semantic-UI-React/issues/184)
- Add Breadcrumb component [\#321](https://github.com/Semantic-Org/Semantic-UI-React/pull/321) ([layershifter](https://github.com/layershifter))

## [v0.23.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.23.0) (2016-07-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.22.0...v0.23.0)

**Merged pull requests:**

- Sort docs, use functional META [\#336](https://github.com/Semantic-Org/Semantic-UI-React/pull/336) ([levithomason](https://github.com/levithomason))
- Checkbox without jQuery [\#260](https://github.com/Semantic-Org/Semantic-UI-React/pull/260) ([levithomason](https://github.com/levithomason))

## [v0.22.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.22.0) (2016-07-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.21.1...v0.22.0)

**Implemented enhancements:**

- \<Rail /\> Component [\#181](https://github.com/Semantic-Org/Semantic-UI-React/issues/181)

**Merged pull requests:**

- Add Rail component [\#330](https://github.com/Semantic-Org/Semantic-UI-React/pull/330) ([layershifter](https://github.com/layershifter))

## [v0.21.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.21.1) (2016-07-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.21.0...v0.21.1)

**Implemented enhancements:**

- \<Loader /\> Component [\#180](https://github.com/Semantic-Org/Semantic-UI-React/issues/180)

**Fixed bugs:**

- Setting localStorage throws in Safari private mode [\#332](https://github.com/Semantic-Org/Semantic-UI-React/issues/332)

**Merged pull requests:**

- Fix Safari private mode localStorage [\#333](https://github.com/Semantic-Org/Semantic-UI-React/pull/333) ([levithomason](https://github.com/levithomason))
- fix\(Contributing\): typo correction [\#331](https://github.com/Semantic-Org/Semantic-UI-React/pull/331) ([kyleturco](https://github.com/kyleturco))

## [v0.21.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.21.0) (2016-07-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.20.0...v0.21.0)

**Implemented enhancements:**

- Add Loader component [\#328](https://github.com/Semantic-Org/Semantic-UI-React/pull/328) ([layershifter](https://github.com/layershifter))

## [v0.20.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.20.0) (2016-07-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.19.0...v0.20.0)

**Merged pull requests:**

- Progress without jQuery [\#324](https://github.com/Semantic-Org/Semantic-UI-React/pull/324) ([levithomason](https://github.com/levithomason))

## [v0.19.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.19.0) (2016-07-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.18.0...v0.19.0)

**Implemented enhancements:**

- \<Flag /\> Component [\#177](https://github.com/Semantic-Org/Semantic-UI-React/issues/177)

**Fixed bugs:**

- Form: Uncaught TypeError: this.element.form is not a function [\#326](https://github.com/Semantic-Org/Semantic-UI-React/issues/326)
- Temporarily bundle jQuery and SUI JS [\#327](https://github.com/Semantic-Org/Semantic-UI-React/pull/327) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Gitter [\#329](https://github.com/Semantic-Org/Semantic-UI-React/issues/329)

## [v0.18.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.18.0) (2016-07-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.17.0...v0.18.0)

**Implemented enhancements:**

- Add Flag component  [\#322](https://github.com/Semantic-Org/Semantic-UI-React/pull/322) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- Add "all" custom prop type and fix issues [\#323](https://github.com/Semantic-Org/Semantic-UI-React/pull/323) ([levithomason](https://github.com/levithomason))

## [v0.17.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.17.0) (2016-07-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.4...v0.17.0)

**Implemented enhancements:**

- \<Accordion /\> Component [\#189](https://github.com/Semantic-Org/Semantic-UI-React/issues/189)
- ListItem updates and fixes [\#102](https://github.com/Semantic-Org/Semantic-UI-React/issues/102)
- Add Accordion Component [\#246](https://github.com/Semantic-Org/Semantic-UI-React/pull/246) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Setting NODE\_ENV and $\(npm bin\) on Windows [\#315](https://github.com/Semantic-Org/Semantic-UI-React/issues/315)
- Create Contributing Guidelines [\#314](https://github.com/Semantic-Org/Semantic-UI-React/issues/314)
- Support Windows env var assignments [\#313](https://github.com/Semantic-Org/Semantic-UI-React/issues/313)
- Compilation issue with docgenInfo.json \(windows\) [\#307](https://github.com/Semantic-Org/Semantic-UI-React/issues/307)
- File docgenInfo.json missing from 'docs/app' [\#304](https://github.com/Semantic-Org/Semantic-UI-React/issues/304)
- Better document component className buildup methods [\#282](https://github.com/Semantic-Org/Semantic-UI-React/issues/282)

**Merged pull requests:**

- Drop babel-node from build process [\#320](https://github.com/Semantic-Org/Semantic-UI-React/pull/320) ([levithomason](https://github.com/levithomason))
- Add npm badge and update description [\#318](https://github.com/Semantic-Org/Semantic-UI-React/pull/318) ([levithomason](https://github.com/levithomason))
- Add CONTRIBUTING guidelines [\#317](https://github.com/Semantic-Org/Semantic-UI-React/pull/317) ([levithomason](https://github.com/levithomason))
- Supporting env var assignments on Windows [\#316](https://github.com/Semantic-Org/Semantic-UI-React/pull/316) ([joshuazmiller](https://github.com/joshuazmiller))
- Fix getComponentDocInfo docPath on windows [\#312](https://github.com/Semantic-Org/Semantic-UI-React/pull/312) ([levithomason](https://github.com/levithomason))

## [v0.16.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.4) (2016-06-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.3...v0.16.4)

**Fixed bugs:**

- Relax Dropdown CWRP value error for multiple dropdowns [\#309](https://github.com/Semantic-Org/Semantic-UI-React/issues/309)

## [v0.16.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.3) (2016-06-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.2...v0.16.3)

**Closed issues:**

- Introducing Semantic-UI-React-Storybook [\#308](https://github.com/Semantic-Org/Semantic-UI-React/issues/308)
- Update List to v1 API [\#306](https://github.com/Semantic-Org/Semantic-UI-React/issues/306)
- Missing dependencies in package.json [\#303](https://github.com/Semantic-Org/Semantic-UI-React/issues/303)
- Would love to contribute [\#302](https://github.com/Semantic-Org/Semantic-UI-React/issues/302)
- Remove sd-\* classes [\#293](https://github.com/Semantic-Org/Semantic-UI-React/issues/293)

**Merged pull requests:**

- Fix dropdown set value and error [\#310](https://github.com/Semantic-Org/Semantic-UI-React/pull/310) ([levithomason](https://github.com/levithomason))
- Fix input action examples [\#305](https://github.com/Semantic-Org/Semantic-UI-React/pull/305) ([levithomason](https://github.com/levithomason))
- Remove sd-\* classNames [\#301](https://github.com/Semantic-Org/Semantic-UI-React/pull/301) ([levithomason](https://github.com/levithomason))

## [v0.16.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.2) (2016-06-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.1...v0.16.2)

## [v0.16.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.1) (2016-06-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.16.0...v0.16.1)

**Implemented enhancements:**

- Label corner without value [\#292](https://github.com/Semantic-Org/Semantic-UI-React/issues/292)
- Add Label "basic" option [\#289](https://github.com/Semantic-Org/Semantic-UI-React/pull/289) ([levithomason](https://github.com/levithomason))
- Header Component updated to v1 API [\#278](https://github.com/Semantic-Org/Semantic-UI-React/pull/278) ([jamiehill](https://github.com/jamiehill))

**Fixed bugs:**

- Update doc examples [\#290](https://github.com/Semantic-Org/Semantic-UI-React/pull/290) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Disable debug logs [\#298](https://github.com/Semantic-Org/Semantic-UI-React/issues/298)
- Progress Error: this.element.progress is not a function [\#297](https://github.com/Semantic-Org/Semantic-UI-React/issues/297)

**Merged pull requests:**

- Fix debug dependency [\#300](https://github.com/Semantic-Org/Semantic-UI-React/pull/300) ([levithomason](https://github.com/levithomason))
- Debug on/off instructions [\#299](https://github.com/Semantic-Org/Semantic-UI-React/pull/299) ([levithomason](https://github.com/levithomason))
- Label allow bool corner prop [\#294](https://github.com/Semantic-Org/Semantic-UI-React/pull/294) ([levithomason](https://github.com/levithomason))
- Extend semanticUtils [\#288](https://github.com/Semantic-Org/Semantic-UI-React/pull/288) ([levithomason](https://github.com/levithomason))

## [v0.16.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.16.0) (2016-06-26)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.15.2...v0.16.0)

**Implemented enhancements:**

- Container Component updated to v1 API [\#277](https://github.com/Semantic-Org/Semantic-UI-React/pull/277) ([jamiehill](https://github.com/jamiehill))

**Merged pull requests:**

- "aligned" prop util and common test [\#285](https://github.com/Semantic-Org/Semantic-UI-React/pull/285) ([levithomason](https://github.com/levithomason))

## [v0.15.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.15.2) (2016-06-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.15.1...v0.15.2)

**Merged pull requests:**

- Add ability to remove dropdown items on backspace [\#283](https://github.com/Semantic-Org/Semantic-UI-React/pull/283) ([ianunruh](https://github.com/ianunruh))

## [v0.15.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.15.1) (2016-06-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.15.0...v0.15.1)

**Fixed bugs:**

- Unlisted peer dependency on react-addons-create-fragment [\#274](https://github.com/Semantic-Org/Semantic-UI-React/issues/274)

**Merged pull requests:**

- Remove create fragment dependency [\#275](https://github.com/Semantic-Org/Semantic-UI-React/pull/275) ([levithomason](https://github.com/levithomason))

## [v0.15.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.15.0) (2016-06-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.14.1...v0.15.0)

**Implemented enhancements:**

- Update Divider to v1 API [\#262](https://github.com/Semantic-Org/Semantic-UI-React/issues/262)
- Divider Component updated to v1 API [\#268](https://github.com/Semantic-Org/Semantic-UI-React/pull/268) ([jamiehill](https://github.com/jamiehill))

**Closed issues:**

- Remove console.group [\#272](https://github.com/Semantic-Org/Semantic-UI-React/issues/272)

**Merged pull requests:**

- Remove console.group\* usage [\#273](https://github.com/Semantic-Org/Semantic-UI-React/pull/273) ([levithomason](https://github.com/levithomason))
- Remove outdated docs [\#271](https://github.com/Semantic-Org/Semantic-UI-React/pull/271) ([levithomason](https://github.com/levithomason))
- "How can I help?" README update [\#270](https://github.com/Semantic-Org/Semantic-UI-React/pull/270) ([levithomason](https://github.com/levithomason))
- Update circle.yml [\#267](https://github.com/Semantic-Org/Semantic-UI-React/pull/267) ([levithomason](https://github.com/levithomason))

## [v0.14.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.14.1) (2016-06-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.14.0...v0.14.1)

**Fixed bugs:**

- Add React 15 to peer deps [\#266](https://github.com/Semantic-Org/Semantic-UI-React/pull/266) ([levithomason](https://github.com/levithomason))

**Closed issues:**

- Published NPM package executes dev dependencies \(HMR\) [\#264](https://github.com/Semantic-Org/Semantic-UI-React/issues/264)
- Publishing latest versions to NPM [\#261](https://github.com/Semantic-Org/Semantic-UI-React/issues/261)

**Merged pull requests:**

- Publish the production build [\#265](https://github.com/Semantic-Org/Semantic-UI-React/pull/265) ([levithomason](https://github.com/levithomason))

## [v0.14.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.14.0) (2016-06-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.4...v0.14.0)

**Implemented enhancements:**

- Warn when duplicating classes [\#96](https://github.com/Semantic-Org/Semantic-UI-React/issues/96)
- Add toggle button functionality [\#43](https://github.com/Semantic-Org/Semantic-UI-React/issues/43)
- Use local modules in dev [\#29](https://github.com/Semantic-Org/Semantic-UI-React/issues/29)
- Add animation to Modal Show AND Modal Hide [\#13](https://github.com/Semantic-Org/Semantic-UI-React/issues/13)

**Fixed bugs:**

- Doc site is broken [\#238](https://github.com/Semantic-Org/Semantic-UI-React/issues/238)
- \[Segment\] Right floated segment not floating [\#120](https://github.com/Semantic-Org/Semantic-UI-React/issues/120)

**Closed issues:**

- how to do pull request on docs? [\#258](https://github.com/Semantic-Org/Semantic-UI-React/issues/258)
- CSS with stardust [\#257](https://github.com/Semantic-Org/Semantic-UI-React/issues/257)
- Stardust's dependency on Semantic UI [\#256](https://github.com/Semantic-Org/Semantic-UI-React/issues/256)
- Slack integration test [\#253](https://github.com/Semantic-Org/Semantic-UI-React/issues/253)
- Add README bullet points explaining the point of Stardust [\#166](https://github.com/Semantic-Org/Semantic-UI-React/issues/166)
- Set value instead of object for serializing Form data [\#75](https://github.com/Semantic-Org/Semantic-UI-React/issues/75)
- Conformance test for children/description/text props [\#71](https://github.com/Semantic-Org/Semantic-UI-React/issues/71)
- Code coverage [\#63](https://github.com/Semantic-Org/Semantic-UI-React/issues/63)

**Merged pull requests:**

- Show index.html in usage [\#259](https://github.com/Semantic-Org/Semantic-UI-React/pull/259) ([levithomason](https://github.com/levithomason))
- Improve webpack performance [\#255](https://github.com/Semantic-Org/Semantic-UI-React/pull/255) ([levithomason](https://github.com/levithomason))
- Support multiple dropdown type [\#254](https://github.com/Semantic-Org/Semantic-UI-React/pull/254) ([levithomason](https://github.com/levithomason))
- Defensively handle component \_meta [\#252](https://github.com/Semantic-Org/Semantic-UI-React/pull/252) ([levithomason](https://github.com/levithomason))
- Fix floated Segment examples [\#251](https://github.com/Semantic-Org/Semantic-UI-React/pull/251) ([levithomason](https://github.com/levithomason))
- User prop spreading util [\#250](https://github.com/Semantic-Org/Semantic-UI-React/pull/250) ([levithomason](https://github.com/levithomason))
- Setup doc site router [\#249](https://github.com/Semantic-Org/Semantic-UI-React/pull/249) ([levithomason](https://github.com/levithomason))
- Update README [\#248](https://github.com/Semantic-Org/Semantic-UI-React/pull/248) ([levithomason](https://github.com/levithomason))
- Setup coverage [\#245](https://github.com/Semantic-Org/Semantic-UI-React/pull/245) ([levithomason](https://github.com/levithomason))
- Use enzyme in all tests [\#244](https://github.com/Semantic-Org/Semantic-UI-React/pull/244) ([levithomason](https://github.com/levithomason))
- html-webpack-plugin@2.17.0 untested ⚠️ [\#242](https://github.com/Semantic-Org/Semantic-UI-React/pull/242) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- eslint@2.10.1 untested ⚠️ [\#241](https://github.com/Semantic-Org/Semantic-UI-React/pull/241) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Hot reload in dev only [\#240](https://github.com/Semantic-Org/Semantic-UI-React/pull/240) ([levithomason](https://github.com/levithomason))
- Remove unused Input ref [\#239](https://github.com/Semantic-Org/Semantic-UI-React/pull/239) ([levithomason](https://github.com/levithomason))
- html-webpack-plugin@2.16.2 untested ⚠️ [\#237](https://github.com/Semantic-Org/Semantic-UI-React/pull/237) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- babel-plugin-lodash@3.1.4 untested ⚠️ [\#236](https://github.com/Semantic-Org/Semantic-UI-React/pull/236) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update babel-plugin-lodash to version 3.1.3 🚀 [\#235](https://github.com/Semantic-Org/Semantic-UI-React/pull/235) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Update all dependencies 🌴 [\#234](https://github.com/Semantic-Org/Semantic-UI-React/pull/234) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
- Debug utility [\#233](https://github.com/Semantic-Org/Semantic-UI-React/pull/233) ([levithomason](https://github.com/levithomason))
- Use process.env instead of globals [\#232](https://github.com/Semantic-Org/Semantic-UI-React/pull/232) ([levithomason](https://github.com/levithomason))
- Remove keyboard event polyfill [\#231](https://github.com/Semantic-Org/Semantic-UI-React/pull/231) ([levithomason](https://github.com/levithomason))

## [v0.12.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.4) (2016-05-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.3...v0.12.4)

**Closed issues:**

- Solidify component API for className buildup [\#208](https://github.com/Semantic-Org/Semantic-UI-React/issues/208)
- \<Label /\> Component [\#179](https://github.com/Semantic-Org/Semantic-UI-React/issues/179)
- \<Icon /\> Component [\#178](https://github.com/Semantic-Org/Semantic-UI-React/issues/178)

**Merged pull requests:**

- Use main fork of karma phantomjs shim [\#230](https://github.com/Semantic-Org/Semantic-UI-React/pull/230) ([levithomason](https://github.com/levithomason))
- Remove babel-polyfill [\#229](https://github.com/Semantic-Org/Semantic-UI-React/pull/229) ([levithomason](https://github.com/levithomason))
- Add babel-plugin-lodash for smaller bundles [\#228](https://github.com/Semantic-Org/Semantic-UI-React/pull/228) ([levithomason](https://github.com/levithomason))
- Remove eslint-loader, for performance [\#227](https://github.com/Semantic-Org/Semantic-UI-React/pull/227) ([levithomason](https://github.com/levithomason))
- Dropdown without jQuery [\#226](https://github.com/Semantic-Org/Semantic-UI-React/pull/226) ([levithomason](https://github.com/levithomason))
- Add Select component [\#225](https://github.com/Semantic-Org/Semantic-UI-React/pull/225) ([levithomason](https://github.com/levithomason))
- AutoControlledComponent [\#224](https://github.com/Semantic-Org/Semantic-UI-React/pull/224) ([levithomason](https://github.com/levithomason))
- Common test for events [\#223](https://github.com/Semantic-Org/Semantic-UI-React/pull/223) ([levithomason](https://github.com/levithomason))
- Component utils [\#222](https://github.com/Semantic-Org/Semantic-UI-React/pull/222) ([levithomason](https://github.com/levithomason))
- List item prop renderers [\#221](https://github.com/Semantic-Org/Semantic-UI-React/pull/221) ([levithomason](https://github.com/levithomason))
- Update docs [\#220](https://github.com/Semantic-Org/Semantic-UI-React/pull/220) ([levithomason](https://github.com/levithomason))
- Update testing rig [\#219](https://github.com/Semantic-Org/Semantic-UI-React/pull/219) ([levithomason](https://github.com/levithomason))
- Create common tests [\#217](https://github.com/Semantic-Org/Semantic-UI-React/pull/217) ([levithomason](https://github.com/levithomason))
- Build system fixes [\#216](https://github.com/Semantic-Org/Semantic-UI-React/pull/216) ([levithomason](https://github.com/levithomason))
- Label component [\#215](https://github.com/Semantic-Org/Semantic-UI-React/pull/215) ([levithomason](https://github.com/levithomason))
- Setup enzyme for testing [\#214](https://github.com/Semantic-Org/Semantic-UI-React/pull/214) ([levithomason](https://github.com/levithomason))
- Cleanup deprecated usage and warnings [\#213](https://github.com/Semantic-Org/Semantic-UI-React/pull/213) ([levithomason](https://github.com/levithomason))
- Fix and simplify component doc info [\#211](https://github.com/Semantic-Org/Semantic-UI-React/pull/211) ([levithomason](https://github.com/levithomason))
- Cleanup semis now that Babel is sane again [\#210](https://github.com/Semantic-Org/Semantic-UI-React/pull/210) ([levithomason](https://github.com/levithomason))
- Update build system [\#209](https://github.com/Semantic-Org/Semantic-UI-React/pull/209) ([levithomason](https://github.com/levithomason))
- Update dependencies [\#207](https://github.com/Semantic-Org/Semantic-UI-React/pull/207) ([levithomason](https://github.com/levithomason))
- Icon component [\#205](https://github.com/Semantic-Org/Semantic-UI-React/pull/205) ([levithomason](https://github.com/levithomason))

## [v0.13.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.3) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.2...v0.13.3)

## [v0.13.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.2) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.1...v0.13.2)

## [v0.13.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.1) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.13.0...v0.13.1)

## [v0.13.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.13.0) (2016-03-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.3...v0.13.0)

**Implemented enhancements:**

- Support all dropdown types [\#4](https://github.com/Semantic-Org/Semantic-UI-React/issues/4)

**Closed issues:**

- Dropdown fails to open on initial render with dynamic className change [\#149](https://github.com/Semantic-Org/Semantic-UI-React/issues/149)

**Merged pull requests:**

- Stage branches and improve workflow [\#204](https://github.com/Semantic-Org/Semantic-UI-React/pull/204) ([levithomason](https://github.com/levithomason))
- Fix conformance tests [\#171](https://github.com/Semantic-Org/Semantic-UI-React/pull/171) ([levithomason](https://github.com/levithomason))
- Support full dropdown functionality [\#168](https://github.com/Semantic-Org/Semantic-UI-React/pull/168) ([levithomason](https://github.com/levithomason))

## [v0.12.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.3) (2016-03-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.2...v0.12.3)

## [v0.12.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.2) (2016-03-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.1...v0.12.2)

**Closed issues:**

- Webpack build error - `Module parse failed` [\#173](https://github.com/Semantic-Org/Semantic-UI-React/issues/173)
- Create Semantic UI Card Component [\#146](https://github.com/Semantic-Org/Semantic-UI-React/issues/146)

**Merged pull requests:**

- Build package on prepublish [\#176](https://github.com/Semantic-Org/Semantic-UI-React/pull/176) ([levithomason](https://github.com/levithomason))
- Properly split dependencies [\#172](https://github.com/Semantic-Org/Semantic-UI-React/pull/172) ([levithomason](https://github.com/levithomason))

## [v0.12.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.1) (2016-02-15)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.12.0...v0.12.1)

**Merged pull requests:**

- Prefix remaining subcomponents with parent name [\#170](https://github.com/Semantic-Org/Semantic-UI-React/pull/170) ([levithomason](https://github.com/levithomason))
- Make Field and Fields subcomponents of Form [\#169](https://github.com/Semantic-Org/Semantic-UI-React/pull/169) ([levithomason](https://github.com/levithomason))

## [v0.12.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.12.0) (2016-02-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.11.1...v0.12.0)

**Closed issues:**

- Use 0.0.0.0 in webpack dev server [\#135](https://github.com/Semantic-Org/Semantic-UI-React/issues/135)
- Restructure sub components [\#99](https://github.com/Semantic-Org/Semantic-UI-React/issues/99)

**Merged pull requests:**

- Add subcomponents [\#167](https://github.com/Semantic-Org/Semantic-UI-React/pull/167) ([levithomason](https://github.com/levithomason))

## [v0.11.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.11.1) (2016-02-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.11.0...v0.11.1)

**Fixed bugs:**

- Form props are not passed to settings \(prevent submit\) [\#160](https://github.com/Semantic-Org/Semantic-UI-React/issues/160)
- \[Segment\] Piled Segments not piling [\#116](https://github.com/Semantic-Org/Semantic-UI-React/issues/116)
- Radium integration Issue [\#104](https://github.com/Semantic-Org/Semantic-UI-React/issues/104)

**Merged pull requests:**

- Support Form settings and callback props [\#165](https://github.com/Semantic-Org/Semantic-UI-React/pull/165) ([levithomason](https://github.com/levithomason))
- Update linter \(eslint-config-ta\) [\#163](https://github.com/Semantic-Org/Semantic-UI-React/pull/163) ([levithomason](https://github.com/levithomason))
- Update doc site Semantic UI to 2.1.8 [\#162](https://github.com/Semantic-Org/Semantic-UI-React/pull/162) ([levithomason](https://github.com/levithomason))

## [v0.11.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.11.0) (2016-02-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.10.2...v0.11.0)

**Implemented enhancements:**

- Support progress module [\#161](https://github.com/Semantic-Org/Semantic-UI-React/pull/161) ([eanplatter](https://github.com/eanplatter))

## [v0.10.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.10.2) (2016-02-01)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.10.1...v0.10.2)

**Fixed bugs:**

- Change Dropdown to allow non-unique values. [\#159](https://github.com/Semantic-Org/Semantic-UI-React/pull/159) ([eanplatter](https://github.com/eanplatter))

## [v0.10.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.10.1) (2016-01-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.10.0...v0.10.1)

## [v0.10.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.10.0) (2016-01-29)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.9...v0.10.0)

**Implemented enhancements:**

- Selectable table rows [\#155](https://github.com/Semantic-Org/Semantic-UI-React/pull/155) ([levithomason](https://github.com/levithomason))

**Merged pull requests:**

- Rename table selectedRows =\> defaultSelectedRows [\#158](https://github.com/Semantic-Org/Semantic-UI-React/pull/158) ([levithomason](https://github.com/levithomason))
- Add selectable table example [\#157](https://github.com/Semantic-Org/Semantic-UI-React/pull/157) ([levithomason](https://github.com/levithomason))
- Remove unused s3 sync in build [\#156](https://github.com/Semantic-Org/Semantic-UI-React/pull/156) ([levithomason](https://github.com/levithomason))
- Automatic sortable table class [\#154](https://github.com/Semantic-Org/Semantic-UI-React/pull/154) ([levithomason](https://github.com/levithomason))
- Use ta-scripts [\#153](https://github.com/Semantic-Org/Semantic-UI-React/pull/153) ([levithomason](https://github.com/levithomason))

## [v0.9.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.9) (2016-01-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.8...v0.9.9)

## [v0.9.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.8) (2016-01-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.7...v0.9.8)

**Merged pull requests:**

- Revert "Optimizes display performance of the Input render method" [\#152](https://github.com/Semantic-Org/Semantic-UI-React/pull/152) ([jhabdas](https://github.com/jhabdas))

## [v0.9.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.7) (2016-01-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.6...v0.9.7)

**Merged pull requests:**

- Optimizes display performance of the Input render method [\#151](https://github.com/Semantic-Org/Semantic-UI-React/pull/151) ([jhabdas](https://github.com/jhabdas))

## [v0.9.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.6) (2016-01-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.5...v0.9.6)

**Merged pull requests:**

- feat\(Table\): accept sort/onSortChange properties to display sorted state [\#148](https://github.com/Semantic-Org/Semantic-UI-React/pull/148) ([davezuko](https://github.com/davezuko))

## [v0.9.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.5) (2016-01-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.4...v0.9.5)

**Merged pull requests:**

- chore\(Dropdown\): add props for semantic settings [\#147](https://github.com/Semantic-Org/Semantic-UI-React/pull/147) ([davezuko](https://github.com/davezuko))

## [v0.9.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.4) (2016-01-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.2...v0.9.4)

**Fixed bugs:**

- add plugin method to Dropdown component [\#145](https://github.com/Semantic-Org/Semantic-UI-React/pull/145) ([athurman](https://github.com/athurman))

**Closed issues:**

- \<Item /\> not rendering at all [\#144](https://github.com/Semantic-Org/Semantic-UI-React/issues/144)
- \[Form Validation\] Regular Expression Validator not working [\#143](https://github.com/Semantic-Org/Semantic-UI-React/issues/143)
- Change webpack devtool to source-map [\#136](https://github.com/Semantic-Org/Semantic-UI-React/issues/136)

## [v0.9.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.2) (2016-01-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.1...v0.9.2)

**Merged pull requests:**

- fix\(imports\): remove resolve.root config in webpack [\#140](https://github.com/Semantic-Org/Semantic-UI-React/pull/140) ([davezuko](https://github.com/davezuko))
- Update compatible engines [\#139](https://github.com/Semantic-Org/Semantic-UI-React/pull/139) ([jhabdas](https://github.com/jhabdas))
- Improve README Documentation [\#134](https://github.com/Semantic-Org/Semantic-UI-React/pull/134) ([jhabdas](https://github.com/jhabdas))

## [v0.9.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.1) (2015-12-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.9.0...v0.9.1)

**Closed issues:**

- GitHub Pages page is down [\#129](https://github.com/Semantic-Org/Semantic-UI-React/issues/129)

**Merged pull requests:**

- change ref to element [\#138](https://github.com/Semantic-Org/Semantic-UI-React/pull/138) ([eanplatter](https://github.com/eanplatter))
- Update and fix doc site deploy [\#137](https://github.com/Semantic-Org/Semantic-UI-React/pull/137) ([levithomason](https://github.com/levithomason))
- Add Roadmap [\#133](https://github.com/Semantic-Org/Semantic-UI-React/pull/133) ([jhabdas](https://github.com/jhabdas))

## [v0.9.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.9.0) (2015-12-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.8.1...v0.9.0)

**Implemented enhancements:**

- Fix Source Maps [\#119](https://github.com/Semantic-Org/Semantic-UI-React/issues/119)
- Support progress bars [\#118](https://github.com/Semantic-Org/Semantic-UI-React/issues/118)
- Generate changelog on deploy [\#101](https://github.com/Semantic-Org/Semantic-UI-React/issues/101)

**Fixed bugs:**

- Only a subset of tests running [\#126](https://github.com/Semantic-Org/Semantic-UI-React/issues/126)
- Placeholder Text Turns Black on Control Focus [\#123](https://github.com/Semantic-Org/Semantic-UI-React/issues/123)

**Closed issues:**

- Relax jsdoc validation [\#105](https://github.com/Semantic-Org/Semantic-UI-React/issues/105)
- Add Webpack config to README [\#87](https://github.com/Semantic-Org/Semantic-UI-React/issues/87)
- Need Generic Select Component [\#78](https://github.com/Semantic-Org/Semantic-UI-React/issues/78)
- Solidify Form validation and submission pattern [\#66](https://github.com/Semantic-Org/Semantic-UI-React/issues/66)

**Merged pull requests:**

- Upgrade to babel6 [\#132](https://github.com/Semantic-Org/Semantic-UI-React/pull/132) ([levithomason](https://github.com/levithomason))
- Add form plugin [\#130](https://github.com/Semantic-Org/Semantic-UI-React/pull/130) ([levithomason](https://github.com/levithomason))
- Remove Progress module unit test exclusivity. Fixes \#126. [\#127](https://github.com/Semantic-Org/Semantic-UI-React/pull/127) ([jhabdas](https://github.com/jhabdas))

## [v0.8.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.8.1) (2015-12-07)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.8.0...v0.8.1)

**Implemented enhancements:**

- \<Segments /\> component [\#114](https://github.com/Semantic-Org/Semantic-UI-React/issues/114)
- Add Progress Component [\#121](https://github.com/Semantic-Org/Semantic-UI-React/pull/121) ([eanplatter](https://github.com/eanplatter))

**Closed issues:**

- Segment examples [\#112](https://github.com/Semantic-Org/Semantic-UI-React/issues/112)

**Merged pull requests:**

- Setup CircleCI [\#124](https://github.com/Semantic-Org/Semantic-UI-React/pull/124) ([levithomason](https://github.com/levithomason))
- Segment Examples [\#113](https://github.com/Semantic-Org/Semantic-UI-React/pull/113) ([jhabdas](https://github.com/jhabdas))

## [v0.8.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.8.0) (2015-11-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.7.1...v0.8.0)

**Implemented enhancements:**

- Add \<Header /\> component [\#107](https://github.com/Semantic-Org/Semantic-UI-React/issues/107)
- Add \<Buttons /\> [\#97](https://github.com/Semantic-Org/Semantic-UI-React/issues/97)
- A \<Divider /\> element. [\#49](https://github.com/Semantic-Org/Semantic-UI-React/issues/49)

**Closed issues:**

- Duplicate random data causing intermittent Table test fail [\#95](https://github.com/Semantic-Org/Semantic-UI-React/issues/95)
- Cleanup redundancy in tests [\#60](https://github.com/Semantic-Org/Semantic-UI-React/issues/60)

**Merged pull requests:**

- Add Statistic and Statistics components [\#117](https://github.com/Semantic-Org/Semantic-UI-React/pull/117) ([levithomason](https://github.com/levithomason))
- Organize doc menu into groups [\#110](https://github.com/Semantic-Org/Semantic-UI-React/pull/110) ([levithomason](https://github.com/levithomason))
- Feature/header component [\#109](https://github.com/Semantic-Org/Semantic-UI-React/pull/109) ([kyleturco](https://github.com/kyleturco))
- Update build and deploy [\#108](https://github.com/Semantic-Org/Semantic-UI-React/pull/108) ([levithomason](https://github.com/levithomason))
- Feature/buttons component [\#106](https://github.com/Semantic-Org/Semantic-UI-React/pull/106) ([kyleturco](https://github.com/kyleturco))
- Feature/divider component [\#103](https://github.com/Semantic-Org/Semantic-UI-React/pull/103) ([kyleturco](https://github.com/kyleturco))
- Feature/list examples [\#100](https://github.com/Semantic-Org/Semantic-UI-React/pull/100) ([kyleturco](https://github.com/kyleturco))
- Fix test warnings [\#90](https://github.com/Semantic-Org/Semantic-UI-React/pull/90) ([levithomason](https://github.com/levithomason))

## [v0.7.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.7.1) (2015-10-28)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.7.0...v0.7.1)

**Implemented enhancements:**

- Support Fields element [\#36](https://github.com/Semantic-Org/Semantic-UI-React/issues/36)
- Create Container Element to Handle Container classes [\#10](https://github.com/Semantic-Org/Semantic-UI-React/issues/10)

**Fixed bugs:**

- Nesting an \<Input /\> in a \<Field /\> [\#38](https://github.com/Semantic-Org/Semantic-UI-React/issues/38)

**Closed issues:**

- Conformance test for element and plugin [\#72](https://github.com/Semantic-Org/Semantic-UI-React/issues/72)

**Merged pull requests:**

- Fields component and Form examples [\#94](https://github.com/Semantic-Org/Semantic-UI-React/pull/94) ([levithomason](https://github.com/levithomason))
- Checkbox plugin [\#80](https://github.com/Semantic-Org/Semantic-UI-React/pull/80) ([levithomason](https://github.com/levithomason))

## [v0.7.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.7.0) (2015-10-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.3...v0.7.0)

**Implemented enhancements:**

- Input does not handle labels [\#61](https://github.com/Semantic-Org/Semantic-UI-React/issues/61)
- \<List /\> component [\#50](https://github.com/Semantic-Org/Semantic-UI-React/issues/50)
- Remove all styles from stardust [\#27](https://github.com/Semantic-Org/Semantic-UI-React/issues/27)

**Fixed bugs:**

- Select Input Needs to be Controlled Component [\#48](https://github.com/Semantic-Org/Semantic-UI-React/issues/48)

**Closed issues:**

- Fubhub integration is needed. [\#88](https://github.com/Semantic-Org/Semantic-UI-React/issues/88)
- Drop /dist build [\#86](https://github.com/Semantic-Org/Semantic-UI-React/issues/86)
- Tests for customPropType utility [\#76](https://github.com/Semantic-Org/Semantic-UI-React/issues/76)
- getSpreadableProps util [\#69](https://github.com/Semantic-Org/Semantic-UI-React/issues/69)

**Merged pull requests:**

- Remove dist [\#89](https://github.com/Semantic-Org/Semantic-UI-React/pull/89) ([levithomason](https://github.com/levithomason))
- add getUnhandledProps util [\#85](https://github.com/Semantic-Org/Semantic-UI-React/pull/85) ([levithomason](https://github.com/levithomason))

## [v0.6.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.3) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.2...v0.6.3)

**Merged pull requests:**

- update to react 14 [\#83](https://github.com/Semantic-Org/Semantic-UI-React/pull/83) ([levithomason](https://github.com/levithomason))

## [v0.6.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.2) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.1...v0.6.2)

## [v0.6.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.1) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.6.0...v0.6.1)

**Merged pull requests:**

- Add dist to package [\#82](https://github.com/Semantic-Org/Semantic-UI-React/pull/82) ([levithomason](https://github.com/levithomason))
- Build library and docs on deploy [\#81](https://github.com/Semantic-Org/Semantic-UI-React/pull/81) ([levithomason](https://github.com/levithomason))

## [v0.6.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.6.0) (2015-10-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.5.1...v0.6.0)

**Closed issues:**

- Static meta info object [\#70](https://github.com/Semantic-Org/Semantic-UI-React/issues/70)
- CustomPropTypes util [\#68](https://github.com/Semantic-Org/Semantic-UI-React/issues/68)

**Merged pull requests:**

- Fix paths and deps [\#79](https://github.com/Semantic-Org/Semantic-UI-React/pull/79) ([levithomason](https://github.com/levithomason))
- Add component meta data [\#77](https://github.com/Semantic-Org/Semantic-UI-React/pull/77) ([levithomason](https://github.com/levithomason))
- Feature/add sd image [\#74](https://github.com/Semantic-Org/Semantic-UI-React/pull/74) ([athurman](https://github.com/athurman))
- Feature/add sd list item [\#73](https://github.com/Semantic-Org/Semantic-UI-React/pull/73) ([athurman](https://github.com/athurman))
- Feature/input examples [\#67](https://github.com/Semantic-Org/Semantic-UI-React/pull/67) ([kyleturco](https://github.com/kyleturco))
- Feature/add sd item [\#65](https://github.com/Semantic-Org/Semantic-UI-React/pull/65) ([athurman](https://github.com/athurman))
- Message component [\#62](https://github.com/Semantic-Org/Semantic-UI-React/pull/62) ([levithomason](https://github.com/levithomason))

## [v0.5.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.5.1) (2015-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.5.0...v0.5.1)

**Implemented enhancements:**

- DATEPICKER [\#23](https://github.com/Semantic-Org/Semantic-UI-React/issues/23)

**Fixed bugs:**

- README needs to say Babel stage 0 [\#28](https://github.com/Semantic-Org/Semantic-UI-React/issues/28)
- Button warning [\#24](https://github.com/Semantic-Org/Semantic-UI-React/issues/24)

**Closed issues:**

- Floated examples break the docs code layout [\#55](https://github.com/Semantic-Org/Semantic-UI-React/issues/55)
- Example display order [\#41](https://github.com/Semantic-Org/Semantic-UI-React/issues/41)
- Component guideline test [\#33](https://github.com/Semantic-Org/Semantic-UI-React/issues/33)
- Replace class usage with attributes. [\#9](https://github.com/Semantic-Org/Semantic-UI-React/issues/9)
- Use default props and params [\#6](https://github.com/Semantic-Org/Semantic-UI-React/issues/6)

**Merged pull requests:**

- Fix package files [\#64](https://github.com/Semantic-Org/Semantic-UI-React/pull/64) ([levithomason](https://github.com/levithomason))
- fix warnings, add class names, necessary updates [\#59](https://github.com/Semantic-Org/Semantic-UI-React/pull/59) ([kyleturco](https://github.com/kyleturco))
- add getting started section to readme [\#58](https://github.com/Semantic-Org/Semantic-UI-React/pull/58) ([levithomason](https://github.com/levithomason))
- Fix floated examples [\#57](https://github.com/Semantic-Org/Semantic-UI-React/pull/57) ([levithomason](https://github.com/levithomason))

## [v0.5.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.5.0) (2015-10-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.4.0...v0.5.0)

**Closed issues:**

- Need component for radio input [\#51](https://github.com/Semantic-Org/Semantic-UI-React/issues/51)

**Merged pull requests:**

- update wercker deploy [\#56](https://github.com/Semantic-Org/Semantic-UI-React/pull/56) ([levithomason](https://github.com/levithomason))
- Feature/new example format [\#54](https://github.com/Semantic-Org/Semantic-UI-React/pull/54) ([kyleturco](https://github.com/kyleturco))
- Conformance Tests [\#53](https://github.com/Semantic-Org/Semantic-UI-React/pull/53) ([levithomason](https://github.com/levithomason))
- Feature/example section [\#52](https://github.com/Semantic-Org/Semantic-UI-React/pull/52) ([levithomason](https://github.com/levithomason))
- Eslint Ignore [\#47](https://github.com/Semantic-Org/Semantic-UI-React/pull/47) ([levithomason](https://github.com/levithomason))
- Feature/button examples [\#45](https://github.com/Semantic-Org/Semantic-UI-React/pull/45) ([kyleturco](https://github.com/kyleturco))
- Table update [\#44](https://github.com/Semantic-Org/Semantic-UI-React/pull/44) ([levithomason](https://github.com/levithomason))

## [v0.4.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.4.0) (2015-10-12)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.3.0...v0.4.0)

**Closed issues:**

- Right side width [\#42](https://github.com/Semantic-Org/Semantic-UI-React/issues/42)

**Merged pull requests:**

- Restructure to Semantic structure [\#40](https://github.com/Semantic-Org/Semantic-UI-React/pull/40) ([levithomason](https://github.com/levithomason))
- Component APIs and Doc Structure [\#39](https://github.com/Semantic-Org/Semantic-UI-React/pull/39) ([levithomason](https://github.com/levithomason))
- Classes & Props: Field [\#37](https://github.com/Semantic-Org/Semantic-UI-React/pull/37) ([levithomason](https://github.com/levithomason))
- Classes & Props: Input [\#35](https://github.com/Semantic-Org/Semantic-UI-React/pull/35) ([levithomason](https://github.com/levithomason))
- Classes & Props: Container/Grid/Row/Column [\#34](https://github.com/Semantic-Org/Semantic-UI-React/pull/34) ([levithomason](https://github.com/levithomason))
- Classes & Props: Checkbox [\#32](https://github.com/Semantic-Org/Semantic-UI-React/pull/32) ([levithomason](https://github.com/levithomason))
- add tests for index.js [\#31](https://github.com/Semantic-Org/Semantic-UI-React/pull/31) ([levithomason](https://github.com/levithomason))
- Doc examples [\#25](https://github.com/Semantic-Org/Semantic-UI-React/pull/25) ([levithomason](https://github.com/levithomason))
- Menu [\#18](https://github.com/Semantic-Org/Semantic-UI-React/pull/18) ([levithomason](https://github.com/levithomason))
- update modal logic [\#11](https://github.com/Semantic-Org/Semantic-UI-React/pull/11) ([athurman](https://github.com/athurman))

## [v0.3.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.3.0) (2015-10-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.2.1...v0.3.0)

**Merged pull requests:**

- Update stardust components [\#20](https://github.com/Semantic-Org/Semantic-UI-React/pull/20) ([athurman](https://github.com/athurman))
- Watch [\#17](https://github.com/Semantic-Org/Semantic-UI-React/pull/17) ([levithomason](https://github.com/levithomason))
- add container and update docs [\#15](https://github.com/Semantic-Org/Semantic-UI-React/pull/15) ([eanplatter](https://github.com/eanplatter))
- Docs link [\#14](https://github.com/Semantic-Org/Semantic-UI-React/pull/14) ([levithomason](https://github.com/levithomason))

## [v0.2.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.2.1) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.2.0...v0.2.1)

## [v0.2.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.2.0) (2015-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.1.7...v0.2.0)

**Closed issues:**

- new issue [\#12](https://github.com/Semantic-Org/Semantic-UI-React/issues/12)

**Merged pull requests:**

- Field options [\#5](https://github.com/Semantic-Org/Semantic-UI-React/pull/5) ([levithomason](https://github.com/levithomason))

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
**Merged pull requests:**

- add wercker.yml [\#8](https://github.com/Semantic-Org/Semantic-UI-React/pull/8) ([levithomason](https://github.com/levithomason))
- use ta-webapp eslint [\#7](https://github.com/Semantic-Org/Semantic-UI-React/pull/7) ([levithomason](https://github.com/levithomason))
- add modal and confirmationmodal components to stardust [\#3](https://github.com/Semantic-Org/Semantic-UI-React/pull/3) ([athurman](https://github.com/athurman))
- Structure [\#1](https://github.com/Semantic-Org/Semantic-UI-React/pull/1) ([eanplatter](https://github.com/eanplatter))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*