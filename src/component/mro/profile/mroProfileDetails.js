import { Image } from "react-bootstrap";
import '../../../css/default.css';

const ProfileDetails = function () {
  return(
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="row justify-content-center">
              <Image src="/gmr_logo.svg" width={100} height={100} alt="Airbus Logo" className="img4 mt-4" />
            </div>
            <hr></hr>
            <div className="row justify-content-center mb-4">
              <h2>GMR MRO services</h2>
              <p class="price mb-5">Location: Hyderabad</p>
              <div className="row pl-5 pr-5">
                Expertise in Propulsion engines, Landing gears, Tail wing, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default ProfileDetails;
