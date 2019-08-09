import React from "react";
import classnames from "classnames";
import ProfilePage from "../ProfilePage/ProfilePage";
import FooterBlk from "../Footer/FooterBlk";
import "./styles.css";
import axios from "axios";
import CoolModal from "../Modal/Modal";
import moment from "moment";

import {
  UncontrolledCollapse,
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
import UserCard from "../UserDesription/UserCard";

class MainPage extends React.Component {

  state = {
    users: [],
    searchUser: null,
    userDisplay: false,
    isOpen: false,
    results: null,
    name: null,
    inputFocus: false,
    pageNumber: 1,
    modalInfo: null,
    userCard: true,
    userAvatar: null,
    userBio: null,
    userName: null,
    userLogin: null,
    userLocation: null,
    userRepos: null,
    userFollowers: null,
    userFollowing: null,
    userPublicRepos: null,
    userForks: null,
    userBlog: null,
    userCompany: null,
    userCreatedAt: null
  };

  constructor(props) {
    super(props);
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

  displayHeading = () =>
    <div className="content-center brand">
      <h1 className="h1-seo">Hi, My name is <br/> Ivan Rendon</h1>
      <h3 className="d-none d-sm-block">
        Welcome to my GitHub search <br /> you can Browse users and their profiles<br /> via the <span
        className="title text-warning"> GitHub API </span> Search for a user <br />
        Ex: Ivan Rendon
      </h3>
    </div>;

  componentDidMount() {
    console.log("Mounted!");
  }

  arrowsLeft = (e, stateName, index) => {
    e.preventDefault();
    this.setState({pageNumber: this.state.pageNumber -= 1});
    console.log(this.state.pageNumber, this.state.searchUser);
    (this.state.pageNumber < 1) ? this.setState({
        isOpen: true,
        modalInfo: "Nothing to show before this",
        pageNumber: 1
      }) :
      this.requestGetUsers(this.state.pageNumber, this.state.searchUser);
    this.setState({
      [stateName]: index
    });
  };

  arrowsRight = (e, stateName, index) => {
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
    if (page < 1) {
      this.setState({isOpen: true, userDisplay: false, pageNumber: 1});
    } else {
      axios.get(`https://api.github.com/search/users?per_page=20&page=${page}&q=${name}`)
        .then(res => {
          console.log(res.data.items);
          if (res.data.items.length === 0) {
            this.setState({isOpen: true, modalInfo: "Nothing to show", pageNumber: 1});
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
  }

  handleJoinSubmit(event) {
    event.preventDefault();
    (this.state.searchUser === null) ? this.setState({isOpen: true, modalInfo: "Please enter a user name"}) :
      this.requestGetUsers(this.state.pageNumber, this.state.searchUser);
  }


  //======================================================================
  handleUserCard = event => {
    let userURL = event.target.getAttribute("custom");
    axios.get(userURL).then(res => {
      let user = res.data;
      this.setState({
        userCard: false,
        // userDisplay: false,
        userAvatar: user.avatar_url,
        userBio: user.bio,
        userName: user.name,
        userLogin: user.login,
        userLocation: user.location,
        userRepos: user.html_url,
        userFollowers: user.followers,
        userFollowing: user.following,
        userPublicRepos: user.public_repos,
        userForks: user.public_gists,
        userBlog: user.blog,
        userCompany: user.company,
        userCreatedAt: this.trimTime(user.created_at)
      });
      console.log(res.data);
    });
  };


  trimTime(time){
    //2011-07-11T14:22:09Z
    time = time.split("T");
    return moment(time[0], "YYYY-MM-DD").format('MMM Do YYYY');

  }
  //======================================================================

  render() {
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
                {(this.state.userCard && this.displayHeading()) ||
                (!this.state.userCard && <UserCard
                  avatar={this.state.userAvatar}
                  bio={this.state.userBio}
                  name={this.state.userName}
                  login={this.state.userLogin}
                  location={this.state.userLocation}
                  repos={this.state.userRepos}
                  followers={this.state.userFollowers}
                  following={this.state.userFollowing}
                  public_repos={this.state.userPublicRepos}
                  forks={this.state.userForks}
                  blog={this.state.userBlog}
                  company={this.state.userCompany}
                  since={this.state.userCreatedAt}
                />)}
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
          {this.state.isOpen && <CoolModal message={this.state.modalInfo} toggleModal={this.toggleModal}/>}
          <Container className="align-items-center mt-0">
            <Row>
              {this.state.userDisplay && this.state.users.map((user, index) => (
                <Col sm="4" md="3" lg="3" key={user.id}>
                  <ProfilePage
                    handleUserCard={this.handleUserCard}
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
                    onClick={e => this.arrowsLeft(e, "pills", 1)}
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
                    onClick={e => this.arrowsRight(e, "pills", 3)}
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
