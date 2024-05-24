import { Image } from "react-bootstrap";
import '../../../css/default.css';

const GroundStaffProfileDetails = function () {
  return(
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="row justify-content-center">
              <Image src="/bob_logo.webp" width={20} height={100} alt="Airbus Logo" className="img3" />
            </div>
            <hr></hr>
            <div className="row justify-content-center mb-4">
              <h2>Bob Here</h2>
              <p class="price mb-5">Airport deployed: Delhi</p>
              <div className="row pl-5 pr-5">
                Expertise in dent repairs, hose pipes, water and vaccum fittings etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default GroundStaffProfileDetails;
