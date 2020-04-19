import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ellipsis, Ring, Ripple } from '../src'

storiesOf('Spinners', module)
  .add('Ellipses', () => <Ellipsis/>)
  .add('Ring', () => <Ring/>)
  .add('Ripple', () => <Ripple/>)
