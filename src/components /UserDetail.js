import React, {Component} from 'react';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button' //<Button variant="contained"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const theme = createMuiTheme({
    /* theme for v1.x */
    palette: {
        main: '#ff4400'
    },
});


class UserDetail extends Component {
    state = {
        formData: {
            firsName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPass: ''
        },
        submitted: false,
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
    }

handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    if (event.target.name === 'password') {
        this.form.isFormValid(false);
    }
    this.setState({ formData });
}
handleSubmit = () => {
    this.setState({submitted: true}, () => {
        setTimeout(() => this.setState({submitted: false}), 5000);
    });
}


    render() {

        const { formData, submitted } = this.state;
        return (
            <MuiThemeProvider theme={theme} >
                <React.Fragment>
                    <AppBar position='static'>
                        <h1>Sign up, dude</h1>
                    </AppBar>
                    <ValidatorForm
                        ref={r => (this.form = r)}
                        onSubmit={this.handleSubmit}
                    >
                        <h2>Enter your info</h2>
                        <TextValidator
                            label="Name"
                            onChange={this.handleChange}
                            name="firstName"
                            value={formData.firstName}
                            validators={['required']}
                            errorMessages={['this field is required', 'field can not be empty!']}
                        />
                        <br/>
                        <TextValidator
                            label="Surname"
                            onChange={this.handleChange}
                            name="lastName"
                            value={formData.lastName}
                            validators={['required']}
                            errorMessages={['this field is required', 'field can not be empty!']}
                        />
                        <br/>
                        <TextValidator
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            value={formData.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <br />
                        <TextValidator
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.password}
                        />
                       <br/>
                        <TextValidator
                            label="Repeat password"
                            onChange={this.handleChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={formData.repeatPassword}
                        />
                        <br/>
                        <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={submitted}
                            onClick={this.continue}
                        >
                            {
                                (submitted && 'Signed up!')
                                || (!submitted && 'Submit')
                            }
                        </Button>
                    </ValidatorForm>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default UserDetail;