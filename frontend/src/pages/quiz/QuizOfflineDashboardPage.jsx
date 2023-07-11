import React from 'react'
import quizImg from '../../assets/img/quizImage.jpg'

const QuizOfflineDashboardPage = () => {
    return (
        <>
            <div className='container bg-white rounded-xl mt-12 h-[650px] flex flex-col items-center '>
                <h1>Quiz Offline</h1>
                <figure className='mt-8'><img src={quizImg} alt="quiz" className='rounded-xl h-96' /></figure>
                <div className='mt-12 flex gap-8'>

                </div>
            </div>
        </>
    )
}

export default QuizOfflineDashboardPage