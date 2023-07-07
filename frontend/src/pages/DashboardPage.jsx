import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import Spinner from '../components/utils/Spinner'
import { getProfile, reset } from '../features/profiles/profileSlice'

const DashboardPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { profile, isLoading, isError, isSuccess, message } = useSelector((state) => state.profile)

    useEffect(() => {

        dispatch(getProfile())

        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }

    }, [isSuccess, dispatch])


    return (
        <>
            <div className=' m-8'>
                <h1 className=' text-3xl mt-8'>Welcome, {profile.first_name}</h1>
                <div className="flex justify-center items-center">
                    <div className='mt-20 grid grid-cols-2 gap-48 '>
                        <h1>Cards Againsts Humanity</h1>
                        <h1>Quiz</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage