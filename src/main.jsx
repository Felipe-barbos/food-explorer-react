import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../src/styles/global";
import theme from './styles/theme';
import { SignIn } from './pages/SignIn';
import { SignOut } from './pages/SignOut';
import { Home } from './pages/Home';
import { DishView } from './pages/DishView';
import { NewDish } from './pages/NewDish';
import { EditDish } from './pages/EditDish';
import { SideMenu } from './components/SideMenu';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditDish />
    </ThemeProvider>
  </React.StrictMode>,
)
