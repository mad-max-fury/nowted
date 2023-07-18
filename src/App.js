import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import AuthWrapper from "./layouts/authWrapper";
import SignUp from "./pages/auth/signUp";
import SignIn from "./pages/auth/signIn";
import ResetPassword from "./pages/auth/forgotPassword";
import CreatePassword from "./pages/auth/createPassword";
import RequireAuth from "./layouts/requireAuth";
import NotFound from "./components/common/notfound";
import DashboardLayout from "./layouts/dashboardLayout";
import Home from "./pages/dashboard/home";
import Favourites from "./pages/dashboard/favourite";
import Trash from "./pages/dashboard/trash";
import Settings from "./pages/dashboard/settings";
import ArchivedNotes from "./pages/dashboard/archivedNotes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthWrapper />}>
        <Route index element={<SignIn />} />
        <Route path="create-account" element={<SignUp />} />
        <Route path="forgot-password" element={<ResetPassword />} />
        <Route
          path="create-password"
          element={<Navigate to={"/forgot-password"} />}
        />{" "}
        // redirect to /forgot-password if no secret is provided
        <Route path="create-password/:secret" element={<CreatePassword />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Home />}></Route>
        <Route path={"favourites"} element={<Favourites />}></Route>
        <Route path={"trash"} element={<Trash />}></Route>
        <Route path={"archieves"} element={<ArchivedNotes />}></Route>
        <Route path={"settings"} element={<Settings />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
function App() {
  return (
    <div className="flex App ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
