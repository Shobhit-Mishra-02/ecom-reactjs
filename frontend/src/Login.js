import { Link } from "react-router-dom";
import { useState } from "react";
import userInfo from "./context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [user, setUser] = useContext(userInfo);
  const history = useHistory();

  const onSubmission = async () => {
    const info = {
      email,
      passwd,
    };
    const data = await fetch("http://localhost:5000/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const json = await data.json();
    console.log(json);

    if (json.validation) {
      setUser(JSON.stringify(json.data));
      localStorage.setItem("token", json.token);

      history.push("/");
    }
  };

  return (
    <div className="position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="container w-25 border rounded p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmission();
          }}
        >
          <h1 className="text-center fs-1 fw-bolder my-4">Login page</h1>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="passwd" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
            ></input>

            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>

            <Link to="/register" className="mx-3">
              to create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
