import React from 'react'
import UserProfile from './UserProfile';
import { Outlet, useParams, Link } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    console.log("user id ",userId);
        return (
        <>
            <UserProfile userId={userId}/>
            <hr/>
            <Link to={`/users/${userId}/posts`}>View All Posts</Link>
            ||
            <Link to={`/users/${userId}/posts/1`}>View Post with ID 1</Link>
            <hr/>
            <Outlet />
        </>
        )
}

export default User
