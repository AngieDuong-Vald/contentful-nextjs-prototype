import Header from "./header";
import Footer from "./footer";

export const Layout = ({ logo, fields, children, footer }) => {
  return (
    <div>
      <Header fields={fields} logo={logo} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
