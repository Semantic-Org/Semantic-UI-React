# Change Log

## [v0.77.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.77.1) (2017-12-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.77.0...v0.77.1)

**Implemented enhancements:**

- RFC: Button.Group shorthand to render an array of buttons with a 'buttons' prop [\#2310](https://github.com/Semantic-Org/Semantic-UI-React/issues/2310)
- feat\(Button\): add `buttons` shorthand to ButtonGroup [\#2361](https://github.com/Semantic-Org/Semantic-UI-React/pull/2361) ([layershifter](https://github.com/layershifter))
- feat\(Image\): improve handling of HTML props [\#2316](https://github.com/Semantic-Org/Semantic-UI-React/pull/2316) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Transition: Not working properly when 'show' duration is less than 'hide' [\#2347](https://github.com/Semantic-Org/Semantic-UI-React/issues/2347)

**Closed issues:**

- RFC: Be able to define fallback order for Popup position [\#2359](https://github.com/Semantic-Org/Semantic-UI-React/issues/2359)
- Two Sidebars [\#2354](https://github.com/Semantic-Org/Semantic-UI-React/issues/2354)
- fix\(Dropdown\): Dropdown with an Input \(text\) Item closed when clicked [\#2353](https://github.com/Semantic-Org/Semantic-UI-React/issues/2353)
- Controlled Popup doesn't handle hideOnScroll [\#2346](https://github.com/Semantic-Org/Semantic-UI-React/issues/2346)
- fix\(TransitionablePortal\): your description [\#2342](https://github.com/Semantic-Org/Semantic-UI-React/issues/2342)

**Merged pull requests:**

- docs\(Step\): fix display of an icon in StepExampleEvenlyDivided [\#2365](https://github.com/Semantic-Org/Semantic-UI-React/pull/2365) ([jeroenvervaeke](https://github.com/jeroenvervaeke))
- docs\(README.md\): add bailfacile.fr to list of websites using Semantic UI React [\#2357](https://github.com/Semantic-Org/Semantic-UI-React/pull/2357) ([potioventures](https://github.com/potioventures))
- docs\(README.md\): add re.yomeshgupta.com to the build with list [\#2351](https://github.com/Semantic-Org/Semantic-UI-React/pull/2351) ([yomeshgupta](https://github.com/yomeshgupta))
- fix\(Transition\): fix of the choice of duration [\#2350](https://github.com/Semantic-Org/Semantic-UI-React/pull/2350) ([layershifter](https://github.com/layershifter))
- chore\(docgen|menugen\): fix problems with paths on Windows [\#2349](https://github.com/Semantic-Org/Semantic-UI-React/pull/2349) ([layershifter](https://github.com/layershifter))
- chore\(docgen\): add a friendly exception [\#2348](https://github.com/Semantic-Org/Semantic-UI-React/pull/2348) ([layershifter](https://github.com/layershifter))

## [v0.77.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.77.0) (2017-11-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.76.0...v0.77.0)

**Implemented enhancements:**

- Embed: brandedUI setting seems backwards, and doesn't affect related videos [\#2313](https://github.com/Semantic-Org/Semantic-UI-React/issues/2313)
- Dropdown: add forceSelection prop [\#2299](https://github.com/Semantic-Org/Semantic-UI-React/issues/2299)
- Tab menu option tabular is being overused for both style and position. [\#2264](https://github.com/Semantic-Org/Semantic-UI-React/issues/2264)
- feat\(Embed\): disable "related videos" when `brandedUI` is set to `true` [\#2320](https://github.com/Semantic-Org/Semantic-UI-React/pull/2320) ([bennettrogers](https://github.com/bennettrogers))
- feat\(Checkbox\): add support of htmlFor [\#2293](https://github.com/Semantic-Org/Semantic-UI-React/pull/2293) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Dropdown: Clicking outside the component does not close it when defaultOpen is true [\#2332](https://github.com/Semantic-Org/Semantic-UI-React/issues/2332)
- Input: animation on focus doesn't work now [\#2298](https://github.com/Semantic-Org/Semantic-UI-React/issues/2298)
- Checkbox: Labels don't have htmlFor [\#2274](https://github.com/Semantic-Org/Semantic-UI-React/issues/2274)

**Closed issues:**

- fix\(Divider\): your description [\#2335](https://github.com/Semantic-Org/Semantic-UI-React/issues/2335)
- Menu Item rendering as \<div\> and not \<a\> resulting in no animations. [\#2323](https://github.com/Semantic-Org/Semantic-UI-React/issues/2323)
- Icon render slow depending on the word order in name property [\#2301](https://github.com/Semantic-Org/Semantic-UI-React/issues/2301)
- Docs down? [\#2289](https://github.com/Semantic-Org/Semantic-UI-React/issues/2289)
- Package: module not found fbjs/lib/shallowEqual [\#2285](https://github.com/Semantic-Org/Semantic-UI-React/issues/2285)

**Merged pull requests:**

- docs\(Header\): fix typo in component example description [\#2340](https://github.com/Semantic-Org/Semantic-UI-React/pull/2340) ([gitname](https://github.com/gitname))
- fix\(Dropdown\): add event handlers when opened via defaultOpen [\#2334](https://github.com/Semantic-Org/Semantic-UI-React/pull/2334) ([seanMcKennaPuppet](https://github.com/seanMcKennaPuppet))
- fix\(Image\): correct the type of the width prop [\#2333](https://github.com/Semantic-Org/Semantic-UI-React/pull/2333) ([lafritay](https://github.com/lafritay))
- fix\(Portal\): fix usage of eventPool [\#2329](https://github.com/Semantic-Org/Semantic-UI-React/pull/2329) ([layershifter](https://github.com/layershifter))
- fix\(customPropTypes\): improve perf of `suggest` [\#2314](https://github.com/Semantic-Org/Semantic-UI-React/pull/2314) ([davezuko](https://github.com/davezuko))
- fix\(Input\): icon should be always after \<input\> [\#2302](https://github.com/Semantic-Org/Semantic-UI-React/pull/2302) ([layershifter](https://github.com/layershifter))
- test\(Card\): remove cruft tests [\#2294](https://github.com/Semantic-Org/Semantic-UI-React/pull/2294) ([layershifter](https://github.com/layershifter))
- chore\(package\): add fbjs to dependencies [\#2292](https://github.com/Semantic-Org/Semantic-UI-React/pull/2292) ([layershifter](https://github.com/layershifter))
- fix\(docs\): add missing period to script URL [\#2290](https://github.com/Semantic-Org/Semantic-UI-React/pull/2290) ([gitname](https://github.com/gitname))
- BREAKING\(Tab\): allow right/left without `tabular` [\#2265](https://github.com/Semantic-Org/Semantic-UI-React/pull/2265) ([ryanmcgarvey](https://github.com/ryanmcgarvey))
- docs\(ComponentSidebar\): add sidebar navigation [\#2070](https://github.com/Semantic-Org/Semantic-UI-React/pull/2070) ([layershifter](https://github.com/layershifter))
- docs\(DropdownExamplePointing\): Fix nested Dropdown [\#1644](https://github.com/Semantic-Org/Semantic-UI-React/pull/1644) ([Jimeno0](https://github.com/Jimeno0))

## [v0.76.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.76.0) (2017-11-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.75.1...v0.76.0)

**Implemented enhancements:**

- RFC: \<button with-conformation="text-to-type"/\> [\#2272](https://github.com/Semantic-Org/Semantic-UI-React/issues/2272)
- Grid: allow multiple values for `reversed` prop [\#2222](https://github.com/Semantic-Org/Semantic-UI-React/issues/2222)
- Dropdown: remove diacritics on filter also converts national letters [\#2163](https://github.com/Semantic-Org/Semantic-UI-React/issues/2163)
- Rating: more icons types [\#2068](https://github.com/Semantic-Org/Semantic-UI-React/issues/2068)
- feat\(Grid\): allow multiple values for `reversed` prop [\#2235](https://github.com/Semantic-Org/Semantic-UI-React/pull/2235) ([layershifter](https://github.com/layershifter))
- feat\(Dropdown\): make deburr opt-in, and deburr input [\#2223](https://github.com/Semantic-Org/Semantic-UI-React/pull/2223) ([patrikmolsson](https://github.com/patrikmolsson))
- feat\(TransitionablePortal\): add component [\#2155](https://github.com/Semantic-Org/Semantic-UI-React/pull/2155) ([layershifter](https://github.com/layershifter))
- feat\(Responsive\): add `fireOnMount` prop [\#2137](https://github.com/Semantic-Org/Semantic-UI-React/pull/2137) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Modal: bug with SSR rendering [\#2259](https://github.com/Semantic-Org/Semantic-UI-React/issues/2259)
- Dropdown: setState in onChange leads to mismatch of 'active' and 'selected' option [\#2243](https://github.com/Semantic-Org/Semantic-UI-React/issues/2243)
- Modal: on close warning in 0.75 [\#2236](https://github.com/Semantic-Org/Semantic-UI-React/issues/2236)
- Portal: Button has undefined data in event handler [\#2233](https://github.com/Semantic-Org/Semantic-UI-React/issues/2233)
- docs\(Icon\): "Show similar" does not filter at all on the deployed docs site [\#2193](https://github.com/Semantic-Org/Semantic-UI-React/issues/2193)

**Closed issues:**

- Form.Input, div class="error required field", margin-bottom: 1em. [\#2286](https://github.com/Semantic-Org/Semantic-UI-React/issues/2286)
- Form.Select how to use custom array options [\#2281](https://github.com/Semantic-Org/Semantic-UI-React/issues/2281)
- Message with both `icon` and `compact` props does not become compact [\#2280](https://github.com/Semantic-Org/Semantic-UI-React/issues/2280)
- Missing components [\#2267](https://github.com/Semantic-Org/Semantic-UI-React/issues/2267)
- On iOS 11 \(chrome and safari\) the cursor jumps out of a form field in a tiny modal [\#2266](https://github.com/Semantic-Org/Semantic-UI-React/issues/2266)
- fix\(Divider\): Divider is not visible on the documentation page [\#2253](https://github.com/Semantic-Org/Semantic-UI-React/issues/2253)
- Dropdown  event.target.value  is undefined [\#2249](https://github.com/Semantic-Org/Semantic-UI-React/issues/2249)
- Docs: responsive examples are are not responsive [\#2230](https://github.com/Semantic-Org/Semantic-UI-React/issues/2230)
- Test: Cannot run local tests without modifying test config [\#2227](https://github.com/Semantic-Org/Semantic-UI-React/issues/2227)
- Image: Inconsistent prop usage between Image and Icon for circular shape [\#2217](https://github.com/Semantic-Org/Semantic-UI-React/issues/2217)
- Input: need 'onActionClick' props [\#2213](https://github.com/Semantic-Org/Semantic-UI-React/issues/2213)
- Portal: rework \#handleRef to avoid using ReactDOM.findDOMNode [\#1702](https://github.com/Semantic-Org/Semantic-UI-React/issues/1702)

**Merged pull requests:**

- docs\(readme\): update link and desc of `react-semantic.ui-starter` [\#2288](https://github.com/Semantic-Org/Semantic-UI-React/pull/2288) ([Metnew](https://github.com/Metnew))
- docs\(readme\): add Bandwidth Hero to built with [\#2284](https://github.com/Semantic-Org/Semantic-UI-React/pull/2284) ([ayastreb](https://github.com/ayastreb))
- docs\(Advertisement\): fix AdvertisementExampleBannerTop example [\#2275](https://github.com/Semantic-Org/Semantic-UI-React/pull/2275) ([tuzhu008](https://github.com/tuzhu008))
- docs\(HOC\): remove reexport to avoid warning in test [\#2270](https://github.com/Semantic-Org/Semantic-UI-React/pull/2270) ([layershifter](https://github.com/layershifter))
- chore\(test\): fix browser config [\#2269](https://github.com/Semantic-Org/Semantic-UI-React/pull/2269) ([layershifter](https://github.com/layershifter))
- Update README.md [\#2268](https://github.com/Semantic-Org/Semantic-UI-React/pull/2268) ([garysieling](https://github.com/garysieling))
- fix\(Modal\): fix errors with SSR [\#2260](https://github.com/Semantic-Org/Semantic-UI-React/pull/2260) ([adam-26](https://github.com/adam-26))
- docs\(README\): fix URL collision [\#2258](https://github.com/Semantic-Org/Semantic-UI-React/pull/2258) ([neslinesli93](https://github.com/neslinesli93))
- docs\(README\): add ForecastCycles to built-with list [\#2257](https://github.com/Semantic-Org/Semantic-UI-React/pull/2257) ([neslinesli93](https://github.com/neslinesli93))
- fix\(Modal\): fix state update after close [\#2254](https://github.com/Semantic-Org/Semantic-UI-React/pull/2254) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): isEqual over shallowEqual for props [\#2252](https://github.com/Semantic-Org/Semantic-UI-React/pull/2252) ([chrisjbrown](https://github.com/chrisjbrown))
- docs\(Dropdown\): add dedicated example for controlled Dropdown [\#2251](https://github.com/Semantic-Org/Semantic-UI-React/pull/2251) ([layershifter](https://github.com/layershifter))
- fix\(docs\): fix propTypes warnings [\#2244](https://github.com/Semantic-Org/Semantic-UI-React/pull/2244) ([layershifter](https://github.com/layershifter))
- docs\(Accordion\): fix typo in AccordionExampleForm [\#2239](https://github.com/Semantic-Org/Semantic-UI-React/pull/2239) ([rabbl](https://github.com/rabbl))
- docs\(README\): add gitconnected to built-with list [\#2238](https://github.com/Semantic-Org/Semantic-UI-React/pull/2238) ([treyhuffine](https://github.com/treyhuffine))
- fix\(Portal\): pass additional agruments to trigger handlers [\#2234](https://github.com/Semantic-Org/Semantic-UI-React/pull/2234) ([layershifter](https://github.com/layershifter))
- docs\(Usage\): switch from NPM to yarn [\#2232](https://github.com/Semantic-Org/Semantic-UI-React/pull/2232) ([lielfr](https://github.com/lielfr))
- docs\(Views\): add \<meta name="viewport"\> tags to docs [\#2231](https://github.com/Semantic-Org/Semantic-UI-React/pull/2231) ([RetroCraft](https://github.com/RetroCraft))
- docs\(Ref\): add a basic example [\#2226](https://github.com/Semantic-Org/Semantic-UI-React/pull/2226) ([layershifter](https://github.com/layershifter))
- breaking\(Image\): Inconsistent prop usage between Image and Icon for circular shape [\#2225](https://github.com/Semantic-Org/Semantic-UI-React/pull/2225) ([RetroCraft](https://github.com/RetroCraft))
- docs\(Icon\): fix similar icon search [\#2220](https://github.com/Semantic-Org/Semantic-UI-React/pull/2220) ([patrikmolsson](https://github.com/patrikmolsson))
- feat\(Portal\): use Ref for handling trigger refs [\#2219](https://github.com/Semantic-Org/Semantic-UI-React/pull/2219) ([layershifter](https://github.com/layershifter))
- docs\(index\): don't use prod libs in dev [\#2216](https://github.com/Semantic-Org/Semantic-UI-React/pull/2216) ([levithomason](https://github.com/levithomason))
- docs\(Props\): make large code blocks more legible [\#2215](https://github.com/Semantic-Org/Semantic-UI-React/pull/2215) ([redbmk](https://github.com/redbmk))
- fix\(Popup\): execute `onClose` when Popup closes on scroll [\#2182](https://github.com/Semantic-Org/Semantic-UI-React/pull/2182) ([mkarajohn](https://github.com/mkarajohn))
- perf\(customPropTypes\): Memoize `suggest` [\#2149](https://github.com/Semantic-Org/Semantic-UI-React/pull/2149) ([ayastreb](https://github.com/ayastreb))
- docs\(ComponentDoc\): refactor and optimize [\#2123](https://github.com/Semantic-Org/Semantic-UI-React/pull/2123) ([layershifter](https://github.com/layershifter))

## [v0.75.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.75.1) (2017-10-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.75.0...v0.75.1)

**Fixed bugs:**

- Form.Button's content attribute [\#2211](https://github.com/Semantic-Org/Semantic-UI-React/issues/2211)
- Responsive: "ReferenceError: window is not defined" [\#2206](https://github.com/Semantic-Org/Semantic-UI-React/issues/2206)
- TextArea's autoHeight sometimes makes it taller than an actual text [\#2173](https://github.com/Semantic-Org/Semantic-UI-React/issues/2173)

**Closed issues:**

- Field Erro [\#2204](https://github.com/Semantic-Org/Semantic-UI-React/issues/2204)
- fix\(Form\): change "First Name" to "Last Name" [\#2202](https://github.com/Semantic-Org/Semantic-UI-React/issues/2202)
- Weird interaction with Portal.js and React.cloneElement [\#2195](https://github.com/Semantic-Org/Semantic-UI-React/issues/2195)

**Merged pull requests:**

- fix\(FormField\): pass content prop through [\#2212](https://github.com/Semantic-Org/Semantic-UI-React/pull/2212) ([levithomason](https://github.com/levithomason))
- fix\(Responsive\): fix usage of `window` for SSR [\#2209](https://github.com/Semantic-Org/Semantic-UI-React/pull/2209) ([layershifter](https://github.com/layershifter))
- docs\(Form\): fix typo in label [\#2208](https://github.com/Semantic-Org/Semantic-UI-React/pull/2208) ([layershifter](https://github.com/layershifter))
- feat\(typings\): export DropdownOnSearchChangeData [\#2205](https://github.com/Semantic-Org/Semantic-UI-React/pull/2205) ([pierre-H](https://github.com/pierre-H))
- chore\(circleci\): fix typo in a step name [\#2200](https://github.com/Semantic-Org/Semantic-UI-React/pull/2200) ([WiNloSt](https://github.com/WiNloSt))
- fix\(TextArea\): fix autoHeight calculate wrong value on long text [\#2199](https://github.com/Semantic-Org/Semantic-UI-React/pull/2199) ([WiNloSt](https://github.com/WiNloSt))

## [v0.75.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.75.0) (2017-10-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.74.2...v0.75.0)

**Implemented enhancements:**

- feat\(Message\): add `top` to possible values of `attached` [\#2197](https://github.com/Semantic-Org/Semantic-UI-React/pull/2197) ([layershifter](https://github.com/layershifter))
- breaking\(Step\): refactor Step to use factories, update content props, add missing props [\#2145](https://github.com/Semantic-Org/Semantic-UI-React/pull/2145) ([layershifter](https://github.com/layershifter))
- feat\(Ref\): add component [\#2142](https://github.com/Semantic-Org/Semantic-UI-React/pull/2142) ([layershifter](https://github.com/layershifter))

**Fixed bugs:**

- Dropdown: Does not display value on enter when using search selection [\#2161](https://github.com/Semantic-Org/Semantic-UI-React/issues/2161)
- Modal: Scrolling doesn't work properly after reopen [\#2150](https://github.com/Semantic-Org/Semantic-UI-React/issues/2150)
- Search: the `id` prop on SearchResult should accept `string` as value [\#2135](https://github.com/Semantic-Org/Semantic-UI-React/issues/2135)
- Transition: Transition.Group doesn't perform transitions correctly [\#2127](https://github.com/Semantic-Org/Semantic-UI-React/issues/2127)
- docs\(Dropdown\): Recent update breaks DropdownExampleRemote [\#2125](https://github.com/Semantic-Org/Semantic-UI-React/issues/2125)

**Closed issues:**

- docs\(ButtonExampleLabeledIcon\): buttons aren't labeled [\#2190](https://github.com/Semantic-Org/Semantic-UI-React/issues/2190)
- Transition Group example in docs doesn't reflect removed users [\#2160](https://github.com/Semantic-Org/Semantic-UI-React/issues/2160)
- Several warnings on Attached Layout [\#2154](https://github.com/Semantic-Org/Semantic-UI-React/issues/2154)
- Docs: local docs site is broken with React 15.6.2 [\#2153](https://github.com/Semantic-Org/Semantic-UI-React/issues/2153)
- fix\(Container\): your description [\#2151](https://github.com/Semantic-Org/Semantic-UI-React/issues/2151)
- Allow multiple labels for Input [\#2148](https://github.com/Semantic-Org/Semantic-UI-React/issues/2148)
- Popup closing Modal?? [\#2147](https://github.com/Semantic-Org/Semantic-UI-React/issues/2147)
- Bug on Dropdown.componentWillUnmount\(\) [\#2120](https://github.com/Semantic-Org/Semantic-UI-React/issues/2120)

**Merged pull requests:**

- docs\(ISSUE\_TEMPLATE\): update link to SO and code template [\#2198](https://github.com/Semantic-Org/Semantic-UI-React/pull/2198) ([layershifter](https://github.com/layershifter))
- style\(mixed\): fix spelling and grammar issues in comments and tests [\#2196](https://github.com/Semantic-Org/Semantic-UI-React/pull/2196) ([direvus](https://github.com/direvus))
- docs\(Button\): add missing props to example [\#2191](https://github.com/Semantic-Org/Semantic-UI-React/pull/2191) ([patrikmolsson](https://github.com/patrikmolsson))
- fix\(typings\): fix definition for Accordion.Accordion [\#2180](https://github.com/Semantic-Org/Semantic-UI-React/pull/2180) ([swASO](https://github.com/swASO))
- docs\(README\): add aircip.ir and platform.nazarbazaar.ir to `built with` section [\#2179](https://github.com/Semantic-Org/Semantic-UI-React/pull/2179) ([ali-master](https://github.com/ali-master))
- style\(Form\): fix typo in examples [\#2178](https://github.com/Semantic-Org/Semantic-UI-React/pull/2178) ([abhn](https://github.com/abhn))
- docs\(examples\): fix webpack.config.js [\#2171](https://github.com/Semantic-Org/Semantic-UI-React/pull/2171) ([armendarabyan](https://github.com/armendarabyan))
- feat\(typings\): add icon names for Icon [\#2167](https://github.com/Semantic-Org/Semantic-UI-React/pull/2167) ([vincealdrin](https://github.com/vincealdrin))
- fix\(Form\): don't prevent form submission when action='' [\#2165](https://github.com/Semantic-Org/Semantic-UI-React/pull/2165) ([eug48](https://github.com/eug48))
- fix\(Dropdown\): update text when item selected with keyboard [\#2162](https://github.com/Semantic-Org/Semantic-UI-React/pull/2162) ([ayastreb](https://github.com/ayastreb))
- docs\(Portal\): remove useless props in PortalExampleControlled [\#2159](https://github.com/Semantic-Org/Semantic-UI-React/pull/2159) ([layershifter](https://github.com/layershifter))
- test\(typings\): restore assertion for typings and propTypes order [\#2158](https://github.com/Semantic-Org/Semantic-UI-React/pull/2158) ([layershifter](https://github.com/layershifter))
- docs\(Portal\): add controlled example [\#2156](https://github.com/Semantic-Org/Semantic-UI-React/pull/2156) ([layershifter](https://github.com/layershifter))
- fix\(Modal\): set scrolling body class on re-open [\#2152](https://github.com/Semantic-Org/Semantic-UI-React/pull/2152) ([ayastreb](https://github.com/ayastreb))
- test\(common\): support isConformant for portals [\#2146](https://github.com/Semantic-Org/Semantic-UI-React/pull/2146) ([levithomason](https://github.com/levithomason))
-  test\(mixed\): add test for `content` prop, remove useless tests [\#2144](https://github.com/Semantic-Org/Semantic-UI-React/pull/2144) ([layershifter](https://github.com/layershifter))
- breaking\(Statistic\): refactor Statistic to use factories, update content props [\#2143](https://github.com/Semantic-Org/Semantic-UI-React/pull/2143) ([layershifter](https://github.com/layershifter))
- perf\(Breadcrumb\): move computer of ElementType to method on BreadcrumbSection [\#2141](https://github.com/Semantic-Org/Semantic-UI-React/pull/2141) ([layershifter](https://github.com/layershifter))
- fix\(Search\): simplify propTypes on SearchResult [\#2138](https://github.com/Semantic-Org/Semantic-UI-React/pull/2138) ([layershifter](https://github.com/layershifter))
- docs\(readme\): url update in built with [\#2134](https://github.com/Semantic-Org/Semantic-UI-React/pull/2134) ([GautierT](https://github.com/GautierT))
- chore\(package\): update to react 16 [\#2131](https://github.com/Semantic-Org/Semantic-UI-React/pull/2131) ([layershifter](https://github.com/layershifter))
- fix\(Transition\): fix component wrapping inside Transition.Group [\#2130](https://github.com/Semantic-Org/Semantic-UI-React/pull/2130) ([layershifter](https://github.com/layershifter))
- docs\(Dropdown\): fix DropdownRemoteExample [\#2126](https://github.com/Semantic-Org/Semantic-UI-React/pull/2126) ([patrikmolsson](https://github.com/patrikmolsson))
- docs\(readme\): add amazon publishing to built with [\#2122](https://github.com/Semantic-Org/Semantic-UI-React/pull/2122) ([austinfox](https://github.com/austinfox))
- perf\(lodash\): remove \_.omit and \_.isEqual [\#2111](https://github.com/Semantic-Org/Semantic-UI-React/pull/2111) ([levithomason](https://github.com/levithomason))
- fix\(Modal\): add/remove dimmer classes in raf [\#2010](https://github.com/Semantic-Org/Semantic-UI-React/pull/2010) ([levithomason](https://github.com/levithomason))

## [v0.74.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.74.2) (2017-09-25)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.74.1...v0.74.2)

**Implemented enhancements:**

- Dropdown: `selectOnKeydown` option from docs is not implemented [\#1993](https://github.com/Semantic-Org/Semantic-UI-React/issues/1993)

**Fixed bugs:**

- Dropdown: Error occurred with keyboard action [\#1875](https://github.com/Semantic-Org/Semantic-UI-React/issues/1875)

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
- feat\(Item\): add unstackable prop to ItemGroup [\#1706](https://github.com/Semantic-Org/Semantic-UI-React/pull/1706) ([layershifter](https://github.com/layershifter))
- feat\(typings\): export generic types [\#1698](https://github.com/Semantic-Org/Semantic-UI-React/pull/1698) ([fabien0102](https://github.com/fabien0102))

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

**Fixed bugs:**

- Progress bar always shows progress label when using value/total [\#1352](https://github.com/Semantic-Org/Semantic-UI-React/issues/1352)

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

## [v0.64.8](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.8) (2017-02-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.7...v0.64.8)

**Closed issues:**

- Feature Request: AllowAdditions in dropdown to retain text on focus [\#1305](https://github.com/Semantic-Org/Semantic-UI-React/issues/1305)
- Programatically set value for Dropdown? [\#1302](https://github.com/Semantic-Org/Semantic-UI-React/issues/1302)
- Dropping Component on runtime  [\#1295](https://github.com/Semantic-Org/Semantic-UI-React/issues/1295)
- fix\(Label\): Label not appearing as it is shown in the example [\#1291](https://github.com/Semantic-Org/Semantic-UI-React/issues/1291)

**Merged pull requests:**

- fix\(package\): add babel-runtime for commonjs builds [\#1306](https://github.com/Semantic-Org/Semantic-UI-React/pull/1306) ([levithomason](https://github.com/levithomason))
- style\(Portal\): update typings and propTypes usage [\#1300](https://github.com/Semantic-Org/Semantic-UI-React/pull/1300) ([layershifter](https://github.com/layershifter))
- chore\(eslint\): disable aria rules for docs [\#1297](https://github.com/Semantic-Org/Semantic-UI-React/pull/1297) ([layershifter](https://github.com/layershifter))
- style\(Sidebar\): update typings and propTypes usage [\#1296](https://github.com/Semantic-Org/Semantic-UI-React/pull/1296) ([layershifter](https://github.com/layershifter))
- style\(Item\): update typings and propTypes usage [\#1294](https://github.com/Semantic-Org/Semantic-UI-React/pull/1294) ([layershifter](https://github.com/layershifter))
- style\(Comment\): update typings and propTypes usage [\#1293](https://github.com/Semantic-Org/Semantic-UI-React/pull/1293) ([layershifter](https://github.com/layershifter))

## [v0.64.7](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.7) (2017-02-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.6...v0.64.7)

## [v0.64.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.6) (2017-02-02)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.5...v0.64.6)

## [v0.64.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.5) (2017-01-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.4...v0.64.5)

## [v0.64.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.4) (2017-01-24)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.3...v0.64.4)

## [v0.64.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.3) (2017-01-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.2...v0.64.3)

## [v0.64.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.2) (2017-01-18)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.1...v0.64.2)

## [v0.64.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.1) (2017-01-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.64.0...v0.64.1)

## [v0.64.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.64.0) (2017-01-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.6...v0.64.0)

## [v0.63.6](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.6) (2017-01-11)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.5...v0.63.6)

## [v0.63.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.5) (2017-01-03)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.4...v0.63.5)

## [v0.63.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.4) (2016-12-31)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.3...v0.63.4)

## [v0.63.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.3) (2016-12-30)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.2...v0.63.3)

## [v0.63.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.2) (2016-12-27)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.1...v0.63.2)

## [v0.63.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.1) (2016-12-21)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.63.0...v0.63.1)

## [v0.63.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.63.0) (2016-12-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.4...v0.63.0)

## [v0.62.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.4) (2016-12-19)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.3...v0.62.4)

## [v0.62.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.3) (2016-12-17)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.2...v0.62.3)

## [v0.62.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.62.2) (2016-12-16)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.62.1...v0.62.2)

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