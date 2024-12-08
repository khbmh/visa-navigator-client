import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

function MyAddedVisa() {
  const { data, updateData } = useContext(DataContext);
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
        const updatedData = data.filter((visa) => visa._id !== _id);
        updateData(updatedData);

        fetch(`http://localhost:4000/allvisa/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Visa has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  const filteredData = data.filter((visa) => visa.uploader === user.email);
  if (!filteredData.length) {
    return (
      <div className="container mx-auto px-4 lg:w-[70vw] my-16">
        <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
          My Added Visa
        </h1>
        <div className="w-full h-[50vh] flex flex-col items-center justify-around">
          <img
            className="max-w-[300px] w-[50vw]"
            src="https://cdni.iconscout.com/illustration/premium/thumb/boy-explaining-about-no-data-folder-illustration-download-in-svg-png-gif-file-formats--empty-state-results-pack-miscellaneous-illustrations-8881971.png"
            alt="no data"
          />
          <p>You have not added any visa yet</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        My Added Visa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 pb-8">
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
              <div className="card-actions flex justify-between items-center mt-4">
                <Link
                  to={`/update-visa/${visa._id}`}
                  className="btn btn-success btnnn"
                >
                  Update
                </Link>
                <button
                  onClick={() => {
                    handleDelete(visa._id);
                  }}
                  className="btn btn-warning btnn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAddedVisa;
