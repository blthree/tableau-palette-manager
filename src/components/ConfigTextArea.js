import React from 'react'
import reactCSS from 'reactcss'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CopyButton from './CopyButton'

const duplicate = (x, n) => Array.from(new Array(n), () => x);

const generateColorTags = (colorList) => {
    return (colorList.map((color) => {
        return (`<color>${color}</color>`) }
        ).join("\n"));
}

class ConfigTextArea extends React.Component {
    state = {
        colorList: this.props.colorList,
        colorTags: this.props.colorList.map((color) => { return (`<color>${color}</color>`) }).join("\n"),
        textVal: [`<color-palette name="Classic 10" type="regular">`,generateColorTags(this.props.colorList),
                `</color-palette>`].join("\n"),
    };

    handleChange = (event) => {
        this.setState({ numColors: parseInt(event.target.value) })
    };

    render() {
        // let newVals = this.props.colorList.map((color) => { return (`<color>${color}</color>`) }).join("\n")
        //console.log(newVals)
        // let val = `<color-palette name="Classic 10" type="regular">\t${colorTags}\n</color-palette>`
        return (
            <div>
                <TextareaAutosize rows={this.props.colorList.length + 4 > 3 ? this.props.colorList.length + 4 : 3}
                    columns={100} style={{ width: "400px", margin: "10px" }} value={this.state.textVal} readOnly />
                    <CopyButton value={this.state.textVal}/>
            </div>
        )
    }
}
export { ConfigTextArea }