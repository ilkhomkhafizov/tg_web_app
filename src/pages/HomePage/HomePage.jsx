import CardContainer from "../../components/Card/CardContainer";
import Header from "../../components/Header/Header";

const HomePage = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center" >
      <Header />
      <CardContainer/>
    </div>
  );
};
export default HomePage;
