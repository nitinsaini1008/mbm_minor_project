import "./styles.css";
import {useEffect, useState} from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [result, setResult] = useState("");
  useEffect(() => {
    getData()
  }, []);

  const getData = async() => {
    const response = await fetch("get-location");
    const data = await response.json()
    console.log("data", data)
    setData(data);
  }

  const changeInput = (e) => {
    console.log(e.target.name, e.target.value)
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(postData);
    fetch("/predict-price", {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData)
    }).then(res => res.json()).then((data)=>setResult(data.price));
  }

  return (
    <div className="main-app">
      <div className="row w-100">
        <div className="col-lg-6 col-md-6 col-12">     
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="area">Area(Sqft)</label>
              <input name="area" type="text" onChange={changeInput} className="form-control" id="area" placeholder="Enter Area"/>
            </div>
              <div className="form-group">
              <label for="BHK">BHK</label>
              <input name="bhk" type="number" onChange={changeInput} className="form-control" id="BHK" placeholder="Enter BHK"/>
            </div>
              <div className="form-group">
              <label for="Bathroom">Bathroom</label>
              <input name="bathroom" type="number" onChange={changeInput} className="form-control" id="Bathroom" placeholder="Enter Bathroom"/>
            </div>
            <div class="form-group">
              <label for="location">Location</label>
              <select name="loaction" onChange={changeInput} class="form-control" id="location">
                {
                 data && data.location_columns.map((item) => (
                    <option value={item}>{item}</option>
                 ))
                }
              </select>
            </div>
            <div class="form-group">
              <label for="location">Availability</label>
              <select name="availability" onChange={changeInput} class="form-control" id="location">
                {
                 data && data.availability_columns.map((item) => (
                    <option value={item}>{item}</option>
                 ))
                }
              </select>
            </div>
            <div class="form-group">
              <label for="location">Area-Type</label>
              <select name="type" onChange={changeInput} class="form-control" id="location">
                {
                 data && data.area_columns.map((item) => (
                    <option value={item}>{item}</option>
                 ))
                }
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-lg-6 m-auto col-md-6 col-12">
           <h2 className="text-center my-3">Result - {result}</h2>
        </div>
      </div>
    </div>
  );
}
