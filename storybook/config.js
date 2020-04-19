import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import pkg from '../package.json'

function loadStories () {
  require('../stories/index.js')
}

addDecorator(
  withOptions({
    name: 'React CSS Spinners',
    url: pkg.repository.url,
    showAddonPanel: false
  })
)

configure(loadStories, module)
