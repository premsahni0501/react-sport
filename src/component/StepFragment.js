import React from 'react';
import { Div, Nav, A, Span, Img, Strong, Htag, List, ListItem, P, Small } from './Elements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faThLarge, faUsers, faCreditCard, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export class StepFragment extends React.Component {
  state = {
    currentListItem: '',
    location: '',
    gameType: '',
    yourTeam: '',
    payment: '',
    setTeamName: ''
  }
  componentDidMount() {
    this.setCurrentTab(this.props.currentTab);
  }
  setCurrentTab = (tab) => {
    this.setState({
      currentListItem: tab
    }, () => {
      this.props.changeTab(this.state.currentListItem);
      console.log(this.state.currentListItem);
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      location: nextProps.location,
      gameType: nextProps.currentGameName,
      currentListItem: nextProps.currentTab,
      yourTeam: nextProps.setTeamName
    })
  }
  render() {
    return (
      <Div className="container">
        <Div className="row">
          <Nav className="navbar navbar-light">
            <A href="#" className="navbar-brand">
              <Img src={require("../assets/img/logo.svg")} alt="logo" />
              <Span><Strong>Sports</Strong></Span>
            </A>
          </Nav>
        </Div>
        <Div className="row" style={{ marginTop: '3rem' }}>
          <Div className="col col-12 pt-3 pb-3">
            <Htag tag="2" className="text-primary">Find a team for game</Htag>
            <List className="list-group steps" type="ul">
              <ListItem
                className={`${this.state.currentListItem === 'location' ? 'current ' : ''}list-group-item d-flex align-items-center`}
                onClick={() => this.setCurrentTab('location')}>
                <Span className="mr-3 icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></Span>
                <Span className="content">
                  <Span>
                    <P className={`${this.state.location !== '' ? 'text-uppercase text-gray UpAnim' : ''} m-0`}><Small>Location</Small></P>
                    <Htag tag={`${this.state.location !== '' ? '6' : '5'}`} className="m-0 text-primary DownAnim"><Strong>{this.state.location}</Strong></Htag>
                  </Span>
                  {this.state.currentListItem === 'location' ?
                    <Span className="RightSlideAnim"><FontAwesomeIcon icon={faArrowRight} /></Span> : ''}
                </Span>
              </ListItem>
              <ListItem
                className={`${this.state.currentListItem === 'Game Type' ? 'current ' : ''}list-group-item d-flex align-items-center`}
                onClick={() => this.setCurrentTab('Game Type')}>
                <Span className="mr-3 icon"><FontAwesomeIcon icon={faThLarge} /></Span>
                <Span className="content">
                  <Span>
                    <P className={`${this.state.gameType !== '' ? 'text-uppercase text-gray UpAnim' : ''} m-0`}><Small>Game Type</Small></P>
                    <Htag tag={`${this.state.gameType !== '' ? '6' : '5'}`} className="m-0 text-primary DownAnim"><Strong>{this.state.gameType}</Strong></Htag>
                  </Span>
                  {this.state.currentListItem === 'Game Type' ?
                    <Span className="RightSlideAnim"><FontAwesomeIcon icon={faArrowRight} /></Span> : ''}
                </Span>
              </ListItem>
              <ListItem
                className={`${this.state.currentListItem === 'Your Team' ? 'current ' : ''}list-group-item d-flex align-items-center`}
                onClick={() => this.setCurrentTab('Your Team')}>
                <Span className="mr-3 icon"><FontAwesomeIcon icon={faUsers} /></Span>
                <Span className="content">
                  <Span>
                    <P className={`${this.state.yourTeam !== '' ? 'text-uppercase text-gray UpAnim' : ''} m-0`}><Small>Your Team</Small></P>
                    <Htag tag={`${this.state.yourTeam !== '' ? '6' : '5'}`} className="m-0 text-primary DownAnim"><Strong>{this.state.yourTeam}</Strong></Htag>
                  </Span>
                  {this.state.currentListItem === 'Your Team' ?
                    <Span className="RightSlideAnim"><FontAwesomeIcon icon={faArrowRight} /></Span> : ''}
                </Span>
              </ListItem>
              <ListItem
                className={`${this.state.currentListItem === 'payment' ? 'current ' : ''}list-group-item d-flex align-items-center`}
                onClick={() => this.setCurrentTab('payment')}>
                <Span className="mr-3 icon"><FontAwesomeIcon icon={faCreditCard} /></Span>
                <Span className="content">
                  <Span>
                    <P className={`${this.state.payment !== '' ? 'text-uppercase text-gray UpAnim' : ''} m-0`}><Small>Payment</Small></P>
                    <Htag tag={`${this.state.payment !== '' ? '6' : '5'}`} className="m-0 text-primary DownAnim"><Strong>{this.state.payment}</Strong></Htag>
                  </Span>
                  {this.state.currentListItem === 'payment' ?
                    <Span className="RightSlideAnim"><FontAwesomeIcon icon={faArrowRight} /></Span> : ''}
                </Span>
              </ListItem>
            </List>
          </Div>
        </Div>
      </Div>
    )
  }
}