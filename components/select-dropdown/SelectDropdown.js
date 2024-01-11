"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const SelectDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{props.placeholder}</DropdownToggle>
      {/* <DropdownToggle caret>Deepesh Jain <br /><span>Software Developer</span></DropdownToggle> */}
      <DropdownMenu>
        <DropdownItem>Deepesh</DropdownItem>
        <DropdownItem>Neha</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SelectDropdown;
