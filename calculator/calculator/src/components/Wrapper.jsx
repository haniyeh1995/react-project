import './Wrapper.css'
import PropTypes from 'prop-types'

function Wrapper(props){
    const childern = props.childern
    return(
        <>
        <div className='wrapper'>{childern}</div>
        </>
    )

}

Wrapper.propTypes = {
    childern: PropTypes.string,
}

export default Wrapper