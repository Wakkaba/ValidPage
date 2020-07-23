import React, {Component} from 'react';
import UserDetail from './UserDetail'
import Signed from "./Signed";

export class User extends Component {
    state = {
        step: 1,
        firstName: '', //nonEmpty, max=100
        lastName: '', //nonEmpty, max=100
        email: '', // valid email
        password: '', // 8-64, one: lowercase, uppercase, digit, symbol
        confirmPass: '', // match pass

    }
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }
    //This method is how we change our fields
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        //destructure and pull things out of state
        const { step } = this.state;
        const { firstName, lastName, email, password, confirmPass} = this.state
        const values = {
            firstName, lastName, email, password, confirmPass}
        switch (step) {
            case 1:
                return(
                    <UserDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return <Signed
                    prevStep={this.prevStep}
                    values={values}
                    />
        }
    }
}

export default User;