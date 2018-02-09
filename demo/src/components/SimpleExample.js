import React, { Component } from 'react';
import Modal from 'react-modals';

class SimpleExample extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(backgroundColor, overlayColor, closeButtonColor) {
    this.setState({
      isModalOpen: true,
      backgroundColor,
      overlayColor,
      closeButtonColor,
    });
  }

  hideModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen, backgroundColor, overlayColor, closeButtonColor } = this.state;
    return (
      <div>
        <button onClick={() => this.showModal()}>Show Light Modal</button>
        <button onClick={() => this.showModal('#000000', 'rgba(0,0,0,0.7)', '#FFFFFF')}>Show Dark Modal</button>
        <Modal
          isOpen={isModalOpen}
          onClose={this.hideModal}
          maxWidth="850px"
          closeOnOverlayClick
          backgroundColor={backgroundColor}
          overlayColor={overlayColor}
          closeButtonColor={closeButtonColor}
        >
          <p style={{ color: 'gray', fontSize: 40 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id. Massa sapien faucibus et molestie ac feugiat. Vel quam elementum pulvinar etiam non. Viverra nibh cras pulvinar mattis. Elementum eu facilisis sed odio. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Id faucibus nisl tincidunt eget nullam. Arcu cursus vitae congue mauris rhoncus. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Volutpat sed cras ornare arcu dui vivamus arcu felis. Facilisis mauris sit amet massa vitae tortor condimentum. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Et ultrices neque ornare aenean euismod elementum nisi. Egestas maecenas pharetra convallis posuere morbi leo. Dui ut ornare lectus sit amet est placerat in egestas.
          </p>
        </Modal>
      </div>
    );
  }
}

export default SimpleExample;
