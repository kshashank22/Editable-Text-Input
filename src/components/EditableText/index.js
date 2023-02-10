import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {editableText: '', condition: true}

  onChangeButton = () => {
    const {condition} = this.state
    this.setState({condition: !condition})
  }

  onChangeEditableButton = event => {
    this.setState({editableText: event.target.value})
  }

  render() {
    const {editableText, condition} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          {condition ? (
            <div className="input-container">
              <input
                type="text"
                className="input-style"
                value={editableText}
                onChange={this.onChangeEditableButton}
              />
              <button
                className="save-button"
                type="button"
                onClick={this.onChangeButton}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="input-container">
              <p className="description">{editableText}</p>
              <button
                className="save-button"
                type="button"
                onClick={this.onChangeButton}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText
