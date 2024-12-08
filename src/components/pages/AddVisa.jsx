import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { DataContext } from '../contexts/DataContext';
function AddVisa() {
  const { user } = useContext(AuthContext);
  const { handleIncrement, setMongoData } = useContext(DataContext);
  const [requiredDocuments, setRequiredDocuments] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setRequiredDocuments([...requiredDocuments, value]);
    } else {
      setRequiredDocuments(requiredDocuments.filter((doc) => doc !== value));
    }
  };

  const handleAddVisa = (e) => {
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

    

    fetch('https://visa-server-mauve.vercel.app/allvisa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setMongoData(data);
        toast.success('Added successfully');
        handleIncrement();
        e.target.reset();
      })
      .catch((error) => {
        toast.error('An error occurred while adding the visa');
      });
  };

  return (
    <div className="container mx-auto px-4 lg:w-[70vw] mt-8 mb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold">
        Add Visa Details
      </h1>

      <form className="card-body" onSubmit={handleAddVisa}>
        <div className="lg:grid lg:grid-cols-2 space-y-3 lg:space-y-0 gap-y-3 gap-x-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Image</span>
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              name="imageUrl"
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Visa Type</span>
            </label>
            <select name="visaType" className="select select-bordered" required>
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
              <span className="label-text ml-2">Government Identification</span>
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
          <button className="btn btn-success mid">Add Visa</button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default AddVisa;
