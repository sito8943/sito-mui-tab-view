import PropTypes from "prop-types";

import { Box } from "@mui/material";

function SitoContainer(props) {
  const { children, className, sx, style } = props;

  return (
    <Box id="hola" className={className} sx={sx} style={style}>
      {children}
    </Box>
  );
}

SitoContainer.defaultProps = {
  className: "",
  sx: {},
  style: {},
  children: <></>,
};

SitoContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default SitoContainer;
