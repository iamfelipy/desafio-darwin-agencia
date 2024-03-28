import type { Quiz } from './reducer'

export enum ActionTypes {
  ADD_NEW_ANSWER = 'ADD_NEW_ANSWER',
  SET_QUIZZES = 'SET_QUIZZES',
  SET_QUIZ = 'SET_QUIZ',
  SET_ACTIVE_QUESTION_ID = 'SET_ACTIVE_QUESTION_ID',
}

export function addAnswer(answer: string) {
  return {
    type: ActionTypes.ADD_NEW_ANSWER,
    payload: {
      answer,
    },
  }
}

export function setQuizzes(quizzes: any) {
  return {
    type: ActionTypes.SET_QUIZZES,
    payload: {
      quizzes,
    },
  }
}

export function setQuiz(quiz: Quiz | null) {
  return {
    type: ActionTypes.SET_QUIZ,
    payload: {
      quiz,
    },
  }
}

export function setActiveQuestionId(activeQuestionId: string) {
  return {
    type: ActionTypes.SET_ACTIVE_QUESTION_ID,
    payload: {
      activeQuestionId,
    },
  }
}
