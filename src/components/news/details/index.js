import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIT_GETNEWS } from "redux/actions";
import TruncateMarkup from "react-truncate-markup";
import { useParams } from "react-router";
const Index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { news } = useSelector((state) => ({
    news: state.news.data[id],
  }));
  const [newsx, setNewsx] = useState([]);
  useEffect(() => {
    const initial_payload = {
      page: 1,
      offset: 10,
    };
    dispatch({ type: HIT_GETNEWS, payload: initial_payload });
  }, []);
  console.log("daa", news)
  if(news === undefined) {
    //   alert("sdsd")
      return <div>Loading</div>
  }
  return (
    <div className="container mt-5 pb-3">
      <div className="title text-left h2 mb-1 font-weight-bold">
        {news.title}
      </div>
      <div className="posted text-left mb-5 font-italic">
        Posted : 13/01/1996
      </div>
      <div className="img float-left mb-3 mt-2 h-auto w-auto">
        <img
          src={news.image}
          alt=""
          className="mb-1 float-left"
          width="auto"
          height="300"
          style={{ borderRadius: "8px", border: "10px solid transparent"}}
        />
      </div>
      <div className="content">
        <p className="text-justify">
            {news.desc}
        </p>
      </div>
    </div>
  );
};

export default Index;
