import axios from "axios";

const apiEP =
  process.env.NODE_ENV === "production"
    ? "/api/v1/users"
    : "http://localhost:8000/api/v1/users";

const postUser = (usrObj) => {
  try {
  } catch {
    error;
  }
  {
    return {
      status: "error",
      message: error.message,
    };
  }
};
