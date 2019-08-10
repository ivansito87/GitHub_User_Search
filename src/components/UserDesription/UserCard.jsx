import React from "react";
import Tilt from "react-tilt";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";

class UserCard extends React.Component {
  state = {
    tabs: 3
  };

  render() {
    return (
      <>
        <Container>
          <Row className="row-grid justify-content-between p-5">
            <Col className="mt-lg-5" md="6" lg={6}>
              <Row>
                <div className="content-center brand">
                  <h1 className="title display-2">{this.props.name}</h1>
                </div>
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
                  </Tilt>
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
                <h1>{" "}</h1>
                <hr/>
                <h3 className="d-none d-sm-block">
                  {this.props.bio ? this.props.bio : "Just a 'Problem Solver'"}
                </h3>
              </Row>
            </Col>
            <Col className="ml-auto mr-auto" lg="5" md="5">
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
                      axis: null,
                      reset: true,
                      easing: "cubic-bezier(.03,.98,.52,.99)",
                    }}
                  >
                    <img
                      alt="..."
                      className="img-center img-fluid img-raised"
                      src={this.props.avatar}
                    />
                  </Tilt>
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
                    <TabPane tabId="tab3">
                      <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                        <tr>
                          <th className="header"><span className="text-info">From: &nbsp;</span> {this.props.location}
                          </th>
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
