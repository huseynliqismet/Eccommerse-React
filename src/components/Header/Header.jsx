import { motion } from 'framer-motion'
import React, { useEffect, useRef, } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import './header.scss'
import userIcon from "../../assets/images/user-icon.png"
import { useTranslation } from 'react-i18next'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useSelector } from 'react-redux'
const nav_links = [
  {
    path: "home",
    display: "home"
  },
  {
    path: "shop",
    display: "shop"
  },
  {
    path: "cart",
    display: "cart"
  }
]
const Header = () => {
  const { t, i18n } = useTranslation(["header"])
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu")

  const totalQuantity = useSelector((state) => state.cart.totalQuantity)


  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  };

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 150
      ) {
        headerRef.current.classList.add("sticky__header")
      }
      else {
        headerRef.current.classList.remove("sticky__header")
      }
    })

  };
  const language = [
    {
      lan: "en"
    },
    {
      lan: "az"
    }
  ]

  useEffect(() => {
    stickyHeader();

    return () => window.removeEventListener("scroll", stickyHeader)

  }, [])
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <Link to={"/"}>
              <div className="logo">
                <img src={logo} alt="" />
                <div>
                  <h1>MULTIMART</h1>
                </div>
              </div>
            </Link>
            <div className="navigation" ref={menuRef} >
              <div className="overlay" onClick={menuToggle}></div>
              <ul className="menu" >
                {
                  nav_links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>
                        {t(`${item.display}`)}

                      </NavLink>
                    </li>
                  ))
                }

              </ul>
            </div>
            <div className="nav__icons">
              <Box className='box' sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel style={{ color: "#001727" }} id="demo-simple-select-label">Language</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    className='select'
                    onChange={onChangeLanguage}
                  >
                    {
                      language?.map((item, index) => (
                        <MenuItem key={index} value={item.lan}>{item.lan.toUpperCase()}</MenuItem>
                      ))
                    }

                  </Select>
                </FormControl>
              </Box>
              {/* <select className='nav-link border-0 ml-1 mr-2'
              aria-label='Default select example'
                onChange={onChangeLanguage}           
              >
                <option value="en"  className='lang'>Eng</option>
                <option value="az"  className='lang'>Aze</option>
              </select> */}
              <span className="fav__icon">
                <i className='ri-heart-fill'></i>
                <span className='badge'>1</span>

              </span>

              <span className="cart__icon">
                <Link to="cart">
                  <i className="ri-shopping-basket-2-line"></i>
                  <span className='badge'>{totalQuantity}</span>
                </Link>

              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} />
              </span>
              <div className="mobile__menu ">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header