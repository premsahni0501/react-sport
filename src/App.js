import React from 'react';

import { Div } from './component/Elements';
import { StepFragment } from './component/StepFragment';
import { ResultFragment } from './component/ResultFragment';

class App extends React.Component {
  state = {
    location: '',
    currentTab: 'payment',
    currentGameName: '',
    setTeamName: ''
  }
  setLocationFun = (loc) => {
    this.setState({
      location: loc
    })
  }
  setCurrentTab = (tab) => {
    this.setState({
      currentTab: tab
    }, () => {
      if (this.state.currentTab === 'Your Team' || this.state.currentTab === 'payment') {
        if (document.querySelector('body').classList.contains('aqua')) {
          document.querySelector('body').classList.remove('aqua');
        }
        document.querySelector('body').classList.add('primary');
      }
      else {
        if (document.querySelector('body').classList.contains('primary')) {
          document.querySelector('body').classList.remove('primary');
        }
        document.querySelector('body').classList.add('aqua');
      }
    })
  }
  setGameName = (gameName) => {
    this.setState({
      currentGameName: gameName
    })
  }
  setTeam = (teamName, tabName) => {
    this.setState({
      setTeamName: teamName
    }, () => {
      this.setCurrentTab(tabName);
    })
  }
  render() {
    return (
      <div className={`App container`}>
        <Div className="row">
          <Div className="col col-12 col-md-5 col-sm-5">
            <StepFragment
              location={this.state.location}
              currentTab={this.state.currentTab}
              currentGameName={this.state.currentGameName}
              changeTab={this.setCurrentTab}
              setTeamName={this.state.setTeamName} />
          </Div>
          <Div className="col col-12 col-md-7 col-sm-7">
            <ResultFragment
              setLocation={this.setLocationFun}
              currentTab={this.state.currentTab}
              setGameName={this.setGameName}
              changeTab={this.setCurrentTab}
              setTeam={this.setTeam} />
          </Div>
        </Div>
      </div>
    );
  }
}

export default App;

export const gameTypes = [
  {
    gameName: "Tennis",
    teams: 0,
    players: 98,
    image: 'tennis.jpg',
    icon: ''
  },
  {
    gameName: "Soccer",
    teams: 24,
    players: 0,
    image: '',
    icon: 'soccer.svg'
  },
  {
    gameName: "Hockey",
    teams: 0,
    players: 0,
    image: '',
    icon: 'hockey.svg'
  },
  {
    gameName: "Rugby",
    teams: 0,
    players: 0,
    image: '',
    icon: 'rugby.svg'
  },
  {
    gameName: "Basketball",
    teams: 32,
    players: 0,
    image: 'basketball.jpg',
    icon: ''
  },
  {
    gameName: "Cricket",
    teams: 45,
    players: 0,
    image: '',
    icon: 'cricket.svg'
  },
  {
    gameName: "Kabaddi",
    teams: 0,
    players: 0,
    image: '',
    icon: 'kabaddi.svg'
  }
]