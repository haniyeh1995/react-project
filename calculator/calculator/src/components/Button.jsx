import './Button.css'
import PropTypes from 'prop-types'

const Button = ({ className, value, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );
  };
  
  Button.propTypes = {
    className: PropTypes.className,
    value:PropTypes. number,
    onClick: PropTypes.func,
}

export default Button;


