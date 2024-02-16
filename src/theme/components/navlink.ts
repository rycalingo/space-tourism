import { defineStyleConfig } from "@chakra-ui/react";

export const NavLink = defineStyleConfig({

  baseStyle: {

    fontFamily: "condensed",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: "2.7px",

    borderBottom: "4px solid",
    borderColor: "rgba(225,225,225,0.0)",

    _focus: {
      borderColor: "rgba(225,225,225,0.4)",
    },
  },

  variants: {
    active: {
      borderColor: ["rgba(225,225,225,0)", "rgba(225,225,225,0)","rgba(225,225,225,1)"],
    },
    hover: {
      borderColor: "rgba(225,225,225,0.4)",
    },
  },

})