import { forwardRef } from "react"; // @emotion

import { css } from "@emotion/css"; // prop-types

import PropTypes from "prop-types";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const SitoContainer = /*#__PURE__*/ forwardRef((props, ref) => {
  const {
    background,
    fullWidth,
    ignoreDefault,
    extraProps,
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
  const defaultProps = {
    flexDirection: !ignoreDefault ? flexDirection : undefined,
    display: !ignoreDefault ? display : undefined,
    alignItems: !ignoreDefault ? alignItems : undefined,
    justifyContent: !ignoreDefault ? justifyContent : undefined,
  };
  const newSx = css({
    ...defaultProps,
    width: fullWidth ? "100%" : undefined,
    background: background || undefined,
    ...sx,
  });
  return /*#__PURE__*/ _jsx("div", {
    ref: ref,
    style: style,
    id: id,
    name: name,
    className: `${className} ${newSx}`,
    ...extraProps,
    children: children,
  });
});
SitoContainer.defaultProps = {
  background: undefined,
  display: "flex",
  alignItems: undefined,
  justifyContent: undefined,
  flexDirection: undefined,
  className: "",
  id: "",
  name: "",
  fullWidth: false,
  ignoreDefault: false,
  sx: {},
  style: {},
  extraProps: {},
  children: /*#__PURE__*/ _jsx(_Fragment, {}),
};
SitoContainer.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  className: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  ignoreDefault: PropTypes.bool,

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
