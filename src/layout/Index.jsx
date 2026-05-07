import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../config/routes";

function Index() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default Index;
