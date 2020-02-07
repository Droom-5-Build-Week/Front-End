import React from 'react';
import { MenuNav } from './MenuNav';

import  SeekerDashboard  from './SeekerDashboard';
import { ProviderDashboard } from './ProviderDashboard';
import { connect } from 'react-redux';
import { getUsersById, getCompany, updateUserById, deleteUserById } from '../../Store/Actions/AppActions';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import './dashboard.css';

const Dashboard = props => {

    const type = localStorage.getItem('userType');
    const id = localStorage.getItem('userId');

    console.log('type', type, 'id', id);

    

    React.useEffect(() => {
        if(type === 'seeker') {
            props.getUsersById(id);
        } else {
            props.getCompany(id);
        }
    }, [])

    React.useEffect( () => {
        console.log(props.seeker)
        setUserInfo(props.seeker);
    }, [props.userInfoGot])

    const renderCorrectUserType = () => {
        if(type === 'seeker') {
            return <SeekerDashboard name={props.seeker.name} userType='seeker'/>
        } else if(type === 'provider') {
            return <ProviderDashboard serType='provider'/>
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClose = (evt,type) => {
        evt.preventDefault();
        if(type === 'update') {
            //update user information
            console.log('update user info', userInfo)
            const updateObj = {
                name: userInfo.name,
                email: userInfo.email,
                location: userInfo.location,
                password: userInfo.password
            } 

            props.updateUserById(props.seeker.id, updateObj);
        } else if(type === 'delete') {
            // delete user, route to login
            console.log('delete user', userInfo)
            props.deleteUserById(props.seeker.id);
            props.history.push('/');
        }

        setOpen(false);
    }

    const [userInfo, setUserInfo] = React.useState(props.seeker);

    const handleChange = evt => {
        console.log(userInfo);
        setUserInfo({
            ...userInfo,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div className='dashboard'>
            <MenuNav displayUserSettings={ () => setOpen(true) } />
        
            { renderCorrectUserType() }

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth='false' maxWidth='md'>
            <DialogTitle id="form-dialog-title">User Settings</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Edit Details below:
                </DialogContentText>
            
                <TextField 
                    autoFocus
                    label='Name' 
                    type='text' 
                    name='name'
                    value={userInfo.name} 
                    onChange={(evt) => handleChange(evt)} />

                {/* <TextField 
                    label='Email' 
                    type='text' 
                    name='email'
                    value={userInfo.email} 
                    onChange={(evt) => handleChange(evt)} /> */}

            </DialogContent>
            <DialogActions>
                <Button onClick={(evt) => handleClose(evt,'update')} color="primary">
                Update
                </Button>
                <Button onClick={(evt) => handleClose(evt,'delete')} color="primary">
                Delete
                </Button>
                <Button onClick={(evt) => handleClose(evt,'')} color="primary">
                Close
                </Button>
            </DialogActions>
            </Dialog>
      
        </div>
    )
}

const mapStateToProps = state => {
    console.log('what is state', state);

    if(state === undefined) {
        return {
            userInfoGot: false,
            userType: 1,
            seeker: {},
            provider:{}
        }
    }
    return {
        userInfoGot: state.userInfoGot,
        userType: state.userType,
        seeker: state.seeker,
        provider: state.provider
    }
}

export default connect(mapStateToProps, {getUsersById, getCompany, updateUserById, deleteUserById})(Dashboard);