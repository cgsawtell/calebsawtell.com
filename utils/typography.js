import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  headerFontFamily: ['rift', 'sans-serif'],
  headerWeight:'600',
  bodyFontFamily: ['nimbus-sans', 'sans-serif'],
  bodyWeight:'300',
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  scaleRatio: 2.25
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
