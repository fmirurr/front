import React, { useEffect, useState } from "react";
import { getAllRoutes } from "../../services/routes.services";

export const Routes = () => {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await getAllRoutes();
      setIsOnline(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <p>You clicked times</p>
    </div>
  );
};
