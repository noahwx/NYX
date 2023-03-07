import logo from '../logo.svg';
import { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import Menu from "./menu";

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div class="flex justify-center header">
      <div class="container container-mobile flex justify-between laptop1280:py-[15px] py-[20px]">
        <div class="flex items-center">
          <a class="font-bold text-[30px]" href="/">
            <img src={logo} class="w-[80%]" alt="" />
          </a>
          <div class="ml-[62px] mobile:hidden" ref={dropdownRef}>
            <button
              class="text-dark-grey-100"
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
              Hover Menu
            </button>

            {isMenuDropDownOpen && <Menu />}
          </div>
        </div>
        <div class="flex items-center font-bold mobile:hidden">
          <a href class="mr-[50px] text-dark-green cursor-pointer">
            Login
          </a>
          <a
            href
            class="signup-button bg-green-500 text-white rounded-[30px] cursor-pointer"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
}