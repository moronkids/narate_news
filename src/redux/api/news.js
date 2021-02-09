import defaultAxios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect, Link } from "react-router-dom";
import { loadX } from "components/parts/sweetalert2";
import { useHistory } from "react-router-dom";
const MySwal = withReactContent(Swal);
const axios = defaultAxios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: false,
  crossorigin: true,
});

export const getNews = async (data, props) => {
  //   loadX();

  let datax = {};
  const todos = await axios
    .get(`news/?page=1&limit=10`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        datax = {
          token: null,
        };
        if ("errors" in error.response.data) {
          if ("email" in error.response.data.errors) {
            datax.message = error.response.data.errors.email.msg;
          }
          if ("password" in error.response.data.errors) {
            datax.message = error.response.data.errors.password.msg;
          }
        } else if ("message" in error.response.data) {
          datax.message = error.response.data.message;
        }
      }
    });
  if ("token" in datax) {
    return datax;
  } else {
    datax = {
      message: todos.data.message,
      data: todos.data.data,
    };
    return datax;
  }
};
export const getOneNews = async (data, props) => {
  //   loadX();
  let datax = {};
  const todos = await axios.get(`news/getOne/${data}`).catch(function (error) {
    if (error.response.status !== 200) {
      datax = {
        token: null,
      };
      if ("errors" in error.response.data) {
        if ("email" in error.response.data.errors) {
          datax.message = error.response.data.errors.email.msg;
        }
        if ("password" in error.response.data.errors) {
          datax.message = error.response.data.errors.password.msg;
        }
      } else if ("message" in error.response.data) {
        datax.message = error.response.data.message;
      }
    }
  });
  if ("token" in datax) {
    return datax;
  } else {
    datax = {
      message: todos.data.message,
      data: todos.data.data,
    };
    return datax;
  }
};
export const putNews = async (data, props) => {
  loadX();
  console.log(data, "tess");
  let datax = {};
  const todos = await axios
    .put(`news/${data[0]}`, data[1])
    .catch(function (error) {
      if (error.response.status !== 200) {
        datax = {
          token: null,
        };
        if ("errors" in error.response.data) {
          if ("email" in error.response.data.errors) {
            datax.message = error.response.data.errors.email.msg;
          }
          if ("password" in error.response.data.errors) {
            datax.message = error.response.data.errors.password.msg;
          }
        } else if ("message" in error.response.data) {
          datax.message = error.response.data.message;
        }
      }
    });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
    });
    return datax;
  } else {
    datax = {
      message: todos.data.message,
      data: todos.data.data,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>{todos.data.message}</h5>,
    }).then(e => {
      return window.location.href ="/dashboard"
    })
    return datax;
  }
};
export const postNews = async (data, props) => {
  loadX();
  console.log(data, "tess");
  let datax = {};
  const todos = await axios
    .post(`/news`, data[1])
    .catch(function (error) {
      if (error.response.status !== 200) {
        datax = {
          token: null,
        };
        if ("errors" in error.response.data) {
          if ("email" in error.response.data.errors) {
            datax.message = error.response.data.errors.email.msg;
          }
          if ("password" in error.response.data.errors) {
            datax.message = error.response.data.errors.password.msg;
          }
        } else if ("message" in error.response.data) {
          datax.message = error.response.data.message;
        }
      }
    });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
    });
    return datax;
  } else {
    datax = {
      message: todos.data.message,
      data: todos.data.data,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>Success create News!</h5>,
    }).then((e) => {
      window.location.pathname = "/news";
    });
    return datax;
  }
};
export const deleteNews = async (data, props) => {
  loadX();
  console.log(data, "tess");
  let datax = {};
  const todos = await axios
    .delete(`news/${data}`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        datax = {
          token: null,
        };
        if ("errors" in error.response.data) {
          if ("email" in error.response.data.errors) {
            datax.message = error.response.data.errors.email.msg;
          }
          if ("password" in error.response.data.errors) {
            datax.message = error.response.data.errors.password.msg;
          }
        } else if ("message" in error.response.data) {
          datax.message = error.response.data.message;
        }
      }
    });
  if ("token" in datax) {
    MySwal.fire({
      icon: "error",
      title: <h5>{datax.message}</h5>,
    });
    return datax;
  } else {
    datax = {
      message: todos.data.message,
      data: todos.data.data,
    };
    MySwal.fire({
      icon: "success",
      title: <h5>{todos.data.message}</h5>,
    }).then(e => {
      window.location.pathname = "/news"
    })
    return datax;
  }
};
