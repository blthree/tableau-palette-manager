
'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function colorToHex (color) {
	"0x"+Object.keys(color).map((x)=>parseInt(color[x]).toString(16)).slice(0,3).join("")
}

class ColorPicker extends React.Component {
  state = {
	displayColorPicker: false,
	colorKey: this.props.colorKey,
    color: "0xFFFFFF",
    isOpen: this.props.open,
	
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.props.onDialogClose()
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
//console.log(this.props.colorKey)
    return (
        <Dialog open={this.props.open} onClose={this.handleClose}>
        <DialogTitle>Select Color #{this.props.colorKey+1}</DialogTitle>
        <DialogContent>
        <SketchPicker color={ this.state.color } onChange={ this.handleChange } onChangeComplete={this.handleChangeComplete}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Accept</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ColorPicker 