import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetUpsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';

function App() {
  return (
     <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
