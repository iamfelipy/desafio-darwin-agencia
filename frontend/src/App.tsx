import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { AppContainer } from './App.styles'
import { StartMenu } from './components/StartMenu'
import { QuizContext } from './contexts/QuizContext'
import { useContext } from 'react'
import { Questions } from './components/Questions'

function App() {
  const { quiz } = useContext(QuizContext)
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Header />
        <main>
          {!quiz && <StartMenu />}
          {quiz && <Questions />}
        </main>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
