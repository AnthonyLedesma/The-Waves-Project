import React from 'react';
import UserLayout from '../../hoc/user';
import MyButton from '../utils/button';
import UserHistoryBlock from '../utils/User/history_block';
import {Helmet} from "react-helmet";

const UserDashboard = ({ user }) => {
    return (
        <UserLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>User Dashboard - Waves - Anthony Ledesma</title>
            </Helmet>
            <div>

                <div className="user_nfo_panel">
                    <h1>User Information</h1>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>
                {
                    user.userData.history ?
                        <div className="user_nfo_panel">
                            <h1>Purchase History</h1>
                            <div className="user_product_block_wrapper">
                                <UserHistoryBlock
                                    products={user.userData.history}
                                />
                            </div>

                        </div>
                        : null
                }



            </div>
        </UserLayout>
    );
};

export default UserDashboard;