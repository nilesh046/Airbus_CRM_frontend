import { Button, Image } from "react-bootstrap";

const MroMaintenanceHistoryUpdatePage = function ({resetChoiceUtility}) {
  const src1 = "/repair_history/img_1.jpeg";
  const src2 = "/repair_history/img_2.jpeg";
  const src3 = "/repair_history/img_3.jpeg";
  const src4 = "/repair_history/img_4.jpg";

  return(
    <>
      <div className="mb-4">
        <Button type="btn btn-primary" onClick={resetChoiceUtility}>Back</Button>
      </div>

      <div className="row ms-5">
        <div className="col-5">
          <h4>List of damaged parts from CV model:</h4>
          <div className="row mt-4">
            <div className="col-5">
              <Image src={src1} width={200} height={200} alt="Car Image 1" className="img" />
            </div>
            <div className="col-5">
              <Image src={src2} width={200} height={200} alt="Car Image 1" className="img" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-5">
              <Image src={src3} width={200} height={200} alt="Car Image 1" className="img" />
            </div>
            <div className="col-5">
              <Image src={src4} width={200} height={200} alt="Car Image 1" className="img" />
            </div>
          </div>
        </div>
        <div className="col-7 ">

          <h4>Choose the parts that require repair:</h4>
          <br></br>
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked />
            <label class="form-check-label">Hose pipe</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option2" value="something" />
            <label class="form-check-label">Combustion engine shaft</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option3" value="something" checked />
            <label class="form-check-label">Gate gears</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option4" value="something" />
            <label class="form-check-label">Lav doors</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option5" value="something" />
            <label class="form-check-label">Others</label>
          </div>

          <h4>Choose the parts that require replacement:</h4>
          <br></br>
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked />
            <label class="form-check-label">Hose pipe</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option2" value="something" />
            <label class="form-check-label">Combustion engine shaft</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option3" value="something" checked />
            <label class="form-check-label">Gate gears</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option4" value="something" />
            <label class="form-check-label">Lav doors</label>
            <br></br>
            <input class="form-check-input" type="checkbox" id="check1" name="option5" value="something" />
            <label class="form-check-label">Others</label>
          </div>

          <Button className="btn btn-primary">Save changes</Button>
        </div>
      </div>
    </>
  )
};
export default MroMaintenanceHistoryUpdatePage;
