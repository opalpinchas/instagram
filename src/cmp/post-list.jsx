import { PostPreview } from './post-preview.jsx'

export function PostList({ posts, user, onUpdatePost }) {
    return (
        <section className="post-list">
            {posts.map(post => <PostPreview post={post} user={user} onUpdatePost={onUpdatePost} key={post._id} />)}
        </section>
    )
}