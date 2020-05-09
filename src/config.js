export const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("user-token"),
  },
  apiURL: "http://localhost:3000/api/",
  network: {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
  },
};
