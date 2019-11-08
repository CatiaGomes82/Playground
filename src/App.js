import React from 'react';
import Modal from 'react-modal';
import './App.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 49, 92, 0.9)'
  },
  content: {
    top: 'auto',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: '15px 15px 0 0',
    padding: 0,
    maxHeight: 'calc(100vh - 10px)'
  }
};

Modal.setAppElement('#root')

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          closeTimeoutMS={300}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="form-container">
            <img src="https://via.placeholder.com/130x50" alt="logo" />
            <h2>Login to your account</h2>
            <form>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" placeholder="e.g. yourname@gmail.com" />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" />
                <a href="/">I've forgotten my password</a>
              </div>
              <button>Login</button>
            </form>
            <button className="close-btn" onClick={this.closeModal}>
              <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"/></svg>
            </button>
          </div>
          <div className="promo">
            <div className="promo-text">
              <h3>Need an account?</h3>
              <p>Register for an account to manage your payments and request repairs - simply.</p>
            </div>
            <button>
              Register
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
