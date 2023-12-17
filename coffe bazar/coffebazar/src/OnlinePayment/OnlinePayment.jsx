import "./OnlinePayment.css"
import vendorLogo from "./Pub/my-mci.jpg"

const vendors = [
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },
    {
        vendorUrl: vendorLogo,
        vendorName: "همراه اول",
    },

];

const Onlinepayment = () => {


    return (
        <div >
            <div className="onlinePayment-header">
                <p>بسته پرداخت انلاین </p>
                <div className="more-detail">
                    <p>بیشتر</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>


            </div>
            <div className="onlinePayment-content">
                {vendors.map((value, index) => {
                    return (
                        <div className="vendor-detail" key={index}>
                            <img className="vendor-img" src={value.vendorUrl} alt="" />
                            {value.vendorName}
                        </div>
                    )
                })
                }
            </div>


        </div>
    )

}
export default Onlinepayment