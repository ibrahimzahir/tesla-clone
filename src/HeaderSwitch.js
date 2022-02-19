import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import HeaderBlock from "./HeaderBlock";

function HeaderSwitch() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <HeaderBlock />
    </div>
  );
}

export default HeaderSwitch;
