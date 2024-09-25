import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const TestimonialItem = ({ rating, name, role, message, image }) => {
  return (
    <div className="max-w-sm flex flex-col justify-between px-3 py-6 bg-white rounded-lg">
      {/* rating */}
      <div className="flex">
        {Array.from({ length: rating }).map((_, index) => (
          <div
            key={index}
            className="">
            <Icon
              icon={"mdi:star"}
              width={24}
              height={24}
              className="text-primary-vividCyanBlue"
            />
          </div>
        ))}
      </div>

      {/* message */}
      <p className="text-gray-700 lg:text-lg my-5">&quot;{message}&quot;</p>

      {/* author */}
      <div className="flex items-center flex-nowrap gap-3">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h3 className="lg:text-lg font-extrabold">{name}</h3>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TestimonialItem;