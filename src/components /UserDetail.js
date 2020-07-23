import React, {Component} from 'react';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button' //<Button variant="contained"

const theme = createMuiTheme({
    /* theme for v1.x */
    palette: {
        main: '#ff4400'
    },
});


class UserDetail extends Component {
    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    continue = (e) => {
        e.preventDefault();
        this.props.nextStep()
    }
    render() {
        const {values, handleChange} =this.props;

        return (
            <MuiThemeProvider theme={theme} >
                <React.Fragment>
                    <AppBar position='static'>
                        <h1>Sign up, dude</h1>
                    </AppBar>
                    <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        margin="normal"

                    />
                    <br/>
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        placeholder="Enter Your email"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        placeholder="Enter Your Password"
                        label="Password"
                        type="password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        placeholder="Enter Your password again"
                        label="Password again"
                        type="password"
                        onChange={handleChange('confirmPass')}
                        defaultValue={values.confirmPass}
                        margin="normal"
                    />
                    <br/>
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        onClick={this.continue}
                    >Confirm</Button>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default UserDetail;