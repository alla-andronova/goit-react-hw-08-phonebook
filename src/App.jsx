import { useSelector, useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

import { fetchCurrentUser } from "./redux/slices/auth";
import { getIsFetchingCurrentUser } from "./redux/selector/selectors";

import AppBar from "./components/appBar/AppBar";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          <Suspense fallback={"dsadsa"}>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}

export default App;
