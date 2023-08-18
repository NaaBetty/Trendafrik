import React from 'react';
import {Post} from "./Post";
import PostCard from "../components/share/PostCard";
import { PostsList } from '../data/PostsList';



function ListofPosts() {
    return <div className="d-flex flex-column">
        {PostsList.map((post, index) =>
         <PostCard key={index} post={post}/>)}
    </div>
}

export default ListofPosts;