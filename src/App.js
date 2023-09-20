import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomePage } from './pages/home-page/home-page'
import { Header } from './components/header'
import { store } from './redux'
import { SeedlingPage } from './pages/seedling-page'
import { OrderPage } from './pages/order-page'
import { Footer } from './components/footer'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/app/:title' element={<SeedlingPage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
