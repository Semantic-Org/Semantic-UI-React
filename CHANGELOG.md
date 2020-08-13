# Change Log

## [v1.2.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v1.2.0) (2020-08-12)

#### :rocket: New Feature
* [#1739](https://github.com/Semantic-Org/Semantic-UI-React/pull/1739) feat(Modal): impliment Dimmer shorthand ([@qoalu](https://github.com/qoalu))

#### :bug: Bug Fix
* [#4026](https://github.com/Semantic-Org/Semantic-UI-React/pull/4026) fix(Popup): do not throw if `context` & `trigger` are missing ([@layershifter](https://github.com/layershifter))
* [#4018](https://github.com/Semantic-Org/Semantic-UI-React/pull/4018) fix(Dropdown): update typings for `defaultValue` & `value` ([@zhongeric](https://github.com/zhongeric))
* [#4019](https://github.com/Semantic-Org/Semantic-UI-React/pull/4019) fix(Popup|Visibility): update types definitions for props ([@daigof](https://github.com/daigof))

#### :memo: Documentation
* [#3794](https://github.com/Semantic-Org/Semantic-UI-React/pull/3794) docs(SearchExampleStandard): use React hooks ([@rpatelcode](https://github.com/rpatelcode))
* [#3795](https://github.com/Semantic-Org/Semantic-UI-React/pull/3795) docs(SearchExampleStandardCustom): use React hooks ([@rpatelcode](https://github.com/rpatelcode))

#### :house: Internal
* [#4027](https://github.com/Semantic-Org/Semantic-UI-React/pull/4027) chore(MountNode): deprecate component ([@layershifter](https://github.com/layershifter))

## [v1.1.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v1.1.1) (2020-08-03)

#### :bug: Bug Fix
* [#4014](https://github.com/Semantic-Org/Semantic-UI-React/pull/4014) fix(Dropdown): update search prop typing ([@charliematters](https://github.com/charliematters))

#### :memo: Documentation
* [#4012](https://github.com/Semantic-Org/Semantic-UI-React/pull/4012) docs(Modal): improve examples, use React hooks ([@layershifter](https://github.com/layershifter))

#### :house: Internal
* [#4011](https://github.com/Semantic-Org/Semantic-UI-React/pull/4011) chore: improve bundle size ([@layershifter](https://github.com/layershifter))

## [v1.1.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v1.1.0) (2020-07-30)

#### :rocket: New Feature
* [#4003](https://github.com/Semantic-Org/Semantic-UI-React/pull/4003) feat(Dropdown): add support for images, icons and flags in selected values ([@layershifter](https://github.com/layershifter))
* [#3996](https://github.com/Semantic-Org/Semantic-UI-React/pull/3996) feat(Flag): include "england" as a valid value ([@layershifter](https://github.com/layershifter))

#### :bug: Bug Fix
* [#4006](https://github.com/Semantic-Org/Semantic-UI-React/pull/4006) fix(Dropdown): compute proper `selectedIndex` in `multiple` ([@layershifter](https://github.com/layershifter))
* [#4004](https://github.com/Semantic-Org/Semantic-UI-React/pull/4004) fix(Dropdown): handle keyboard events for arrows, space and enter keys locally ([@layershifter](https://github.com/layershifter))
* [#3938](https://github.com/Semantic-Org/Semantic-UI-React/pull/3938) fix(Search): fix an error when `showNoResults=false` and arrow down is pressed ([@ysugimoto](https://github.com/ysugimoto))
* [#3785](https://github.com/Semantic-Org/Semantic-UI-React/pull/3785) fix(Search): merge nested shorthand props for the <input> element ([@noinkling](https://github.com/noinkling))
* [#3998](https://github.com/Semantic-Org/Semantic-UI-React/pull/3998) fix(Portal): throw an error if React.Fragment passed as `trigger` ([@layershifter](https://github.com/layershifter))
* [#3995](https://github.com/Semantic-Org/Semantic-UI-React/pull/3995) fix(Accordion): update typings to include `AccordionPanel` on static props ([@layershifter](https://github.com/layershifter))
* [#3901](https://github.com/Semantic-Org/Semantic-UI-React/pull/3901) fix(FormFiled): pass `id` when contains child elements or has `content` prop ([@srotbart](https://github.com/srotbart))

#### :memo: Documentation
* [#4010](https://github.com/Semantic-Org/Semantic-UI-React/pull/4010) docs: improve CodeSandbox integration ([@layershifter](https://github.com/layershifter))
* [#4008](https://github.com/Semantic-Org/Semantic-UI-React/pull/4008) docs(Responsive): deprecate component ([@layershifter](https://github.com/layershifter))
* [#3957](https://github.com/Semantic-Org/Semantic-UI-React/pull/3957) docs(Tab): add note that `grid` prop only applies to vertical menu ([@swrobel](https://github.com/swrobel))
* [#3964](https://github.com/Semantic-Org/Semantic-UI-React/pull/3964) docs(TableExampleSortable): your description ([@evcodes](https://github.com/evcodes))
* [#3713](https://github.com/Semantic-Org/Semantic-UI-React/pull/3713) docs: make get started instructions around themes more clear ([@justsml](https://github.com/justsml))
* [#3898](https://github.com/Semantic-Org/Semantic-UI-React/pull/3898) docs(README): correct webpack example link ([@snitin315](https://github.com/snitin315))
* [#3997](https://github.com/Semantic-Org/Semantic-UI-React/pull/3997) docs(SidebarExampleTransitions): fix look of the example ([@layershifter](https://github.com/layershifter))
* [#3881](https://github.com/Semantic-Org/Semantic-UI-React/pull/3881) docs(LabelExampleImageColored): update example to match image names ([@isnifer](https://github.com/isnifer))

#### :house: Internal
* [#4009](https://github.com/Semantic-Org/Semantic-UI-React/pull/4009) docs: fix IE11 issues ([@layershifter](https://github.com/layershifter))
* [#4001](https://github.com/Semantic-Org/Semantic-UI-React/pull/4001) chore:bump dependencies, minor fixes ([@layershifter](https://github.com/layershifter))
* [#4000](https://github.com/Semantic-Org/Semantic-UI-React/pull/4000) chore:bump dependencies ([@layershifter](https://github.com/layershifter))
* [#3999](https://github.com/Semantic-Org/Semantic-UI-React/pull/3999) chore:add bundle size metrics ([@layershifter](https://github.com/layershifter))
* [#3993](https://github.com/Semantic-Org/Semantic-UI-React/pull/3993) chore:use CircleCI workflows ([@layershifter](https://github.com/layershifter))
* [#3992](https://github.com/Semantic-Org/Semantic-UI-React/pull/3992) chore:add github action to check PR labels ([@layershifter](https://github.com/layershifter))

## [v1.0.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v1.0.0) (2020-07-21)

[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.88.2...v1.0.0)

**Merged pull requests:**

- docs: remove knobs usage [\#3988](https://github.com/Semantic-Org/Semantic-UI-React/pull/3988) ([layershifter](https://github.com/layershifter))
- chore\(Dropdown\): remove deprecated lifecycle methods [\#3986](https://github.com/Semantic-Org/Semantic-UI-React/pull/3986) ([layershifter](https://github.com/layershifter))
- chore: use `react-intersection-observer` in docs to improve perf [\#3985](https://github.com/Semantic-Org/Semantic-UI-React/pull/3985) ([reefman001](https://github.com/reefman001))
- chore\(Transition\): remove deprecated lifecycle methods [\#3982](https://github.com/Semantic-Org/Semantic-UI-React/pull/3982) ([layershifter](https://github.com/layershifter))
- chore\(Sticky\): remove usage of deprecated lifecycle methods [\#3974](https://github.com/Semantic-Org/Semantic-UI-React/pull/3974) ([layershifter](https://github.com/layershifter))
- chore\(Visibility\): remove usage of deprecated lifecycle methods [\#3973](https://github.com/Semantic-Org/Semantic-UI-React/pull/3973) ([layershifter](https://github.com/layershifter))
- chore\(TransitionGroup\): remove deprecated lifecycle methods [\#3970](https://github.com/Semantic-Org/Semantic-UI-React/pull/3970) ([layershifter](https://github.com/layershifter))
- chore\(Search\): replace deprecated lifecycle methods [\#3968](https://github.com/Semantic-Org/Semantic-UI-React/pull/3968) ([layershifter](https://github.com/layershifter))
- chore: use ModernAutoControlled component [\#3967](https://github.com/Semantic-Org/Semantic-UI-React/pull/3967) ([layershifter](https://github.com/layershifter))
- chore\(TransitionablePortal\): remove usage of UNSAFE\_\* methods [\#3966](https://github.com/Semantic-Org/Semantic-UI-React/pull/3966) ([layershifter](https://github.com/layershifter))
- fix\(customProptypes\): add a check for Element existance [\#3965](https://github.com/Semantic-Org/Semantic-UI-React/pull/3965) ([layershifter](https://github.com/layershifter))
- docs\(README.md\): fix formatting [\#3958](https://github.com/Semantic-Org/Semantic-UI-React/pull/3958) ([klunico](https://github.com/klunico))
- docs\(VisibilityExampleUpdateOn\): Correcting Typo [\#3952](https://github.com/Semantic-Org/Semantic-UI-React/pull/3952) ([mattorton](https://github.com/mattorton))
- fix\(Input\): add 'inputMode' attribute to input [\#3916](https://github.com/Semantic-Org/Semantic-UI-React/pull/3916) ([RoyalHunt](https://github.com/RoyalHunt))

## [v0.88.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.88.2) (2019-12-08)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.88.1...v0.88.2)

**Merged pull requests:**

- chore: update husky hooks [\#3859](https://github.com/Semantic-Org/Semantic-UI-React/pull/3859) ([levithomason](https://github.com/levithomason))
- chore: remove stale bot [\#3858](https://github.com/Semantic-Org/Semantic-UI-React/pull/3858) ([levithomason](https://github.com/levithomason))
- fix\(Search\): use result.id for SearchResult key [\#3848](https://github.com/Semantic-Org/Semantic-UI-React/pull/3848) ([unbug](https://github.com/unbug))
- docs\(misc\): fix typos [\#3837](https://github.com/Semantic-Org/Semantic-UI-React/pull/3837) ([yuuyu00](https://github.com/yuuyu00))
- fix\(FeedSummary\): add missing space around content [\#3836](https://github.com/Semantic-Org/Semantic-UI-React/pull/3836) ([ridvankaradag](https://github.com/ridvankaradag))
- feat\(FormField\): make form field error accessible [\#3822](https://github.com/Semantic-Org/Semantic-UI-React/pull/3822) ([aoelen](https://github.com/aoelen))
- docs: fix minor grammar and punctuation errors [\#3818](https://github.com/Semantic-Org/Semantic-UI-React/pull/3818) ([anupamasok](https://github.com/anupamasok))
- docs: update warning about using yarn [\#3816](https://github.com/Semantic-Org/Semantic-UI-React/pull/3816) ([chrisbrainerd](https://github.com/chrisbrainerd))
- docs: update grammar/wording for tab pane shorthand [\#3801](https://github.com/Semantic-Org/Semantic-UI-React/pull/3801) ([spencerbyw](https://github.com/spencerbyw))
- docs\(MenuExampleHeaderVertical\): fix onClick handler [\#3799](https://github.com/Semantic-Org/Semantic-UI-React/pull/3799) ([Suzi004](https://github.com/Suzi004))
- chore\(lib\): add ModernAutoControlledComponent [\#3776](https://github.com/Semantic-Org/Semantic-UI-React/pull/3776) ([layershifter](https://github.com/layershifter))
- feat\(Search\): custom category layout renderer [\#3672](https://github.com/Semantic-Org/Semantic-UI-React/pull/3672) ([PrincessMadMath](https://github.com/PrincessMadMath))

## [v0.88.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.88.1) (2019-09-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.88.0...v0.88.1)

**Merged pull requests:**

- chore\(Ref\): use component from Stardust UI [\#3774](https://github.com/Semantic-Org/Semantic-UI-React/pull/3774) ([layershifter](https://github.com/layershifter))
- fix\(Sidebar\): handle clicks properly [\#3772](https://github.com/Semantic-Org/Semantic-UI-React/pull/3772) ([layershifter](https://github.com/layershifter))
- docs\(Theming\): use @semantic-ui-react/craco-less plugin [\#3767](https://github.com/Semantic-Org/Semantic-UI-React/pull/3767) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): closing the search menu on spacebar press [\#3766](https://github.com/Semantic-Org/Semantic-UI-React/pull/3766) ([honzajerabek](https://github.com/honzajerabek))
- feat\(Popup\): add `positionFixed` to support fixed mode in `Popper.JS` [\#3760](https://github.com/Semantic-Org/Semantic-UI-React/pull/3760) ([fxOne](https://github.com/fxOne))

## [v0.88.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.88.0) (2019-08-23)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.87.3...v0.88.0)

**Merged pull requests:**

- feat\(TextArea\): export StrictTextAreaProps typing [\#3846](https://github.com/Semantic-Org/Semantic-UI-React/pull/3846) ([chrisbull](https://github.com/chrisbull))
- docs\(CodeSandbox\): fix paths for images in exported examples [\#3758](https://github.com/Semantic-Org/Semantic-UI-React/pull/3758) ([layershifter](https://github.com/layershifter))
- fix\(typings\): add missing `StrictMenuProps` type export [\#3755](https://github.com/Semantic-Org/Semantic-UI-React/pull/3755) ([b-smets](https://github.com/b-smets))
- docs\(Popup\): add example for `delay` prop in Popup [\#3754](https://github.com/Semantic-Org/Semantic-UI-React/pull/3754) ([SandipNirmal](https://github.com/SandipNirmal))
- docs\(Usage|Theming\): improve pages, introduce CLI util [\#3752](https://github.com/Semantic-Org/Semantic-UI-React/pull/3752) ([layershifter](https://github.com/layershifter))
- chore\(lib\): remove `customPropTypes.as` [\#3751](https://github.com/Semantic-Org/Semantic-UI-React/pull/3751) ([layershifter](https://github.com/layershifter))
- docs\(Icon\): fix a typo [\#3749](https://github.com/Semantic-Org/Semantic-UI-React/pull/3749) ([ablakey](https://github.com/ablakey))
- chore\(mixed\): renamed unsafe lifecycle methods [\#3747](https://github.com/Semantic-Org/Semantic-UI-React/pull/3747) ([jmyrland](https://github.com/jmyrland))
- BREAKING\(package\): require React 16.8 [\#3733](https://github.com/Semantic-Org/Semantic-UI-React/pull/3733) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): preventDefault\(\) in mouseDown should prevent focus [\#3732](https://github.com/Semantic-Org/Semantic-UI-React/pull/3732) ([layershifter](https://github.com/layershifter))
- chore\(AutoControlledComponent\): align API of trySetState\(\) with React's [\#3731](https://github.com/Semantic-Org/Semantic-UI-React/pull/3731) ([layershifter](https://github.com/layershifter))
- style\(package\): format with Prettier [\#3730](https://github.com/Semantic-Org/Semantic-UI-React/pull/3730) ([layershifter](https://github.com/layershifter))
- docs\(examples\): remove outdated Webpack examples [\#3729](https://github.com/Semantic-Org/Semantic-UI-React/pull/3729) ([layershifter](https://github.com/layershifter))
- docs\(Search\): fix wrong description for `input` shorthand [\#3727](https://github.com/Semantic-Org/Semantic-UI-React/pull/3727) ([ablakey](https://github.com/ablakey))
- feat\(Popup\): add `eventsEnabled` prop [\#3715](https://github.com/Semantic-Org/Semantic-UI-React/pull/3715) ([layershifter](https://github.com/layershifter))
- docs\(Composition|Shorthand\): improve pages [\#3707](https://github.com/Semantic-Org/Semantic-UI-React/pull/3707) ([layershifter](https://github.com/layershifter))
- feat\(Dropdown\): allow selecting an item when pressing the spacebar [\#3702](https://github.com/Semantic-Org/Semantic-UI-React/pull/3702) ([nelsonleite](https://github.com/nelsonleite))
- fix\(Popup\): ignore clicks when `on` prop is set to `hover` only [\#3667](https://github.com/Semantic-Org/Semantic-UI-React/pull/3667) ([ecnaidar](https://github.com/ecnaidar))
- fix\(Dropdown\): retains focus after selection [\#3452](https://github.com/Semantic-Org/Semantic-UI-React/pull/3452) ([jongsue](https://github.com/jongsue))

## [v0.87.3](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.87.3) (2019-07-09)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.87.2...v0.87.3)

**Merged pull requests:**

- fix\(Checkbox\): handle change on root element [\#3693](https://github.com/Semantic-Org/Semantic-UI-React/pull/3693) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): handle click properly on label [\#3692](https://github.com/Semantic-Org/Semantic-UI-React/pull/3692) ([layershifter](https://github.com/layershifter))
- test\(Checkbox\): remove incorrect event combinations [\#3691](https://github.com/Semantic-Org/Semantic-UI-React/pull/3691) ([layershifter](https://github.com/layershifter))
- fix\(Sidebar\): fix hide animation [\#3684](https://github.com/Semantic-Org/Semantic-UI-React/pull/3684) ([layershifter](https://github.com/layershifter))
- fix\(Popup\): update `hideOnScroll` description in typings [\#3682](https://github.com/Semantic-Org/Semantic-UI-React/pull/3682) ([vsramanujan](https://github.com/vsramanujan))
- feat\(Label\): add `prompt` prop [\#3680](https://github.com/Semantic-Org/Semantic-UI-React/pull/3680) ([layershifter](https://github.com/layershifter))
- fix\(Modal\): support IE11, fix scrolling glitches [\#3679](https://github.com/Semantic-Org/Semantic-UI-React/pull/3679) ([layershifter](https://github.com/layershifter))
- chore\(docs\): make docs working in IE11 [\#3678](https://github.com/Semantic-Org/Semantic-UI-React/pull/3678) ([layershifter](https://github.com/layershifter))
- docs\(layouts\): fix incorrectly cased tabIndex in Bootstrap layout [\#3668](https://github.com/Semantic-Org/Semantic-UI-React/pull/3668) ([AaronCTech](https://github.com/AaronCTech))
- feat\(Form\): make `error` prop shorthand in Form.Field [\#3603](https://github.com/Semantic-Org/Semantic-UI-React/pull/3603) ([bubunyo](https://github.com/bubunyo))
- fix\(Dropdown\): use `placeholder` as default text [\#3586](https://github.com/Semantic-Org/Semantic-UI-React/pull/3586) ([eyas2014](https://github.com/eyas2014))

## [v0.87.2](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.87.2) (2019-06-14)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.87.1...v0.87.2)

**Merged pull requests:**

- feat\(Popup\): add `popperDependencies` prop [\#3657](https://github.com/Semantic-Org/Semantic-UI-React/pull/3657) ([layershifter](https://github.com/layershifter))
- feat\(Popup\): add pinned and popperModifiers prop [\#3654](https://github.com/Semantic-Org/Semantic-UI-React/pull/3654) ([layershifter](https://github.com/layershifter))
- docs\(mixed\): improve perf & bundle size, fix issue with /layouts [\#3652](https://github.com/Semantic-Org/Semantic-UI-React/pull/3652) ([layershifter](https://github.com/layershifter))
- docs\(Examples\): reduce number of items in examples, fix HMR issues [\#3651](https://github.com/Semantic-Org/Semantic-UI-React/pull/3651) ([layershifter](https://github.com/layershifter))
- feat\(Dropdown\): add 'closeOnEscape' prop [\#3632](https://github.com/Semantic-Org/Semantic-UI-React/pull/3632) ([mhatvan](https://github.com/mhatvan))
- docs\(Layouts\): fix vertical alignment on LoginPage [\#3623](https://github.com/Semantic-Org/Semantic-UI-React/pull/3623) ([ashvinikumar](https://github.com/ashvinikumar))
- fix\(Dropdown\): aria-live region needs aria-atomic [\#3621](https://github.com/Semantic-Org/Semantic-UI-React/pull/3621) ([fracmak](https://github.com/fracmak))
- perf\(Modal\): reduce unnecessary layout invalidations [\#3609](https://github.com/Semantic-Org/Semantic-UI-React/pull/3609) ([HighCoordination](https://github.com/HighCoordination))
- fix\(Popup\): fix positioning in scrollable container [\#3607](https://github.com/Semantic-Org/Semantic-UI-React/pull/3607) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): search does not preserve value [\#3584](https://github.com/Semantic-Org/Semantic-UI-React/pull/3584) ([mihai-dinculescu](https://github.com/mihai-dinculescu))

## [v0.87.1](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.87.1) (2019-05-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.87.0...v0.87.1)

**Merged pull requests:**

- chore\(package\): remove `browser` field [\#3598](https://github.com/Semantic-Org/Semantic-UI-React/pull/3598) ([layershifter](https://github.com/layershifter))

## [v0.87.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.87.0) (2019-05-06)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.86.0...v0.87.0)

**Merged pull requests:**

- fix\(Ref\): fix 'prop-types' import in RefForward [\#3594](https://github.com/Semantic-Org/Semantic-UI-React/pull/3594) ([layershifter](https://github.com/layershifter))
- fix\(Modal\): do not close when mouse click was occurred inside [\#3582](https://github.com/Semantic-Org/Semantic-UI-React/pull/3582) ([joergbaier](https://github.com/joergbaier))
- docs\(pages\): add navigation footer [\#3577](https://github.com/Semantic-Org/Semantic-UI-React/pull/3577) ([layershifter](https://github.com/layershifter))
- fix\(Popup|Portal\): do not close when mouse click was occurred inside [\#3575](https://github.com/Semantic-Org/Semantic-UI-React/pull/3575) ([mihai-dinculescu](https://github.com/mihai-dinculescu))
- feat\(Table\): add `headerRows` to allow to render multiple headers [\#3574](https://github.com/Semantic-Org/Semantic-UI-React/pull/3574) ([TecHunter](https://github.com/TecHunter))
- style\(configs\): code comment fix [\#3570](https://github.com/Semantic-Org/Semantic-UI-React/pull/3570) ([DenrizSusam](https://github.com/DenrizSusam))
- chore\(package\): add `browser` field that points to UMD build [\#3566](https://github.com/Semantic-Org/Semantic-UI-React/pull/3566) ([soederpop](https://github.com/soederpop))
- docs\(Shorthand|Theming\): rework docs to be more actual [\#3564](https://github.com/Semantic-Org/Semantic-UI-React/pull/3564) ([layershifter](https://github.com/layershifter))
- docs\(ComponentSidebarSection\): replace deprecated lifecycle methods [\#3559](https://github.com/Semantic-Org/Semantic-UI-React/pull/3559) ([grumblerchester](https://github.com/grumblerchester))
- docs\(ComponentProps\): replace deprecated lifecycle methods [\#3555](https://github.com/Semantic-Org/Semantic-UI-React/pull/3555) ([grumblerchester](https://github.com/grumblerchester))
- fix\(Card\): fix `image` shorthand [\#3551](https://github.com/Semantic-Org/Semantic-UI-React/pull/3551) ([layershifter](https://github.com/layershifter))
- chore\(docs\): replace HOCs with React.memo [\#3550](https://github.com/Semantic-Org/Semantic-UI-React/pull/3550) ([layershifter](https://github.com/layershifter))
- perf\(docs\): improve rendering performance of example's pages [\#3549](https://github.com/Semantic-Org/Semantic-UI-React/pull/3549) ([layershifter](https://github.com/layershifter))
- fix\(build\): fix exports in UMD build [\#3540](https://github.com/Semantic-Org/Semantic-UI-React/pull/3540) ([layershifter](https://github.com/layershifter))
- docs\(ComponentDoc\): replace deprecated lifecycle methods [\#3535](https://github.com/Semantic-Org/Semantic-UI-React/pull/3535) ([grumblerchester](https://github.com/grumblerchester))
- docs\(ComponentExample\): replace deprecated lifecycle methods [\#3533](https://github.com/Semantic-Org/Semantic-UI-React/pull/3533) ([grumblerchester](https://github.com/grumblerchester))
- breaking\(Popup\): switch to Popper.js [\#3532](https://github.com/Semantic-Org/Semantic-UI-React/pull/3532) ([layershifter](https://github.com/layershifter))
- docs\(Dropdown\): remove deprecated lifecycle method from DropdownExampleRemote [\#3529](https://github.com/Semantic-Org/Semantic-UI-React/pull/3529) ([grumblerchester](https://github.com/grumblerchester))
- fix\(docs\): remove component page hash replacement [\#3528](https://github.com/Semantic-Org/Semantic-UI-React/pull/3528) ([grumblerchester](https://github.com/grumblerchester))
- fix\(Dimmer|Modal\): fix assignment of styles [\#3525](https://github.com/Semantic-Org/Semantic-UI-React/pull/3525) ([layershifter](https://github.com/layershifter))
- docs\(mixed\): add gender other to gender selectors [\#3524](https://github.com/Semantic-Org/Semantic-UI-React/pull/3524) ([tanohzana](https://github.com/tanohzana))
- docs\(Dropdown\): fix floating example in FF [\#3522](https://github.com/Semantic-Org/Semantic-UI-React/pull/3522) ([layershifter](https://github.com/layershifter))
- chore\(package\): bump dependencies [\#3516](https://github.com/Semantic-Org/Semantic-UI-React/pull/3516) ([layershifter](https://github.com/layershifter))
- fix\(Portal\): fix `target` for `mouseEnter`/`mouselLeave` events [\#3515](https://github.com/Semantic-Org/Semantic-UI-React/pull/3515) ([layershifter](https://github.com/layershifter))
- docs\(Search\): replace deprecated lifecycle methods in examples [\#3511](https://github.com/Semantic-Org/Semantic-UI-React/pull/3511) ([layershifter](https://github.com/layershifter))
- docs\(examples\): prevent internal imports via eslint [\#3503](https://github.com/Semantic-Org/Semantic-UI-React/pull/3503) ([Fabianopb](https://github.com/Fabianopb))
- fix\(Sticky\): preserve item height [\#3500](https://github.com/Semantic-Org/Semantic-UI-React/pull/3500) ([felixmosh](https://github.com/felixmosh))
- fix\(Visibility\): handle context scroll instead of just window scroll [\#3400](https://github.com/Semantic-Org/Semantic-UI-React/pull/3400) ([johnkeane475](https://github.com/johnkeane475))

## [v0.86.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.86.0) (2019-03-13)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.85.0...v0.86.0)

**Merged pull requests:**

- perf\(docs\): improve doc examples performance [\#3497](https://github.com/Semantic-Org/Semantic-UI-React/pull/3497) ([levithomason](https://github.com/levithomason))
- fix\(Tab\): panes type definition [\#3496](https://github.com/Semantic-Org/Semantic-UI-React/pull/3496) ([mbakiev](https://github.com/mbakiev))
- docs\(Search\): remove imports of other examples [\#3494](https://github.com/Semantic-Org/Semantic-UI-React/pull/3494) ([Fabianopb](https://github.com/Fabianopb))
- fix\(Pagination\): update handling of `onClick` for `ellipsisItem` [\#3493](https://github.com/Semantic-Org/Semantic-UI-React/pull/3493) ([layershifter](https://github.com/layershifter))
- docs\(Breadcrumb\): rework and clarify component examples [\#3488](https://github.com/Semantic-Org/Semantic-UI-React/pull/3488) ([layershifter](https://github.com/layershifter))
- docs\(CodeSandbox\): fix broken icon fonts [\#3487](https://github.com/Semantic-Org/Semantic-UI-React/pull/3487) ([layershifter](https://github.com/layershifter))
- docs\(Dropdown|Select|Visibility\): remove imports, use faker and components [\#3486](https://github.com/Semantic-Org/Semantic-UI-React/pull/3486) ([layershifter](https://github.com/layershifter))
- fix\(lib\): fully remove debug in production [\#3485](https://github.com/Semantic-Org/Semantic-UI-React/pull/3485) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): not calls `onChange` when value is not changed on item click [\#3482](https://github.com/Semantic-Org/Semantic-UI-React/pull/3482) ([jongsue](https://github.com/jongsue))
- fix\(Ref\): update `node` if it was changed [\#3474](https://github.com/Semantic-Org/Semantic-UI-React/pull/3474) ([layershifter](https://github.com/layershifter))
- fix\(mixed\): handle properly refs on third-party components [\#3471](https://github.com/Semantic-Org/Semantic-UI-React/pull/3471) ([layershifter](https://github.com/layershifter))
- breaking\(TextArea\): remove `autoHeight` prop [\#3465](https://github.com/Semantic-Org/Semantic-UI-React/pull/3465) ([layershifter](https://github.com/layershifter))
- chore\(Button\): use createRef\(\) API internally [\#3460](https://github.com/Semantic-Org/Semantic-UI-React/pull/3460) ([layershifter](https://github.com/layershifter))
- feat\(Popup\): support an object from `createRef\(\)` as context value [\#3459](https://github.com/Semantic-Org/Semantic-UI-React/pull/3459) ([layershifter](https://github.com/layershifter))
- chore\(Dropdown\): use createRef\(\) internally [\#3458](https://github.com/Semantic-Org/Semantic-UI-React/pull/3458) ([layershifter](https://github.com/layershifter))
- chore\(Modal\): use createRef\(\) API internally [\#3457](https://github.com/Semantic-Org/Semantic-UI-React/pull/3457) ([layershifter](https://github.com/layershifter))
- fix\(Search\): prevent blur event when SearchResult is clicked [\#3456](https://github.com/Semantic-Org/Semantic-UI-React/pull/3456) ([jongsue](https://github.com/jongsue))
- chore\(Sidebar|Visibility\): use createRef\(\) API internally [\#3455](https://github.com/Semantic-Org/Semantic-UI-React/pull/3455) ([layershifter](https://github.com/layershifter))
- BREAKING\(Portal\): use createRef\(\) API internally [\#3454](https://github.com/Semantic-Org/Semantic-UI-React/pull/3454) ([layershifter](https://github.com/layershifter))
- chore\(Input|TextArea\): use createRef\(\) API [\#3453](https://github.com/Semantic-Org/Semantic-UI-React/pull/3453) ([layershifter](https://github.com/layershifter))
- feat\(Sidebar\): support object refs as value for `target` prop [\#3451](https://github.com/Semantic-Org/Semantic-UI-React/pull/3451) ([layershifter](https://github.com/layershifter))
- docs\(Modal\): fix Modal.Description description [\#3450](https://github.com/Semantic-Org/Semantic-UI-React/pull/3450) ([garyhollandxyz](https://github.com/garyhollandxyz))
- feat\(MountNode\): support refs as value for `node` prop [\#3449](https://github.com/Semantic-Org/Semantic-UI-React/pull/3449) ([layershifter](https://github.com/layershifter))
- feat\(Sticky\): accept refs as value for `context` and `scrollContext` props [\#3448](https://github.com/Semantic-Org/Semantic-UI-React/pull/3448) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): correctly handle `focus` value in state [\#3445](https://github.com/Semantic-Org/Semantic-UI-React/pull/3445) ([layershifter](https://github.com/layershifter))
- fix\(Input\): update supported values for the `size` prop [\#3444](https://github.com/Semantic-Org/Semantic-UI-React/pull/3444) ([layershifter](https://github.com/layershifter))
- feat\(Transition\): allow custom animations [\#3438](https://github.com/Semantic-Org/Semantic-UI-React/pull/3438) ([jongsue](https://github.com/jongsue))
- fix\(Checkbox\): prevent click propagation from the input element [\#3435](https://github.com/Semantic-Org/Semantic-UI-React/pull/3435) ([Fabianopb](https://github.com/Fabianopb))
- fix\(Dropdown\): sets focus to the search input after selection [\#3430](https://github.com/Semantic-Org/Semantic-UI-React/pull/3430) ([jongsue](https://github.com/jongsue))
- chore\(Dropdown\): use EventStack component [\#3428](https://github.com/Semantic-Org/Semantic-UI-React/pull/3428) ([layershifter](https://github.com/layershifter))
- test\(Dropdown\): correct a test with open on Space key [\#3427](https://github.com/Semantic-Org/Semantic-UI-React/pull/3427) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): disable click on mouse right/middle button [\#3425](https://github.com/Semantic-Org/Semantic-UI-React/pull/3425) ([harish-a](https://github.com/harish-a))
- fix\(Dropdown\): retain focus on the input if the Dropdown receives a click [\#3422](https://github.com/Semantic-Org/Semantic-UI-React/pull/3422) ([jongsue](https://github.com/jongsue))
- docs\(Portal\): fix controlled Portal usage [\#3420](https://github.com/Semantic-Org/Semantic-UI-React/pull/3420) ([Fabianopb](https://github.com/Fabianopb))
- feat\(Accordion\): add `icon` shorthand for AccordionTitle [\#3417](https://github.com/Semantic-Org/Semantic-UI-React/pull/3417) ([sako9](https://github.com/sako9))
- feat\(Flag\): export names in typings [\#2957](https://github.com/Semantic-Org/Semantic-UI-React/pull/2957) ([layershifter](https://github.com/layershifter))
- docs\(Sticky\): add warning about erratic behavior inside `Sidebar.Pushable` [\#2936](https://github.com/Semantic-Org/Semantic-UI-React/pull/2936) ([brambow](https://github.com/brambow))

## [v0.85.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.85.0) (2019-02-04)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.84.0...v0.85.0)

**Merged pull requests:**

- fix\(Portal\): fix onBlur handling in IE11 [\#3407](https://github.com/Semantic-Org/Semantic-UI-React/pull/3407) ([layershifter](https://github.com/layershifter))
- BREAKING\(Ref\): add support for forwardRef API [\#3405](https://github.com/Semantic-Org/Semantic-UI-React/pull/3405) ([layershifter](https://github.com/layershifter))
- docs\(ComponentExample\): allow to disable HTML preview [\#3404](https://github.com/Semantic-Org/Semantic-UI-React/pull/3404) ([layershifter](https://github.com/layershifter))
- docs\(Examples\): add ability to export examples to CodeSandbox [\#3399](https://github.com/Semantic-Org/Semantic-UI-React/pull/3399) ([layershifter](https://github.com/layershifter))
- fix\(docs\): fix a polyfill loading for IE11 [\#3395](https://github.com/Semantic-Org/Semantic-UI-React/pull/3395) ([oolleegg55](https://github.com/oolleegg55))
- fix\(Icon\): update typings for `corner` prop [\#3393](https://github.com/Semantic-Org/Semantic-UI-React/pull/3393) ([areading314](https://github.com/areading314))
- fix\(Dropdown\): prevent calling onChange unless value changed [\#3391](https://github.com/Semantic-Org/Semantic-UI-React/pull/3391) ([zarend](https://github.com/zarend))
- chore\(package\): upgrade keyboard-key [\#3390](https://github.com/Semantic-Org/Semantic-UI-React/pull/3390) ([levithomason](https://github.com/levithomason))
- chore\(package\): update karma and webpack [\#3383](https://github.com/Semantic-Org/Semantic-UI-React/pull/3383) ([layershifter](https://github.com/layershifter))
- chore\(tests\): make reporter more silent [\#3382](https://github.com/Semantic-Org/Semantic-UI-React/pull/3382) ([layershifter](https://github.com/layershifter))
- fix\(Input\): add `select` to type definitions [\#3380](https://github.com/Semantic-Org/Semantic-UI-React/pull/3380) ([skeate](https://github.com/skeate))
- feat\(Popup\): add `disabled` prop [\#3377](https://github.com/Semantic-Org/Semantic-UI-React/pull/3377) ([husseyexplores](https://github.com/husseyexplores))
- docs\(Responsive\): clarify SSR usage [\#3373](https://github.com/Semantic-Org/Semantic-UI-React/pull/3373) ([layershifter](https://github.com/layershifter))
- docs\(Prototypes\): add examples with `pure-react-carousel` [\#3372](https://github.com/Semantic-Org/Semantic-UI-React/pull/3372) ([layershifter](https://github.com/layershifter))
- fix\(Icon\): add `mail outline` as name [\#3371](https://github.com/Semantic-Org/Semantic-UI-React/pull/3371) ([layershifter](https://github.com/layershifter))
- chore\(package\): point manually to correct SUI version [\#3367](https://github.com/Semantic-Org/Semantic-UI-React/pull/3367) ([layershifter](https://github.com/layershifter))
- feat\(Icon\): `disabled` prop disables `onClick` [\#3358](https://github.com/Semantic-Org/Semantic-UI-React/pull/3358) ([shuminyang](https://github.com/shuminyang))
- docs\(Responsive\): update ResponsiveExampleMaxWidth.js \(added two words to clarify\) [\#3354](https://github.com/Semantic-Org/Semantic-UI-React/pull/3354) ([janderudder](https://github.com/janderudder))
- fix\(Checkbox\): prevent `onClick` from being called twice [\#3351](https://github.com/Semantic-Org/Semantic-UI-React/pull/3351) ([Fabianopb](https://github.com/Fabianopb))
- fix\(Textarea\): fix broken ctrl-z on firefox [\#3343](https://github.com/Semantic-Org/Semantic-UI-React/pull/3343) ([ericls](https://github.com/ericls))
- docs\(Placeholder\): remove extra HTML and classes [\#3340](https://github.com/Semantic-Org/Semantic-UI-React/pull/3340) ([levithomason](https://github.com/levithomason))
- BREAKING \(Sidebar\): remove `duration` prop [\#3336](https://github.com/Semantic-Org/Semantic-UI-React/pull/3336) ([Fabianopb](https://github.com/Fabianopb))
- docs\(Props\): fix "Props" checkbox [\#3332](https://github.com/Semantic-Org/Semantic-UI-React/pull/3332) ([layershifter](https://github.com/layershifter))
- chore\(build\): drop DLL stage [\#3324](https://github.com/Semantic-Org/Semantic-UI-React/pull/3324) ([layershifter](https://github.com/layershifter))
- fix\(Popup\): default open position [\#3029](https://github.com/Semantic-Org/Semantic-UI-React/pull/3029) ([levithomason](https://github.com/levithomason))

## [v0.84.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.84.0) (2018-12-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.83.0...v0.84.0)

**Merged pull requests:**

- feat\(Button\) : Add aria-pressed attribute for toggle button [\#3330](https://github.com/Semantic-Org/Semantic-UI-React/pull/3330) ([a-b-h-i-97](https://github.com/a-b-h-i-97))
- docs\(fix\): reorganized usage guide for new users [\#3325](https://github.com/Semantic-Org/Semantic-UI-React/pull/3325) ([ebectar](https://github.com/ebectar))
- chore\(Dimmer\): use createRef\(\) API and componentDidUpdate\(\) [\#3320](https://github.com/Semantic-Org/Semantic-UI-React/pull/3320) ([layershifter](https://github.com/layershifter))
- docs\(Layouts\): fix HomepageLayout [\#3319](https://github.com/Semantic-Org/Semantic-UI-React/pull/3319) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): clear searchQuery on item selection by mouse click [\#3317](https://github.com/Semantic-Org/Semantic-UI-React/pull/3317) ([kohakukun](https://github.com/kohakukun))
- docs\(Layouts\): update FixedMenuLayout [\#3316](https://github.com/Semantic-Org/Semantic-UI-React/pull/3316) ([xiaohanyu](https://github.com/xiaohanyu))
- feat\(Icon\): support positions in `corner` prop [\#3315](https://github.com/Semantic-Org/Semantic-UI-React/pull/3315) ([layershifter](https://github.com/layershifter))
- fix\(ComponentExample\): fix crash on show HTML [\#3314](https://github.com/Semantic-Org/Semantic-UI-React/pull/3314) ([layershifter](https://github.com/layershifter))
- fix\(Rating\): conditionally set tabIndex when element is disabled [\#3308](https://github.com/Semantic-Org/Semantic-UI-React/pull/3308) ([Fabianopb](https://github.com/Fabianopb))
- fix\(AutoControlledComponent\): fix behaviour when undefined it passed [\#3303](https://github.com/Semantic-Org/Semantic-UI-React/pull/3303) ([layershifter](https://github.com/layershifter))
- fix\(Responsive|Transition\): remove logic with setSafeState\(\) [\#3302](https://github.com/Semantic-Org/Semantic-UI-React/pull/3302) ([layershifter](https://github.com/layershifter))
- fix\(Popup\): remove logic with setSafeState\(\) [\#3301](https://github.com/Semantic-Org/Semantic-UI-React/pull/3301) ([layershifter](https://github.com/layershifter))
- chore\(MountNode\): use componentDidMount\(\) [\#3300](https://github.com/Semantic-Org/Semantic-UI-React/pull/3300) ([layershifter](https://github.com/layershifter))
- feat\(Pagination\): add `disabled` prop [\#3295](https://github.com/Semantic-Org/Semantic-UI-React/pull/3295) ([layershifter](https://github.com/layershifter))
- chore\(package\): update event-stack [\#3288](https://github.com/Semantic-Org/Semantic-UI-React/pull/3288) ([layershifter](https://github.com/layershifter))
- feat\(Ref\): add support of `createRef` API [\#3286](https://github.com/Semantic-Org/Semantic-UI-React/pull/3286) ([layershifter](https://github.com/layershifter))
- chore\(package\): use `shallowequal` directly [\#3285](https://github.com/Semantic-Org/Semantic-UI-React/pull/3285) ([layershifter](https://github.com/layershifter))
- feat\(Responsive\): re render only on visibility or props change [\#3274](https://github.com/Semantic-Org/Semantic-UI-React/pull/3274) ([danielr18](https://github.com/danielr18))
- fix\(Button\): remove redundant role attribute [\#3272](https://github.com/Semantic-Org/Semantic-UI-React/pull/3272) ([floppyvlaDISK](https://github.com/floppyvlaDISK))
- fix\(Pagination\): fix hidden ellipsis in items generation [\#3271](https://github.com/Semantic-Org/Semantic-UI-React/pull/3271) ([layershifter](https://github.com/layershifter))
-  docs\(Divider\): rework component docs [\#3270](https://github.com/Semantic-Org/Semantic-UI-React/pull/3270) ([layershifter](https://github.com/layershifter))
- docs\(Textarea\): add notice about form [\#3269](https://github.com/Semantic-Org/Semantic-UI-React/pull/3269) ([layershifter](https://github.com/layershifter))
- fix\(Layouts\): fix propTypes error in StickyLayout [\#3261](https://github.com/Semantic-Org/Semantic-UI-React/pull/3261) ([kalzoo](https://github.com/kalzoo))
- fix\(Comment\): spread image props on CommentAvatar [\#3260](https://github.com/Semantic-Org/Semantic-UI-React/pull/3260) ([layershifter](https://github.com/layershifter))
- fix\(Portal\): hover behavior fixed in Portal's event handlers [\#3257](https://github.com/Semantic-Org/Semantic-UI-React/pull/3257) ([Fabianopb](https://github.com/Fabianopb))
- docs\(Modal|Confirm\): sort `size` prop in sizes order [\#3237](https://github.com/Semantic-Org/Semantic-UI-React/pull/3237) ([fcwheat](https://github.com/fcwheat))
-  docs\(Usage\): fix link to Semantic UI CSS [\#3236](https://github.com/Semantic-Org/Semantic-UI-React/pull/3236) ([layershifter](https://github.com/layershifter))
- fix\(Layouts\): fix typo in StickyLayout [\#3235](https://github.com/Semantic-Org/Semantic-UI-React/pull/3235) ([xiaohanyu](https://github.com/xiaohanyu))
- fix\(Layouts\): fix typo in FixedMenuLayout [\#3234](https://github.com/Semantic-Org/Semantic-UI-React/pull/3234) ([xiaohanyu](https://github.com/xiaohanyu))
- feat\(Sticky\): add `styleElement` prop [\#3202](https://github.com/Semantic-Org/Semantic-UI-React/pull/3202) ([Wattenberger](https://github.com/Wattenberger))
- fix\(Accordion\): log error if incorrect activeIndex type [\#3199](https://github.com/Semantic-Org/Semantic-UI-React/pull/3199) ([skindstrom](https://github.com/skindstrom))
- feat\(Dropdown\): noResultsMessage prop can be a node [\#3177](https://github.com/Semantic-Org/Semantic-UI-React/pull/3177) ([lazazivkovic](https://github.com/lazazivkovic))
- BREAKING\(package\): require React 16.3 [\#3032](https://github.com/Semantic-Org/Semantic-UI-React/pull/3032) ([layershifter](https://github.com/layershifter))
- fix\(Checkbox\): match DOM checkbox behavior [\#2748](https://github.com/Semantic-Org/Semantic-UI-React/pull/2748) ([levithomason](https://github.com/levithomason))

## [v0.83.0](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.83.0) (2018-10-20)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.82.5...v0.83.0)

**Merged pull requests:**

- fix\(Input\): fix typings for onChange [\#3230](https://github.com/Semantic-Org/Semantic-UI-React/pull/3230) ([layershifter](https://github.com/layershifter))
- docs\(Layouts\): fix examples with incorrect props [\#3227](https://github.com/Semantic-Org/Semantic-UI-React/pull/3227) ([AlanFoster](https://github.com/AlanFoster))
- docs\(Ads\): fix rendering in SSR [\#3218](https://github.com/Semantic-Org/Semantic-UI-React/pull/3218) ([layershifter](https://github.com/layershifter))
- docs\(Ads\): fix multiple ads [\#3215](https://github.com/Semantic-Org/Semantic-UI-React/pull/3215) ([layershifter](https://github.com/layershifter))
- chore\(build\): update babel deps, fix production build of docs and build on Windows [\#3214](https://github.com/Semantic-Org/Semantic-UI-React/pull/3214) ([layershifter](https://github.com/layershifter))
- docs\(Search\): fix resolver imports [\#3213](https://github.com/Semantic-Org/Semantic-UI-React/pull/3213) ([layershifter](https://github.com/layershifter))
- docs\(README\): fix link to CSS Usage page [\#3212](https://github.com/Semantic-Org/Semantic-UI-React/pull/3212) ([jahvi](https://github.com/jahvi))
- fix\(typings\): fix definition for SemanticShorthandItemFunc [\#3204](https://github.com/Semantic-Org/Semantic-UI-React/pull/3204) ([layershifter](https://github.com/layershifter))
- docs\(Prototypes\): add example integration with redux-form [\#3203](https://github.com/Semantic-Org/Semantic-UI-React/pull/3203) ([layershifter](https://github.com/layershifter))
- docs\(mixed\): add MDX support, update pages, styling updates [\#3196](https://github.com/Semantic-Org/Semantic-UI-React/pull/3196) ([layershifter](https://github.com/layershifter))
- feat\(Sidebar\): add `target` prop [\#3191](https://github.com/Semantic-Org/Semantic-UI-React/pull/3191) ([layershifter](https://github.com/layershifter))
- BREAKING\(eventStack\): fix issues with event subscriptions [\#3189](https://github.com/Semantic-Org/Semantic-UI-React/pull/3189) ([layershifter](https://github.com/layershifter))
- fix\(Input\): pass `title` down to an input element [\#3187](https://github.com/Semantic-Org/Semantic-UI-React/pull/3187) ([layershifter](https://github.com/layershifter))
- docs\(props\): improve parsing of customPropTypes.every\(\) [\#3185](https://github.com/Semantic-Org/Semantic-UI-React/pull/3185) ([layershifter](https://github.com/layershifter))
- fix\(Grid\): improve propTypes check for width props [\#3184](https://github.com/Semantic-Org/Semantic-UI-React/pull/3184) ([layershifter](https://github.com/layershifter))
- fix\(customPropTypes|typings\): allow to pass a function to itemShorthand, update typings [\#3183](https://github.com/Semantic-Org/Semantic-UI-React/pull/3183) ([layershifter](https://github.com/layershifter))
-  docs\(Advertisement\): update a base Advertisement example [\#3179](https://github.com/Semantic-Org/Semantic-UI-React/pull/3179) ([layershifter](https://github.com/layershifter))
- docs\(Document\): use only https sources [\#3178](https://github.com/Semantic-Org/Semantic-UI-React/pull/3178) ([layershifter](https://github.com/layershifter))
- docs\(Grid\): fix typo in GridExampleStretched example description [\#3167](https://github.com/Semantic-Org/Semantic-UI-React/pull/3167) ([sgarrity](https://github.com/sgarrity))
- chore\(package\): update to SUI 2.4.0 [\#3162](https://github.com/Semantic-Org/Semantic-UI-React/pull/3162) ([layershifter](https://github.com/layershifter))
- docs\(Form\): add an example of accessible Form.Select [\#3157](https://github.com/Semantic-Org/Semantic-UI-React/pull/3157) ([arthurdenner](https://github.com/arthurdenner))
- chore\(typings\): add strict props [\#3107](https://github.com/Semantic-Org/Semantic-UI-React/pull/3107) ([evollu](https://github.com/evollu))
- chore\(Sidebar\): use EventStack component [\#2990](https://github.com/Semantic-Org/Semantic-UI-React/pull/2990) ([layershifter](https://github.com/layershifter))

## [v0.82.5](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.82.5) (2018-09-12)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.82.4...v0.82.5)

**Merged pull requests:**

- fix\(EventStack\): fix issues with event handling [\#3148](https://github.com/Semantic-Org/Semantic-UI-React/pull/3148) ([layershifter](https://github.com/layershifter))

## [v0.82.4](https://github.com/Semantic-Org/Semantic-UI-React/tree/v0.82.4) (2018-09-10)
[Full Changelog](https://github.com/Semantic-Org/Semantic-UI-React/compare/v0.82.3...v0.82.4)

**Merged pull requests:**

- chore\(package\): update babel-plugin-filter-imports [\#3145](https://github.com/Semantic-Org/Semantic-UI-React/pull/3145) ([layershifter](https://github.com/layershifter))
- chore\(build\): fix prettier imports [\#3142](https://github.com/Semantic-Org/Semantic-UI-React/pull/3142) ([layershifter](https://github.com/layershifter))
- fix\(customPropTypes\): allow to pass an object to "as" [\#3139](https://github.com/Semantic-Org/Semantic-UI-React/pull/3139) ([tomitrescak](https://github.com/tomitrescak))
- chore\(package\): update deps [\#3131](https://github.com/Semantic-Org/Semantic-UI-React/pull/3131) ([layershifter](https://github.com/layershifter))
- chore\(package\): update Babel 7 [\#3129](https://github.com/Semantic-Org/Semantic-UI-React/pull/3129) ([layershifter](https://github.com/layershifter))
- docs\(README\): fix CircleCI image [\#3128](https://github.com/Semantic-Org/Semantic-UI-React/pull/3128) ([layershifter](https://github.com/layershifter))
- feat\(List\): allow overriding role prop [\#3125](https://github.com/Semantic-Org/Semantic-UI-React/pull/3125) ([johannao76](https://github.com/johannao76))
- fix\(EventStack\): fix compatibility with IE11 [\#3124](https://github.com/Semantic-Org/Semantic-UI-React/pull/3124) ([layershifter](https://github.com/layershifter))
- fix\(Dropdown\): override onChange in DropdownSearchInput [\#3123](https://github.com/Semantic-Org/Semantic-UI-React/pull/3123) ([layershifter](https://github.com/layershifter))
- fix\(Popup\): missing CSS style update [\#3109](https://github.com/Semantic-Org/Semantic-UI-React/pull/3109) ([pferreir](https://github.com/pferreir))
- fix\(Dropdown\): fix deepEqual bug [\#3104](https://github.com/Semantic-Org/Semantic-UI-React/pull/3104) ([pedromtorres](https://github.com/pedromtorres))
- fix\(docs\): fix issues with local builds [\#3098](https://github.com/Semantic-Org/Semantic-UI-React/pull/3098) ([layershifter](https://github.com/layershifter))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
