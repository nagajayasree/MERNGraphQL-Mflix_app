import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

const client = new ApolloClient({
  uri: 'http://localhost:6969/graphql/',
  cache: new InMemoryCache(),
});

export const AppLayout = () => {
  return (
    <div style={{ alignItems: 'center' }}>
      <ApolloProvider client={client}>
        <Header />
        <Outlet />
      </ApolloProvider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/addMovie',
        element: <AddMovie />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={appRouter} />);
