import React from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthWrapper from "./layouts/authWrapper";
import RequireAuth from "./layouts/requireAuth";
import NotFound from "./components/common/notfound";
import DashboardLayout from "./layouts/dashboardLayout";
import SuspenseFallbackLoader from "./components/common/loader/SuspenseLoader";
import CompleteSignup from "./pages/auth/completeSignup";

const SignUp = React.lazy(() => import("./pages/auth/signUp"));
const SignIn = React.lazy(() => import("./pages/auth/signIn"));
const ResetPassword = React.lazy(() => import("./pages/auth/forgotPassword"));
const CreatePassword = React.lazy(() => import("./pages/auth/createPassword"));
const Home = React.lazy(() => import("./pages/dashboard/home"));
const Favourites = React.lazy(() => import("./pages/dashboard/favourite"));
const Trash = React.lazy(() => import("./pages/dashboard/trash"));
const Settings = React.lazy(() => import("./pages/dashboard/settings"));
const ArchivedNotes = React.lazy(() =>
  import("./pages/dashboard/archivedNotes")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<SuspenseFallbackLoader />}>
            <AuthWrapper />
          </React.Suspense>
        }
      >
        <Route index element={<SignIn />} />
        <Route path="create-account" element={<SignUp />} />
        <Route path="forgot-password" element={<ResetPassword />} />
        <Route path="auth/complete-signup" element={<CompleteSignup />} />
        <Route
          path="create-password"
          element={<Navigate to={"/forgot-password"} />}
        />
        <Route path="create-password/:secret" element={<CreatePassword />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <React.Suspense fallback={<SuspenseFallbackLoader />}>
              <DashboardLayout />
            </React.Suspense>
          </RequireAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path={"favourites"} element={<Favourites />} />
        <Route path={"trash"} element={<Trash />} />
        <Route path={"archieves"} element={<ArchivedNotes />} />
        <Route path={"settings"} element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
