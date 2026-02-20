import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import AlbumView from "@/pages/AlbumView";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageThemeProvider } from "./contexts/LanguageThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DemoMarinaSilva from "./pages/DemoMarinaSilva";
import DemoCarlosMendes from "./pages/DemoCarlosMendes";
import DemoJulianaCosta from "./pages/DemoJulianaCosta";
import DemoRafaelSantos from "./pages/DemoRafaelSantos";
import DemoBeatrizOliveira from "./pages/DemoBeatrizOliveira";
import DemoLucasFerreira from "./pages/DemoLucasFerreira";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/demo/marina-silva" component={DemoMarinaSilva} />
      <Route path="/demo/carlos-mendes" component={DemoCarlosMendes} />
      <Route path="/demo/juliana-costa" component={DemoJulianaCosta} />
      <Route path="/demo/rafael-santos" component={DemoRafaelSantos} />
      <Route path="/demo/beatriz-oliveira" component={DemoBeatrizOliveira} />
      <Route path="/demo/lucas-ferreira" component={DemoLucasFerreira} />
      <Route path="/demo/:photographerId/album/:portfolioId" component={AlbumView} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageThemeProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Navbar />
            <div className="pt-16">
              <Router />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
