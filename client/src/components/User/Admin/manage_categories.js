import React from 'react';
import UserLayout from '../../../hoc/user'
import ManageBrands from './manage_brands';
import ManageWoods from './manage_woods';
import { Helmet } from "react-helmet";

const ManageCategories = () => {
    return (
        <UserLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Manage Product Categories - Waves - Anthony Ledesma</title>
            </Helmet>
            <ManageBrands />
            <ManageWoods />
        </UserLayout>
    );
};

export default ManageCategories;