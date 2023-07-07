import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { FaSignInAlt } from 'react-icons/fa'

const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    return (
        <nav className=' flex justify-between bg-blue-600 text-xl px-8 py-4 text-white w-full'>
            <div>
                <NavLink to="/" className=' ease-in duration-200 hover:text-blue-200'> Home</NavLink>
            </div>
            <div className='flex gap-8'>
                {user ?
                    <>
                        <NavLink to="/dashboard" className=' hover:text-blue-200 ease-in duration-200'> Dashboard </NavLink>
                        <NavLink to="/my-profile" className=' hover:text-blue-200 ease-in duration-200'> My profile </NavLink>
                        <button className='btn btn-sm' onClick={handleLogout} ><FaSignInAlt className='mr-4' /> Logout</button>
                    </>
                    :
                    <>
                        <NavLink to="/login" className=' hover:text-blue-200 ease-in duration-200'> Login</NavLink>
                        <NavLink to="/signup" className=' hover:text-blue-200 ease-in duration-200'> Sign Up</NavLink>
                    </>


                }
            </div>
        </nav >
    )
}

export default NavBar