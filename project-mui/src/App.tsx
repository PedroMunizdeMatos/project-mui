import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material"

import { AppRoutes } from "./routes"
import { AppThemeProvider } from "./shared/contexts"

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  )
}
