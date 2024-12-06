import Faq from '../pagecomp/Home/Faq';
import Hero from '../pagecomp/Home/Hero';
import LatestVisa from '../pagecomp/Home/LatestVisa';
import Review from '../pagecomp/Home/Review';

function Home() {
  return (
    <>
      <Hero />
      <LatestVisa />
      <Review />
      <Faq />
    </>
  );
}

export default Home;
