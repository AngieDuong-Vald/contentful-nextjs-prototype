import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ logo, fields, children, footer }) => {
  return (
    <div>
      <Header fields={fields} logo={logo} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
