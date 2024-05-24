import { Image } from "react-bootstrap";
import '../../css/default.css';

const GroundStaffBanner = function () {
  return (
    <>
    <div>
      <header className="row">
        <div className="col-4 ml-5">
          {/* <Image src="/airbus_logo.png" width={200} height={200} alt="Airbus Logo" className="img1" /> */}
          <Image src="/mechanic_logo.avif" width={200} height={200} alt="Airbus Logo" className="img6" />
        </div>
        <div className="col-7">
          <h1 className="mt-5 mb-4"> 
              Welcome to the MRO page
          </h1>
          <p>Navigate across your maitenance history, analyse all your customer airlines data at one place and build strategies to enhance your revenues </p>
        </div>
      </header>
    </div>
    <hr />
    </>
  );
};
export default GroundStaffBanner;