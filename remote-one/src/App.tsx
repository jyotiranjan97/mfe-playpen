import React, { FC } from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import RootPage from "./pages";
import ProfilePage from "./pages/profile";

type AppProps = {
  history: any;
};

const App: FC<AppProps> = ({ history }) => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
