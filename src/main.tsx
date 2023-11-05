import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';
import 'normalize.css';
import './index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<h1>Something went wrong!</h1>}
    >
      <Route index element={<MainPage />} />
      <Route path="404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to="404" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
