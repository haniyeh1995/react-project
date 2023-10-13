import { useState } from 'react'
import './Post.css'
import PostInput from "./PostInput"

function CreatePost(prop) {
  const  profileimg=prop.profileimg
  const [input , setInput] = useState("")

  function setNewInput(params) {
    setInput(params)
  }
  function createPost() {
    if(input.length > 0){
        prop.createPost({
            id : Math.random(500,1500),
            category:prop.selectedView,
            Creator :{
                nickname:"You",
                profileImg:profileimg
            },
            commentsCount: 0,
            likes: "0",
            createdAt:'00:00',
            textContent : input,
    
    
        })
        setInput("")

    }
    else{
        alert("First write something !")
    }
    


  }

  

  return (
    <>
        <div className="post-container">
            <div >
                <PostInput onChange={setNewInput} profileimg={profileimg} input={input} placeholder="What’s on your mind?"/>
            </div>
            <div className="createpost-actions">
                <div className="createpost-attaches">
                    
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5" stroke="#C3C5CD" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 2V5" stroke="#C3C5CD" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.5 9.08997H20.5" stroke="#C3C5CD" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#C3C5CD" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.6947 13.7H15.7037" stroke="#C3C5CD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.6947 16.7H15.7037" stroke="#C3C5CD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9955 13.7H12.0045" stroke="#C3C5CD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9955 16.7H12.0045" stroke="#C3C5CD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.29431 13.7H8.30329" stroke="#C3C5CD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.29431 16.7H8.30329" stroke="#C3C5CD" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#C3C5CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.09998 12V10.52C9.09998 8.60999 10.45 7.83999 12.1 8.78999L13.38 9.52999L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.09998 15.38 9.09998 13.48V12Z" stroke="#C3C5CD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#C3C5CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#C3C5CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.66998 18.95L7.59998 15.64C8.38998 15.11 9.52998 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="#C3C5CD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                </div>
                <button onClick={createPost} >
                    Create a post
                </button>
            </div>

        </div>

    </>
  )
}

export default CreatePost