import React, { Component } from 'react';
import reactCSS from 'reactcss'
import ColorPicker from './ColorPicker'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import '@material/react-list/dist/list.css'
import { styled } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




const duplicate = (x, n) => Array.from(new Array(n), () => x);
const duplicate2 = (n) => new Array(n).fill(1);

const classes = makeStyles(theme => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

class NewPalette extends React.Component {
    state = {
        colorList: this.props.colorList,
        selectedIndex: null,
    };

    handleLengthChange = (value) => {
       this.props.onLengthChange(value)
    };

    handleListClick = (index) => {
        this.props.onListClick(index)
    }



    render() {
        return (

        <div className={classes.root}>
     
                
                <List>
                    {duplicate2(this.props.colorList.length).map((blankItem, index) => {
                        return (
                            <ListItem 
                            style={
                                {'backgroundColor':this.props.colorList[index],
                                'border': '1px solid black',
                                'borderRadius': '4px',
                                'margin': '2px 2px 2px 2px'
                            }
                            }
                            onClick={() => { this.handleListClick(index) }} 
                            key={index}>
                                <ListItemText primary={"Color " + (index+1) + ": " + this.props.colorList[index]} />
                            </ListItem>)
                    })}
                </List>
                
            </div>
        )
    }
}
export { NewPalette }