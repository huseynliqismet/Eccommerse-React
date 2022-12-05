import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './services.scss'
import serviceData from '../assets/data/serviceData'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const {t,i18n} = useTranslation(["cart"])

    return (
        <section className="services">
            <Container>
                <Row>
                    {
                        serviceData.map((item, index) => (
                            <Col lg="3" md="4" key={index}>
                                <motion className="service__item" style={{ backgroundColor: `${item.bg}` }}>
                                    <span>
                                        <i className={item.icon}></i>
                                    </span>
                                    <h3>{t(`${item.title}`)}</h3>
                                    <p>{item.subtitle}</p>
                                </motion>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Services