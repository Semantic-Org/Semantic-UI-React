describe('Visual Regression - Smoke Tests', () => {
  const examples = [
    'button-example-button',
    'container-example-container',
    'divider-example-divider',
    'flag-example-flag',
    'header-example-page',
    'icon-example-size',
    'image-example-image',
    'input-example-input',
    'label-example-label',
    'list-example-basic',
    'rail-example-rail',
    'segment-example-segment',
    'step-example-step',
    'breadcrumb-example-standard',
    'form-example-form',
    'grid-example-grid',
    'menu-example-basic',
    'message-example-message',
    'table-example-pagination',
    'card-example-card',
    'comment-example-comment',
    'feed-example-basic',
    'item-example-items',
    'statistic-example-statistic',
    'accordion-example-standard',
    'checkbox-example-checkbox',
    'dimmer-example-dimmer',
    'dropdown-example-dropdown',
    'embed-example-youtube',
    'progress-example-standard',
    'rating-example-rating',
    'search-example-standard',
    'sidebar-example-visible',
    'tab-example-basic',
    'pagination-example-pagination',
    'radio-example-radio',
    'responsive-example-responsive',
    'select-example',
    'text-area-example-text-area',
  ]

  examples.forEach((example) => {
    it(example, () => {
      cy.visit(`http://localhost:3000/maximize/${example}/`)
        .eyesOpen({
          appName: 'Semantic UI React Docs',
          testName: example,
          browser: [
            {
              name: 'chrome',
              width: 1280,
              height: 800,
            },
            {
              name: 'firefox',
              width: 1280,
              height: 800,
            },
          ],
          showLogs: true,
        })
        .eyesCheckWindow({
          sizeMode: 'selector',
          selector: '#root > *:first-child',
        })
        .eyesClose()
    })
  })
})
