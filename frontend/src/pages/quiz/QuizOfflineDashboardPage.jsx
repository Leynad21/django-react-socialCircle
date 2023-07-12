import React, { useState, useEffect } from 'react'
import quizImg from '../../assets/img/quizImage.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/utils/Spinner'
import { reset, getQuizzes, getQuiz } from '../../features/quiz/quizSlice'
import { toast } from 'react-toastify'

const QuizOfflineDashboardPage = () => {

    const [quizzesLocal, setQuizzesLocal] = useState([])


    const [selectedOption, setSelectedOption] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSelect = (event) => {
        const selectedSlug = event.target.value;
        if (selectedSlug === "") {
            toast.error("Cannot select empty")
        } else {
            const selectedQuiz = quizzesLocal.find((quiz) => quiz.slug === selectedSlug);
            setSelectedOption(selectedQuiz);
            console.log(selectedQuiz);
        }
    }

    const { quizzes, isLoading, isError, isSuccess, message } = useSelector((state) => state.quiz)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getQuizzes())
        setQuizzesLocal(quizzes)
        console.log(quizzes);


        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }

    }, [isSuccess, setQuizzesLocal, dispatch, message])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(selectedOption);

        const quizData = selectedOption

        dispatch(getQuiz(quizData))
        navigate(`/quiz/${selectedOption.slug}`)
    }


    return (
        <>
            <div className='container bg-white rounded-xl mt-12 h-[650px] flex flex-col items-center '>
                <h1>Quiz Offline</h1>
                <figure className='mt-8'><img src={quizImg} alt="quiz" className='rounded-xl h-96' /></figure>
                <div className='mt-12 flex gap-8'>
                    <div>
                        <select value={selectedOption.slug} onChange={handleSelect} className="btn btn-primary">
                            <option value="">Select quiz</option>
                            {quizzesLocal.map((quiz) => {
                                return (
                                    <option key={quiz.id} value={quiz.slug}>{quiz.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-active btn-secondary" onClick={handleSubmit}>Start</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizOfflineDashboardPage