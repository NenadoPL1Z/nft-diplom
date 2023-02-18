import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { theme } from "../theme/theme";
import { styled, ThemeProvider } from "@mui/material";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <MainSC>{children}</MainSC>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

const MainSC = styled("main")`
  flex-grow: 1;
`;

export default MainLayout;
