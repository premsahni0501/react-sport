import React from 'react';
import { Div, Input, Span, Htag, Img, P } from './Elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { gameTypes } from '../App';

const imagesFolder = require.context('../assets/img/', true);

export default class GameType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchGameText: '',
      filteredGameTypes: [],
      gameTypes: gameTypes
    }
  }
  onScrollHandler = (e) => {
    e.target.scrollLeft += e.deltaY;
  }
  searchGames = (e) => {
    this.setState({
      searchGameText: e.target.value
    })
    const gameTypes = this.state.gameTypes.filter(game => {
      if (game.gameName.toLowerCase().match(this.state.searchGameText.toLowerCase())) {
        return game;
      }
    })
    this.setState({
      filteredGameTypes: gameTypes
    });
  }
  componentDidMount() {
    this.setState({
      filteredGameTypes: this.state.gameTypes.map(game => game)
    });
  }
  render() {
    const gameTypesList = this.state.filteredGameTypes.map((game, index) => {
      return (
        <Div className={`col col-${game.teams === 0 && game.players === 0 ? '3' : '6'}`}
          key={`game_${index}`}>
          <Div className={`${game.image === '' ? '' : 'image'} gameGrid`}
            onClick={this.props.setGame.bind(this, game)}
            style={{ backgroundImage: game.image !== '' ? `url(${imagesFolder('./' + game.image)})` : null }}>
            {
              game.icon !== '' ?
                (
                  <React.Fragment>
                    <Span className="icon-base"><Img src={imagesFolder('./' + game.icon)} /></Span>
                    <Div>
                      <Htag className="m-0" tag={5}>{game.gameName}</Htag>
                      <P className="m-0">{game.teams > 0 ? `${game.teams} team${game.teams > 1 ? 's' : ''}` : `${game.players} player${game.players > 1 ? 's' : ''}`}</P>
                    </Div>
                  </React.Fragment>
                ) :
                (<Div className="text-center">
                  <Htag className="m-0" tag={5}>{game.gameName}</Htag>
                  <P className="m-0">{game.teams > 0 ? `${game.teams} team${game.teams > 1 ? 's' : ''}` : `${game.players} player${game.players > 1 ? 's' : ''}`}</P>
                </Div>)
            }

          </Div>
        </Div>
      )
    })
    return (
      <Div className="container-fluid gameFragment w-100 p-3">
        <Div className="row">
          <Div className="col col-12 mb-3">
            <Div className="input-group">
              <Span className="input-group-prepend">
                <Span><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Span>
              </Span>
              <Input type="text" className="form-control" placeholder="Find your sport" value={this.state.searchGameText} onChange={this.searchGames} />
            </Div>
          </Div>
        </Div>
        <Div className="masonry" onWheel={this.onScrollHandler}>
          {gameTypesList}
        </Div>
      </Div>
    );
  }
}