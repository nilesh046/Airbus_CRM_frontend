import { Image } from "react-bootstrap";
import '../../css/default.css';

const MroBanner = function () {
  return (
    <>
      <div>
        <header className="row">
          <div className="col-4 ml-5">
            <Image src="/gmr_logo.svg" width={200} height={180} alt="Airbus Logo" className="img5" />
          </div>
          <div className="col-7">
            <h1 className="mt-5"> 
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
export default MroBanner;