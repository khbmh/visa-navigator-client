import { useContext } from 'react';
import { Link } from 'react-router';
import { DataContext } from '../../contexts/DataContext';

function LatestVisa() {
  const { data } = useContext(DataContext);
  const allVisa = [...data];
  const reversedVisa = allVisa.reverse();
  const latestVisa = reversedVisa.slice(0, 6);
  return (
    <div className="container mx-auto w-[70vw] my-16 flex flex-col items-center justify-between">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Check Latest Visa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {latestVisa.map((card) => (
          <div key={card.id} className="border rounded-xl">
            <div className="p-4 rounded-lg shadow-md h-[400px] flex flex-col justify-between">
              <img
                src={card.imageUrl}
                alt={card.countryName}
                className="w-full h-48 object-cover"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mt-4">{card.countryName}</h3>
                <p className='px-2 py-1 mid text-sm my-4 rounded-full'>{card.visaType}</p>
              </div>
              <p className="my-2">{card.validity} Validity</p>
              <div className="card-actions justify-center mt-4">
                <Link to={`/visa/${card._id}`} className="btn btn-success mid">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/all-visa" className="btn btn-success btnn border">
        See All Visa
      </Link>
    </div>
  );
}

export default LatestVisa;
