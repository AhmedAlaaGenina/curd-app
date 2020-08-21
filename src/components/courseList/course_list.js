import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isUpdate: false,
  };
  // render course item
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.list.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          EditCourse
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          deleteCourse
        </button>
      </li>
    );
  };

  //toggleState
  toggleState = () => {
    let { isUpdate } = this.state;
    this.setState({
      isUpdate: !isUpdate,
    });
  };
  //updateCourseItem
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editeCourse(this.props.index, this.input.value);
    this.toggleState();
  };
  //renderCourseUpdate
  renderCourseUpdate = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => (this.input = v)}
          defaultValue={this.props.list.name}
        />
        <button>Update</button>
      </form>
    );
  };

  render() {
    let { isUpdate } = this.state;
    return (
      <Fragment>
        {isUpdate ? this.renderCourseUpdate() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList;
