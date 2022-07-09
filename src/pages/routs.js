import React, { useEffect, useState } from "react";
import { getAllRoutes } from "../services/routes.services";

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

  function goDetail(e){
    window.location.href = "/" + String(e.detail);
  }

  return (
    <div style={{textAlign:"-webkit-center", marginTop:"30px"}}>
      <table className="table w-60">
        <thead>
          <tr>
            <th>id</th>
            <th>start_at</th>
            <th>end_at</th>
            <th>travel_time</th>
          </tr>
        </thead>
        <tbody>
          {isOnline &&
            isOnline.map((val, id) => {
              return (
                <tr key={id}>
                  <td>{val.id}</td>
                  <td>{val.start_at}</td>
                  <td>{val.end_at}</td>
                  <td>{val.travel_time}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
