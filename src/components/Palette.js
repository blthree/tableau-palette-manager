import React, {Component} from 'react';
import reactCSS from 'reactcss'
import ColorPicker from './ColorPicker'
import {ConfigTextArea} from '../components/ConfigTextArea'
import '@material/react-list/dist/list.css'
import List, {ListItem, ListItemText, ListDivider} from '@material/react-list';


const duplicate = (x, n) => Array.from(new Array(n), () => x);
const duplicate2 = (n) => new Array(n).fill(1);
class Palette extends React.Component {
    state = {
        colorList: new Array(4).fill("0xFFFFFF"),
        selectedIndex: null,
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
      handleListClick = (listIndex)=> {
          console.log(listIndex)
          this.setState({selectedIndex: listIndex})
      }

    render () {
        return (
            
            <div>
                <input type="number" defaultValue={this.state.colorList.length} onChange={ this.handleLengthChange } ></input>
                <List>
{duplicate2( this.state.colorList.length ).map((blankItem, index) => {
    return(
    <ListItem onClick={()=>{this.handleListClick(index)}} key={index}>
        <ColorPicker onChangeComplete={ this.handleChangeComplete.bind(this)} colorKey={index} key={index} open={index === this.state.selectedIndex }/>
        <ListDivider />
    </ListItem>)
}) } 
                </List>
                <ConfigTextArea colorList={this.state.colorList} key={this.state.colorList}/>
            </div>
        )
    }
}
export {Palette}