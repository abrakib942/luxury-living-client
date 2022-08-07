import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import Service from "./Service";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchServices } from "../../redux/slices/serviceSlice";

const Services = () => {
  // const { data: services, isLoading } = useQuery("services", () =>
  //   fetch("http://localhost:5000/service").then((res) => res.json())
  // );

  const { isLoading, services, error } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <h2 className="text-2xl text-red-500">Error</h2>
      </>
    );
  }

  return (
    <div className="">
      <p className="text-center text-primary font-bold ">Services</p>
      <h2 className="lg:text-4xl text-3xl text-neutral font-bold text-center lg:px-96 px-8">
        We're an agency tailored to all clients' needs that always delivers
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center mt-16 lg:px-32">
        {services?.slice(0, 3).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center">
        <Link to="/service" className="btn btn-primary text-white my-12">
          Explore more{" "}
        </Link>
      </div>
    </div>
  );
};

export default Services;
