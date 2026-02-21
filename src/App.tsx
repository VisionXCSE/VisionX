import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import MouseParticles from "react-mouse-particles";
import PageLoader from "./components/PageLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import CursorParticles from "./cursors/CursorParticles";
// import CyberCursor from "./cursors/CyberCursor";
// import StarCursor from "./cursors/StarCursor";
import SmoothTrailCursor from "./cursors/SmoothTrailCursor";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1800); // loader duration

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* <CursorParticles /> */}
      {/* <CyberCursor /> */}
      {/* <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      /> */}
      {/* <StarCursor /> */}
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      <QueryClientProvider client={queryClient}>
        <SmoothTrailCursor />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Index onVideoReady={() => setLoading(false)} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
