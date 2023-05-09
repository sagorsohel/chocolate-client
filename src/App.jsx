import { FaPlus } from "react-icons/fa";
import Chocolate from "./Components/Chocolate";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);

  // useEffect(()=>{
  //  fetch('http://localhost:5000/chocolates')
  //  .then(res=>res.json())
  //  .then(data=>setCoffees(data))

  // },[])

  const handleDelete = (id) => {
   


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>
      {
        if(data.deletedCount>0){
           Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
          const newCoffee=coffees.filter(cof=>cof._id!==id)
          setCoffees(newCoffee)
        }
      })
       
      }
    })

    
  };

  return (
    <>
      <Link to="/addchocolate">
        <button className="btn  ml-[22.5rem] mb-4 btn-ghost lowercase border-2 border-[#e5e7eb] ">
          <FaPlus className="mr-2" />
          Add New Chocolate 🍫{" "}
        </button>
      </Link>
      <div className=" mx-auto w-3/6 rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-table">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Image
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Country/Factory
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Category
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          {coffees.map((coffee) => (
            <Chocolate
              key={coffee._id}
              coffee={coffee}
              handleDelete={handleDelete}
            />
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
