/* eslint-disable flowtype/require-valid-file-annotation */

import { describe, expect, it } from '@jest/globals'
import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { getTheme } from '../../components/services/ThemeContext.js'
import { EdgeTextFieldComponent } from '../../components/themed/EdgeTextField.js'

describe('EdgeTextField', () => {
  it('should render with loading props', () => {
    const renderer = createRenderer()

    const props = {
      marginRem: 11,

      theme: getTheme()
    }
    const actual = renderer.render(<EdgeTextFieldComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
