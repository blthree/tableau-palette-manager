import React from 'react'
import reactCSS from 'reactcss'

const duplicate = (x, n) => Array.from(new Array(n), () => x);

class ConfigTextArea extends React.Component {
    state = {
        colorList: this.props.colorList
      };
      
    handleChange = (event) => {
    this.setState({ numColors: parseInt(event.target.value) })
    };

    render () {
        let newVals = this.state.colorList.map((color) => {return(`<color>${color}</color>`)}).join("\n")
        console.log(newVals)
        let val =  `<color-palette name="Classic 10" type = "regular">\t${newVals}\n</color-palette>`
        return (
            
            <div>
                <textarea rows={this.state.colorList.length+4 > 3 ? this.state.colorList.length+4 : 3} columns={100} style={{width:"400px"}} value={val} readOnly/>

            </div>
        )
    }
}
export {ConfigTextArea}