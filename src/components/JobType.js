import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const JobType = props => {

    const [type, setType] = React.useState({value: ''})
    const [duration, setDuration] = React.useState({value: ''})
    const [enableDuration, setEnableDuration] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setType({value: event.target.value});
        console.log('type in jobType', event.target.value);

        if(event.target.value === 'Contract') {
            setEnableDuration(true);
        } else {
            setEnableDuration(false);
        }

        props.setType(event.target.value);
    };

    const handleDurationChange = event => {
        setDuration({value: event.target.value})

        props.setDuration(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl>
                <InputLabel>Type</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={type.value}
                    onChange={handleChange}
                >
                    <MenuItem value={'Full-Time'}>Full-Time</MenuItem>
                    <MenuItem value={'Part-Time'}>Part-Time</MenuItem>
                    <MenuItem value={'Contract'}>Contract</MenuItem>
                </Select>
            </FormControl>
            <br/>
            <TextField 
                label='Duration (months)' 
                type='number' 
                name='duration'
                disabled={ !enableDuration }
                value={ duration.value } 
                onChange={(evt) => handleDurationChange(evt) } />
        </div>
    )
}