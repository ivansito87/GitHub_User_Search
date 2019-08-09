/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
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
  UncontrolledTooltip,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
// import Footer from "components/Footer/Footer.jsx";

/*
const carouselItems = [
  {
    src: require("../../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("../../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("../../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];
*/

let ps = null;

class ProfilePage extends React.Component {

  state = {
    users: this.props.users
  };


 /* constructor(props) {
    console.log('props pased', props.users);
    super(props);
    // console.log('props pased', this.props.users);
    this.state = {
      tabs: 1
    };
  }*/

  componentDidMount() {
    // console.log('Inside profile page',this.state.users);
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }

  // componentWillUnmount() {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps.destroy();
  //     document.documentElement.className += " perfect-scrollbar-off";
  //     document.documentElement.classList.remove("perfect-scrollbar-on");
  //   }
  //   document.body.classList.toggle("profile-page");
  // }

  toggleTabs = (e, stateName, index) => {
    console.log("Wooohoo");
    console.log(this.props.userUrl);
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    let user = this.props;
    const colorsArr = ["default", "primary", "info", "success", "warning", "danger", "neutral"];
    return (
      <>
        <div className="wrapper mt-3 pt-0">
            {/*<Container className="align-items-center mt-0">*/}
              <Row>
              {/*  <Col lg="6" md="6">
                  <h1 className="profile-title text-left display-2">{this.props.login}</h1>
                  <h6 className="text-on-back">{this.props.userIndex + 1}</h6>
                  <p className="profile-description">
                    Offices parties lasting outward nothing age few resolve.
                    Impression to discretion understood to we interested he
                    excellence. Him remarkably use projection collecting. Going
                    about eat forty world has round miles.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://www.ivanrendon.dev"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"/>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"/>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href="https://dribbble.com/creativetim"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble"/>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>*/}
               {/* <Col className="ml-auto mr-auto mt-5" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={this.props.userAvatar}
                      />
                      <h4 className="title">{this.props.type}</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-danger justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: true
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            About
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + 3}
                      >
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>*/}
                <Col className="ml-auto mr-auto mt-5">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid img-raised"
                        src={user.userAvatar}
                      />
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
                      {/*<TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + 3}
                      >
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>*/}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            {/*</Container>*/}
          </div>
        {/*</div>*/}
      </>
    );
  }
}

export default ProfilePage;
