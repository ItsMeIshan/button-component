import React from "react";
import styles from "./Button.module.css";
import Icon from "../Icon";

const VARIANT_OPTIONS = ["defaultType", "outline", "text"];
const COLOR_OPTIONS = ["default", "primary", "secondary", "danger"];
const SIZE_OPTIONS = ["sm", "md", "lg"];

function Button({
  variant = "defaultType",
  disableShadow = false,
  color = null,
  disabled = false,
  size = "md",
  startIcon = "",
  endIcon = "",
  children,
  ...rest
}) {
  if (startIcon !== "" && endIcon !== "") {
    throw new Error(`Cannot specify both start and end icons.`);
  }
  if (!VARIANT_OPTIONS.includes(variant)) {
    throw new Error(`No variant found named: ${variant}`);
  }
  if (color != null && !COLOR_OPTIONS.includes(color)) {
    throw new Error(
      `cannot use color of: ${color} try using 'primary' 'secondary' or 'danger' `
    );
  }
  if (!SIZE_OPTIONS.includes(size)) {
    throw new Error(`cannot use size of: ${size} try using 'sm' 'md' or 'lg' `);
  }
  const buttonVariant = styles[variant];
  let colorVariantPrefix = "";
  let colorVariant = "default";

  if (color != null) {
    if (variant === "defaultType") {
      colorVariantPrefix = "";
      colorVariant = styles[colorVariantPrefix + color];
    } else {
      colorVariantPrefix = variant;
      colorVariant = styles[colorVariantPrefix + "-" + color];
    }
  }
  const sizeVariant = styles[size];
  return (
    <button
      style={
        {
          // boxShadow: `${disableShadow ? "none" : ""}`,
          // color: variant,
        }
      }
      className={`${styles.btn} ${buttonVariant} ${colorVariant} ${sizeVariant}`}
      {...rest}
      disabled={disabled}
    >
      {startIcon !== "" && <Icon id={startIcon} />}
      {children}
      {endIcon !== "" && <Icon id={endIcon} />}
    </button>
  );
}

export default Button;
