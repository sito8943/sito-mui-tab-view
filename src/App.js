import { forwardRef } from "react";

// @emotion
import { css } from "@emotion/css";

// prop-types
import PropTypes from "prop-types";

const SitoContainer = forwardRef((props, ref) => {
  const {
    background,
    fullWidth,
    extraProps,
    component,
    children,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    className,
    sx,
    id,
    name,
    style,
  } = props;

  const newSx = css({
    flexDirection,
    display,
    alignItems,
    justifyContent,
    width: fullWidth ? "100%" : "initial",
    background: background || "transparent",
    ...sx,
  });

  return (
    <div
      ref={ref}
      style={style}
      id={id}
      name={name}
      className={`${className} ${newSx}`}
      {...extraProps}
    >
      {children}
    </div>
  );
});

SitoContainer.defaultProps = {
  component: "div",
  background: "transparent",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  flexDirection: "row",
  className: "",
  id: "",
  name: "",
  fullWidth: false,
  sx: {},
  style: {},
  extraProps: {},
  children: <span>This is a container</span>,
};

SitoContainer.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  display: PropTypes.string,
  component: PropTypes.string,
  flexDirection: PropTypes.string,
  className: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
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
  extraProps: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default SitoContainer;
