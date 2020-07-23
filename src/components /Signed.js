import React, {Component} from 'react';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button' //<Button variant="contained"

const theme = createMuiTheme({
    /* theme for v1.x */
    palette: {
        main: '#ff4400'
    },
});

class Signed extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        // const {values, firstName, lastName, email, password } =this.props;
        const {
            values: { firstName, lastName, email, password }
        } = this.props;

        return (
            <MuiThemeProvider theme={theme} >
                <React.Fragment>
                    <AppBar position='static'>
                        <h1>Welcome, {firstName} {lastName} !</h1>
                    </AppBar>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Password" secondary={password} />
                    </ListItem>
                    <br/>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.back}
                    >Go back</Button>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Signed;