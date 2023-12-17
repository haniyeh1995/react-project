import './header.css'
import PropTypes from 'prop-types'
import Searchbar from './searchbar/searchbar'
import Contenticon from './contenticon/contenticon'
import profileimg from './pub/Cafe_Bazaar_logo_2020.jpg'
import { useState } from 'react'


function Header(props) {
    const tabs = props.Tabs
    const profileInfo = profileimg;
    const [selectedView, setSelectedView] = useState(0);

    const selectView = (i) => {
        setSelectedView(i)
    }
    return (
        <>
            <div className='header'>
                <img className='profile-img' src={profileInfo} alt="" />

                <div className='tabs-group'>
                    {tabs.map((value, index) => {
                        return (
                            <div key={index} onClick={() => selectView(index)} value={index} className={index == selectedView ? "selected-view" : ""}>
                                {value.text}
                            </div>
                        )
                    })
                    }

                </div>
                <div className='search'>
                    <Searchbar />
                </div>

                <div className='content-info'>
                    <Contenticon profileInfo={profileInfo} />
                </div>

            </div>
        </>
    )
}


Header.propTypes = {

    // tabs: PropTypes.object.isRequired,
    Tabs: PropTypes.object.isRequired,

}

export default Header
