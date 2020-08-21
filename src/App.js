import React, { Component } from "react";
import CourseForm from "./components/courseForm/course_form";
import CourseList from "./components/courseList/course_list";

class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "jQuary" }],
    current: "",
  };

  // UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current !== "") {
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
      });
    } else {
      return false;
    }
  };

  //deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };
  //editCourse
  editeCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    const len = courses.length;

    const courseList = len ? (
      courses.map((course, index) => {
        return (
          <CourseList
            list={course}
            key={index}
            index={index}
            deleteCourse={this.deleteCourse}
            editeCourse={this.editeCourse}
          />
        );
      })
    ) : (
      <p> no item </p>
    );
    return (
      <section className="App">
        <h2> Add Course</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
