import React from 'react'
import { Helmet } from 'react-helmet';
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Helmet>
          <title>{"Portfolio | Aunchisa Suwanchatree"}</title>
          <link rel="icon" type="image/png" href="favicon.ico" />
        </Helmet>
        <Header />
        <Nav/>
        <About />
        <Experience/>
        {/* <Contact /> */}
      

    </>
  )
}

export default App