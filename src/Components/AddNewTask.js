import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class AddNewTask extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    let { value, name } = e.target;

    this.setState({ [name]: value });

    // this.setState({calories: value})
    // this.setState({name: value})
    // this.setState({image: value})
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTaskObj = this.state;

    this.props.addNew(newTaskObj);

    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Add a Task!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label> The Task </Form.Label>
                    <Form.Control
                      id="addnewtaskinput"
                      size="lg"
                      type="text"
                      placeholder="What is the task?"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                    <br />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description of the task</Form.Label>
                    <Form.Control
                      id="addnewtaskinput"
                      placeholder="Describe your task here..."
                      as="textarea"
                      rows="3"
                      type="text"
                      name="body"
                      value={this.state.body}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Button type="submit"> Submit </Button>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default AddNewTask;
