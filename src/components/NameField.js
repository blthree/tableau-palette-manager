import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


class  NameField extends React.Component {
    state = {
        nameVal: this.props.nameVal
    };

render() {  
    return (
        <div>
          <TextField
            id="standard-basic"
            label="Standard"
            margin="normal"
            value={this.props.value}
            onChange={this.props.handleNameChange}
          />
        </div>
    );
  }
}
export default NameField;