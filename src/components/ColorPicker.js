
'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

function colorToHex (color) {
	"0x"+Object.keys(color).map((x)=>parseInt(color[x]).toString(16)).slice(0,3).join("")
}

class ColorPicker extends React.Component {
  state = {
	displayColorPicker: false,
	key: null,
    color: "0xFFFFFF",
	
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
	this.setState({ color: color.hex })
  };

  handleChangeComplete = (color,event) => {
	this.props.onChangeComplete(color,this.props.colorKey)}


  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${ this.state.color }`,
        },
        swatch: {
          padding: '5px',
          background: '#c6c6c6',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
		},
		hexLabel: {
			padding: '5px',
          display: 'inline-block',

		}
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } onChangeComplete={this.handleChangeComplete}/>
		</div> : null }
		<div style={styles.hexLabel}>
		<span>{ this.state.color.toUpperCase()} </span>
		</div>
      </div>
    )
  }
}

export default ColorPicker 