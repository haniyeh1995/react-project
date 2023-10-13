import bikeDelivery from '../Public/bike-delivery.jfif'
import playButton from '../Public/Play Button.png'
import vector from '../Public/Vector.png'
import polygon from '../Public/Polygon.png'
import burger from '../Public/burger.png'
import combo from '../Public/combo.png'
import pizza from '../Public/pizza.png'
import cake from '../Public/cake.png'
import FeaturedProduct from './FeaturedProduct'
import ellipse from '../Public/Ellipse 10.png'
import Information from './Information'
import productimg1 from '../Public/productimg1.jfif'
import productimg2 from '../Public/lazania.jfif'
import productimg3 from '../Public/green.jfif'
import productimg4 from '../Public/productimg4.jfif'
import productimg5 from '../Public/barbary.jfif'
import productimg6 from '../Public/productimg6.jfif'
import PopularProductTitle from './PopularProductTitle'
import Product from './Product'
import Untitled from '../Public/Untitled.png'
import { Link } from 'react-router-dom';
import Ellipse from '../Public/Ellipse.jpg'
import OurFeature from './OurFeature'
import commentorimg from '../Public/commentorimg.jfif'
import commentimg from '../Public/commentimg.png'
import Testimonials from './Testimonials'
import Subscribe from './Subscribe'


function Home() {
    const featuredProducts = [
        { img: burger, title: "Burger", description: "Mushroom Sauce", price: "$5.15" },
        { img: combo, title: "Food Combo", description: "Mushroom Sauce", price: "$9.15" },
        { img: pizza, title: "Pizza", description: "Mushroom Sauce", price: "$6.15" },
        { img: cake, title: "Cake", description: "Mushroom Sauce", price: "$5.15" },
    ];

    const cardInfo = [
        { img: ellipse, title: "Today 10:00am - 10:00pm", description: "Working time" },
        { img: ellipse, title: "Washington, D.C., DC,USA", description: "Our Location" },
        { img: ellipse, title: "+0123 456 7891", description: "Phone Number" },
    ];

    const popularProducts = [
        { img: productimg1, title: "Gyro Sandwhic", rate: "4.9", price: "$15.00" },
        { img: productimg2, title: "Enchilade", rate: "5.0", price: "$25.50" },
        { img: productimg3, title: "Green Beans", rate: "4.9", price: "$12.00" },
        { img: productimg4, title: "Pizza", rate: "5.0", price: "18.50" },
        { img: productimg5, title: "Chicken Pot Pie", rate: "4.9", price: "25.00" },
        { img: productimg6, title: "Green Salad", rate: "4.9", price: "15.00" },
    ];

    const service = [
        { img: Ellipse, title: 'Qualityfull Food', description: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.' },
        { img: Ellipse, title: 'Healthy Food', description: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.' },
        { img: Ellipse, title: 'Fast Delivery', description: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.' },
    ];

    const comments = [
        {
            img: commentimg,
            profile: { img: commentorimg, name: "Willians Jhone", jobTitle: "CEO & Co-Founder" },
            content: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”"
        },
    ];



    return (
        <>
            <div className="padding home-container">
                <div className="order-now">
                    <div className="order-now-main">
                        <div className="bike-delivery">
                            <span>Bike Delivery</span>
                            <img src={bikeDelivery} alt="" />
                        </div>
                        <h1>
                            The Fastest
                            Delivery <br />In
                            <span> Your City</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
                        </p>
                        <div className="actions">
                            <button>
                                Order Now
                            </button>
                            <img src={playButton} alt='' />
                            <span>Order Process</span>
                        </div>
                    </div>
                    <div className="vectors">
                        <div className="vector">
                            <img src={vector} alt="" />
                        </div>
                        <img src={polygon} alt="" />
                    </div>
                    <div className="featured-products">
                        {featuredProducts.map((product, index) => {
                            return (
                                <FeaturedProduct key={index} product={product} />
                            )
                        })}
                        <div className="featured-products-background"></div>
                    </div>
                </div>

                <div className="main-info">
                    {cardInfo.map((cardInfo, index) => {
                        return (
                            <Information key={index} cardInfo={cardInfo} />
                        )
                    }
                    )}
                </div>
                <div className="popular-products">
                    <PopularProductTitle label="Product" title={'Most Popular Items'} />
                    <div className="grid-list">
                        {popularProducts.map((product, index) => {
                            return (
                                <Product key={index} product={product} />
                            )
                        })}
                    </div>
                    <Link to="/menu" className="see-more">
                        <span>See More Product</span>
                        <img src={Untitled} alt="" />
                    </Link>
                </div>
                <div className='why-us'>
                    <PopularProductTitle lable="Services" title={'Why Choose Our Favorite Food'} />
                    <div className='grid-list'>
                        {service.map((feature, index) => {
                            index == 1 ? feature.special = true : feature.special = false
                            return (
                                <OurFeature key={index} feature={feature} />
                            )
                        })}
                    </div>
                </div>
                <div className="comments">
                    <PopularProductTitle label="Testimonials" title={'Our Happy Client Says'} />
                    <div className="comments">
                        {comments.map(
                            (comment, index) => {
                                return (
                                    <Testimonials key={index} comment={comment} />
                                )
                            }
                        )}
                    </div>
                </div>
                <div className='subscribe'>
                    <Subscribe />
                </div>
            </div>
        </>
    );
}

export default Home