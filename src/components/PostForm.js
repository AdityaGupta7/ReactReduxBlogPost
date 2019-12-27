import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PropTypes from 'prop-types';
import '../styles/postForm.css';

class PostForm extends Component {
    //an example of both component-level state and application-level state co-existing (as is the need)
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== '' && this.state.body !== ''){
            const post = {
                title: this.state.title,
                body: this.state.body
            }
            //call action
            this.props.createPost(post);
        }
    }

    render() {
        return (
            <div>
                <h2>Add a new Post</h2>
                <h5>POST request to jsonplaceholder.typicode.com/posts</h5>
                <h6>Redux helps in making new post available to the Post component (from this component)</h6>
                <form onSubmit={this.onSubmit}>
                    <div id="title">
                        <label>Title: </label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div id="body">
                        <label>Post Body: </label>
                        <br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Add Post!</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
