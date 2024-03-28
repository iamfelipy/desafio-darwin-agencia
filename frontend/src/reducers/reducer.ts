import { ActionTypes } from './actions'

export interface Question {
  id: string
  question: string
  options: Array<string>
  answer: string
}

export interface Quiz {
  id: string
  title: string
  icon: string
  questions?: Array<Question>
}

interface QuizState {
  quizzes: Array<Quiz>
  quiz: Quiz | null
  activeQuestionId: string | null
  answers: []
}

export function quizReducer(state: QuizState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_QUIZZES: {
      return {
        ...state,
        quizzes: [...action.payload.quizzes],
      }
    }
    case ActionTypes.SET_QUIZ: {
      return {
        ...state,
        quiz: action.payload.quiz ? { ...action.payload.quiz } : null,
      }
    }
    case ActionTypes.SET_ACTIVE_QUESTION_ID: {
      return {
        ...state,
        activeQuestionId: action.payload.activeQuestionId,
      }
    }
    // case ActionTypes.ADD_NEW_ANSWER: {
    //   const newAnswers = [...state.answers]

    //   const quiz = state.quizzes.find(
    //     (quiz: any) => quiz.id === state.activeQuizId,
    //   )

    //   const question = quiz.

    //   return {
    //     ...state,
    //     answers: [],
    //   }
    // }
    default:
      return state
  }
}
