import React from 'react'
import style from 'styled-components'

const ModalMain = style.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;
const ModalBody = style.div`

`;
export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  modalHandle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.modalHandle}>Open model</button>
        {
          this.state.isOpen && (
            <ModalMain>
              <ModalBody>
                <h1>Двигайся в лабиринте по стрелкам</h1>
                <button onClick={this.modalHandle}>понятно</button>
              </ModalBody>
            </ModalMain>
          )
        }
      </React.Fragment>
    )
  }
}