import React from 'react'
import reactCSS from 'reactcss'

const duplicate = (x, n) => Array.from(new Array(n), () => x);

class ConfigTextArea extends React.Component {
    state = {
        numColors: this.props.colorList.length,
        colorList: this.props.colorList
      };
      
    handleChange = (event) => {
    this.setState({ numColors: parseInt(event.target.value) })
    };

    render () {
        let val =  `<color-palette name="Classic 10" type = "regular">\t${duplicate(`<color>#17becf</color>`,this.state.numColors).join("\n")}\n</color-palette>`
        return (
            
            <div>
                <textarea rows={this.state.numColors+4 > 3 ? this.state.numColors+4 : 3} columns={100} style={{width:"400px"}} value={val} readOnly/>

            </div>
        )
    }
}
export {ConfigTextArea}