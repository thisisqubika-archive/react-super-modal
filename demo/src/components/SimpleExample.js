import React, { Component } from 'react';
import Modal from 'react-modals';

class SimpleExample extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ modalIsOpen: true });
  }

  hideModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onClose={this.hideModal}
          closeOnOverlayClick={false}
          maxWidth="850px"
        >
          <p style={{ fontSize: 40 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id. Massa sapien faucibus et molestie ac feugiat. Vel quam elementum pulvinar etiam non. Viverra nibh cras pulvinar mattis. Elementum eu facilisis sed odio. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Id faucibus nisl tincidunt eget nullam. Arcu cursus vitae congue mauris rhoncus. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Volutpat sed cras ornare arcu dui vivamus arcu felis. Facilisis mauris sit amet massa vitae tortor condimentum. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Et ultrices neque ornare aenean euismod elementum nisi. Egestas maecenas pharetra convallis posuere morbi leo. Dui ut ornare lectus sit amet est placerat in egestas.
          </p>
        </Modal>
      </div>
    );
  }
}

export default SimpleExample;
