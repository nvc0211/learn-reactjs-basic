import React from 'react';

class MyExample extends React.Component {
    state = {
        firstName: '',
        lastName: '',
    }
    handleChangFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()  // Ngan chan refresh trang
        alert('You have just click me')
    }
    render() {

        return (
            <>
                <h2> Sign up now</h2>
                <form>
                    <label> First name</label> <br />
                    <input
                        type='text'
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangFirstName(event)}

                    /><br />
                    <label> Last name</label><br />
                    <input type='text'
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangLastName(event)}
                    ></input><br />
                    <input type='button' value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    ></input><br />

                </form>
            </>
        )
    }
};

export default MyExample;