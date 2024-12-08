import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataContext';

function MyAddedVisa() {
  const { data } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const filteredData = data.filter((visa) => visa.uploader === user.email);
  if (!filteredData.length) {
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        My Added Visa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((visa) => (
          <div key={visa._id} className="card border shadow-xl">
            <figure>
              <img src={visa.imageUrl} alt={visa.countryName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{visa.countryName}</h2>
              <p>
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p>
                <strong>Processing Time:</strong> {visa.processingTime}
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
              <div className="card-actions flex justify-between items-center">
                <button className="btn btn-success btnnn">Update</button>
                <button className="btn btn-warning btnn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAddedVisa;
