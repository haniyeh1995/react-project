import './Button.css'
import PropTypes from 'prop-types'

function Button(props) {
    const value = props.btn
    const onClick = props.onClick
    return (
        <>
            <button onClick={onClick}>
                {value}
            </button>
        </>
    )

}
Button.propTypes = {
    btn: PropTypes.number,
    onClick: PropTypes.func,
}

export default Button