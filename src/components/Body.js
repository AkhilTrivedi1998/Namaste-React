import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((res) => {
            return <RestaurentCard key={res.id} data={res} />
          })}
        </div>
      </div>
    )
}

export default Body;