import React from 'react'
import reactCSS from 'reactcss'
import ColorPicker from './ColorPicker'
import {ConfigTextArea} from '../components/ConfigTextArea'
const duplicate = (x, n) => Array.from(new Array(n), () => x);
const duplicate2 = (n) => new Array(n).fill(1);
class Palette extends React.Component {
    state = {
        numColors: 4,
        colorList: new Array(4).fill("0xFFFFFF")
      };
 
    handleChange = (event) => {
    this.setState({ numColors: parseInt(event.target.value) })
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
        this.setState({colorList:newColorList, numColors:newColorList.length})
       
      };
 
    render () {
        return (
            
            <div>
                <input type="number" defaultValue={this.state.numColors} onChange={ this.handleChange } ></input>
                {duplicate2( this.state.numColors ).map((blankItem, index) => {
                    return(<ColorPicker onChangeComplete={ this.handleChangeComplete.bind(this)} colorKey={index} key={index}/>)
                }) } 
                <ConfigTextArea colorList={this.state.colorList}/>
            </div>
        )
    }
}
export {Palette}