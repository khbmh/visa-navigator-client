import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataContext';
import toast, { Toaster } from 'react-hot-toast';

function UpdateVisa() {
  const visaData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { handleIncrement } = useContext(DataContext);
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRequiredDocuments([...requiredDocuments, value]);
    } else {
      setRequiredDocuments(requiredDocuments.filter((doc) => doc !== value));
    }
  };

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    const formData = {
      imageUrl: e.target.imageUrl.value,
      countryName: e.target.countryName.value,
      visaType: e.target.visaType.value,
      processingTime: e.target.processingTime.value,
      description: e.target.description.value,
      ageRestriction: e.target.ageRestriction.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      applicationMethod: e.target.applicationMethod.value,
      requiredDocuments: requiredDocuments,
      uploader: user.email,
      timestamp: new Date().toISOString(),
    };

    // console.log('Form Data:', formData);
    // Here you can add your logic to send the formData to your backend

    fetch(`http://localhost:4000/allvisa/${visaData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Updated successfully');
        }
        handleIncrement();
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while adding the visa');
      });
  };

  return (
    <div className="flex flex-col items-center justify-between my-8 py-4">
      <div className="w-full px-12 flex items-center justify-between">
        <span className="text-2xl font-semibold">
          Update Visa: {visaData.countryName}
        </span>
        <span className="px-2 py-1 text-sm mid rounded-xl">
          {visaData.visaType}
        </span>
      </div>
      <div>
        <form className="card-body" onSubmit={handleUpdateVisa}>
          <div className="lg:grid lg:grid-cols-2 space-y-3 lg:space-y-0 gap-y-3 gap-x-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                name="imageUrl"
                defaultValue={visaData.imageUrl}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter country name"
                name="countryName"
                defaultValue={visaData.countryName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Visa Type</span>
              </label>
              <select
                name="visaType"
                defaultValue={visaData.visaType}
                className="select select-bordered"
                required
              >
                <option disabled selected>
                  Select visa type
                </option>
                <option>Tourist Visa</option>
                <option>Student Visa</option>
                <option>Official Visa</option>
                <option>Diplomatic Visa</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="text"
                placeholder="Enter processing time"
                name="processingTime"
                defaultValue={visaData.processingTime}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Age Restriction</span>
              </label>
              <input
                type="number"
                placeholder="Enter age restriction"
                name="ageRestriction"
                defaultValue={visaData.ageRestriction}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input
                type="number"
                placeholder="Enter fee"
                name="fee"
                defaultValue={visaData.fee}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Validity</span>
              </label>
              <input
                type="text"
                placeholder="Enter validity"
                name="validity"
                defaultValue={visaData.validity}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Application Method</span>
              </label>
              <input
                type="text"
                placeholder="Enter application method"
                name="applicationMethod"
                defaultValue={visaData.applicationMethod}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Enter description"
                name="description"
                defaultValue={visaData.description}
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Required Documents</span>
            </label>
            <div className="flex flex-wrap">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  value="Valid Passport"
                  onChange={handleCheckboxChange}
                />
                <span className="label-text ml-2">Valid Passport</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  value="Visa Application Form"
                  onChange={handleCheckboxChange}
                />
                <span className="label-text ml-2">Visa Application Form</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  value="Visa Application Form"
                  onChange={handleCheckboxChange}
                />
                <span className="label-text ml-2">
                  Official Invitation Letter
                </span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  value="Visa Application Form"
                  onChange={handleCheckboxChange}
                />
                <span className="label-text ml-2">
                  Government Identification
                </span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  value="Recent Passport-sized Photograph"
                  onChange={handleCheckboxChange}
                />
                <span className="label-text ml-2">
                  Recent Passport-sized Photograph
                </span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success mid">Update Visa</button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default UpdateVisa;
