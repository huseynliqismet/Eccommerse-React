import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../../components/Helmet/Helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/images/hero-img.png'
import '../../styles/home.scss'
import Services from '../../services/Services'
import products from "../../assets/data/products"
import ProductList from '../../components/UI/ProductList'
import { useTranslation } from 'react-i18next'
import counterImg from "../../assets/images/counter-timer-img.png"
import Clock from '../../components/UI/Clock'
const Home = () => {
  const { t } = useTranslation(["home"])
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {

    const filteredTrendingProducts = products.filter((item) => item.category === "chair");
    const filteredbestSalesProducts = products.filter((item) => item.category === "sofa");
    const filteredMobileProducts = products.filter((item) => item.category === "mobile");
    const filteredWirelessProducts = products.filter((item) => item.category === "wireless");
    const filteredPopularProducts = products.filter((item) => item.category === "watch");
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredbestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
   
    <Helmet title={"Home Page"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">{t('trending-Home')} {year}</p>
                <h2>{t('title')}</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt porro optio, pariatur quisquam magnam aliquid sed
                  quod deleniti quia at?
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link style={{ textDecoration: "none" }} to={"/shop"}>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" sm="12" md="6">
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>{t("Trending Products")}</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <ProductList />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="text-center mb-5">{t("Best Sales")}</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">{t("Limited Offers")}</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
             
              <motion.button
                whileTap={{ scale: 1.2 }}
                // whileHover={{color:"red"}}
                className="buy__btn store__btn"
                
              >
                <Link to="/shop" style={{textDecoration: "none"}}>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">{t("New Arrivals")}</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">{t("Popular in Category")}</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default Home