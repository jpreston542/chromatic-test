import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

//* * MUI props not exposed: classes, disableElevation, disableRipple, endIcon, fullWidth, startIcon, sx **//
const Button = React.forwardRef(
  (
    {
      children,
      variant,
      color,
      disabled,
      href,
      size,
      onClick,
      startIcon,
      endIcon,
      type,
      marginX,
      testId
    },
    ref
  ) => (
    <MuiButton
      ref={ref}
      type={type}
      data-testid={testId}
      variant={variant}
      color={color}
      disabled={disabled}
      href={href}
      size={size}
      component={href ? "a" : "button"}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        marginX: marginX ? 1 : 0,
        borderRadius: 5,
        border: "5px solid yellow"
      }}
    >
      {children}!!
    </MuiButton>
  )
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "success", "error"]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  marginX: PropTypes.bool,
  testId: PropTypes.string
};

Button.defaultProps = {
  color: "primary",
  type: "button",
  disabled: false,
  href: null,
  size: "large",
  variant: "contained",
  onClick: null,
  startIcon: null,
  endIcon: null,
  marginX: false,
  testId: "Button-root"
};

export default Button;
