import { Image } from "react-bootstrap";
import '../../css/default.css';

const BannerHomePage = function () {
  return (
    <>
      <div>
        <header className="row">
          <div className="col-4 mt-5">
            <Image src="/airbus_logo.png" width={200} height={200} alt="Airbus Logo" className="img1" />
          </div>
          <div className="col-8">
            <h1 className="mt-5 mb-4"> 
                Welcome to the Airbus smart CRM 
            </h1>
            <p>Choose your persona and head forward towards the unified paltform that uses the state-of-the-art AI and ML tools to help you run a better league.</p>
          </div>
        </header>
      </div>
      <hr />
    </>
  );
};
export default BannerHomePage;