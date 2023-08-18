import React from 'react';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function PostButton() {
    return <div className="pb-3">
        <NavLink to="/post"  className="button">
            Create a post
        </NavLink>
    </div>
}

export default PostButton;