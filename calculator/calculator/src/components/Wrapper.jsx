import './Wrapper.css'
import PropTypes from 'prop-types'

function Wrapper(props){
    const children = props.children
    return(
        <>
        <div className='wrapper'>{children}</div>
        </>
    )

}

Wrapper.propTypes = {
    children: PropTypes.node,
}

export default Wrapper