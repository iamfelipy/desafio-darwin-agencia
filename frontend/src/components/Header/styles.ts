import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 6.18rem 0;
  display: flex;
  align-items: center;
  gap: 2.31rem;
  span {
    font-weight: 500;
    font-size: 1.75rem;
    color: ${(props) => props.theme.pureWhite};
  }
`
