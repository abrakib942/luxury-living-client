import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import Service from "./Service";

const Services = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <p className="text-center text-primary font-bold ">Services</p>
      <h2 className="lg:text-4xl text-3xl text-neutral font-bold text-center lg:px-96 px-8">
        We're an agency tailored to all clients' needs that always delivers
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center mt-16 lg:px-32">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <button className="btn btn-primary text-white block mx-auto my-12">
        Explore more{" "}
      </button>
    </div>
  );
};

export default Services;
