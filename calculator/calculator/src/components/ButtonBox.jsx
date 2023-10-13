import './ButtonBox.css'
import PropTypes from 'prop-types'

function ButtonBox (props){
const childern = props.childern
    return(
        <>
        <div className='buttonBox'>{childern}</div>
        </>
    )
}
ButtonBox.propTypes = {
    childern: PropTypes.string,
}

export default ButtonBox