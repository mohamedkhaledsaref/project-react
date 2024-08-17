import React from "react";

class Stat extends React.Component {
    constructor() {

        super();
        this.state = {
            isLoggedIn: false,
            subscription: 'Guest',
        }
        }
    
        CheckMessage ()  {

        this.setState({
            isLoggedIn: true,
            subscription: 'Now, You have a subscription',
        })
        }
    
        render() {
        return (
            
            <div>
            <p>Logged In: {this.state.isLoggedIn}</p>
            <p>Subscription: {this.state.subscription}</p>
            <button onClick={() => this.CheckMessage ()}>Subscribe</button>
            </div>
        )
        }
}



export default Stat;