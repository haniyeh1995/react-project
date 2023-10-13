import subsimg from "../public/subsimg.png"
function Subscribe() {
    return (
        <>
            <div className="subscribe-container">
                <div className="subs-img" style={{ backgroundImage: `url(${subsimg})` }}></div>
                <div className="subs-message">
                    <h5>Subcribe To Our Newsletter</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.
                    </p>
                    <div className="subs-form">
                        <input type="text" placeholder="Type your email..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe;