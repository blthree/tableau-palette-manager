import React, { Component } from 'react';
import {NewPalette} from '../components/NewPalette'
import ColorPicker from '../components/ColorPicker'

class PaletteHolder extends React.Component {
    state = {
        colorList: new Array(4).fill("0xFFFFFF"),
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
        console.log(newColorList)
        this.setState({ colorList: newColorList })

    };
    handleListClick = (listIndex) => {
        console.log(listIndex)
        this.setState({ selectedIndex: listIndex, pickerOpen: true })
    }
    handleDialogClose = () => {
        this.setState({ pickerOpen: false })
    }
    render() {return (
        <div>
        <NewPalette colorList={this.state.colorList} 
        onListClick={this.handleListClick.bind(this)}
        />
        <ColorPicker 
            onChangeComplete={ this.handleChangeComplete.bind(this)}
            onDialogClose={this.handleDialogClose.bind(this)} 
            colorKey={this.state.selectedIndex} 
            open={this.state.pickerOpen }/>
        </div>

    )}
}

export { PaletteHolder }