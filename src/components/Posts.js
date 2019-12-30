import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import '../styles/post.css';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div id="post-card" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>Posts</h1>
                <h5>GET request to jsonplaceholder.typicode.com/posts</h5>
                <div id="post-wrapper">
                    {postItems}
                </div>
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items, //state.posts because we have assigned postReducer to posts property in combinedReducer
    newPost: state.posts.item //this is the reason we used redux; to pull the new posts from PostForm to Posts
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
