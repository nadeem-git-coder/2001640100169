// src/components/SingleTrain.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleTrain = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144/train/trains/${trainNumber}`
        );
        setTrain(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [trainNumber]);

  return (
    <div>
      <h2>Single Train Details</h2>
      {train ? (
        <div>
          {/* Display train details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;
