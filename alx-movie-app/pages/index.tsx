import React from "react";
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <div>
        <h1>Hello, I am Home</h1>
      </div>
      <Footer/>

    </div>
  );
};

export default Home;
