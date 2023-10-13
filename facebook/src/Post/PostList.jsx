import './Post.css'
import Post from "./Post.jsx"
// import smithImg from "./public/1.png"

function PostList(prop) {
    const profileimg = prop.profileimg
    const viewPosts = prop.viewPosts
  return (
    <>
        <div className='posts-container' >
        {viewPosts.map((post)=>{
           return <Post key={post.id} post={post} profileimg={profileimg}/>
        })}
            
        </div>

    </>
  )
}

export default PostList