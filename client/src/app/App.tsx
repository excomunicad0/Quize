import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { router } from './router/router';


function App() {
  return (
      <Provider store={store}>
              <h1>QUIZE</h1>
        <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
