import React from 'react'
import Header from './component/header'
import Hero from './component/hero'
import Service from './component/service'
import Why from './component/why-us'
import Footer from './component/footer'
function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <main id="main">
        <Service></Service>
        <Why></Why>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
