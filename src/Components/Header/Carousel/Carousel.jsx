import './Carousel.scss'
import { FaCircleArrowRight } from 'react-icons/fa6'


const Carousel = () => {
  return (
    <div className="container mb-5">
      <div id="carousel"
        className="carousel carousel-dark slide custom-carousel
      col-12 m-auto mt-5"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={'../../../assets/images/slider1.jpg'} className="d-block w-100" alt="..." />

            <div className="content-wrapper">
              <div className="content-header">
                <div className="content-description">Exclusive Offer</div>
                <div className="content-discount">-20% Off</div>
              </div>
              <div className="content-main">
                <h3 className="entry-title">A different kind of grocery store</h3>
                <div className="content-text">Only this week. Don’t miss...</div>
              </div>
              <div className="content-footer">
                <span className="price-text">from </span>
                <span className="price">$7.99</span>
              </div>
              <a href="/" className="button button-secondary custom-btn" tabIndex="0">
                Shop Now <FaCircleArrowRight className='btn-icon' />
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={'../../../assets/images/slider2.jpg'} className="d-block w-100" alt="..." />

            <div className="content-wrapper"><div className="content-header">
              <div className="content-description">Exclusive Offer</div>
              <div className="content-discount">-40% Off</div>
            </div>
              <div className="content-main">
                <h3 className="entry-title">Quality Freshness Guaranteed! </h3>
                <div className="content-text">Only this week. Don’t miss...</div>
              </div>
              <div className="content-footer">
                <span className="price-text">from </span>
                <span className="price">$14.35</span>
              </div>
              <a href="/" className="button button-secondary custom-btn" tabIndex="0">
                Shop Now <FaCircleArrowRight className='btn-icon' />
              </a>
            </div>

          </div>
          <div className="carousel-item">
            <img src={'../../../assets/images/slider3.jpg'} className="d-block w-100" alt="..." />

            <div className="content-wrapper">
              <div className="content-header">
                <div className="content-description">Exclusive Offer</div>
                <div className="content-discount">-20% Off</div>
              </div>
              <div className="content-main">
                <h3 className="entry-title">Having the best quality products</h3>
                <div className="content-text">Only this week. Don’t miss...</div>
              </div><div className="content-footer">
                <span className="price-text">from </span>
                <span className="price">$5.45</span>
              </div>
              <a href="/" className="button button-secondary custom-btn" tabIndex="0">
                Shop Now <FaCircleArrowRight className='btn-icon' />
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


  )
}

export default Carousel