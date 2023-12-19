import React from 'react';

class emailStatusChange extends React.Component {
    constructor() {
        super();
        this.state = { emailstatus: "valid" };
    }

    changeStatus = () => {
        if(this.state.emailstatus === "valid"){
            this.setState({ emailstatus: "invalid"})
        }
        else if(this.state.emailstatus === "invalid"){
            this.setState({emailstatus: "valid"})
        }
    }

    render() {
        return (
            <div>
                <p>Status: {this.state.emailstatus}</p>
                <button onClick={this.changeStatus}>Click Here</button>
            </div>
        );
    }
}

export default emailStatusChange;