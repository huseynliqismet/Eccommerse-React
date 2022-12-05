import Routers from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../i18n'
const Layout = () => {
  return (
    <>
   
        <Header />
        <Routers />
        <Footer />



    </>
  )
}

export default Layout