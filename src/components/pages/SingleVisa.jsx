import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

function SingleVisa() {
  const { data, handleIncrement, setMongoData } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const { url } = useParams();
  const visa = data.find((info) => info._id == url);

  const handleApply = (data) => {
    const getCurrentDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = today.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const currentDate = getCurrentDate();
    const applyData = {
      ...data,
      applicant: user.displayName,
      applicantEmail: user.email,
      currentDate: currentDate,
    };
    delete applyData._id;
    fetch('https://visa-server-mauve.vercel.app/visaApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data) => {
        setMongoData(data);
        toast.success('Added successfully');
        handleIncrement();
      })
      .catch((error) => {
        toast.error('An error occurred while adding the visa');
      });
  };

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
            <button
              onClick={() => handleApply(visa)}
              className="btn btn-success mid px-8 text-md mt-6 lg:text-lg"
            >
              Apply for Visa
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default SingleVisa;
