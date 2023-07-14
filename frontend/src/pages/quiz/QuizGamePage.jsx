import React from 'react'

const QuizGamePage = () => {
    return (
        <div>
            <div className="flex flex-col items-center ">
                <h1 className="text-4xl font-semibold mt-12">Create Quiz</h1>
                <p className="text-xl font-semibold text-gray-600 m-4 mb-8">
                    {quiz.title}
                </p>
                <QuizQuestion questionsArray={questionsArray} />

                {/* QUIZ FORM */}
                <div className=" bg-white w-5/6 max-w-[800px] min-h-[450px] rounded-lg shadow-sm">
                    <form action="">
                        <div className="text-right bg-blue-400 pt-4 pb-4 pr-4 flex justify-end items-center rounded-lg">
                            <p>Single answer</p>
                            <h1 className="text-4xl text-right ml-4">{questionsArray.length + 1}/{questionsArray.length + 1}</h1>
                        </div>
                        <div className="p-4">
                            <h1 className="text-2xl flex items-center">
                                <span>{questionsArray.length !== 0 ? questionsArray.length + 1 : 1} </span>
                                <input
                                    type="text"
                                    placeholder="Type your question"
                                    name="title"
                                    value={title}
                                    onChange={handleChange}
                                    className="input input-bordered w-full ml-2"
                                />
                            </h1>
                            <h2 className="text-xl mt-12 mb-4">Answers:</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 mb-8">
                                <input
                                    id="answer_a"
                                    value={answers[0].answer_text}
                                    onChange={(e) => handleAnswersChange(e, 0)}
                                    className="list-none border-2 rounded-full p-2"
                                    placeholder="Answer A"
                                ></input>
                                <input
                                    id="answer_b"
                                    value={answers[1].answer_text}
                                    onChange={(e) => handleAnswersChange(e, 1)}
                                    className="list-none border-2 rounded-full p-2"
                                    placeholder="Answer B"
                                ></input>
                                <input
                                    id="answer_c"
                                    value={answers[2].answer_text}
                                    onChange={(e) => handleAnswersChange(e, 2)}
                                    className="list-none border-2 rounded-full p-2"
                                    placeholder="Answer C"
                                ></input>
                                <input
                                    id="answer_d"
                                    value={answers[3].answer_text}
                                    onChange={(e) => handleAnswersChange(e, 3)}
                                    className="list-none border-2 rounded-full p-2"
                                    placeholder="Answer D"
                                ></input>
                            </div>
                            <div className="flex justify-between">
                                <select
                                    className="select select-bordered w-full max-w-xs"
                                    value={selectedAnswer}
                                    onChange={handleSelectChange}
                                >
                                    <option disabled value="">
                                        Which is the right answer?
                                    </option>
                                    <option value={answers[0].answer_text}>A</option>
                                    <option value={answers[1].answer_text}>B</option>
                                    <option value={answers[2].answer_text}>C</option>
                                    <option value={answers[3].answer_text}>D</option>
                                </select>
                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-active btn-primary justify-end"
                                >
                                    Add Question
                                </button>
                            </div>
                            {atLeastOneAnswerRight && (
                                <h3>Correct answers: {correctAnswersFormatted}</h3>
                            )}
                        </div>
                    </form>
                </div>
                {/* END OF QUIZ FORM */}
                <button onClick={handleFinishQuiz} className="btn btn-secondary max-w-[800px] btn-lg my-6 w-5/6">Finish Quiz</button>
            </div>
        </div>
    )
}

export default QuizGamePage