import React, { Component } from 'react';
import reactCSS from 'reactcss'
import ColorPicker from './ColorPicker'
import { ConfigTextArea } from '../components/ConfigTextArea'
import '@material/react-list/dist/list.css'
import { styled } from '@material-ui/styles';
import List, { ListItem, ListItemText, ListDivider } from '@material/react-list';


const duplicate = (x, n) => Array.from(new Array(n), () => x);
const duplicate2 = (n) => new Array(n).fill(1);
const StyledListItem = styled(ListItem)({
    backgroundColor: "blue",
    "&.selected, &.Mui-selected": {
      backgroundColor: "red"
    }
  });


class NewPalette extends React.Component {
    state = {
        colorList: this.props.colorList,
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
        this.setState({ colorList: newColorList })
    };

    handleListClick = (index) => {
        this.props.onListClick(index)
    }



    render() {
        return (

            <div>
                <input type="number" defaultValue={this.state.colorList.length} onChange={this.handleLengthChange} ></input>
                <List>
                    {duplicate2(this.state.colorList.length).map((blankItem, index) => {
                        return (
                            <ListItem
                            style={
                                {'background-color':this.props.colorList[index]}
                            }
                            onClick={() => { this.handleListClick(index) }} 
                            key={index}>
                                
                            </ListItem>)
                    })}
                </List>
                <ConfigTextArea colorList={this.props.colorList} key={this.props.colorList} />
            </div>
        )
    }
}
export { NewPalette }