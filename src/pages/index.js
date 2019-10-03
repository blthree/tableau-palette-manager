import React from 'react'
import {PaletteHolder} from '../components/PaletteHolder'
import ColorPicker from '../components/ColorPicker'
import CssBaseline from '@material-ui/core/CssBaseline';

export default () => (
  <div >
    <CssBaseline />
    <h1 style={{ textAlign: 'center' }}>Tableau XML Palette Generator</h1>
    <PaletteHolder/>
  </div>
)
