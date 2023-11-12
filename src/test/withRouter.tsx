import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export default (component: React.ReactNode, route = '/') => {
  const path = route === '/' ? route : `/${route}`;

  const router = createMemoryRouter(
    [
      {
        path: path,
        element: component,
      },
    ],
    {
      initialEntries: [path],
    }
  );

  return <RouterProvider router={router} />;
};
