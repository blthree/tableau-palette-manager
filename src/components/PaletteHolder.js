import React, { Component } from 'react';
import { NewPalette } from '../components/NewPalette'
import ColorPicker from '../components/ColorPicker'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ConfigTextArea } from '../components/ConfigTextArea'
import {PaletteSlider} from '../components/PaletteSlider'
const defaultPalette = [
    "#4e79a7",
    "#f28e2b",
    "#e15759",
    "#76b7b2",
    "#59a14f",
    "#edc948",
    "#b07aa1",
    "#ff9da7",
    "#9c755f",
    "#bab0ac"
]
const classes = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
class PaletteHolder extends React.Component {
    state = {
        colorList: defaultPalette,
        selectedIndex: null,
        pickerOpen: false,
    };

    handleChangeComplete = (color, key) => {

        const newColorList = this.state.colorList.map((item, j) => {
            // console.log(key, item, j, color)
            if (key === j) {
                return color.hex
            } else {
                return item
            }
        })
        // console.log(newColorList)
        this.setState({ colorList: newColorList })

    };
    handleListClick = (listIndex) => {
        // console.log(listIndex)
        this.setState({ selectedIndex: listIndex, pickerOpen: true })
    }
    handleDialogClose = () => {
        this.setState({ pickerOpen: false })
    }

    handleLengthChange = (newSize) => {
        let emptyList = new Array(parseInt(newSize)).fill("0xFFFFFF")
        const newColorList = emptyList.map((item, j) => {
            if (j < this.state.colorList.length) {
                return this.state.colorList[j]
            } else {
                return defaultPalette[j % 10]
            }

        })
        this.setState({ colorList: newColorList })
    };

    render() {
        return (
<Grid container className={classes.root} spacing={2}>
<Grid item xs={4}></Grid>
<Grid item xs={4}>

<Grid item>
    <PaletteSlider onLengthChange={this.handleLengthChange.bind(this)} colorList={this.state.colorList}/>
</Grid>

    </Grid><Grid item xs={4}></Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
        <Grid item>
         <NewPalette colorList={this.state.colorList}
                    onListClick={this.handleListClick.bind(this)}
                    onLengthChange={this.handleLengthChange.bind(this)}
                /></Grid>
                <Grid item>
                <ConfigTextArea colorList={this.state.colorList} key={this.state.colorList} />
                <ColorPicker
                    onChangeComplete={this.handleChangeComplete.bind(this)}
                    onDialogClose={this.handleDialogClose.bind(this)}
                    colorKey={this.state.selectedIndex}
                    open={this.state.pickerOpen} />
                
                </Grid>
        </Grid>
      </Grid>
</Grid>

        )
    }
}




{/* <div>
<NewPalette colorList={this.state.colorList}
    onListClick={this.handleListClick.bind(this)}
    onLengthChange={this.handleLengthChange.bind(this)}
/>
<ColorPicker
    onChangeComplete={this.handleChangeComplete.bind(this)}
    onDialogClose={this.handleDialogClose.bind(this)}
    colorKey={this.state.selectedIndex}
    open={this.state.pickerOpen} />
</div> */}
export { PaletteHolder }