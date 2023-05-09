import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
const updateData=useLoaderData()

    const updateCoffe=e=>{
      e.preventDefault();
      const form=e.target
      const name=form.name.value
      const country=form.country.value
      const photo=form.photo.value 
      const select=form.select.value
      const newChocolate={name,country,photo,select}
      fetch(`http://localhost:5000/chocolates/${updateData._id}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(newChocolate)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount>0){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Updated Successfully',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
    }

    return (
        <div>
      <Link to="/">
        <button className="btn bg-[#e5e7eb] ml-[22.5rem] mb-4 btn-ghost lowercase hover:bg-[#91572B] hover:text-white ">
          <FaArrowLeft className="mr-2" />
          All Chocolates
        </button>
      </Link>

      <div className="mx-auto w-3/6 bg-[#e5e7eb] border-4 p-4 rounded-lg">
        <div>
          <h1 className="font-sans font-semibold text-2xl leading-9 text-center">
            Update Chocolate
          </h1>
          <p className="text-center">
            Use the below form to update chocolate
          </p>
        </div>
        <form onSubmit={updateCoffe}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="name"
                defaultValue={updateData.name}
                placeholder="Hot pink chocolate"
                className="input input-bordered rounded-lg w-full max-w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="country"
                defaultValue={updateData.country}
                placeholder="Enter country name"
                className="input input-bordered rounded-lg w-full max-w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="photo"
                defaultValue={updateData.photo}
                placeholder="Image Url"
                className="input input-bordered rounded-lg w-full max-w-full"
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select  select-bordered w-full "
            defaultValue={updateData.select}
            name="select"
            >
              <option>Premium</option>
              <option>Regular</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full  my-4  py-2 bg-gradient-to-r from-[#91572B] to-[#91572B]  rounded-lg text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
    );
};

export default Update;