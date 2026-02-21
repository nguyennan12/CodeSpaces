import Problems from '~/pages/Problems/_id'
import { Route, Routes, Navigate } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import NotFound from './pages/404/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to="/problems/problem-slug" replace={true} />
      } />

      <Route path='/problems/:problem-slug' element={<Problems />} />

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
