import { styled } from 'styled-components'

export const OptionContainer = styled.button`
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
  cursor: pointer;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid ${(props) => props.theme.purpleGrape};
    & > span:first-child {
      background-color: ${(props) => props.theme.purpleGrape};
      color: ${(props) => props.theme.pureWhite};
    }
  }

  & > span:first-child {
    font-size: 1.75rem;
    font-weight: 500;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${(props) => props.theme.whisperWhite};
    color: ${(props) => props.theme.slateBlue};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span:last-child {
    flex: 1;
    font-size: 1.75rem;
    font-weight: 500;
    color: ${(props) => props.theme.pureWhite};
  }
`
