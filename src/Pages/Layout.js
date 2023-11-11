import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import StoreProvider from '../Store/StoreProvider'

const Layout = () => {
  const showNavBar = window.location.href.includes('dashboard')
  const showFooter = window.location.href.includes('dashboard')
  return (
    <>
      <StoreProvider>
        {!showNavBar && <Navbar />}

        <Outlet />

        {!showFooter && <Footer />}
      </StoreProvider>
    </>
  )
}

export default Layout
