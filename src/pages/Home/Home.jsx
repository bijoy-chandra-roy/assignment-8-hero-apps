import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import Stats from "../../components/Stats";
import TreandingApps from "../../components/TreandingApps";


const Home = () => {
  const data = useLoaderData();
  return (
    <div className="text-center">
      <Banner></Banner>
      <Stats></Stats>
      <TreandingApps data={data}></TreandingApps>
    </div>
  );
};

export default Home;
