import React from 'react'
import reactCSS from 'reactcss'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CopyButton from './CopyButton'
import NameField from './NameField'

const duplicate = (x, n) => Array.from(new Array(n), () => x);

const generateColorTags = (colorList) => {
    return (colorList.map((color) => {
        return (`<color>${color}</color>`) }
        ).join("\n"));
}

const generatePaletteNameTag = (paletteName) => {

}
class ConfigTextArea extends React.Component {
    state = {
        colorList: this.props.colorList,
        paletteName: this.props.paletteName,
        colorTags: this.props.colorList.map((color) => { return (`<color>${color}</color>`) }).join("\n"),
    };

    handleChange = (event) => {
        this.setState({ numColors: parseInt(event.target.value) })
    };
// this needs to be moved up a level to preserve state
    handleNameChange = (event) => {
        this.setState({paletteName: event.target.value})
    }
    render() {
        let textVal = [`<color-palette name="${this.state.paletteName}" type="regular">`,generateColorTags(this.state.colorList),
        `</color-palette>`].join("\n")
        return (
            <div>
                <TextareaAutosize rows={this.props.colorList.length + 4 > 3 ? this.props.colorList.length + 4 : 3}
                    columns={100} style={{ width: "400px", margin: "10px" }} value={textVal} readOnly />
                    <CopyButton value={textVal}/> 
                    <NameField value={this.state.paletteName} handleNameChange={this.handleNameChange.bind(this)}/>
            </div>
        )
    }
}
export { ConfigTextArea }