import React, {Component} from 'react';
import InitialStack from './src/routes/InitialStack';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppColors } from './src/utils/constants';


const lightTheme = {
  accent: AppColors.secondary,
  backdrop: "rgba(0, 0, 0, 0.5)",
  background: "#f6f6f6",
  disabled: "rgba(0, 0, 0, 0.26)",
  error: "#B00020",
  notification: "#f50057",
  placeholder: "rgba(0, 0, 0, 0.54)",
  primary: AppColors.primary,
  surface: "#ffffff",
  text: "#000000"
}

const darkTheme = {
  accent: AppColors.secondary,
  backdrop: "rgba(0, 0, 0, 0.5)",
  background: "#000000",
  disabled: "rgba(0, 0, 0, 0.26)",
  error: "#B00020",
  notification: "#f50057",
  placeholder: "rgba(0, 0, 0, 0.54)",
  primary: AppColors.primary,
  surface: "#000000",
  text: "#ffffff"
}

const theme = {
  ...DefaultTheme,
  dark:true,
  roundness: 2,
  colors: lightTheme
};

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <InitialStack/>
      </PaperProvider>
    );
  }
}