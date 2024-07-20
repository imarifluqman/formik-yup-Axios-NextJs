import axios from "axios";
function Axios(params) {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      ...params,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { Axios };
