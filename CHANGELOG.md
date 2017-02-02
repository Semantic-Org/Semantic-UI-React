# Change Log

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
- Label click for input element \(accessibility\)  [\#980](https://github.com/Semantic-Org/Semantic-UI-React/issues/980)
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
- Search Component: Unknown props error [\#1141](https://github.com/Semantic-Org/Semantic-UI-React/issues/1141)
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
- feat\(AutoControlledComponent\): Default values [\#1066](https://github.com/Semantic-Org/Semantic-UI-React/pull/1066) ([jcarbo](https://github.com/jcarbo))
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
- feat\(Checkbox\): Indeterminate state [\#1043](https://github.com/Semantic-Org/Semantic-UI-React/pull/1043) ([jcarbo](https://github.com/jcarbo))
- fix\(docs\): Fix check icon [\#1042](https://github.com/Semantic-Org/Semantic-UI-React/pull/1042) ([jcarbo](https://github.com/jcarbo))

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

- fix\(Header\): Remove duplicate class [\#1040](https://github.com/Semantic-Org/Semantic-UI-React/pull/1040) ([jcarbo](https://github.com/jcarbo))
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
- breaking\(Form|RatingIcon|Search|SearchResult\): Pass data to event handlers [\#951](https://github.com/Semantic-Org/Semantic-UI-React/pull/951) ([jcarbo](https://github.com/jcarbo))

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

- fix\(Modal\): prevent unnecessary renders [\#973](https://github.com/Semantic-Org/Semantic-UI-React/pull/973) ([jcarbo](https://github.com/jcarbo))
- feat\(StatisticGroup\): Add missing props [\#972](https://github.com/Semantic-Org/Semantic-UI-React/pull/972) ([jcarbo](https://github.com/jcarbo))
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

- feat\(Card\): pass props to onClick [\#950](https://github.com/Semantic-Org/Semantic-UI-React/pull/950) ([jcarbo](https://github.com/jcarbo))
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
- feat\(Modal\): Add closeIcon [\#932](https://github.com/Semantic-Org/Semantic-UI-React/pull/932) ([jcarbo](https://github.com/jcarbo))
- feat\(Button\): Prevent click on disabled button [\#930](https://github.com/Semantic-Org/Semantic-UI-React/pull/930) ([jcarbo](https://github.com/jcarbo))

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
- gulp-html-replace@1.6.2 untested ⚠️ [\#897](https://github.com/Semantic-Org/Semantic-UI-React/pull/897) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
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
- breaking\(AutoControlledProps\): Ignore undefined [\#788](https://github.com/Semantic-Org/Semantic-UI-React/pull/788) ([jcarbo](https://github.com/jcarbo))

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
- feat\(Dropdown\): Enable custom DropdownItem render [\#854](https://github.com/Semantic-Org/Semantic-UI-React/pull/854) ([jcarbo](https://github.com/jcarbo))

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
- style\(Search\): update docs to the latest standards [\#840](https://github.com/Semantic-Org/Semantic-UI-React/pull/840) ([dpkwhan](https://github.com/dpkwhan))
- style\(Checkbox\): update docs to the latest standards [\#839](https://github.com/Semantic-Org/Semantic-UI-React/pull/839) ([dpkwhan](https://github.com/dpkwhan))
- style\(Accordion\): update docs to the latest standards [\#838](https://github.com/Semantic-Org/Semantic-UI-React/pull/838) ([dpkwhan](https://github.com/dpkwhan))
- style\(Menu\): update docs to the latest standards [\#835](https://github.com/Semantic-Org/Semantic-UI-React/pull/835) ([dpkwhan](https://github.com/dpkwhan))

## [v0.60.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.60.4) (2016-11-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.60.3...v0.60.4)

**Fixed bugs:**

- bug\(customPropTypes\): demand validation is broken with defaultProps [\#827](https://github.com/Semantic-Org/Semantic-UI-React/issues/827)
- docs\(Embed\): props renaming [\#831](https://github.com/Semantic-Org/Semantic-UI-React/pull/831) ([layershifter](https://github.com/layershifter))

**Merged pull requests:**

- fix\(Dropdown|Label\): Remove overzealous prop validations [\#828](https://github.com/Semantic-Org/Semantic-UI-React/pull/828) ([jcarbo](https://github.com/jcarbo))

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

- breaking\(Dropdown|Label\): Multi-select customization [\#809](https://github.com/Semantic-Org/Semantic-UI-React/pull/809) ([jcarbo](https://github.com/jcarbo))

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
- fix\(Dimmer\): Fix "simple" usage, add disabled prop [\#795](https://github.com/Semantic-Org/Semantic-UI-React/pull/795) ([jcarbo](https://github.com/jcarbo))

## [v0.58.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.58.3) (2016-11-05)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.58.2...v0.58.3)

**Fixed bugs:**

- Prevent dropdown from opening when disabled [\#791](https://github.com/Semantic-Org/Semantic-UI-React/issues/791)
- Docs site is down [\#786](https://github.com/Semantic-Org/Semantic-UI-React/issues/786)

**Closed issues:**

- \(question\) how to open modal programmatically? [\#793](https://github.com/Semantic-Org/Semantic-UI-React/issues/793)

**Merged pull requests:**

- feat\(Dropdown\): Prevent open when disabled [\#792](https://github.com/Semantic-Org/Semantic-UI-React/pull/792) ([jcarbo](https://github.com/jcarbo))
- style\(Message\):  update docs to the latest standards [\#789](https://github.com/Semantic-Org/Semantic-UI-React/pull/789) ([dpkwhan](https://github.com/dpkwhan))
- feat\(Image\): Render children appropriately [\#784](https://github.com/Semantic-Org/Semantic-UI-React/pull/784) ([jcarbo](https://github.com/jcarbo))

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
- feat\(Popup\): Enabled controlled usage [\#749](https://github.com/Semantic-Org/Semantic-UI-React/pull/749) ([jcarbo](https://github.com/jcarbo))
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

- fix\(Modal\): Only set position when modal is open [\#721](https://github.com/Semantic-Org/Semantic-UI-React/pull/721) ([jcarbo](https://github.com/jcarbo))
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
- feat\(Dropdown\): Add missing examples and begin feature support [\#682](https://github.com/Semantic-Org/Semantic-UI-React/pull/682) ([jcarbo](https://github.com/jcarbo))

## [v0.56.9](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.9) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.8...v0.56.9)

**Merged pull requests:**

- chore\(scripts\): setup auto release [\#705](https://github.com/Semantic-Org/Semantic-UI-React/pull/705) ([levithomason](https://github.com/levithomason))

## [v0.56.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.56.8) (2016-10-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.56.7...v0.56.8)

**Fixed bugs:**

- \(0.56.6\) semantic-ui-react unable to find React or ReactDOM module [\#703](https://github.com/Semantic-Org/Semantic-UI-React/issues/703)

**Merged pull requests:**

- feat\(Search|Dropdown\): Improve arrow navigation [\#701](https://github.com/Semantic-Org/Semantic-UI-React/pull/701) ([jcarbo](https://github.com/jcarbo))

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
- feat\(Portal\): Improve rendering [\#666](https://github.com/Semantic-Org/Semantic-UI-React/pull/666) ([jcarbo](https://github.com/jcarbo))

**Fixed bugs:**

- feat\\(Portal\\): Improve rendering [\#666](https://github.com/Semantic-Org/Semantic-UI-React/pull/666) ([jcarbo](https://github.com/jcarbo))

**Closed issues:**

- fix\(Menu\): SyntaxError:Unexpected token\(6:8\) [\#691](https://github.com/Semantic-Org/Semantic-UI-React/issues/691)

**Merged pull requests:**

- feat\(ButtonGroup\): Add missing props [\#687](https://github.com/Semantic-Org/Semantic-UI-React/pull/687) ([jcarbo](https://github.com/jcarbo))
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
- feat\(List\): Shorthand for list and list items [\#637](https://github.com/Semantic-Org/Semantic-UI-React/pull/637) ([jcarbo](https://github.com/jcarbo))
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

- chore\(warnings\): Fix warnings in Form and Modal [\#626](https://github.com/Semantic-Org/Semantic-UI-React/pull/626) ([jcarbo](https://github.com/jcarbo))
- feat\(shorthand\): Custom shorthand proptypes [\#618](https://github.com/Semantic-Org/Semantic-UI-React/pull/618) ([jcarbo](https://github.com/jcarbo))
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
- chore\(style\): Make some common patterns more consistent [\#614](https://github.com/Semantic-Org/Semantic-UI-React/pull/614) ([jcarbo](https://github.com/jcarbo))
- chore\(ComponentExamples\): example context todo [\#613](https://github.com/Semantic-Org/Semantic-UI-React/pull/613) ([levithomason](https://github.com/levithomason))
- chore\(imports\): Direct internal imports [\#610](https://github.com/Semantic-Org/Semantic-UI-React/pull/610) ([jcarbo](https://github.com/jcarbo))

## [v0.53.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.53.0) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.5...v0.53.0)

**Fixed bugs:**

- labeled icon \<Button /\> not rendered as \<button\> [\#596](https://github.com/Semantic-Org/Semantic-UI-React/issues/596)

**Merged pull requests:**

- refactor\(project\): stardust =\> semantic-ui-react [\#608](https://github.com/Semantic-Org/Semantic-UI-React/pull/608) ([levithomason](https://github.com/levithomason))

## [v0.52.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.5) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.4...v0.52.5)

**Merged pull requests:**

- fix\(Button\): render `labeled` as a \<button\> [\#597](https://github.com/Semantic-Org/Semantic-UI-React/pull/597) ([yesmin](https://github.com/yesmin))

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
- feat\(Table\): add `attached` prop [\#593](https://github.com/Semantic-Org/Semantic-UI-React/pull/593) ([yesmin](https://github.com/yesmin))

## [v0.52.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.1) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.52.0...v0.52.1)

**Implemented enhancements:**

- feat\(Portal\): More flexible configuration [\#590](https://github.com/Semantic-Org/Semantic-UI-React/pull/590) ([jcarbo](https://github.com/jcarbo))

**Merged pull requests:**

- docs\(Card\): fix Feed usage [\#594](https://github.com/Semantic-Org/Semantic-UI-React/pull/594) ([levithomason](https://github.com/levithomason))

## [v0.52.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.52.0) (2016-10-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.51.1...v0.52.0)

**Implemented enhancements:**

- feat\(Table\): add shorthand for generating tables [\#565](https://github.com/Semantic-Org/Semantic-UI-React/issues/565)
- All event handlers should return the event data first [\#218](https://github.com/Semantic-Org/Semantic-UI-React/issues/218)
- feat\(Dropdown\): Pass object with name to onChange [\#581](https://github.com/Semantic-Org/Semantic-UI-React/pull/581) ([jcarbo](https://github.com/jcarbo))
- feat\(Table\): add table row shorthand [\#567](https://github.com/Semantic-Org/Semantic-UI-React/pull/567) ([jcarbo](https://github.com/jcarbo))

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
- fix\(tests\): Add coverage to missing lines [\#583](https://github.com/Semantic-Org/Semantic-UI-React/pull/583) ([jcarbo](https://github.com/jcarbo))
- feat\(ComponentExample\): add copy JSX button [\#582](https://github.com/Semantic-Org/Semantic-UI-React/pull/582) ([jcarbo](https://github.com/jcarbo))
- fix\(package\): remove semantic-ui-css dependency [\#580](https://github.com/Semantic-Org/Semantic-UI-React/pull/580) ([levithomason](https://github.com/levithomason))

## [v0.51.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.51.0) (2016-10-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.50.0...v0.51.0)

**Merged pull requests:**

- fix\(Feed\): update propTypes, shorthand and docs [\#575](https://github.com/Semantic-Org/Semantic-UI-React/pull/575) ([levithomason](https://github.com/levithomason))

## [v0.50.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.50.0) (2016-10-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.49.0...v0.50.0)

**Merged pull requests:**

- feat\(Modal\): Enable usage without wrapper, add custom Portal [\#571](https://github.com/Semantic-Org/Semantic-UI-React/pull/571) ([jcarbo](https://github.com/jcarbo))

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
- feat\(common\): Improve shorthand array handling [\#543](https://github.com/Semantic-Org/Semantic-UI-React/pull/543) ([jcarbo](https://github.com/jcarbo))

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

- chore\(commonTests\): Standardize the assertions in common tests [\#535](https://github.com/Semantic-Org/Semantic-UI-React/pull/535) ([jcarbo](https://github.com/jcarbo))

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

- Search: add component [\#424](https://github.com/Semantic-Org/Semantic-UI-React/pull/424) ([jcarbo](https://github.com/jcarbo))

## [v0.44.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.44.5) (2016-09-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.44.4...v0.44.5)

**Merged pull requests:**

- Dropdown: Dropdown.Header via shorthand prop [\#501](https://github.com/Semantic-Org/Semantic-UI-React/pull/501) ([jcarbo](https://github.com/jcarbo))

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

- fix\(dropdown\): Label props for multi-select [\#495](https://github.com/Semantic-Org/Semantic-UI-React/pull/495) ([jcarbo](https://github.com/jcarbo))

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

- refactor\(Label\): update props to the latest specs [\#486](https://github.com/Semantic-Org/Semantic-UI-React/pull/486) ([jcarbo](https://github.com/jcarbo))

## [v0.42.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.6) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.5...v0.42.6)

**Implemented enhancements:**

- Dropdown: support custom search function [\#469](https://github.com/Semantic-Org/Semantic-UI-React/issues/469)

**Merged pull requests:**

- feat\(Dropdown\): support disabled items [\#482](https://github.com/Semantic-Org/Semantic-UI-React/pull/482) ([jcarbo](https://github.com/jcarbo))

## [v0.42.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.5) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.4...v0.42.5)

**Merged pull requests:**

- feat\(Dropdown\): support custom search function [\#484](https://github.com/Semantic-Org/Semantic-UI-React/pull/484) ([dylankiss](https://github.com/dylankiss))

## [v0.42.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.4) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.3...v0.42.4)

**Fixed bugs:**

- fix\(createFactory\): do not create elements from `null` values [\#480](https://github.com/Semantic-Org/Semantic-UI-React/pull/480) ([jcarbo](https://github.com/jcarbo))

**Closed issues:**

- fix\(Label\): do not auto apply the `empty` className [\#485](https://github.com/Semantic-Org/Semantic-UI-React/issues/485)

## [v0.42.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.42.3) (2016-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.42.2...v0.42.3)

**Implemented enhancements:**

- Dropdown: Support arbitrary element for `text` [\#477](https://github.com/Semantic-Org/Semantic-UI-React/issues/477)

**Merged pull requests:**

- Dropdown: Custom trigger element [\#479](https://github.com/Semantic-Org/Semantic-UI-React/pull/479) ([jcarbo](https://github.com/jcarbo))

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

- Dropdown: Pass 'options' objects as props to Dropdown.Item [\#418](https://github.com/Semantic-Org/Semantic-UI-React/pull/418) ([jcarbo](https://github.com/jcarbo))

## [v0.36.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.36.2) (2016-08-22)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.36.1...v0.36.2)

**Implemented enhancements:**

- feat\(Dropdown\): add custom noResultsMessage [\#417](https://github.com/Semantic-Org/Semantic-UI-React/pull/417) ([jcarbo](https://github.com/jcarbo))

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