import { Component } from "react";
import { UserContext } from "../context/UserContext";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "abc",
        bio: "abc",
      },
    };
  }
  async componentDidMount() {
    //api call
    const data = await fetch(" https://api.github.com/users/limit-lesss");
    const json = await data?.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, bio ,avatar_url} = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <UserContext.Consumer>
          {({user}) => <h1 className="font-bold text-red-600 text-2xl">{user.name}</h1>}
        </UserContext.Consumer>
        <h1>{bio}</h1>
        <img src={avatar_url}  />
      </div>
    );
  }
}

export default AboutUs;
