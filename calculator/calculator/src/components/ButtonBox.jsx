import './ButtonBox.css'
import PropTypes from 'prop-types'

function ButtonBox (props){
const children = props.children
    return(
        <>
        <div className='buttonBox'>{children}</div>
        </>
    )
}
ButtonBox.propTypes = {
    children: PropTypes.string,
}

export default ButtonBox