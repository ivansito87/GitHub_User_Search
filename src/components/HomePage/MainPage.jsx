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
import ProfilePage from "../ProfilePage/ProfilePage";
// import CoolNavbar from "../NavBar/NavBar";
import FooterBlk from "../Footer/FooterBlk";
import "./styles.css";
import axios from "axios";
import CoolModal from "../Modal/Modal";

// reactstrap components
import {
  Collapse,
  Alert,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container

} from "reactstrap";
import PageHeader from "../PageHeader/PageHeader";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
// import Footer from "components/Footer/Footer.jsx";

class MainPage extends React.Component {
  state = {
    users: [],
    joinRoomId: "",
    userDisplay: false,
    isOpen: false
  };

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit;
    this.handleJoinSubmit = this.handleJoinSubmit.bind(this);

    this.input = React.createRef();
    this.inputJoin = React.createRef();
    this.inputName = React.createRef();
  }

  componentDidMount() {
    /*axios.get(`https://api.github.com/search/users?q=example`)
      .then(res => {
        const users = res.data.items;
        console.log('inside of Main Pag3 Styled',users);
        this.setState({users});
      })*/
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };


  handleJoinSubmit(event){
  event.preventDefault();
  const searchUser = this.state.joinRoomId;
  // console.log(searchUser);
    axios.get(`https://api.github.com/search/users?per_page=42&page=1&q=${searchUser}`)
      .then(res => {
        if (res.data.total_count === 0) {
          this.setState({isOpen: true, userDisplay: false});
        } else if (res.status === 200) {
          console.log(res);
          const APIResponse = res.data.items;
          // console.log('inside of Main Pag3 Styled', APIResponse);
          this.setState({users: APIResponse, userDisplay: true, isOpen: false});
          console.log(this.state.users, this.state.joinRoomId);
        }}).catch(err => {
        console.log(err.message, "<----- Error");
      this.setState({isOpen: true, userDisplay: false});
      console.log("Inside  bad Request");
    })
  }


  render() {
    const array = this.state.users;
    return (
      <>
        <Navbar className="bg-success small-nav" expand="lg">
          <Container>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo01"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab"/>
              <span className="navbar-toggler-bar navbar-kebab"/>
              <span className="navbar-toggler-bar navbar-kebab"/>
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01" className="text-darker">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <span className="title display-3">Search more than 43M users</span>
              </NavbarBrand>

              <Form className="form-inline ml-auto" onSubmit={this.handleJoinSubmit}>
                <FormGroup className="no-border">
                  <Input placeholder="Ex: Ivan" type="text"
                         onChange={(event) =>
                           this.setState({joinRoomId: event.target.value})
                         }/>
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Container className="mb-0">
          <Row>
            <Col className="text-center">
          <div className="content-center brand">
            <h1 className="text-on-back">Welcome to My Git Hub User Search my name Is <br />Ivan Rendon</h1>
            {/*<h3 className="d-none d-sm-block mb-0">
              Please search a user to Get started and see the magic!
            </h3>*/}
          </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center pt-2">
              <h2 className="d-none d-sm-block mb-0">
                {" "}
              </h2>
            </Col>
          </Row>
        </Container>
        {this.state.isOpen && <CoolModal toggleModal={this.toggleModal}/>}
        <Container className="align-items-center mt-0">
       <Row>
        {this.state.userDisplay && this.state.users.map((user, index) => (
          <Col sm="4" md="4" lg="4">
          <ProfilePage
            key={user.id}
            login={user.login}
            users={this.state.users}
            type={user.type}
            userAvatar={user.avatar_url}
            userIndex={index}
            userUrl={user.url}
          />
          <hr />
          </Col>
          ))}
       </Row>
        </Container>
          <FooterBlk/>

      </>
    );
  }
}

export default MainPage;
