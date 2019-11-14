import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';

class CopyButton extends React.Component {
  state = {
    value: this.props.value,
    copied: false,
  };
render() {
return (
      <div>
  
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button variant="contained" color={this.state.copied ? "secondary": "primary"}>
            {`${this.state.copied ? "Copied!" : "Copy to clipboard"}`}
          </Button>
        </CopyToClipboard>
      </div>
    );
}}

export default CopyButton