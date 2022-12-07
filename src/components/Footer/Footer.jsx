import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import logoFooter from '../../assets/images/eco-logo.png'
import './footer.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation(["footer"])

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12" sm="12" md="4" lg="3" xl="3"  >
            <div className="block">
              <div className="block__head">
                <Link to="/">
                  <div className="logo__footer">
                    <img src={logoFooter} alt="" />
                    <div>
                      <h1>MULTIMART</h1>
                    </div>
                  </div>
                </Link>
                <p className='desc'>
                  Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.
                </p>
              </div>
              <div className="block__share">
                <ul className="list-unstyled">
                  <li><Link className="facebook" href="#"><i className="ri-facebook-fill"></i></Link>
                  </li>
                  <li><Link className="twitter" href="#"><i className="ri-twitter-fill"></i></Link></li>
                  <li><Link className="pinterest" href="#"><i className="ri-pinterest-fill"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="2" lg="3" xl="2" className='offset-lg-0 offset-xl-1'   >
            <div className="block">
              <div className="block__head">
                <h3>{t("company")}</h3>
              </div>
              <div className="menu">
                <ul className="list-unstyled">
                  <li><Link to="/">{t("home")}</Link></li>
                  <li><Link to="/">{t("about")}</Link></li>
                  <li><Link to="/">{t("cart")}</Link></li>
                  <li><Link to="/">Checkout</Link></li>
                  <li><Link to="/">{t("shop")}</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="3" lg="2" xl="2" className='offset-md-1 offset-lg-0 '  >
            <div className="block">
              <div className="block__head">
                <h3>{t("platform")}</h3>
              </div>
              <div className="menu">
                <ul className="list-unstyled">
                  <li><Link to="/">{t("home")}</Link></li>
                  <li><Link to="/">{t("about")}</Link></li>
                  <li><Link to="/">{t("cart")}</Link></li>
                  <li><Link to="/">{t("checkout")}</Link></li>
                  <li><Link to="/">{t("shop")}</Link></li>

                </ul>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="5" lg="4" xl="4"   >
            <div className="block form__side">
              <div className="block-header">
                <h3>{t("subscribe")}</h3>
              </div>
              <div className="form-menu">
                <form action="#">
                  <div className="email-input">
                    <input type="text" placeholder="Your email adress"/>
                      <button type="submit">
                        <i className="ri-arrow-right-line"></i>
                        <i className="ri-arrow-right-line"></i>
                      </button>
                  </div>
                </form>
                <p>{t("news")}</p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer