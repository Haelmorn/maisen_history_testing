import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ReloadIcon from '@material-ui/icons/Update'


const list = function(nestedArray, props) {
  return nestedArray.slice(1, ).map(
(el, index) =>
  <ListItem button alignItems="flex-start" key={index}>
    <ListItemText
    primary={el.slice(0,3).map((value, index) => <div>{"Field".concat(index+1, ": ", value)}</div>)}/>
    <ListItemSecondaryAction onClick={() => props.restoreState(index+1)}>
      <IconButton edge="end" aria-label="reload">
      <ReloadIcon />
      </IconButton>
      </ListItemSecondaryAction>
  </ListItem>
  ).reverse()
}

function FeatureHistory(props) {
    const fields = list(props.fieldHistory, props)
    return (
     <div>
      <h3>Feature History</h3>
      <List component="nav" aria-label="main mailbox folders">
        {fields}
      </List>
    </div>
    )
};

export default FeatureHistory;
