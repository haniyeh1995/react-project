import PropTypes from 'prop-types'

function PopularProductTitle(props) {
    const label = props.label
    const title = props.title
    return (
        <>
            <div className="home-section-title">
                <label className="orange-title">{label}</label>
                <h4>{title}</h4>
            </div>

        </>
    );
}

PopularProductTitle.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default PopularProductTitle