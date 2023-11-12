import Footer from '../components/Footer'
import Header from '../components/Header'

/* eslint-disable react/prop-types */
const RootLayout = ({ children }) => {
  return (
    <main className="flex flex-col justify-between min-h-[100vh]">
      <Header />
      <div className="pt-[74px]">{children}</div>
      <Footer />
    </main>
  )
}

export default RootLayout
