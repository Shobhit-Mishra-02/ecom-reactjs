import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [gender, setGender] = useState("female");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [selectPasswd, setSelectPasswd] = useState(0);
  const [validate, setValidate] = useState(0);
  const history = useHistory();

  const validatePasswd = () => {
    if (passwd == confirmPasswd) {
      setValidate(1);
    }
  };

  const onSubmission = async () => {
    console.log(`${name} ${email} ${passwd} ${gender}`);

    if (passwd == confirmPasswd) {
      const info = { name, passwd, email, gender };
      const data = await fetch("http://localhost:5000/adduser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const json = await data.json();
      console.log(json);
      history.push("/login");
    } else {
      console.log(false);
      validatePasswd();
    }
  };
  return (
    <div className="position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="container w-25 border border-4 rounded p-4 has-validation">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmission();
          }}
        >
          <h1 className="text-center fs-1 fw-bolder my-4">Register page</h1>
          <hr />
          <div className="mb-3">
            <label htmlFor="unsername" className="form-label">
              Enter name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>

            <label htmlFor="radiobtn" className="form-label">
              Select gender
            </label>

            <div id="radiobtn">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={(e) => setGender("male")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                  onClick={(e) => setGender("female")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
            </div>

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
              onInput={(e) => setSelectPasswd(1)}
            ></input>

            <label htmlFor="confirm-passwd" className="form-label">
              Confirm password
            </label>

            {!selectPasswd ? (
              <input
                type="password"
                className="form-control"
                value={confirmPasswd}
                onChange={(e) => setConfirmPasswd(e.target.value)}
                disabled
              ></input>
            ) : (
              <input
                type="password"
                className="form-control"
                value={confirmPasswd}
                onChange={(e) => setConfirmPasswd(e.target.value)}
              ></input>
            )}

            <button type="submit" className="btn btn-primary my-2">
              Register
            </button>

            <Link to="/" className="mx-3">
              back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
