import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel
} from "reactstrap";

class CoolModal extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }*/

  /*toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
*/
  render() {
    return (
      <Modal
        isOpen={true}
        // toggle={() => this.toggleModal("demoModal")}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            onClick={this.props.toggleModal}
          >
            <i className="tim-icons icon-simple-remove"/>
          </button>
          <h4 className="title title-up display-3">Ooops! we couldn't find a match</h4>
        </div>
        <div className="modal-body">
          {/*<h4 className="title title-up">Ooops! we couldn't find a match</h4>*/}
          <p className="title">
           Please verify your search, try with a friends first name (e.i: Ivan)
          </p>
        </div>
        <div className="modal-footer justify-content-end">
          <Button color="warning"
                  type="button"
                  onClick={this.props.toggleModal}>
            OK, GOT IT!
          </Button>
          {/*<Button
            color="danger"
            type="button"
            onClick={this.props.toggleModal}
          >
            Close
          </Button>*/}
        </div>
      </Modal>
    );
  }
}

export default CoolModal;
