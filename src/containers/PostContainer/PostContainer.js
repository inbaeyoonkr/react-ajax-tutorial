import React, { Component } from "react";
import { PostWrapper, Navigate, Post, Warning } from "../../components/index";
import * as service from "../../services/post";

class PostContainer extends Component {
  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async postId => {
    this.setState({
      fetching: true // requesting
    });
    try {
      const info = await Promise.all([
        service.getPost(postId),
        service.getComment(postId)
      ]);
      console.log(info);

      const { title, body } = info[0].data;
      const comments = info[1].data;

      this.setState({
        postId,
        fetching: false, // done
        post: {
          title,
          body
        },
        comments
      });
    } catch (error) {
      this.setState({
        fetching: false
      });
      this.showWarning();
    }
  };

  handleNavigateClick = type => {
    const postId = this.state.postId;

    if (type === "Next") {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };

  showWarning = () => {
    this.setState({
      warningVisibility: true
    });

    setTimeout(() => {
      this.setState({
        warningVisibility: false
      });
    }, 1500);
  };

  constructor(props) {
    super(props);

    this.state = {
      postId: 1,
      fetching: false,
      post: {
        title: null,
        body: null
      },
      comments: [],
      warningVisibility: false
    };
  }

  render() {
    const { postId, fetching, post, comments, warningVisibility } = this.state;

    return (
      <PostWrapper>
        <Navigate
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigateClick}
        />
        <Post
          postId={postId}
          title={post.title}
          body={post.body}
          comments={comments}
        />
        <Warning
          visible={warningVisibility}
          message="That post does not exist"
        />
      </PostWrapper>
    );
  }
}

export default PostContainer;
