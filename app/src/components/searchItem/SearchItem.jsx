import "./searchItem.css";

import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="searchImage"
      />
      <div className="searchImageDesc">
        <h1 className="searchImageTitle">{item.name}</h1>
        <span className="searchImageDistance">{item.distance} from city centre</span>
        <span className="searchImageTaxiOperation">Free airport taxi</span>
        <span className="searchImageSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchImageFeatures">
          {item.description}
        </span>
        <span className="searchImageCancelOperation">Free cancellation </span>
        <span className="searchImageCancelOperationSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchImageDetails">
        {item.rating && <div className="searchImageRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="searchImageDetailTexts">
          <span className="searchImagePrice">${item.cheapestPrice}</span>
          <span className="searchImageTaxOperation">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="searchImageCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
