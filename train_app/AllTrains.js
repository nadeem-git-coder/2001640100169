
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144/train/trains"
        );
        setTrains(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            {/* Display train details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
