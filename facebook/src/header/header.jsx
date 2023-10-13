import './header.css'
import PropTypes from 'prop-types'
import Searchbar from './searchbar/searchbar'
import Contenticon from './contenticon/contenticon'

function Header (props){
    const tabs = props.Tabs
    const profileInfo = props.content
    function selectView(event) {
        props.setSelectedView(event.target.value) 
    }
    return(
        <>
        <div className='header'>
            <div className='tabs-group'>
                {tabs.map((value,index) =>{
                    return(
                        <div key={index} onClick={selectView} value={index} className= {index== props.selectedView ? "selected-view" : ""}>
                        {value.text}
                        </div>
                    )
                })
                }

            </div>
            <div className='search'>
                <Searchbar/>
            </div>
            <div className='content-info'>
                <Contenticon profileInfo={profileInfo}/>
            </div>
        </div>
        </>
    )
}

Header.propTypes = {
    profileInfo: PropTypes.string.isRequired,
    tabs: PropTypes.object.isRequired,
    Tabs: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    setSelectedView: PropTypes.string.isRequired,
    selectedView: PropTypes.string.isRequired,
}

export default Header
