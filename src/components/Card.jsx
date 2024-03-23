import img from "../assets/bg.jpg";

export const Card = () => {
  return (
    <div className="">
      <div className="card w-3/4 mx-auto glass">
        <figure>
          <img className="w-2/6 rounded-2xl" src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center p-0 text-blue-600">Currency Converter</h2>

          <div className="flex flex-col justify-between items-center">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-emerald-900">
                  From
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-16"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-emerald-900">
                  To
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-16"
              />
            </label>
          </div>
          <div className="card-actions items-center justify-center py-3">
            <button className="btn btn-primary">Convert now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
