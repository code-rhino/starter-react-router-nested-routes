import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
    <>
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
