import React, { useState } from 'react';
import { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import products from '../../assets/data/products'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'
import ProductList from '../../components/UI/ProductList'
import '../../styles/shop.scss'
const Shop = () => {
  const [productsData, setProductsData] = useState(products)


  const handleSearch = (e) =>{
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setProductsData(searchedProducts)
  }
  return (
    <Helmet title="Shop">
      <CommonSection  title={"Products"} />
      <section>
        <Container>
          <Row>
            <Col lg='3'md='6'>
              <div className="filter__widget">
                <select>
                  <option>Filter by Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md="12">
              <div className="search__box">
                <input type="text" placeholder='search...' onChange={handleSearch} />
                <span><i className='ri-search-line'></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
          {


            productsData.length === 0 ? 
            (
              <h1 className='text-center'>No product found</h1>
            ) :
            (
              <ProductList data={productsData} />
            )
          }
          </Row>
         
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop