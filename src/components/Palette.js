import React from 'react'
import reactCSS from 'reactcss'
import ColorPicker from './ColorPicker'
import {ConfigTextArea} from '../components/ConfigTextArea'
const duplicate = (x, n) => Array.from(new Array(n), () => x);
const duplicate2 = (n) => new Array(n).fill(1);
class Palette extends React.Component {
    state = {
        colorList: new Array(4).fill("0xFFFFFF")
      };
 
    handleLengthChange = (event) => {
    let emptyList = new Array(parseInt(event.target.value)).fill("0xFFFFFF")
    const newColorList = emptyList.map((item, j) => {
        if (j < this.state.colorList.length) {
            return this.state.colorList[j]
        } else {
            return emptyList[j]
        }
        
    })
    this.setState({colorList:newColorList})
    };


    handleChangeComplete = (color, key) => {
        
        const newColorList = this.state.colorList.map((item, j) => {
                console.log(key, item, j, color)
                if (key === j) {
                return color.hex
            } else {
                return item
            }
        })
        console.log (newColorList)
        this.setState({colorList:newColorList})
       
      };
 
    render () {
        return (
            
            <div>
                <input type="number" defaultValue={this.state.colorList.length} onChange={ this.handleLengthChange } ></input>
                {duplicate2( this.state.colorList.length ).map((blankItem, index) => {
                    return(<ColorPicker onChangeComplete={ this.handleChangeComplete.bind(this)} colorKey={index} key={index}/>)
                }) } 
                <ConfigTextArea colorList={this.state.colorList} key={this.state.colorList}/>
            </div>
        )
    }
}
export {Palette}