import React, { useState } from 'react';
import Navbar from './Navbar';
import { AccountHeader } from './AccountHeader';
import Link from 'next/link';
import { useOutsideClick } from '../hooks/useOutsideClick';
import ILogo from './icons/logo';
import IHamburger from './icons/hamburger';

const Header = () => {
  const [showLateralMenu, setShowLateralMenu] = useState(false);
  const lateralMenuRef = useOutsideClick(() => setShowLateralMenu(false));

  return (
    <header className="header">
      <Link href="/">
        <ILogo />
      </Link>
      <div />
      <Navbar type="header" />
      <AccountHeader />
      <button
        className="show-menu"
        onClick={() => setShowLateralMenu(!showLateralMenu)}
      >
        <IHamburger />
      </button>
      <Navbar
        ref={lateralMenuRef}
        type="lateral"
        close={() => setShowLateralMenu(false)}
        className={showLateralMenu ? 'active' : ''}
      />
    </header>
  );
};

export default Header;
