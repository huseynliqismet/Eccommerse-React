import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import products from '../../assets/data/products'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'
import { motion } from 'framer-motion'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import ProductList from '../../components/UI/ProductList'
import '../../styles/product-details.scss'
const ProductDetails = () => {

  const [tab, setTab] = useState("desc")
  const [rating, setRating] = useState(null)
  const reviewUser = useRef("");
  const reviewMsg = useRef("")
  const dispatch = useDispatch()

  const {id} = useParams()
  const product = products.find(item => item.id === id)
  const {
   imgUrl,
   productName,
   price, 
   avgRating, 
   reviews, 
   description, 
   shortDesc,
   category
  } = product
  const relatedProducts = products.filter((item) => item.category === category)
  const addToCart = () =>{
    dispatch(cartActions.addItem({
        id,
        image:imgUrl,
        productName,
        price
    }))
    toast.success("Added to card")
  }
  return (
    
    <Helmet title={"Detail"}>
    <CommonSection title={productName} />
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="6">
            <img className="img-fluid" src={imgUrl} alt="" />
          </Col>
          <Col lg="6">
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center  gap-5 mb-3">
                <div>
                  <span onClick={() => setRating(1)}>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => setRating(2)}>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => setRating(3)}>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => setRating(4)}>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  <span onClick={() => setRating(5)}>
                    <i className="ri-star-half-s-line"></i>
                  </span>
                </div>
                <p className='m-0'>
                  (<span>{avgRating}</span>.ratings)
                </p>
              </div>
              <div className="d-flex align-items-center gap-6">
                <span className="product__price">${price}</span>
                <span> Category: {category.toUpperCase()}</span>
              </div>

              <p className="mt-3">{shortDesc}</p>
              <motion.button whileTap={{ scale: 1.1 }} className="buy__btn mt-4 btn btn-primary" onClick={addToCart}>
                Add To Cart
              </motion.button>
            </div>
          </Col>
          <Col lg="12">
            <h2 className="related__title">Oxsar mehsullar</h2>
          </Col>
          <ProductList data={relatedProducts}/>

        </Row>
      </Container>
    </section>

  </Helmet>
  )
}

export default ProductDetails