import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { HIT_DELETENEWS, HIT_GETNEWS, HIT_GETONENEWS, HIT_PUTNEWS } from "redux/actions";
import { useForm } from "react-hook-form";
const Index = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { titlex, descx, imagex } = useSelector((state) => ({
    titlex: state.news.detail.title,
    descx: state.news.detail.desc,
    imagex: state.news.detail.image,
  }));
  const [title, setTitle] = useState(titlex);
  const [desc, setDesc] = useState(descx);
  const [image, setImage] = useState();
  useEffect(() => {
    dispatch({ type: HIT_GETONENEWS, payload: id });
  }, []);
  const editNews = (e) => {
    e.preventDefault();
    console.log(e, "powe")
    let formData = new FormData();
    formData.append("title", e.target[1].value);
    formData.append("desc", e.target[2].value);
    formData.append("image", e.target[0].files[0]);
    console.log(e, "cek");
    dispatch({ type: HIT_PUTNEWS, payload: [id, formData] });
  };

  const deleteNews = (e) => {
    e.preventDefault()
    dispatch({ type: HIT_DELETENEWS, payload: id });
  }
  return (
    <div className="pb-5 pt-5">
      {console.log(descx, titlex, desc, title, "bro")}
      <h3 className="text-left h2 font-weight-bold mb-3 pl-2">Edit News</h3>
      <form className="text-left mt-5 col-6" onSubmit={e => handleSubmit(editNews(e))}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Image</label>
          <div
            className="mb-2"
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url(${imagex})`,
              objectFit: "fit",
              backgroundSize: "200px",
              borderRadius: "8px",
              backgroundPosition: "center",
            }}
          >
            {/* <img src={imagex} alt="" className="" height="200" /> */}
          </div>
          <input
            type="file"
            className=""
            name="Image"
            // defaultValue={imagex}
            onChange={(e) => setImage(e.target.files)}
            ref={register({ required: true })}
          />
          {/* {errors.Image && <span>This field is required</span>} */}
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            defaultValue={titlex}
            name="Title"
            onChange={(e) => setTitle(e.target.value)}
            ref={register({ required: true })}
          />
          {errors.Title && <span>This field is required</span>}
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            defaultValue={descx}
            onChange={(e) => setDesc(e.target.value)}
            ref={register({ required: true, minLength: 250 })}
            name="Description"
          ></textarea>
          {errors.Description && (
            <span>This field is required & minimum value is 250</span>
          )}
        </div>
        <button
          class="btn btn-outline-secondary mr-3  btn-search"
          type="submit"
          style={{ borderRadius: "5px" }}
        >
          Publish
        </button>
        <button
          class="btn btn-danger"
          type="button"
          style={{ borderRadius: "5px" }}
          onClick={(e) => deleteNews(e)}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Index;
