import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "../containers/Home";
import ErrorPage from "../containers/ErrorPage";
import Layout from "./Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
