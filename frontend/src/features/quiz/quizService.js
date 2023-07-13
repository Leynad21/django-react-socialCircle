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

// Delete Quiz

const deleteQuiz = async (quizData, accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    }
    const response = await axios.delete(QUIZZES_URL + quizData.slug, config)

    return response.data
}

// Create Quiz

const createQuiz = async (quizData, accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        }
    }
    const response = await axios.post(QUIZZES_URL, quizData, config)

    return response.data
}

// Create Question

const createQuestion = async (questionData, accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        }
    }
    const response = await axios.post(QUIZZES_URL + "question/" + questionData.slug, questionData, config)

    return response.data
}




const quizService = { getQuizzes, getQuiz, deleteQuiz, createQuiz, createQuestion }

export default quizService