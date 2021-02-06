import React from 'react';
import Bicycle from "assets/images/bicycle.svg";
const Index = () => {
    return (
      <div className="w-100 ">
        <div className="section1 d-md-flex d-block col-12 col-md-12">
          <div
            className="left-side col-12 col-md-6"

          >
            <div
              className="text-left float-left title w-100 mb-3"
              style={{ paddingTop: "50px" }}
            >
              Our daily Dose for News
            </div>
            <div className="text-left w-100 pt-5">
              <span className="pt-5" style={{ paddingTop: "50px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                reprehenderit consectetur, laboriosam vitae fugit pariatur
                repellat veritatis dolorem obcaecati commodi fuga adipisci,
                quaerat eum architecto impedit, vero cumque amet veniam?
              </span>
            </div>
            <div className="mt-5 text-left">
              <div
                className="btn btn-primary"
                style={{
                  backgroundColor: "#f0bb39",
                  color: "#ca5224",
                  borderColor: "#f0bb39",
                }}
              >
                Subscribe
              </div>
            </div>
          </div>
          <div
            className="w-100 right-side d-none d-md-block col-md-6 float-right"
            style={{ padding: "0 5%" }}
          >
            <img src={Bicycle} alt="" className="mt-5 narateBicycle" />
          </div>
          <div
            className="w-100 right-side d-block d-md-none col-12 col-md-6"
            style={{ padding: "0 5%" }}
          >
            <img src={Bicycle} alt="" className="mt-5 narateBicycle" />
          </div>
        </div>
      </div>
    );
};

export default Index;