import "./PracticalProgramm.css"
import practicalLogo from "../OnlinePayment/Pub/divar.png"

const practical = [
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
    {
        practicalUrl: practicalLogo,
        practicalName: " دیوار"

    },
]

const PracticalProgramm = () => {
 
    return (
        <div>
            <div className="practical-header">
                <p>برنامه های کاربردی</p>
                <div className="more-practical-detail">
                    <p>بیشتر</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
            </div>
            <div className="practical-content">
            {practical.map( (value,index) =>{
                return(
                    <div className="practical-detail" key={index} >
                        <img className="practical-img" src={value.practicalUrl} alt="" />
                        {value.practicalName}
                    </div>


                )
            })
            }
            </div>
        </div>
    )
}
export default PracticalProgramm
