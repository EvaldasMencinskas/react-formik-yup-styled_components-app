import Forms from "./components/Forms";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Global_colors.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Forms />
      </div>
    </ThemeProvider>
  );
}

export default App;
