import Problems from '~/pages/Problems/_id'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import NotFound from './pages/404/NotFound'
import AccountVerification from './pages/Auth/AccountVerification'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '~/redux/user/userSlice'

const ProtectedRoute = ({ user }) => {
  if (!user) return <Navigate to='/login' replace={true} />
  return <Outlet />
}

function App() {
  const currentUser = useSelector(selectCurrentUser)
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to="/problems/problem-slug" replace={true} />
      } />

      {/* cac route ben trong bat buoc phai dang nhap moi di qua route do */}
      <Route element={<ProtectedRoute user={currentUser} />}>
        <Route path='/problems/:problem-slug' element={<Problems />} />
      </Route>


      <Route path='/login' element={<Auth />} />

      <Route path='/register' element={<Auth />} />

      <Route path='/account/verification' element={<AccountVerification />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
