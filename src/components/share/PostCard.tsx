import React from 'react';
import {Post} from "../../pages/Post";


export  function formatBiography(description: string): string {
    return description.substring(0, 60) + '...';
}

interface PostCardProp {
    post: Post
}

function PostCard({post}: PostCardProp) {
    return  <div key={post.id} className="mb-5" >
        <div className="card">
            <img src={post.imageUrl} className="card-img-top" alt={post.name}/>
            <div className="card-body">
                <div className='col-md-3 col-6 mb-4'>
                <p className="card-text"><span className="fw-bold">Name:</span> {post.name}</p>
                </div>
                <p className="card-text"><span className="fw-bold">Biography:</span> {formatBiography(post.biography)}</p>
                <p className="card-text"><span className="fw-bold">Category:</span> {post.category}</p>
                <p className="card-text"><span className="fw-bold">Impact:</span> {post.impact}</p>
                <p className="card-text"><span className="fw-bold">Project:</span> {post.project}</p>
            </div>
        </div>
    </div>
}

export default PostCard;