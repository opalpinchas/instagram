import { PostPreview } from './post-preview.jsx'

export function PostList({ posts, onUpdatePost }) {
    return (
        <section className="post-list">
            {posts.map(post => <PostPreview post={post} onUpdatePost={onUpdatePost} key={post._id} />)}
        </section>
    )
}