import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProfilDesa from "./pages/ProfilDesa";
import Infografis from "./pages/Infografis";
import Belanja from "./pages/Belanja";
import PPID from "./pages/PPID";
import Monitoring from "./pages/Monitoring";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profil" element={<ProfilDesa />} />
          <Route path="/infografis" element={<Infografis />} />
          <Route path="/belanja" element={<Belanja />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/ppid" element={<PPID />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
