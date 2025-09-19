import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
          <Outlet/>
        <Footer />
      </div>
    </>
  )
}
