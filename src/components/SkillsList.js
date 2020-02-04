import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SkillsList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([-1]);
  const [skillDisplay, setSkillDisplay] = React.useState(props.initialSkills)
  const [newSkill, setNewSkill] = React.useState({value: ''})

  const handleAddNewSkill = evt => {
      evt.preventDefault();
      console.log('adding new skill', newSkill.value);
      const newSkillDisplay = [...skillDisplay];
      newSkillDisplay.push(newSkill.value);
      setSkillDisplay(newSkillDisplay);

      console.log('after adding', skillDisplay);

      setNewSkill({value: ''});
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
    const checkedSkills = [];
    newChecked.forEach( index => {
      if(skillDisplay[index] !== undefined) {
        checkedSkills.push(skillDisplay[index]);
      }
    })
    // set new array of skills from parent state setter
    console.log('setting skills in skillDialog', checkedSkills);
    props.setSkills(checkedSkills);
  };

  return (
    <List className={classes.root}>
      {skillDisplay.map( (value, i) => {
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
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                {/* <CommentIcon /> */}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <ListItem key={skillDisplay.length} role={undefined} dense button onClick={handleToggle(skillDisplay.length)}>
          {/* <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checked.indexOf(skills.length) !== -1}
                tabIndex={-1}
                disableRipple
            />
            </ListItemIcon> */}
            <TextField
              label='Custom'
              value={newSkill.value}
              onChange={ evt => setNewSkill({value: evt.target.value})} />
            <Button
                variant='outlined'
                onClick={ evt => handleAddNewSkill(evt)}>
                Add
            </Button>
      </ListItem>
    </List>
  );
}