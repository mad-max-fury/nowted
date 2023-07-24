import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { queryClient } from "./react-query/client";
import Router from "./Router";
import Loader from "./components/common/loader";

function App() {
  return (
    <React.StrictMode>
      <div className="flex App ">
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <Loader />
            <Router />
          </SnackbarProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </div>
    </React.StrictMode>
  );
}

export default App;
