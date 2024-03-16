import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeContextWrapper from "@/ThemeContextWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import ClientContainer from "./ClientContainer";

import { StyledEngineProvider } from "@mui/material/styles";
export const metadata = {
  title: "Binary to Decimal",
  description: "Convert 8-bit string to a decimal equivalent",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider>
            <ThemeContextWrapper>
              <CssBaseline />
              <ClientContainer>{props.children}</ClientContainer>
            </ThemeContextWrapper>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
