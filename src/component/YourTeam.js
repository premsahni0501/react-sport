import React from 'react';
import { Div, Htag, Span, P, Small, Button } from './Elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { gameTypes } from '../App';
import { SelectTeam } from './SelectTeam';

export class YourTeam extends React.Component {
  state = {
    allPlayers: 0,
    allTeams: 0,
    currentGame: this.props.game,
    selectTeamFlag: false,
    setTeamName: ''
  }
  componentDidMount() {
    const players = gameTypes.map(game => game.players);
    const teams = gameTypes.map(game => game.teams);
    this.setState({
      allPlayers: players.reduce((preGame, currGame) => preGame + currGame),
      allTeams: teams.reduce((preGame, currGame) => preGame + currGame)
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      currentGame: nextProps.game
    }, () => console.log(this.state.currentGame))
  }
  selectTeam = (flag) => {
    this.setState({
      selectTeamFlag: flag
    })
  }
  setTeam = (teamName) => {
    this.setState({
      setTeamName: teamName,
      selectTeamFlag: false
    }, () => {
      console.log(this.state.setTeamName);
      this.props.setTeam(teamName, 'payment');
    })
  }
  render() {
    return (
      <Div className="container-fluid yourTeam w-100 p-3"
        style={{ backgroundImage: this.state.currentGame.image !== '' ? this.state.currentGame.image : null }}>
        <Div className="col col-12 p-0">
          <Div className="row">
            <Div className="col col-12">
              <Htag tag={3}>Your Team</Htag>
            </Div>
            <Div className="col col-6">
              <Div className="card" onClick={this.selectTeam.bind(this, true)}>
                <Div className="card-body">
                  <Span className="icon-base">
                    <FontAwesomeIcon icon={faUserFriends} />
                  </Span>
                  <Htag tag={6}>Join</Htag>
                  <P><Small>Join to another team to get some fun</Small></P>
                </Div>
                <Div className="card-footer">
                  <P><Small>{this.state.allPlayers} players are waiting</Small></P>
                </Div>
              </Div>
            </Div>
            <Div className="col col-6">
              <Div className="card" onClick={this.selectTeam.bind(this, true)}>
                <Div className="card-body">
                  <Span className="icon-base">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </Span>
                  <Htag tag={6}>Create New</Htag>
                  <P><Small>Invite your friend or wait for any other player</Small></P>
                </Div>
                <Div className="card-footer">
                  <P><Small>{this.state.allTeams} teams are waiting</Small></P>
                </Div>
              </Div>
            </Div>
            {this.state.setTeamName !== '' ? (<Div className="col col-12 mt-3">
              <Htag tag={4} className="card p-3 text-uppercase" style={{ fontWeight: '800' }}>Selected team: {this.state.setTeamName}</Htag>
            </Div>) : ('')}

          </Div>
        </Div>
        <Div className="modal" style={{ display: this.state.selectTeamFlag ? 'block' : 'none' }}
          onClick={this.selectTeam.bind(this, false)}>
          <Div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <Div className="modal-header"><Htag tag={5} className="m-0">Select Team</Htag></Div>
            <Div className="modal-content">
              {
                (
                  this.state.currentGame.teams > 0 ?
                    (
                      <SelectTeam game={this.state.currentGame} setTeam={this.setTeam} />
                    ) :
                    (
                      <P className="p-3">Currently no teams available for {this.state.currentGame.gameName}</P>
                    )
                )
              }
            </Div>
            <Div className="modal-footer">
              <Button className="btn btn-light" onClick={this.selectTeam.bind(this, false)}>Close</Button>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  }
}