import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { quizReducer, Quiz } from '../reducers/reducer'
import { setActiveQuestionId, setQuiz, setQuizzes } from '../reducers/actions'

interface QuizContextType {
  quizzes: Array<Quiz>
  quiz: Quiz | null
  activeQuestionId: string | null
  chooseQuiz: (id: string | null) => void
  updateActiveQuestionId: (id: string | null) => void
}

export const QuizContext = createContext({} as QuizContextType)

export function QuizContextProvider({ children }: { children: ReactNode }) {
  const [quizState, dispatch] = useReducer(quizReducer, {
    quizzes: [],
    quiz: null,
    answers: [],
    activeQuestionId: null,
  })
  const { quizzes, quiz, answers, activeQuestionId } = quizState

  const [quizId, setQuizId] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuizzes = async () => {
      let data = (await fetch('http://localhost:3000/quiz')) as any
      data = (await data.json())?.quizzes || []
      dispatch(setQuizzes(data))
    }
    fetchQuizzes()
  }, [])

  useEffect(() => {
    const fetchQuiz = async () => {
      let data = (await fetch(`http://localhost:3000/quiz/${quizId}`)) as any
      data = (await data.json())?.quiz || []
      dispatch(setQuiz(data))
      dispatch(setActiveQuestionId('1'))
    }
    if (quizId) {
      fetchQuiz()
    }
  }, [quizId])

  function chooseQuiz(id: string | null) {
    if (id) {
      setQuizId(id)
    } else {
      dispatch(setQuiz(null))
    }
  }

  function updateActiveQuestionId(id: string) {
    dispatch(setActiveQuestionId(id))
  }

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        quiz,
        chooseQuiz,
        activeQuestionId,
        updateActiveQuestionId,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
