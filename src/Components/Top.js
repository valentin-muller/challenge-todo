import React, { Component } from "react";
import logo from ".././logo.svg";


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Top extends Component {


  render() {
    return (
<Card style={{ width: "100vw" }}>
  <Card.Img variant="top" src={logo} id="logo"/>
  <Card.Body>
    <Card.Title>Welcome to your ToDo list!</Card.Title>
    <Card.Text>
      Welcome to your own task management application. You can use the drop-down menus to create or search your tasks. Once you are finished with a task you can delete them. 
    </Card.Text>
  </Card.Body>
</Card>


    )
  }
}

export default Top;