import React from "react";
// import style from "./UsersFunctionComponent.module.css";
// import axios, { Axios } from "axios";
import axios from "axios";
import UsersFunctionComponent from "./UsersFunctionComponent";

// т.к. в mapStateToProps = (state) => {
// мы поместили users return { users: state.usersPage.users, }
//  то в props будут находиться пользователи props.users

class UsersAPIComponent extends React.Component {
 
  componentDidMount() {
    axios
      .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
      .then((response) => {
        let data = [];

        for (let i = 0; i < this.props.pageSize; i++) {
          // data.push(response.data[i]);
          data = [...data, response.data[i]];
        }
        // props становится свойством объекта, поэтому нужно писать this.props

        // this.props.setUsers(response.data);
        this.props.setUsers(data);

        this.props.setTotalUsersCount(response.data.length);
      });
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    //   )
    //   .then((response) => {
    //     this.props.setUsers(response.data.items);
    //     this.props.setTotalUsersCount(response.data.totalCount);
    //   });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    //   )
    //   .then((response) => {
    //     this.props.setUsers(response.data.items);
    //   });
    axios
      .get(`https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases`)
      .then((response) => {
        let data = [];
        const iMax =
          this.props.pageSize * pageNumber < this.props.totalUsersCount
            ? this.props.pageSize * pageNumber
            : this.props.totalUsersCount;

        for (let i = this.props.pageSize * (pageNumber - 1); i < iMax; i++) {
          data.push(response.data[i]);
        }
        // this.props.setUsers(response.data.items);
        this.props.setUsers(data);
      });
  };

  // props в рендер не приходят
  // render обязательный метод классовой компоненты
  // он возвращает jsx разметку.
  // сначала вызывается render = (), а потом только componentDidMount()
  render = () => {
    return (
      <UsersFunctionComponent
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  };
}

export default UsersAPIComponent;
