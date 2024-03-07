import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
            <div id="grid" className="row">
              <div className="mix col-sm-3 page1 page4 margin30">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/FFB6C1/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3 page2 page3 margin30">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/20B2AA/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3  page3 page2 margin30 ">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/87CEFA/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3  page4 margin30">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/EE82EE/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3 page1 margin30 ">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/#FF6347/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3  page2 margin30">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/008080/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3  page3 margin30">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/DDA0DD/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mix col-sm-3 page4  margin30">
                <div className="item-img-wrap ">
                  <img
                    src="https://www.bootdey.com/image/312x315/FFA500/000000"
                    className="img-responsive"
                    alt="workimg"
                  />
                  <div className="item-img-overlay">
                    <a href="#" className="show-image">
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*grid*/}
          </div>
        </div>
        <div className="row gallery-bottom">
          <div className="col-sm-6">
            <ul className="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 text-end">
            <em>Displaying 1 to 8 (of 100 posts)</em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
