import PropTypes from 'prop-types'
function Information(prop) {
    const cardInfo = prop.cardInfo

    return (
        <>
            <div className="info-card">
                <img src={cardInfo.img} alt="" />
                <h3>{cardInfo.title}</h3>
                <h5>{cardInfo.description}</h5>
            </div>
        </>
    )
}

Information.propTypes = {
    cardInfo: PropTypes.object.isRequired,
}


export default Information