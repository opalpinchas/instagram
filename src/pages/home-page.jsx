import { connect } from "react-redux"
import { Component } from 'react'
import { loadPosts, removePost, savePost } from '../store/actions/post.action.js'
import { PostList } from '../cmp/post-list'
import { userService } from '../services/user.service.js'

class _HomePage extends Component {
   
    componentDidMount() {
        console.log(this.props);
        this.props.loadPosts()
    }

    onRemovePost = (postId) => {
        this.props.removePost(postId)
    }

    onUpdatePost = (post) => {
        this.props.savePost(post)
    }



    render() {
        const { posts, user } = this.props
        

        return (
            <div>
                <PostList posts={posts} user={user} onUpdatePost={this.onUpdatePost} />
            </div>
        )
    }

}

const mapStateToProps = (storeState) => {
    return {
        posts: storeState.postModule.posts,
        user: storeState.userModule.user
    }
}
const mapDispatchToProps = {
    loadPosts,
    removePost,
    savePost
}



export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(_HomePage)
