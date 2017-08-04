import React, { Component } from 'react'
import { render } from 'react-dom'
import { BasicModal } from 'react-connect-modal'
import { connectModal } from 'react-connect-modal'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Test Modal</h2>
        <button
          onClick={this.props.modalHandler.open}
          type='button'>
          Modal
        </button>

        <BasicModal
          show={this.props.modalStatus.show}
          onClose={this.props.modalHandler.close}
          onCancel={this.props.modalHandler.close}
          onSave={this.props.modalHandler.close} />
      </div>
    )
  }
}

const rootEl = document.getElementById('app')

const ModalApp = connectModal(App)

render(
  <ModalApp />,
  rootEl
)