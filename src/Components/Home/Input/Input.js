import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import "./input.css";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

class Input extends Component {
    render() {
        return (
            <div className="mainInput">
                <MuiThemeProvider theme={theme}>
                    <TextField
                        id="textarea mui-theme-provider-input"
                        label="Ne Düşünüyorsunuz?"
                        multiline
                        className="Input"
                        margin="normal"
                    />
                </MuiThemeProvider>
                <label htmlFor="outlined-button-file">
                    <Button variant="outlined" component="span" className="plant-button">
                        PLANT
                    </Button>
                </label>
            </div>
        );
    }
}

export default Input;
