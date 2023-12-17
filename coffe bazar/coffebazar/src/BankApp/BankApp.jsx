import './BankApp.css'
import bankLogo from '../OnlinePayment/Pub/bank-logo.png'

const bank =[
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    {
        bankUrl: bankLogo,
        bankName : "بانک ملت",
    },
    

]

const BankApp = () => {

    return (
        <div >
            <div className="bank-header">
                <p>برنامه‌های رسمی بانک‌های کشور</p>
                <div className="more-bank-detail">
                    <p>بیشتر</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
            </div>

            <div className="bank-content">
                {bank.map((value, index) => {
                    return (
                        <div className="bank-detail" key={index}>
                            <img className="vendor-bank-img" src={value.bankUrl} alt="" />
                            {value.bankName}
                        </div>
                    )
                })
                }
            </div>


        </div>
    )



}
export default BankApp