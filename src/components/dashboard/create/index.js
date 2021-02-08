import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import {
  HIT_DELETENEWS,
  HIT_GETNEWS,
  HIT_GETONENEWS,
  HIT_POSTNEWS,
  HIT_PUTNEWS,
} from "redux/actions";
const Index = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [imagePrev, setImagePrev] = useState(
    "https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg"
  );
  useEffect(() => {
  }, []);
  const editNews = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append("title", e.target[1].value);
    formData.append("desc", e.target[2].value);
    formData.append("image", e.target[0].files[0]);
    console.log(e, "cek");
    dispatch({ type: HIT_POSTNEWS, payload: [id, formData] });
  };

  return (
    <div className="pb-5 pt-5">
      <h3 className="text-left h2 font-weight-bold mb-3 pl-2">Create News</h3>
      <form className="text-left mt-5 col-6" onSubmit={handleSubmit(e => editNews(e))}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Image</label>
          <div
            className="mb-2"
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url(${imagePrev})`,
              objectFit: "fit",
              backgroundSize: "200px",
              borderRadius: "8px",
              backgroundPosition: "center",
            }}
          ></div>
          <input
            type="file"
            className=""
            name="Image"
            ref={register({ required: true })}
            onChange={(e) => {
              setImage(e.target.files);
              setImagePrev(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {errors.Image && <span>This field is required</span>}
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            defaultValue={title}
            name="Title"
            ref={register({ required: true })}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.Title && <span>This field is required</span>}
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Description"
            defaultValue={desc}
            ref={register({ required: true, minLength: 250 })}
            name="Description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          {errors.Description && <span>This field is required & minimum value is 250</span>}

        </div>
        <button
          class="btn btn-outline-secondary mr-3  btn-search"
          type="submit"
          style={{ borderRadius: "5px" }}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Index;
