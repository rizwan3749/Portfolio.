import Collection from "../../components/collection";
import GridView from "../../components/GridView";
import Projects from "../../components/Projects";
import Frameworkgradient from "../../components/Frameworkgradient";
import ReviewPage from "../../components/ReviewPage";
import Reviewanother from "../../components/Reviewanother";


const HomeScreen = () => {
  return (
    <div className="overflow-hidden">
      <Frameworkgradient />
      <Collection />
      <Projects />
      <GridView />
      <ReviewPage />
      <Reviewanother />
      
    </div>
  );
};

export default HomeScreen;
