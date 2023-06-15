import React from "react";
import CreateDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { darkTheme } from "./theme";
const rootElement = document.getElementById("root")!;
const root = CreateDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);