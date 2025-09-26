import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Import all pages
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Admin from "./pages/Admin";
import Ftr from "./pages/Ftr";
import Lpw from "./pages/Lpw";
import Up1bt from "./pages/Up1bt";
import Up3bt from "./pages/Up3bt";
import Up6bt from "./pages/Up6bt";
import Upig1bt from "./pages/Upig1bt";
import Upig3bt from "./pages/Upig3bt";
import Upig6bt from "./pages/Upig6bt";
import Dws1 from "./pages/Dws1";
import Dws2 from "./pages/Dws2";
import Dw3 from "./pages/Dw3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize global tracking functions for BlueDrops
    const initializeTracking = () => {
      // Hotjar tracking initialization (when needed)
      if (window.location.pathname === '/ftr' || window.location.pathname === '/thankyou') {
        if (!window.hj) {
          (function(h: any, o: any, t: any, j: any, a: any, r: any) {
            h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 6457423, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); 
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=', document.getElementsByTagName('head')[0], document.createElement('script'));
        }
      }
    };

    initializeTracking();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/ftr" element={<Ftr />} />
            <Route path="/lpw" element={<Lpw />} />
            <Route path="/up1bt" element={<Up1bt />} />
            <Route path="/up3bt" element={<Up3bt />} />
            <Route path="/up6bt" element={<Up6bt />} />
            <Route path="/upig1bt" element={<Upig1bt />} />
            <Route path="/upig3bt" element={<Upig3bt />} />
            <Route path="/upig6bt" element={<Upig6bt />} />
            <Route path="/dws1" element={<Dws1 />} />
            <Route path="/dws2" element={<Dws2 />} />
            <Route path="/dw3" element={<Dw3 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;