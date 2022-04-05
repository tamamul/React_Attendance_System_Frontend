import React, { Component } from 'react'
import Footerdekstop from '../common/Footerdekstop'
import Navmenudekstop from '../common/Navmenudekstop'
import UserLogin from '../common/UserLogin'
class UserLoginPage extends Component {
    render() {
        const setUser = this.props.setUser;
        const user = this.props.user;
        return (

            <>
            
            <div className='Desktop'>
                <Navmenudekstop/>
                </div>
                <UserLogin setUser={setUser} user ={user}  />
                <div className='Desktop'>
                    <Footerdekstop/>
                </div>
    
            
            </>
        )
    }
}

export default UserLoginPage
