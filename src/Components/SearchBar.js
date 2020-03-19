import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SearchBar extends Component {
    state = {
      searchName: ''
    };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
        this.props.newSearch(this.state.searchName);

    });
  };

  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Search Tasks!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <div class="container-input">
                <input
                  id="inputbars"
                  placeholder="You can browse your tasks by writing here"
                  type="text"
                  name="searchName"
                  value={this.state.searchName}
                  onChange={this.handleChange}
                />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default SearchBar