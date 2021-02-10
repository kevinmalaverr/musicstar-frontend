import React from 'react';
import Link from 'next/link';
import IClose from './icons/close';

const Navbar = React.forwardRef(({ type, className, close }, ref) => {
  return (
    <nav ref={ref} className={`navbar navbar--${type} ${className}`}>
      {type === 'lateral' ? (
        <button className="close-menu" onClick={close}>
          <IClose />
        </button>
      ) : null}
      <ul>
        <Link href="/songs" className="Link">
          canciones
        </Link>
        <Link href="/lessons" className="Link">
          lecciones
        </Link>
      </ul>
    </nav>
  );
});

export default Navbar;
