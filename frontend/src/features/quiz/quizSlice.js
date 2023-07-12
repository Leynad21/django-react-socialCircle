import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizService from "./quizService";


const initialState = {
    quizzes: [],
    quiz: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const getQuizzes = createAsyncThunk(
    "quiz/getQuizzes",
    async (_, thunkAPI) => {
        try {
            const accessToken = thunkAPI.getState().auth.user.access
            return await quizService.getQuizzes(accessToken)
        } catch (error) {
            const message = (error.response && error.response.data
                && error.response.data.message) ||
                error.message ||
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getQuiz = createAsyncThunk(
    "quiz/getQuiz",
    async (quizData, thunkAPI) => {
        try {
            const accessToken = thunkAPI.getState().auth.user.access
            return await quizService.getQuiz(quizData, accessToken)
        } catch (error) {
            const message = (error.response && error.response.data
                && error.response.data.message) ||
                error.message ||
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        'reset': (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuizzes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getQuizzes.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.quizzes = action.payload
            })
            .addCase(getQuizzes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getQuiz.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getQuiz.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.quiz = action.payload
            })
            .addCase(getQuiz.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = quizSlice.actions

export default quizSlice.reducer