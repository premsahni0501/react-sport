import React from 'react';
import { Htag, List, ListItem } from './Elements';

const SelectTeam = (props) => {
  const teams = [];
  for (let i = 0; i < props.game.teams; i++) {
    teams.push(`${props.game.gameName} ${i}`);
  }
  return (
    <List type="ul" className="list-group p-3">
      <Htag tag={3} className="m-0">{props.game.gameName}</Htag>
      {
        teams.map((team, index) => <ListItem className="list-group-item" key={index} onClick={props.setTeam.bind(this, team)}>{team}</ListItem>)
      }
    </List>
  );
}
export default SelectTeam;