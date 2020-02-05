import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function GeneralList(props) {
  const [checked, setChecked] = React.useState([-1]);
  const [listDisplay, setListDisplay] = React.useState(props.initialList)
  const [newListItem, setNewListItem] = React.useState({value: ''})

  const handleAddNewListItem = evt => {
      evt.preventDefault();
      console.log('adding new skill', newListItem.value);
      const newListDisplay = [...listDisplay];
      newListDisplay.push(newListItem.value);
      setListDisplay(newListDisplay);

      console.log('after adding', listDisplay);

      setNewListItem({value: ''});
  }

  const handleToggle = value => () => {
    // get index of current skill
    const currentIndex = checked.indexOf(value);
    // copy array
    const newChecked = [...checked];

    // if we dont have the skill as checked
    if (currentIndex === -1) {
      // set it to checked
      newChecked.push(value);
    } else {
      // or get it out of the array of checked items
      newChecked.splice(currentIndex, 1);
    }
    // set the new checked items
    setChecked(newChecked);
    // iterate through new checked items and add to array
    const checkedListItems = [];
    newChecked.forEach( index => {
      if(listDisplay[index] !== undefined) {
        checkedListItems.push(listDisplay[index]);
      }
    })
    // set new array of skills from parent state setter
    console.log('setting skills in skillDialog', checkedListItems);
    props.setList(checkedListItems);
  };

  return (
    <List>
      {listDisplay.map( (value, i) => {
        const labelId = `checkbox-list-label-${i}`;

        return (
          <ListItem key={i} role={undefined} dense button onClick={handleToggle(i)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(i) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        );
      })}
      <ListItem key={listDisplay.length} role={undefined} dense button onClick={handleToggle(listDisplay.length)}>
            <TextField
              label='Custom'
              value={newSkill.value}
              onChange={ evt => setNewListItem({value: evt.target.value})} />
            <Button
                variant='outlined'
                onClick={ evt => handleAddNewListItem(evt)}>
                Add
            </Button>
      </ListItem>
    </List>
  );
}