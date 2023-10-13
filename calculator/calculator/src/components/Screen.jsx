import "./Screen.css"
import PropTypes from 'prop-types'

function Screen (props){
    const value = props.value
    return(
        <>
        <div className="screen">{value}</div>
        </>
    )
}

Screen.propTypes = {
    value: PropTypes.number,
}
export default Screen