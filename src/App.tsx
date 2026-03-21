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
import RulesModal from "./components/RulesModal";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  const [rulesOpen, setRulesOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    const allowedOrigins = new Set([
      "http://localhost:5173",
      "https://visionx-register.vercel.app",
    ]);

    const onMsg = (e: MessageEvent) => {
      if (!allowedOrigins.has(e.origin)) return;
      if (!e.data || e.data.type !== "IFRAME_MOUSEMOVE") return;

      const iframe = document.getElementById(
        "register-iframe",
      ) as HTMLIFrameElement | null;
      if (!iframe) return;
      if (e.source !== iframe.contentWindow) return;

      const rect = iframe.getBoundingClientRect();
      const x = rect.left + e.data.x;
      const y = rect.top + e.data.y;

      window.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: x,
          clientY: y,
          bubbles: true,
        }),
      );
    };

    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

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
      <RulesModal open={rulesOpen} onClose={() => setRulesOpen(false)} />

      <QueryClientProvider client={queryClient}>
        <div className="pointer-events-none fixed inset-0 z-[2147483647]">
          <SmoothTrailCursor />
        </div>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/visionx">
            <Routes>
              <Route
                path="/"
                element={
                  <Index
                    onVideoReady={() => setLoading(false)}
                    onOpenRules={() => setRulesOpen(true)}
                  />
                }
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
