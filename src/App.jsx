import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: "",
            newMessage: "",
            chirps: [
                {
                    name: "Erron",
                    message: "Whats up?"
                },
                {
                    name: "Mike",
                    message: "Yo"
                },
                {
                    name: "Chug",
                    message: "Hows it going?"
                }
            ]
        }

        this.handlenewUser = this.handlenewUser.bind(this);
        this.handlenewMessage = this.handlenewMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlenewUser(e) {
        this.setState({newUser: e.target.value});
    }

    handlenewMessage(e) {
        this.setState({newMessage: e.target.value});
    }

    handleSubmit(e) {
        let newChirp = {
            name: this.state.newUser,
            message: this.state.newMessage
        }
        this.setState({chirps: [...this.state.chirps,newChirp]})
    }

    render() {
        return (
            <div className="container">
                <>
                    <h1>Chirps</h1>
                    <form>
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Who are you?" onChange = {this.handlenewUser} />
                            <small id="emailHelp" class="form-text text"></small>
                        </div>
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="What do you want to say?" onChange = {this.handlenewMessage} />
                        </div>
        
                        <button type="submit" class="btn btn-primary" onClick = {this.handleSubmit}>Submit</button>
                    </form>
                    {this.state.chirps.map(chirps => {
                        return (
                            <React.Fragment>
                                <h1>{chirps.name}</h1>
                                <p>{chirps.message}</p>
                            </React.Fragment>
                        )

                    })}

                </>
            </div>

        )


    }
}

export default App