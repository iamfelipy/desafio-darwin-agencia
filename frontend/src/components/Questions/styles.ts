import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 8.18rem;

  & > div {
    flex: 1;
  }
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const QuestionPosition = styled.div`
  font-weight: 400;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: ${(props) => props.theme.skyBlue};
  margin-bottom: 1.68rem;
`

export const QuestionText = styled.div`
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 2.68rem;
  color: ${(props) => props.theme.pureWhite};
`

export const OptionsContainer = styled.div`
  max-width: 32.25rem;
  width: 100%;
`

export const ButtonActionQuestion = styled.button`
  width: 100%;
  height: 6rem;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.purpleGrape};
  color: ${(props) => props.theme.pureWhite};
  border-radius: 24px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  border: 3px solid transparent;
  font-size: 1.75rem;
  font-weight: 500;
  text-align: center;

  &:hover {
  }
`
