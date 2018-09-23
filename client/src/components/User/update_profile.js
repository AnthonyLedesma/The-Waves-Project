import React from 'react'
import UserLayout from '../../hoc/user';
import UpdatePersonalInfo from './update_personal_info';
import {Helmet} from "react-helmet";

function UpdateProfile() {
    return (
        <UserLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Profile - Waves - Anthony Ledesma</title>
            </Helmet>
            <UpdatePersonalInfo/>
        </UserLayout>
    )
}

export default UpdateProfile
