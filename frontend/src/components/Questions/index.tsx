import { useContext } from 'react'
import {
  ButtonActionQuestion,
  OptionsContainer,
  Container,
  QuestionContainer,
  QuestionPosition,
  QuestionText,
} from './styles'
import { QuizContext } from '../../contexts/QuizContext'
import { Option } from './components/Option'

export function Questions() {
  const { quiz, activeQuestionId, updateActiveQuestionId, chooseQuiz } =
    useContext(QuizContext)

  const indexPosition = quiz!.questions!.findIndex(
    (question) => question.id === activeQuestionId,
  )
  const activeQuestion = quiz!.questions![indexPosition]
  const currentQuestionPosition = indexPosition + 1
  const amountQuestions = quiz?.questions?.length

  const letters = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
  }

  function handleNextQuestion() {
    const nextQuestion = quiz!.questions![indexPosition + 1]
    if (nextQuestion) {
      updateActiveQuestionId(nextQuestion.id)
    } else {
      updateActiveQuestionId(null)
      chooseQuiz(null)
    }
  }

  return (
    <Container>
      <QuestionContainer>
        <div>
          <QuestionPosition>
            Question {currentQuestionPosition} of {amountQuestions}
          </QuestionPosition>
          <QuestionText>{activeQuestion.question}</QuestionText>
        </div>
        {/* <div>barra de avanço</div> */}
      </QuestionContainer>
      <div>
        <OptionsContainer>
          {activeQuestion.options.map((option, index) => (
            <Option key={option} letter={letters[index]} option={option} />
          ))}
        </OptionsContainer>
        <ButtonActionQuestion onClick={handleNextQuestion}>
          Next Question
        </ButtonActionQuestion>
      </div>
    </Container>
  )
}
