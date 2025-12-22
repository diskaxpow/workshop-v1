import MainLayout from "@/components/layouts/MainLayout";
import AppRouter from "@/routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Component to conditionally render layout
function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  if (isAuthPage) {
    return <AppRouter />;
  }

  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Toaster />
    </Router>
  );
}

export default App;
