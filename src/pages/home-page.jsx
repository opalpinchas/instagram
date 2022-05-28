import { connect } from "react-redux"
import { Component } from 'react'
import { loadPosts, removePost, savePost } from '../store/actions/post.action.js'
import { PostList } from '../cmp/post-list'

class _HomePage extends Component {
    componentDidMount() {
        this.props.loadPosts()
        console.log(this.props.posts);
    }

    onRemovePost = (postId) => {
        this.props.removePost(postId)
    }

    onUpdatePost = (post) => {
       this.props.savePost(post)
    }



    render() {
        const { posts } = this.props
     
        return (
            <div>
               <PostList posts={posts}  onUpdatePost={this. onUpdatePost}/>
               <i className="fa-solid fa-heart"></i>
            </div>
        )
    }
}


const mapStateToProps = (storeState) => {
    return {
        posts: storeState.postModule.posts
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
