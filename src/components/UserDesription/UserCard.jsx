
import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardFooter,
  CardImg,
  CardTitle,
  UncontrolledTooltip,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";


class UserCard extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    tabs: 3
  };

  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }

  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5" md="6" lg={6}>
              <Row>
                {/*      <h1 className="profile-title text-left">Mike Scheinder</h1>*/}
                <h5 className="text-on-back mb-3">{this.props.name}</h5>
              </Row>
              <Row>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-user-run text-warning"/>
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">{this.props.following}</CardTitle>
                            <p/>
                            <p className="card-category">Following</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats upper bg-default">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-spaceship text-danger"/>
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">{this.props.followers}</CardTitle>
                            <p/>
                            <p className="card-category">Followers</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-vector text-info"/>
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">{this.props.forks}</CardTitle>
                            <p/>
                            <p className="card-category">Forks</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-app text-success"/>
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">{this.props.public_repos}</CardTitle>
                            <p/>
                            <p className="card-category">Repos</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="text-center">
          {/*      <h1 className="profile-title text-left">Mike Scheinder</h1>*/}
                <h1>{" "}</h1>
                <hr />
                <h4 className="mt-2 text-center">
                  {this.props.bio}
                </h4>
              </Row>
            </Col>
            <Col className="ml-auto mr-auto" lg="5" md="5">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid img-raised"
                    src={this.props.avatar}
                  />
                  <h4 className="title">Username: {this.props.login}</h4>
                </CardHeader>
                <CardBody>
                  <Nav
                    className="nav-tabs-primary justify-content-center"
                    tabs
                  >
                  </Nav>
                  <TabContent
                    className="tab-subcategories"
                    activeTab={"tab" + this.state.tabs}
                  >
                 {/*   <TabPane tabId="tab1">
                      <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                        <tr>
                          <th className="header">COIN</th>
                          <th className="header">AMOUNT</th>
                          <th className="header">VALUE</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>BTC</td>
                          <td>7.342</td>
                          <td>48,870.75 USD</td>
                        </tr>
                        <tr>
                          <td>ETH</td>
                          <td>30.737</td>
                          <td>64,53.30 USD</td>
                        </tr>
                        <tr>
                          <td>XRP</td>
                          <td>19.242</td>
                          <td>18,354.96 USD</td>
                        </tr>
                        </tbody>
                      </Table>
                    </TabPane>*/}
                  {/*  <TabPane tabId="tab2">
                      <Row>
                        <Label sm="3">Pay to</Label>
                        <Col sm="9">
                          <FormGroup>
                            <Input
                              placeholder="e.g. 1Nasd92348hU984353hfid"
                              type="text"
                            />
                            <FormText color="default" tag="span">
                              Please enter a valid address.
                            </FormText>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Label sm="3">Amount</Label>
                        <Col sm="9">
                          <FormGroup>
                            <Input placeholder="1.587" type="text"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-simple btn-icon btn-round float-right"
                        color="primary"
                        type="submit"
                      >
                        <i className="tim-icons icon-send"/>
                      </Button>
                    </TabPane>*/}
                    <TabPane tabId="tab3">
                      <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                        <tr>
                          <th className="header"><span className="text-info">From: &nbsp;</span> {this.props.location}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><Button
                            className="btn-link"
                            color="primary"
                            href={this.props.blog.includes("http") ? this.props.blog : "http://" + this.props.blog}
                          >
                             {this.props.blog}
                          </Button></td>
                        </tr>
                        <tr>
                          <td><span className="text-info">Company: &nbsp;</span>{this.props.company}</td>
                        </tr>
                        <tr>
                          <td><span className="text-info">Member Since: &nbsp;</span> {this.props.since}</td>
                        </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                  </TabContent>

                    <Button
                      color="default"
                      href={this.props.repos}
                    >
                      Github
                    </Button>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default UserCard;
