import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HIT_GETNEWS } from "redux/actions";
import TruncateMarkup from "react-truncate-markup";
import { Link } from "react-router-dom";
import moment from "moment";
const Index = () => {
  const dispatch = useDispatch();
  const {news} = useSelector((state) => ({
    news : state.news
  }))
  const [newsx, setNewsx] = useState([])
  useEffect(() => {
    const initial_payload = {
      page: 1,
      offset: 10
    }
    dispatch({type: HIT_GETNEWS, payload: initial_payload});

  }, []);
  const originalText = "/* ......readmore */";

  const wordsLeftEllipsis = (rootEl) => {
    const originalWordCount = originalText.match(/\S+/g).length;
    const newTruncatedText = rootEl.props.children;
    const currentWordCount = newTruncatedText.match(/\S+/g).length;

    return `... (+${originalWordCount - currentWordCount} words)`;
  };
  return (
    <div className="mt-5">
      {console.log(news.data.length, news, "test")}
      {news &&
        Object.keys(news.data).map(val =>  {
          return (
            <Link to={`/news/detail/${news.data[val].id}`}>
              <div className="d-flex row col-12 col-md-8 mb-5 m-0 p-0">
                <div className="col-md-auto col-sm-auto col-3 text-left mr-2">
                  <div
                    className="mb-2"
                    style={{
                      backgroundImage: `url(${news.data[val].image})`,
                      width: "100px",
                      height: "100px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100px",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <span className="w-100 h-7 text-left mb-2 mt-2">
                    Posted : <br />
                    {moment(news.data[val].created_at)
                      .utc()
                      .format("MM-DD-YYYY")
                      .toString()}
                  </span>
                </div>
                <div className="ml-2 ml-sm-0 text-left ml-md-2 ml-0 col-md-8 col-8">
                  <div className="h3 font-weight-bold">
                    {news.data[val].title}
                  </div>
                  <TruncateMarkup lines={5}>
                    <p className="">{news.data[val].desc}</p>
                  </TruncateMarkup>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Index;
