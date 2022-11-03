import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { TasksProvider } from './context/TasksContext';

function App() {


  return (

    <ThemeProvider theme={defaultTheme}>
      <TasksProvider>
        <Home />
      </TasksProvider>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
