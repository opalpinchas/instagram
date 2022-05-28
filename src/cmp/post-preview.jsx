import { useState } from "react"


export function PostPreview({ post, onUpdatePost }) {
    const [comment, setComment] = useState('')

    const handleChange = (ev) => {
        const value = ev.target.value
        setComment(value)
    }

    const onLikeClick = () => {
        post.likes.push(
            {
                _id: "u105",
                fullname: "Bob",
                imgUrl: "http://some-img"
            }
        )

        onUpdatePost(post)

    }

    const onAddComment = (ev) => {
        ev.preventDefault()

        post.comments.push(
            {
                id: "c1001",
                by: {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "http://some-img"
                },
                txt: comment,
                likedBy: []
            }
        )
        setComment('')
        onUpdatePost(post)
    }

    return (
        <section className="post-preview">
            <div className="user-info">
                <div className="user-photo">
                    <img src={post.by.imgUrl} alt="" />
                </div>
                <div className="user-name-container">
                    <div className="user-name">
                        <a href="#">{post.by.fullname}</a>
                    </div>
                    {post.loc &&
                        <div className="post-loc">
                            {post.loc.name}
                        </div>
                    }
                </div>

                <div className="post-nav">
                    ...
                </div>
            </div>
            <div className="post-img-container">
                <img src={post.imgUrl} alt="" />
            </div>
            <div className="post-action-container">
                <button className="post-action-btn" onClick={onLikeClick}>L</button>
                <button className="post-action-btn">C</button>
                <button className="post-action-btn">S</button>
                <button className="post-action-btn">S</button>
            </div>
            <div className="post-info-container">
                <div className="post-likes">
                    {post.likes.length} likes
                </div>
                <div className="post-txt-container">
                    <span className="user-name">
                        <a href="#">{post.by.fullname}</a>
                    </span>
                    <span className="post-txt">
                        {post.txt}
                    </span>
                </div>
                <div className="post-comments">
                    View all <span>{post.comments.length}</span> comments
                </div>
                <div className="post-created-time">
                    {post.createdAt}
                </div>
            </div>
            <div className="add-comment-container">
                <div className="emoji-btn">
                    emoji
                </div>
                <form className="comment-form" onSubmit={onAddComment}>
                    <input
                        type="text"
                        value={comment}
                        placeholder="Add a comment..."
                        onChange={handleChange}
                    />
                    <button>Post</button>
                </form>
            </div>
        </section>
    )
}


// txt: "Best trip ever",
// imgUrl: "http://some-img",
// by: {
//     _id: "u101",
//     fullname: "Ulash Ulashi",
//     imgUrl: "http://some-img"
// },
// loc: {
//     lat: 11.11,
//     lng: 22.22,
//     name: "Tel Aviv"
// },
// comments: [
//     {
//         id: "c1001",
//         by: {
//             _id: "u105",
//             fullname: "Bob",
//             imgUrl: "http://some-img"
//         },
//         txt: "good one!",
//         likedBy: [
//             {
//                 _id: "u105",
//                 fullname: "Bob",
//                 imgUrl: "http://some-img"
//             }
//         ]
//     }
// ]