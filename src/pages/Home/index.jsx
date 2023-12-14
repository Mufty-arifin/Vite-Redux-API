import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
const Home = () => {
 
  return (
    <div className="home">
      <section className="bg-[linear-gradient(90deg,#93b2ff_0,#5389f2_50%,#0063d3_100%)] min-h-screen ">
        <Navbar />
        <Card />
      </section>
    </div>
  );
};

export default Home;
