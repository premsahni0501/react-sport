import React from 'react';
import { Div, Htag, List, ListItem } from './Elements';

export class SelectTeam extends React.Component {
  render() {
    const teams = [];
    for (let i = 0; i < this.props.game.teams; i++) {
      teams.push(`${this.props.game.gameName} ${i}`);
    }
    return (
      <List type="ul" className="list-group p-3">
        <Htag tag={3} className="m-0">{this.props.game.gameName}</Htag>
        {
          teams.map((team, index) => <ListItem className="list-group-item" key={index} onClick={this.props.setTeam.bind(this, team)}>{team}</ListItem>)
        }
      </List>
    );
  }
}