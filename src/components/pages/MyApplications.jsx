import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

function MyApplications() {
  const { applications, updateApplications, handleDecrement, setMongoData } =
    useContext(DataContext);
  const { user } = useContext(AuthContext);


  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-server-mauve.vercel.app/visaApplications/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            setMongoData(data); // Log the response from the server
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Visa has been deleted.',
                icon: 'success',
              });
              handleDecrement();
              const updatedData = applications.filter(
                (visa) => visa._id !== _id,
              );
              updateApplications(updatedData);
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'No documents were deleted.',
                icon: 'error',
              });
            }
          });
      }
    });
  };

  const filteredApplications = applications.filter(
    (visa) => visa.applicantEmail === user.email,
  );

  if (!filteredApplications.length) {
    return (
      <div className="container mx-auto px-4 lg:w-[70vw] my-16">
        <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
          My Applications
        </h1>
        <div className="w-full h-[50vh] flex flex-col items-center justify-around">
          <img
            className="max-w-[300px] w-[50vw]"
            src="https://cdni.iconscout.com/illustration/premium/thumb/boy-explaining-about-no-data-folder-illustration-download-in-svg-png-gif-file-formats--empty-state-results-pack-miscellaneous-illustrations-8881971.png"
            alt="no data"
          />
          <p>You have not applied for any visa yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        My Applications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
        {filteredApplications.map((application) => (
          <div key={application._id} className="card border shadow-xl">
            <figure>
              <img
                src={application.imageUrl}
                alt={application.countryName}
                className="h-[200px] bg-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{application.countryName}</h2>
              <p>
                <strong>Visa Type:</strong> {application.visaType}
              </p>
              <p>
                <strong>Fee:</strong> {application.fee}
              </p>
              <p>
                <strong>Validity:</strong> {application.validity}
              </p>
              <p>
                <strong>Application Method:</strong>{' '}
                {application.applicationMethod}
              </p>
              <p>
                <strong>Applied Date:</strong>{' '}
                {new Date(application.currentDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Applicant's Name:</strong> {application.applicant}
              </p>
              <p>
                <strong>Applicant's Email:</strong> {application.applicantEmail}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(application._id)}
                  className="btn btn-warning mid"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApplications;
