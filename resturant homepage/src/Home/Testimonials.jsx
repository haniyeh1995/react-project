import PropTypes from 'prop-types'

function Testimonials(props) {
    const comment = props.comment
    return (
        <>
            <div className="comment-container">
                <div className="comment-wrapper">
                    <div className="profile-wrapper">
                        <div className="profile-img" style={{ backgroundImage: `url(${comment.profile.img})` }}></div>
                        <div className="profile-info">
                            <h5>{comment.profile.name}</h5>
                            <p>{comment.profile.jobTitle}</p>
                        </div>
                    </div>
                    <p className="comment">
                        {comment.content}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                        <g filter="url(#filter0_d_0_157)">
                            <circle cx="46" cy="46" r="21" fill="#F48E28" />
                        </g>
                        <path d="M39.5834 46H52.4167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46 39.5834L52.4167 46L46 52.4167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_d_0_157" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.649 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_157" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_157" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                        <g filter="url(#filter0_d_0_156)">
                            <circle cx="21" cy="21" r="21" transform="matrix(-1 0 0 1 67 25)" fill="#F48E28" />
                        </g>
                        <path d="M52.4167 46H39.5833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46 39.5834L39.5833 46L46 52.4167" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <filter id="filter0_d_0_156" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.5125 0 0 0 0 0.649 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_156" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_156" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="related-img" style={{ backgroundImage: `url(${comment.img})` }}></div>
            </div>
        </>
    )
}

Testimonials.propTypes = {
    comment: PropTypes.object.isRequired,
}
export default Testimonials