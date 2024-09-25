import PropTypes from "prop-types";

const NavLinksWrapper = ({ children }) => {
  return (
    <ul className="px-4 md:px-10 xl:px-0 flex flex-col xl:flex-row max-xl:mt-40 gap-7 font-semibold">
      {children}
    </ul>
  );
};

NavLinksWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLinksWrapper;