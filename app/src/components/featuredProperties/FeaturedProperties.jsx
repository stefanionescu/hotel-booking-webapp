import "./featuredProperties.css";

import { useFetch } from "../../hooks/useFetch.js";

const FeaturedProperties = () => {
    const { data, loading, error } =
      useFetch("/hotels/?featured=true&limit=4");

    return (
        <div className="featuredProperties">
          {
            loading ? "Loading, please wait..." : <>
            {data.map(item => (
              <div className="featuredProperty" key={item._id}>
                <img
                  src={item.photos[0]}
                  alt=""
                  className="featuredPropertyImage"
                />
                <span className="featuredPropertyName">{item.name}</span>
                <span className="featuredPropertyCity">{item.city}</span>
                <span className="featuredPropertyPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className="featuredPropertyRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>}
              </div>
            ))}
          </>
          }
        </div>
    )
}

export default FeaturedProperties;
