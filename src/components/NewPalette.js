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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


const duplicate = (x, n) => Array.from(new Array(n), () => x);
const duplicate2 = (n) => new Array(n).fill(1);

const classes = makeStyles(theme => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
    title: {
        fontSize: 14,
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
            
            <div className={classes.root} style={{marginLeft: '10%', marginRight: '10%'}}>
                <Grid container justify="center" spacing={2} direction="row">
                {this.props.colorList.map((color, index) => {
                    let z = (
                        <Grid item xs={2} >
                        <Card style={{ backgroundColor: color }} onClick={() => { this.handleListClick(index) }}
                            key={index}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {"Color " + (index + 1) + ": "}
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    {color.toUpperCase()}
                                </Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                    )
                    return z
                    // if(index===0){
                    //     return ([<Grid item xs={2} ></Grid>,z])
                    // }
                    // else if (index%4===0){
                    //     return ([<Grid item xs={2} ></Grid>,<Grid item xs={2} ></Grid>,z])
                    // }
                    // else {
                    //     return z
                    // }
                    
                })} </Grid> </div>)


                   
    }
}
export { NewPalette }