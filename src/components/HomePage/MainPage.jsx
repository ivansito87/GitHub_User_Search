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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Row,
  Col,
  Nav,
  Container

} from "reactstrap";
import PageHeader from "../PageHeader/PageHeader";


// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
// import Footer from "components/Footer/Footer.jsx";
// let count = 1;
class MainPage extends React.Component {


  state = {
    users: [],
    searchUser: "",
    userDisplay: false,
    isOpen: false,
    results: null,
    name: null,
    inputFocus: false,
    pageNumber: 1
  };

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit;
    this.handleJoinSubmit = this.handleJoinSubmit.bind(this);

    this.input = React.createRef();
    this.inputJoin = React.createRef();
    this.inputName = React.createRef();
  }

  displayResult = () => {
    let renderResultHeading = null;
    if (this.state.users.length === 0) {
      renderResultHeading = <span className="title display-3">Search more than 43M users</span>;
    } else {
      renderResultHeading =
        <span className="title display-3">Found {this.state.results} results for {this.state.name} </span>
    }
    return renderResultHeading;
  };

  componentDidMount() {
    /*axios.get(`https://api.github.com/search/users?q=example`)
      .then(res => {
        const users = res.data.items;
        console.log('inside of Main Pag3 Styled',users);
        this.setState({users});
      })*/
  }

  toggleTabs1 = (e, stateName, index) => {
    e.preventDefault();
    this.setState({pageNumber: this.state.pageNumber -= 1});
    console.log(this.state.pageNumber, this.state.searchUser);
    this.requestGetUsers(this.state.pageNumber, this.state.searchUser);
    this.setState({
      [stateName]: index
    });
  };

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({pageNumber: this.state.pageNumber += 1});
    console.log(this.state.pageNumber, this.state.searchUser);
    this.requestGetUsers(this.state.pageNumber, this.state.searchUser);
    this.setState({
      [stateName]: index
    });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  requestGetUsers(page, name) {
    axios.get(`https://api.github.com/search/users?per_page=20&page=${page}&q=${name}`)
      .then(res => {
        if (res.data.total_count === 0) {
          this.setState({isOpen: true, userDisplay: false});
        } else if (res.status === 200) {
          const APIResponse = res.data.items;
          this.setState({
            users: APIResponse,
            userDisplay: true,
            isOpen: false,
            results: res.data.total_count,
            name: name
          });
        }
      }).catch(err => {
      this.setState({isOpen: true, userDisplay: false});
    })
  }


  handleJoinSubmit(event) {
    event.preventDefault();
    this.requestGetUsers(this.state.pageNumber, this.state.searchUser);
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
                {/*{<span className="title display-3">Search more than 43M users</span>}*/}
                {this.displayResult()}
              </NavbarBrand>

              <Form className="form-inline ml-auto" onSubmit={this.handleJoinSubmit}>
                <FormGroup className="no-border">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": this.state.inputFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-zoom-split"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Search ex: Ivan"
                      type="text"
                      onFocus={e => this.setState({inputFocus: true})}
                      onBlur={e => this.setState({inputFocus: false})}
                      onChange={(event) =>
                        this.setState({searchUser: event.target.value})
                      }
                    />
                  </InputGroup>
                  {/*<Input placeholder="Ex: Ivan" type="text"
                         onChange={(event) =>
                           this.setState({searchUser: event.target.value})
                         }/>*/}
                </FormGroup>
              </Form>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <div className="section section-pagination">
          <img alt="..." className="path" src={require("../../assets/img/path4.png")}/>
          <img
            alt="..."
            className="path path1"
            src={require("../../assets/img/path5.png")}
          />
          <Container className="mb-0">
            <Row>
              <Col className="text-center">
                <div className="content-center brand">
                  <h1 className="h1-seo">Hi, My name is <br/> Ivan Rendon</h1>
                  <h3 className="d-none d-sm-block">
                    Welcome to my GitHub search where you can Browse users and their profiles via the <span
                    className="title text-warning"> GitHub API </span> Search for a user
                  </h3>
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
                <Col sm="4" md="3" lg="3">
                  <ProfilePage
                    key={user.id}
                    login={user.login}
                    users={this.state.users}
                    type={user.type}
                    userAvatar={user.avatar_url}
                    userIndex={index}
                    userUrl={user.url}
                    buttonColor={Math.floor(Math.random() * 8)}
                  />
                  <hr/>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-end">
              <Nav className="nav-pills-info nav-pills-icons text-right" pills>
                <NavItem>
                  <NavLink
                    className={classnames({
                      "active show": this.state.pills === 1
                    })}
                    onClick={e => this.toggleTabs1(e, "pills", 1)}
                    href="#pablo"
                  >
                    <i className="tim-icons icon-double-left"/>
                    <span className="text-warning">Previous</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({
                      "active show": this.state.pills === 3
                    })}
                    onClick={e => this.toggleTabs(e, "pills", 3)}
                    href="#pablo"
                  >
                    <i className="tim-icons icon-double-right"/>
                    <span className="text-warning">Next</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>
          </Container>
          <FooterBlk/>
        </div>
      </>
    );
  }
}

export default MainPage;
