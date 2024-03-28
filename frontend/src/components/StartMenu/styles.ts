import { styled } from 'styled-components'

export const StartMenuContainer = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
  & > div:first-child {
    h1 {
      font-weight: 300;
      font-size: 4rem;
      line-height: 4rem;
      color: ${(props) => props.theme.pureWhite};
      span {
        font-weight: 500;
        font-size: 4rem;
        line-height: 4rem;
      }
    }
    h2 {
      font-weight: 400;
      font-style: italic;
      font-size: 1.5rem;
      line-height: 1.875;
      color: ${(props) => props.theme.skyBlue};
      margin-top: 3rem;
    }
  }
  & > div:last-child {
  }
`

export const OptionContainer = styled.button`
  max-width: 32.25rem;
  width: 100%;
  height: 6rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  background-color: ${(props) => props.theme.steelGray};
  border-radius: 24px;
  border: none;
  margin-bottom: 1.5rem;

  span {
    font-weight: 500;
    font-size: 1.75rem;
    color: ${(props) => props.theme.pureWhite};
  }
`
