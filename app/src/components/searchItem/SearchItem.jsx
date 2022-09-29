import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="searchImageImg"
      />
      <div className="searchImageDesc">
        <h1 className="searchImageTitle">Tower Street Apartments</h1>
        <span className="searchImageDistance">500m from center</span>
        <span className="searchImageTaxiOperation">Free airport taxi</span>
        <span className="searchImageSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchImageFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="searchImageCancelOperation">Free cancellation </span>
        <span className="searchImageCancelOperationSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchImageDetails">
        <div className="searchImageRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchImageDetailTexts">
          <span className="searchImagePrice">$112</span>
          <span className="searchImageTaxOperation">Includes taxes and fees</span>
          <button className="searchImageCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
