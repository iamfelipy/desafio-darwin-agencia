import { useContext } from 'react'
import { HeaderContainer } from './styles'
import { QuizContext } from '../../contexts/QuizContext'

export function Header() {
  const { quiz } = useContext(QuizContext)
  return (
    <HeaderContainer>
      {quiz && (
        <>
          <img src={quiz?.icon} alt="" />
          <span>{quiz?.title}</span>
        </>
      )}
    </HeaderContainer>
  )
}
