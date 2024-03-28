import { OptionContainer, StartMenuContainer } from './styles'
import { useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'

export function StartMenu() {
  const { chooseQuiz, quizzes } = useContext(QuizContext)

  function handleChooseQuiz(id: string) {
    chooseQuiz(id)
  }

  return (
    <StartMenuContainer>
      <div>
        <h1>
          Welcome to the <br />
          <strong>Frontend Quiz!</strong>
        </h1>
        <h2>Pick a subject to get started.</h2>
      </div>
      <div>
        {quizzes.map((option) => {
          return (
            <OptionContainer
              key={option.id}
              onClick={() => handleChooseQuiz(option.id)}
            >
              <img src={option.icon} alt="" width="56px" height="56px" />
              <span>{option.title}</span>
            </OptionContainer>
          )
        })}
      </div>
    </StartMenuContainer>
  )
}
