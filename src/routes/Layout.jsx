import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (prop) => {
  return (
    <>
      <Header />
      {prop.children}
      <Footer />
    </>
  );
};
export default Layout;
