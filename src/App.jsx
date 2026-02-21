import Problems from '~/pages/Problems/_id'
import { Route, Routes, Navigate } from 'react-router-dom'
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to="/problems/problem-slug" replace={true} />
      } />

      <Route path='/problems/:problem-slug' element={<Problems />} />

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='*' element />
    </Routes>
  )
}

export default App
