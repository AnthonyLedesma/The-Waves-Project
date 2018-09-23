import React from 'react'
import UpdateSiteInfo from './update_site_info';
import UserLayout from '../../../hoc/user';
import { Helmet } from "react-helmet";

function ManageSite() {
    return (
        <UserLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Manage Site Info - Waves - Anthony Ledesma</title>
            </Helmet>
            <UpdateSiteInfo/>
        </UserLayout>
    )
}

export default ManageSite
