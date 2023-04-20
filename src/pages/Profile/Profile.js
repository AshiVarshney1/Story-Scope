import React from 'react';
import './Profile.css';

function ProfilePage(){
    return(
        <div className='pofile_page'>
            <div className='profile_page_container'>
                <div className='profile_input'>
                    <div className='user_name'>
                    <input placeholder='Alpha User'/>
                    <button>EDIT</button>
                    </div>
                    <div className='user_email'>
                    <input placeholder='guest@gmail.com' />
                    <button>EDIT</button>
                    </div>
                    
                    
                </div>
                <div className='delete_button'>
                    <button>DELETE YOUR ACCOUNT</button>

                </div>

            </div>
        </div>
    );
}

export default ProfilePage;