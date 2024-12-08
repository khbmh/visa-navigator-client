
import { useContext, useState } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom'; // Ensure you are using react-router-dom

function AllVisa() {
  const { data } = useContext(DataContext);
  const [selectedVisaType, setSelectedVisaType] = useState('All');

  const visaTypes = ['All', 'Tourist Visa', 'Student Visa', 'Official Visa', 'Diplomatic Visa'];

  const filteredData = selectedVisaType === 'All' ? data : data.filter((visa) => visa.visaType === selectedVisaType);

  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        All Visa
      </h1>
      <div className="mb-8 flex items-center justify-between">
        <label htmlFor="visaType" className="block text-lg font-medium text-gray-700">
          Filter by Visa Type
        </label>
        <select
          id="visaType"
          className="select mt-1 pl-3 pr-10 py-2  sm:text-sm rounded-md w-1/2"
          value={selectedVisaType}
          onChange={(e) => setSelectedVisaType(e.target.value)}
        >
          {visaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
        {filteredData.map((visa) => (
          <div key={visa._id} className="card border shadow-xl">
            <figure>
              <img
                src={visa.imageUrl}
                alt={visa.countryName}
                className="h-[200px] bg-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{visa.countryName}</h2>
              <p>
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p>
                <strong>Fee:</strong> {visa.fee}
              </p>
              <p>
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p>
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/visa/${visa._id}`} className="btn btn-success mid">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllVisa;


