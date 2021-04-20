import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Sidebar from '../../Deshboard/Sidebar/Sidebar';

const AddService = () => {
    const [serviceInfo,setServiceInfo]=useState({})
    const [file,setFile]=useState(null)

    const handleBlur=(e)=>{
        const newServiceInfo={...serviceInfo}
        newServiceInfo[e.target.name]=e.target.value;
        setServiceInfo(newServiceInfo)
        // console.log(serviceInfo);


    }
    const handleChangeImage=(e)=>{
        const newImage=e.target.files[0];
        setFile(newImage)

    }
    console.log(file);
    const handleFormSubmit=()=>{
        const formData = new FormData()
        formData.append('file', file)

  formData.append('name', serviceInfo.name)
    formData.append('price', serviceInfo.price)
        formData.append('cabin', serviceInfo.cabin)
        formData.append('long', serviceInfo.long)
        formData.append('berth', serviceInfo.berth)
        formData.append('country', serviceInfo.country)


  fetch('http://localhost:8080/addBoat', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })








    }

    return (
        <div className="container-fluid row ml-3 ">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div  className="col-md-10 ">
                <h1>Add Service</h1>
                <form  onSubmit={handleFormSubmit} className="w-5">
                    <section class="form-group" >
                        <label for="exampleInputEmail1">Boat Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name"  placeholder="Enter Boat Name" />
                    </section>
                    <section class="form-group" >
                        <label for="exampleInputEmail1">Country</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="country"  placeholder="Enter Country" />
                        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </section>
                    <section class="form-group" >
                        <label for="exampleInputEmail1">Per Day</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="price"  placeholder="Enter Per Day price" />
                    </section>
                    <section class="form-group" >
                        <label for="exampleInputEmail1">Cabin</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="cabin"  placeholder="Enter Number of Cabin" />
                    </section>
                    <section class="form-group" >
                        <label for="exampleInputEmail1">Long</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="long"  placeholder="Enter Boat Long" />
                    </section>
                    <section class="form-group" >
                        <label for="exampleInputEmail1">Berths</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="berth"  placeholder="Enter Number of Birth" />
                    </section>
                    <section class="form-group">
                        <label class="form-check-label" for="exampleCheck1">Upload Image</label><br/>
                        <input onChange={handleChangeImage} type="file" class="form-check-input" name="file"/><br/>
                        
                    </section>
                    <button type="submit" class="btn btn-success justify-content-end">Submit</button>

                </form>

            </div>


        </div>
    );
};

export default AddService;