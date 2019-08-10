import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  Nav,
  Row,
  Col,
} from "reactstrap";
import Tilt from "react-tilt";

class ProfilePage extends React.Component {

  state = {
    users: this.props.users
  };

  render() {
    let user = this.props;
    // Array to select random colors of the buttons :D
    const colorsArr = ["default", "primary", "info", "success", "warning", "danger", "neutral"];
    return (
      <>
        <div className="wrapper mt-3 pt-0">
          <Row>
            <Col className="ml-auto mr-auto mt-5">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <Tilt
                    className="Tilt"
                    data-tilt-glare="true"
                    options={{
                      reverse: false,
                      max: 35,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: "X",
                      reset: true,
                      easing: "cubic-bezier(.03,.98,.52,.99)",
                    }}
                  >
                  <img
                    alt="..."
                    className="img-center img-fluid img-raised"
                    src={user.userAvatar}
                  />
                  </Tilt>
                  <h4 className="title text-center mb-0">{user.login}</h4>
                </CardHeader>
                <CardBody>
                  <Nav
                    className="nav-tabs-success justify-content-center mt-1"
                    tabs
                  >
                    <NavItem>
                      <Button
                        color={colorsArr[user.buttonColor]}
                        custom={user.userUrl}
                        onClick={user.handleUserCard.bind(this)}
                      >
                        About
                      </Button>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ProfilePage;
