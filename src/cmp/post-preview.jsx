import { useState } from "react"


export function PostPreview({ post, user, onUpdatePost }) {
    const [comment, setComment] = useState('')

    const handleChange = (ev) => {
        const value = ev.target.value
        setComment(value)
    }

    const onLikeClick = () => {
        post.likes.push(
            {
                _id: user._id,
                fullname: user.fullname,
                imgUrl: user.imgUrl
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
                    _id: user._id,
                    fullname: user.fullname,
                    imgUrl: user.imgUrl
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
                <i className="fas fa-thin fa-ellipsis"></i>
                </div>
            </div>
            <div className="post-img-container">
                <img src={post.imgUrl} alt="" />
            </div>
            <div className="post-action-container">
                <button className="post-action-btn" onClick={onLikeClick}><i className="far fa-thin fa-heart"></i></button>
                <button className="post-action-btn"><i className="far fa-light fa-comment"></i></button>
                <button className="post-action-btn"><i className="far fa-light fa-paper-plane"></i></button>
                <button className="post-action-btn"><i className="far fa-light fa-bookmark"></i></button>
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
                <i className="far fa-light fa-face-smile"></i>
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