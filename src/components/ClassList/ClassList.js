import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results =>{
      this.setState({
        students: results.data
      })
    })
    .catch(err =>{alert(err)})
  }

  render() {
    const students = this.state.students.map((student, i) =>(
      <Link to={`/students/${student.id}`}  key={i}>
        <h3>
          {student.first_name} {student.last_name} {console.log(student)}
        </h3>
      </Link>
    ))
    console.log(this.props.match.params.class);
    
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
}