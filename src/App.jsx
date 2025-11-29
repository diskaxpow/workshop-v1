import MainLayout from "@/components/layouts/MainLayout";
import AppRouter from "@/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {


  return (
    <Router>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Router>
  );
}

export default App;