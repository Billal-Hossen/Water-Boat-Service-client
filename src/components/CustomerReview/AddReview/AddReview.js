import React, { useEffect, useState } from 'react';
import Sidebar from '../../Deshboard/Sidebar/Sidebar';

const AddReview = () => {
    const [reviewInfo,setReviewInfo]=useState({})
    const [file,setFile]=useState(null)
    const handleText=(e)=>{
        const newReviewInfo={...reviewInfo}
        newReviewInfo[e.target.name]=e.target.value;
        setReviewInfo(newReviewInfo)

    }
    const handleChangeImage = (e) => {
        const newImage=e.target.files[0];
        setFile(newImage)

    }
    const handleFormSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)

  formData.append('text', reviewInfo.text)



  fetch('https://dry-ridge-60561.herokuapp.com/addReview', {
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
            <div className="col-md-10 ">
                <h1>Add Your Review  with A Image</h1>
                <form onSubmit={handleFormSubmit} className="w-5">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Write Here Something About Our Journey</label>
                        <textarea onBlur={handleText} class="form-control" id="exampleFormControlTextarea1" name="text" rows="3"></textarea>
                    </div>

                    <section class="form-group">
                        <label class="form-check-label" for="exampleCheck1">Upload Image</label><br />
                        <input onChange={handleChangeImage} type="file" class="form-check-input" name="file" /><br />

                    </section>
                    <button type="submit" class="btn btn-success justify-content-end">Submit</button>

                </form>

            </div>


        </div>
    );
};

export default AddReview;