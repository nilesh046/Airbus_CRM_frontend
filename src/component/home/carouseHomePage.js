import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import '../../css/default.css';

const CarouselWrapperHomePage = function () {
  const src1 = "/carousel/airbus_img_1.webp";
  const src2 = "/carousel/img_3.png";
  return (
    <Carousel className='container'>
      <Carousel.Item>
        <Image src={src1} width={200} height={200} alt="Car Image 1" className="img3" />
        <Carousel.Caption>
          <h3>All partner airlines and aircrafts manufactured at one place</h3>
          <p>With the integrated analytics you can even get insights to the operation statistics and link the same with you SAP ERP solution to increase profits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={src2} width={200} height={200} alt="Car Image 1" className="img3" />
        <Carousel.Caption>
          <h3>Statistics from customer's repair and maintenance history</h3>
          <p>Draw insightful statistics that can help team to focus on RnD specifically for areas getting the most issues</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselWrapperHomePage;