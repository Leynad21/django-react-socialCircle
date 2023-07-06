import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import NavBar from './components/navigation/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ActivatePage from './pages/ActivatePage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ResetPasswordConfirmPage from './pages/ResetPasswordConfirmPage'
import NotFoundPage from "./pages/notFoundPage"

function App() {

  return (
    <>
      <Router>
        <div className='min-h-screen flex flex-col items-center'>

          <NavBar className="" />
          <div className="container">
            <Routes  >
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<RegisterPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirmPage />} />
              <Route path="/activate/:uid/:token" element={<ActivatePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

        </div>
      </Router>
      <ToastContainer />

    </>
  )
}

export default App
