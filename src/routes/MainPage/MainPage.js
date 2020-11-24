import React, { Component, Fragment } from "react";
import LinkForm from "../../components/LinkForm/LinkForm";
import LinkList from "../../components/LinkList/LinkList";

export default class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <LinkForm />
        <LinkList />
      </Fragment>
    )
  }
}