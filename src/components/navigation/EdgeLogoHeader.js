// @flow

import * as React from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'

import edgeLogo from '../../assets/images/edgeLogo/Edge_logo_Icon.png'
import { type Theme, cacheStyles, useTheme } from '../services/ThemeContext.js'

export function EdgeLogoHeader() {
  const styles = getStyles(useTheme())
  return (
    <View style={styles.container}>
      <FastImage style={styles.icon} source={edgeLogo} resizeMode="contain" />
    </View>
  )
}

const getStyles = cacheStyles((theme: Theme) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: theme.rem(1.25),
    height: theme.rem(1.25)
  }
}))
