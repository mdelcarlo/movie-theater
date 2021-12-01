import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetail";
import HomePage from "./pages/Home";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetailPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
