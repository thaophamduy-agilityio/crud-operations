// Pages
import Home from '@pages/Home';

// Stylesheets
import '@stylesheets/app.scss';

// Toast
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
};

export default App;