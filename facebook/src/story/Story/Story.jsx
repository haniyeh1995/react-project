import './showstory.css'
import PropTypes from 'prop-types'

function Story(props) {
    function showStory(event) {
        const storyId = event.currentTarget.getAttribute('storyId');
        props.onClick(storyId)
    }
    const story= props.story

    return (
        <>
        <div className="story">
            <img src={props.profileURL} storyId={props.storyID} onClick={showStory} className= {props.seen == false ? "seen-story" : ""} />
            <p>{props.username}</p>
        </div>
        </>
    )
}
Story.propTypes = {
    story: PropTypes.string.isRequired,
    storyID:PropTypes.string.isRequired,
    profileURL: PropTypes.string.isRequired,
    seen: PropTypes.func.isRequired,
    onClick:PropTypes.func.isRequired,
    username:PropTypes.string.isRequired,
}
export default Story
