// import react
import React from 'react'
import ReactDOM from 'react-dom/client'

// import react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import css
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

// import pages
import App from './App.jsx'
import WelcomePage from './pages/welcome.jsx';
import ManageCardsPage from './pages/ManageCards.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, 
        element: <WelcomePage /> },
      { path: '/manage-cards', element: <ManageCardsPage /> },
      // { path: 'study', element: <StudyPage /> },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
