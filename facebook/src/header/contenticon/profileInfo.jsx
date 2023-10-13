import './contenticon.css'
import PropTypes from 'prop-types'

function ProfileInfo(props){
    const profileInfo = props.profileInfo
   
return(
    <>
    <img className='profile-img' src={profileInfo.profileimg} alt="" />
            <div className="profile-info">
                <h5 className="nickname">
                    {profileInfo.nickname}
                </h5>
                <p className='username'>
                    {profileInfo.username}
                </p>
            </div>
    </>
)
}
ProfileInfo.propTypes = {
    profileInfo: PropTypes.string.isRequired,
}
export default ProfileInfo