import PropTypes from 'prop-types'
function OurFeature (props){
    const feature = props.feature
    return(
        <>
        <div className= {feature.special ? "feature-container special-feature" :"feature-container"}>
            <img src={feature.img} alt="" />
            <h4>{feature.title}</h4>
            <h6>{feature.description}</h6>
        </div>
        </>
    )
}

OurFeature.propTypes ={
    feature: PropTypes.object.isRequired,
}

export default OurFeature