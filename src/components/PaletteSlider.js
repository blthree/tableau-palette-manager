
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const classes = makeStyles(theme => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

class PaletteSlider extends React.Component {
    state = {
        colorList: this.props.colorList,
        selectedIndex: null,
        sliderVal: this.props.colorList.length
        // value: this.props.colorList
    };

    handleLengthChange = (value) => {
      // console.log(value)
       this.props.onLengthChange(value)
    };
    handleSliderLengthChange = (value) => {
      
      if (value != this.state.sliderVal) {
        // console.log(this.state.sliderVal,value)
        this.setState({sliderVal: value})
        this.props.onLengthChange(value)
      }
       
    };



    render() {
        return (
          <div className={classes.root}>
<Typography id="input-slider" gutterBottom={true}>
Number of Colors
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ColorLensIcon />
        </Grid>
        <Grid item xs>
          <Slider
          value={this.props.colorList.length}
          // getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          // step={1}
          // marks
          min={2}
          max={20}
          onChange={(event,value)=>{this.handleSliderLengthChange(value)}}
        />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={this.props.colorList.length}
            margin="dense"
            onChange={(event)=>{this.handleLengthChange(event.target.value)}}
            // onBlur={this.handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 20,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>

        
      

        )}
    }

export {PaletteSlider}