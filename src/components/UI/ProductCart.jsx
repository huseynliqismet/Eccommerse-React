import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import '../../styles/product-cart.scss'
import { useDispatch } from 'react-redux'
import {cartActions} from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify'
const ProductCart = ({item, index}) => {
  const dispatch = useDispatch()
  const addToCart = _ =>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl
    }))
    toast.success("Added to cart")
  }
  return (
    <Col lg="3" md="4" className="mb-2" key={index}>
    <div className="product__item">
      <Link style={{textDecoration: "none", color: "#000"}} to={`/shop/${item.id}`}>
        <div className="product__img">
          <motion.img className="img-fluid" whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info p-2">
          <h3 style={{fontSize: "20px"}} className="product__name">{item.productName}</h3>
          <span>{item.category}</span>
        </div>
      </Link>
      <div className="product__card-bottom d-flex align-items-center justify-content-between">
        <span className="price"> ${item.price}</span>
        <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
          <i style={{backgroundColor: "#000", color: "#fff", borderRadius: "50%", padding: "10px", fontSize: "20px"}} className="ri-add-line"></i>
        </motion.span>
      </div>
    </div>
  </Col>
  //    <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
  //    {item ? (
  //      <img
  //        style={{ width: 210, height: 118 }}
  //        alt={item.title}
  //        src={item.src}
  //      />
  //    ) : (
  //      <Skeleton variant="rectangular" width={210} height={118} />
  //    )}

  //    {item ? (
  //      <Box sx={{ pr: 2 }}>
  //        <Typography gutterBottom variant="body2">
  //          {item.title}
  //        </Typography>
  //        <Typography display="block" variant="caption" color="text.secondary">
  //          {item.channel}
  //        </Typography>
  //        <Typography variant="caption" color="text.secondary">
  //          {`${item.views} • ${item.createdAt}`}
  //        </Typography>
  //      </Box>
  //    ) : (
  //      <Box sx={{ pt: 0.5 }}>
  //        <Skeleton />
  //        <Skeleton width="60%" />
  //      </Box>
  //    )}
  //  </Box>
  )
}

export default ProductCart