import { Image } from "react-bootstrap";
import '../../css/default.css';

const Banner = function () {
  return (
    <div>
      <header className="row">
        <div className="col-4 mt-5">
          <Image src="/airbus_logo.png" width={200} height={200} alt="Airbus Logo" className="img1" />
        </div>
        <div className="col-8">
          <h1 className="mt-5 mb-4"> 
              Welcome to the Airbus admin page
          </h1>
          <p>Navigate across all the partner airlines, manufuctured aircraft and related statistics that can help you drive future operations</p>
        </div>
      </header>

    </div>
  );
};
export default Banner;