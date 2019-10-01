import React, { Component } from 'react';
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super()
    this.state={
      studentInfo: {}
    }
  }

  componentDidMount(){
    console.log(this.props.match.params);
    
    axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(results => {
      this.setState({
        studentInfo: results.data
      })
    })
    // .catch(err =>{alert(err)})
    
  }

  render() {

    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.firstName} {this.state.studentInfo.last_name}</h1>
        <h3>{this.state.studentInfo.grade}</h3>
        <h3>{this.state.studentInfo.email}</h3>
      </div>
    )
  }
}