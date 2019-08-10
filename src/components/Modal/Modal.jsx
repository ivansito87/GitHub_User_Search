import React from "react";
import {
  Button,
  Modal,
} from "reactstrap";

class CoolModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={true}
        modalClassName="modal-black"
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            onClick={this.props.toggleModal}
          >
            <i className="tim-icons icon-simple-remove"/>
          </button>
          <h4 className="title title-up display-3">Ooops! Something Went Wrong</h4>
        </div>
        <div className="modal-body">
          <p className="h2 title">
            {this.props.message}
          </p>
        </div>
        <div className="modal-footer justify-content-end">
          <Button color="warning"
                  type="button"
                  onClick={this.props.toggleModal}>
            OK, GOT IT!
          </Button>
        </div>
      </Modal>
    );
  }
}

export default CoolModal;
