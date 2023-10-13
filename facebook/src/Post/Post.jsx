import './Post.css'
import PostInput from "./PostInput"
import ProfileInfo from '../header/contenticon/profileInfo.jsx'
import PropTypes from 'prop-types'


function Post(prop) {
    const post = prop.post
    const profileInfo ={
        nickname: post.Creator.nickname,
        username: post.createdAt,
        profileimg: post.Creator.profileImg
    }
    const profileimg = prop.profileimg
  return (
    <>
            <div className="post-container">
                <div className='post-content'>
                    <div className='creator-profile'>
                        <ProfileInfo profileInfo={profileInfo}/>
                    </div>
                    <p>
                    {post.textContent}
                    </p>
                    {post.img ? <img src={post.img} alt="" />: "" }
                </div>

                <div className="createpost-actions">
                    <div className="createpost-attaches"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#C3C5CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {post.likes} Likes
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 18.4297H11L15.45 21.3897C16.11 21.8297 17 21.3597 17 20.5597V18.4297C20 18.4297 22 16.4297 22 13.4297V7.42969C22 4.42969 20 2.42969 17 2.42969H7C4 2.42969 2 4.42969 2 7.42969V13.4297C2 16.4297 4 18.4297 7 18.4297Z" stroke="#C3C5CD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {post.commentsCount} Comments
                    </div>
                    <button className='share'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.40005 6.31997L15.8901 3.48997C19.7001 2.21997 21.7701 4.29997 20.5101 8.10997L17.6801 16.6C15.7801 22.31 12.6601 22.31 10.7601 16.6L9.92005 14.08L7.40005 13.24C1.69005 11.34 1.69005 8.22997 7.40005 6.31997Z" stroke="#C3C5CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.11 13.65L13.69 10.06" stroke="#C3C5CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Share
                    </button>
                </div>
                <div >
                    <PostInput profileimg={profileimg} placeholder="Write your comment" />
                </div>

            </div>

    </>
  )
}

Post.propTypes = {
    post: PropTypes.string.isRequired,
    profileimg: PropTypes.string.isRequired,
}

export default Post