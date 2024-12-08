import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

function SingleVisa() {
  const { data } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const { url } = useParams();
  const visa = data.find((info) => info._id == url);

  if (!visa && !user) {
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Visa Details
      </h1>
      <div className="card border shadow-xl">
        <figure>
          <img src={visa.imageUrl} alt={visa.countryName} />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">{visa.countryName}</h2>
          <p>
            <strong>Visa Type:</strong> {visa.visaType}
          </p>
          <p>
            <strong>Processing Time:</strong> {visa.processingTime}
          </p>
          <p>
            <strong>Description:</strong> {visa.description}
          </p>
          <p>
            <strong>Age Restriction:</strong> {visa.ageRestriction}
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
          <div>
            <strong>Required Documents:</strong>
            <ul className="list-disc list-inside">
              {visa.requiredDocuments.map((document, index) => (
                <li key={index}>{document}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-success">Apply for Visa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleVisa;

/*
import React from 'react';

function VisaDetails({ visa }) {
  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Visa Details
      </h1>
      <div className="card bg-base-100 shadow-xl">
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
            <strong>Description:</strong> {visa.description}
          </p>
          <p>
            <strong>Age Restriction:</strong> {visa.ageRestriction}
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
          <div>
            <strong>Required Documents:</strong>
            <ul className="list-disc list-inside">
              {visa.requiredDocuments.map((document, index) => (
                <li key={index}>{document}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Apply for Visa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaDetails;

*/
