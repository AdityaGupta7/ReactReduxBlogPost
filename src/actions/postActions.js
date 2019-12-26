import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export function fetchPosts () {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(posts =>
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts.data
                    }
                )
            );
        }
        //fetch api alternative of the above
        /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
          dispatch({
            type: FETCH_POSTS,
            payload: posts
          })
        );*/
}

export function createPost (postData) {
    return function (dispatch) {
        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(post => 
            dispatch({
                type: NEW_POST,
                payload: post.data
                }
            )
        );
    } 
}