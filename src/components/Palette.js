import React from 'react'
import reactCSS from 'reactcss'
import { ColorPicker } from './ColorPicker'

const duplicate = (x, n) => Array.from(new Array(n), () => x);

class Palette extends React.Component {
    state = {
        numColors: 4
      };
      
    handleChange = (event) => {
    this.setState({ numColors: parseInt(event.target.value) })
    };

    render () {
        return (
            
            <div>
                <input type="number" defaultValue={this.state.numColors} onChange={ this.handleChange } ></input>
                {duplicate(<ColorPicker/>, this.state.numColors )}
            </div>
        )
    }
}
export {Palette}