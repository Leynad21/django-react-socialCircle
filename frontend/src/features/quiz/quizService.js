import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:8000"

const QUIZZES_URL = `${BACKEND_DOMAIN}/api/v1/quiz/`


// Get Quizzes

const getQuizzes = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    }
    const response = await axios.get(QUIZZES_URL, config)

    return response.data
}

// Get Quiz

const getQuiz = async (quizData, accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    }
    const response = await axios.get(QUIZZES_URL + quizData.slug, config)

    return response.data
}


const quizService = { getQuizzes, getQuiz }

export default quizService