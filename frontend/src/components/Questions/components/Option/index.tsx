import { OptionContainer } from './styles'

export function Option({ letter, option }: { letter: string; option: string }) {
  return (
    <OptionContainer>
      <span>{letter}</span>
      <span>{option}</span>
    </OptionContainer>
  )
}
