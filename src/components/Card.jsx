import img from "../assets/bg.jpg";


export const Card = () => {
  return (
    <div className="">
      <div className="card w-full glass">
        <figure>
          <img className="w-2/6 rou" src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">Currency Converter</h2>
          <p>How to park your car at your garage?</p>
          <div className="flex justify-between items-center">
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Select language
              </option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
            </select>
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Select language
              </option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
            </select>
          </div>
          <div className="card-actions items-center justify-center py-6">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
