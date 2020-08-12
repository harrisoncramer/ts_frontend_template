import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface ViewWrapperProps {
  View: React.FC;
}

const ViewWrapper = ({ View }: ViewWrapperProps) => {
  return (
    <>
      <Header />
      <View />
      <Footer />
    </>
  );
};

export default ViewWrapper;
