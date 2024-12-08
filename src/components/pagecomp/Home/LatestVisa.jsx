import { useContext } from 'react';
import { Link } from 'react-router';
import { DataContext } from '../../contexts/DataContext';

function LatestVisa() {
  const { data } = useContext(DataContext);
  const allVisa = [...data];
  const reversedVisa = allVisa.reverse();
  const latestVisa = reversedVisa.slice(0, 3);
  return (
    <div className="container mx-auto w-[70vw] my-16 flex flex-col items-center justify-between">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Check Latest Visa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {latestVisa.map((card) => (
          <div key={card.id} className="border rounded-xl">
            <div className="p-4 rounded-lg shadow-md">
              <img
                src={card.imageUrl}
                alt={card.countryName}
                className="w-full h-48 object-cover"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mt-4">{card.visaType}</h3>
                <p>{card.countryName}</p>
              </div>
              <p>{card.validity}</p>
              <div className="card-actions justify-end">
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
