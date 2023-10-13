import Information from "../Home/Information";
import Product from "../Home/Product";
import productimg1 from '../Public/productimg1.jfif'
import productimg2 from '../Public/lazania.jfif'
import productimg3 from '../Public/green.jfif'
import productimg4 from '../Public/productimg4.jfif'
import productimg5 from '../Public/barbary.jfif'
import productimg6 from '../Public/productimg6.jfif'
import productimg7 from '../Public/productimg4.jfif'
import productimg8 from '../Public/barbary.jfif'
import productimg9 from '../Public/productimg6.jfif'
import componenet7 from "../Public/Untitled.png"
import Subscribe from "../Home/Subscribe";
import { useState } from "react";
import ellipse from '../Public/Ellipse 10.png'

function Menu(props) {
  const searchInput = props.searchInput
  const Products = [
    { img: productimg1, title: "Gyro Sandwhic", rate: "4.9", price: "$15.00" },
    { img: productimg2, title: "Enchilade", rate: "5.0", price: "$25.50" },
    { img: productimg3, title: "Green Beans", rate: "4.9", price: "$12.00" },
    { img: productimg4, title: "Pizza", rate: "5.0", price: "18.50" },
    { img: productimg5, title: "Chicken Pot Pie", rate: "4.9", price: "25.00" },
    { img: productimg6, title: "Green Salad", rate: "4.9", price: "15.00" },
    { img: productimg7, title: "Pizza", rate: "5.0", price: "18.50" },
    { img: productimg8, title: "Chicken Pot Pie", rate: "4.9", price: "25.00" },
    { img: productimg9, title: "Green Salad", rate: "4.9", price: "15.00" },
  ];

  const cardInfo = [
    { img: ellipse, title: "Today 10:00am - 10:00pm", description: "Working time" },
    { img: ellipse, title: "Washington, D.C., DC,USA", description: "Our Location" },
    { img: ellipse, title: "+0123 456 7891", description: "Phone Number" },
 ];

  const [productsCount, setProductsCount] = useState(9)

  const visibleProducts = Products.filter((product) => { return product.title.toLowerCase().includes(searchInput.toLowerCase()) }
  ).slice(0, productsCount)



  return (
    <>
      <div className="products-container padding">
        <div className="grid-list  padd-top-4vw ">
          {visibleProducts.map(
            (product, index) => {
              return (<Product key={index} product={product} />)
            }
          )}
        </div>
        <div >
          <a className="see-more" onClick={() => setProductsCount(productsCount + 9)}>
            <span>
              See More Product
            </span>
            <img src={componenet7} alt="" />
          </a>
        </div>
        <div className="Menu-info">
          {cardInfo.map((cardInfo, index) => {
            return (
              <Information key={index} cardInfo={cardInfo} />
            )
          }
          )}
        </div>
        <div className="subscribe">
          <Subscribe />
        </div>
      </div>
    </>
  );
}

export default Menu;