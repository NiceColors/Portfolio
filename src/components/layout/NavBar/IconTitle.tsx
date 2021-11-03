import { useColorMode } from "@chakra-ui/react";
import React from "react";

export default function iconTitle() {

  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="none"
      >
        <rect
          width="13.262"
          height="13.262"
          x="5.369"
          y="6.554"
          stroke={colorMode === "light" ? "#000" : "#fff"}
          stroke-width="1.5"
          rx="6.631"
        />
        <path
          className="ponteiro"
          stroke={colorMode === "light" ? "#000" : "#fff"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12.018 13.185V8.908"
        />
        <path
          stroke={colorMode === "light" ? "#000" : "#fff"}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M10.5 4.185h3"
        />
      </svg>
    </div>
  );
}
