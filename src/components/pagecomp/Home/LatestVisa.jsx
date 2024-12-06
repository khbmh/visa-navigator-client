import { Link } from 'react-router';

function LatestVisa() {
  return (
    <div className="container mx-auto w-[70vw] my-16 flex flex-col items-center justify-between">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Check Latest Visa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      <Link to="/all-visa" className='btn btn-success btnn border'>See All Visa</Link>
    </div>
  );
}

export default LatestVisa;
