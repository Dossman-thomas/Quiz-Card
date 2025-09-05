import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bootstrap & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

// Pages
import App from './App.jsx';
import Error from './pages/Error.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import ManagerPage from './pages/ManagerPage.jsx';
import StudyPage from './pages/StudyPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: 'manager', element: <ManagerPage /> },
      { path: 'study', element: <StudyPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
