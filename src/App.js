import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tasks from './tasks.json';
import TaskBox from './Components/TaskBox';
import AddNewTask from './Components/AddNewTask';
import SearchBar from './Components/SearchBar';
import Button from "react-bootstrap/Button";
import Top from "./Components/Top"

import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  state = {
    tasksList: tasks
  };

  addTask = newTaskObj => {
    const newData = this.state.tasksList;
    newData.push(newTaskObj);
    this.setState({ tasksList: newData });
  };

  filterData = string => {
    const filteredArray = tasks.filter(oneTask => {
      if (oneTask.title.includes(string)) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ tasksList: filteredArray });
  };

  deleteTask = taskId => {
    let fullTaskList = this.state.tasksList;
    console.log('fullTaskList :', fullTaskList);
    let updatedList = fullTaskList.filter(taskObj => {
      return taskObj.id !== taskId;
    });
    console.log('updatedList', updatedList);
    this.setState({
      tasksList: updatedList
    });
  };


  render() {
    return (
      <div className="App">

        <Top />
        <AddNewTask addNew={this.addTask} />
        <SearchBar newSearch={this.filterData} />

        {this.state.tasksList.map(taskObj => {
          return (
            <>
            <TaskBox title={taskObj.title} body={taskObj.body} />
            <Button onClick={() => this.deleteTask(taskObj.id)}>
            Delete task
            </Button>
            </>
        )
        })}
      </div>
    );
  }
}

export default App;
