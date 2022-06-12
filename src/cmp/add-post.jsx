import { useEffect, useState } from "react"
import { utilService } from "../services/util.service.js"


export function AddPost({ user, onAddPostToggle }) {

    const [post, setPost] = useState(utilService.getEmptyPost(user))
    const [imgUrl, setImgUrl] = useState('')

    const handleChange = (event) => {
        setImgUrl(URL.createObjectURL(event.target.files[0]) ) 
    }




    return (

        <section className="add-post-container">
            <button onClick={onAddPostToggle}>x</button>
            <input type="file" accept="image/*" name="url" onChange={handleChange}/>
            <img src={imgUrl} alt="" className="img"/>
        </section>
    )
}