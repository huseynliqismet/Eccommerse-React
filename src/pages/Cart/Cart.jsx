import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'
import { cartActions } from '../../redux/slices/cartSlice'
import { motion } from 'framer-motion'
import '../../styles/cart.scss'
import { useTranslation } from 'react-i18next'
const Cart = () => {
  const { t } = useTranslation(["cart_shopping"])
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const deleteAllProduct = () =>{
      dispatch(cartActions.deleteAllProduct())
  }
  return (
   
    <Helmet title="Cart">
      <CommonSection title={"Shopping Cart"} />
      <section>
        <Container>
          
          <Row>
            <Col lg="9">
              {
                cartItems.length === 0?
                (
                  <h1 className='text-center pt-5'>{t("basket")}</h1>
                ):
                (
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>{t("image")}</th>
                        <th>{t("title")}</th>
                        <th>{t("price")}</th>
                        <th>{t("quantity")}</th>
                        <th>{t("delete")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          cartItems?.map((item, index) =>(
                            <Tr item={item} key={index}/>
                          ))
                      }
                    </tbody>
                    <button className='clear__btn' onClick={deleteAllProduct}>
                       Clear All
                    </button>

                  </table>
                )
              }
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">{t("total")}</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
                <p className="fs-6 mt-2">
                  {t("tax")}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
const Tr = ({item}) =>{
  const dispatch = useDispatch();
  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }
 
  return( 
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td><p>{item.productName}</p></td>
      <td><p>$ {item.price}</p></td>
      <td><p>{item.quantity}</p></td>
      <td>
        <p> 
        <motion.i
          whileTap={{scale: 1.3}}
          className="ri-delete-bin-7-fill"
          onClick={deleteProduct}
          >
        </motion.i>
        </p>
          
      </td>
    </tr>
  )    
}

export default Cart