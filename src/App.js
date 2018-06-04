import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            list_of_names: []
        };
    }

    handle_change(event) {
        const name = event.target.value;
        this.setState({
            name
        });
        console.log("This is the name in the handle_change: ",
            this.state.name);
    }

    handle_submit(event) {
        event.preventDefault();
        const name = this.state.name;
        let updated_list_of_names = this.state.list_of_names;
        updated_list_of_names.push(name);
        this.setState({
            list_of_names: updated_list_of_names
        });
        console.log("New list of names: ", this.state.list_of_names)
    }

    handle_delete(event) {
        event.preventDefault();

    }

    render() {
        const list_of_names = this.state.list_of_names;
        const name = list_of_names.map((name, i) => (<li onClick={this.handle_delete.bind(this)} key={i}>{name}</li>));
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <form onSubmit={this.handle_submit.bind(this)}>
                        <label>
                            Name: <br/>
                            <input onChange={this.handle_change.bind(this)} type="text" name="name" ref="text"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                    <ul>
                        {(name) ? name : null}
                    </ul>
                </p>
            </div>
        );
    }
}

export default App;
