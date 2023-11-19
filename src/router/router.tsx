import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ROUTES from './routes';
import MainPage from '../pages/MainPage/MainPage';
import NotFound from '../pages/NotFound/NotFound';
import App from '../components/App/App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.ROOT}
      element={<App />}
      errorElement={<h1>Something went wrong!</h1>}
    >
      <Route index element={<MainPage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path="/*" element={<Navigate to="404" />} />
    </Route>
  )
);

export default router;
