import React from "react";

class User extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            UserInfo:{
                name: "dummy",
                location: "dummy",
                contact: "dummy",
                avatar_url: " ",
            }
        }

        
        


    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/anmolagrawal1")

        const json = await data.json();

        this.setState({
            UserInfo: json,
        })
        
        console.log(json);

    }

    render(){

        const {name, location, company ,avatar_url } = this.state.UserInfo;
        return(
            <div className="userCard">
                <img className="userpp" src={avatar_url}></img>
                <p> Name : {name}</p>
                <p>Location : {location}</p>
                <p>company: {company}</p>

            </div>
        )
    }
}

export default User
