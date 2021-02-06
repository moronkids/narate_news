import React from "react";
import Content from "components/news/contents"
const Index = () => {
  return (
    <>
      <div className="section1" style={{ paddingTop: "70px" }}>
        <div class="input-group col-md-6 col-12">
          <input
            type="text"
            class="form-control"
            placeholder="Search Article that you want know....."
            aria-label="Recipient's username with two button addons"
            aria-describedby="button-addon4"
          />
          <div class="input-group-append ml-3" id="button-addon4">
            <button
              class="btn btn-outline-secondary btn-search"
              type="button"
              style={{ borderRadius: "5px" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
        <div className="section2">
            <Content/>
        </div>
    </>
  );
};

export default Index;
