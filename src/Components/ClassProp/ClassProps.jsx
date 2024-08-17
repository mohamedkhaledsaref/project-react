import React from "react";

class Student extends React.Component {
    render(props) {
    return(
        <div>
        <h1>Studen{props.fname} {props.lname}</h1>
        <h2>{this.props.courses}</h2>
        <h2>{this.props.studied}</h2>
        {props.children}
        </div>
    )
}
}

export default Student;