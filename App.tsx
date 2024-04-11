import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { theme } from "./theme";
import { useFonts, VT323_400Regular } from "@expo-google-fonts/vt323";

import RouteNavigator from "./routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ VT323_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {/* {fontsLoaded && <Home />} */}
      {fontsLoaded && <RouteNavigator />}
    </ThemeProvider>
  );
}
