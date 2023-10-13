import './StoryList.css'
import Story from './Story/Story'
import AddStoryPic from './public/0.png'
import PropTypes from 'prop-types'


function StoryList(props) {
    const stories = props.stories

    return (
        <>
            <div className="stories-container">
                <ul >
                    <li >
                        <Story key={0} onClick={props.addStory} profileURL={AddStoryPic} username={"Add Story"} seen={true} />
                    </li>
                    {stories.map((value) => {
                        return (
                            <li >
                                <Story storyID={value.id} key={value.id} onClick={props.showStory} profileURL={value.profileURL} username={value.username} seen={value.seen} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
StoryList.propTypes = {
    stories: PropTypes.string.isRequired,
    addStory: PropTypes.string.isRequired,
}
export default StoryList

