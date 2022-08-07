import React from "react";
import Loading from "../Shared/Loading";
import Service from "./Home/Service";
import { useQuery } from "react-query";

const AllServices = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center mt-16 lg:px-32">
        {services?.slice(0, 3).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
