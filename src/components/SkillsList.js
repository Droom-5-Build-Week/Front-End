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

export default function SkillsList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const initialSkills = [
      'Web Development',
      'Backend Development',
      'React'
  ]

  const [skills, setSkills] = React.useState(initialSkills);
  const [newSkill, setNewSkill] = React.useState({value: ''})

  const handleAddNewSkill = evt => {
      evt.preventDefault();

      skills.push(newSkill.value);

      setNewSkill({value: ''});
  }

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {skills.map( (value, i) => {
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
      <ListItem key={skills.length} role={undefined} dense button onClick={handleToggle(skills.length)}>
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