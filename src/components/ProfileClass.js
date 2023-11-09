import React, { Component } from "react";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 10,
        };
    }
    componentDidMount() {
    }

  render() {
    const {count,count2} = this.state ;
    return (
      <div style={{ color: "green", margin: "40px" }}>
        <h1>hello class world!</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {count}</h3>
        <h3>Count: {count2}</h3>
        <button onClick={e => this.setState({
            // We do not mutate state directly
            //never do this.state = something
            count : count + 1,
            count2 : count2 + 1,
        })}>count</button>
      </div>
    );
  }
}

export default Profile;
