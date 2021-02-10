import React, { useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import Link from 'next/link';

const user = {
  // name: 'gatomon',
  // photo: 'https://lh3.googleusercontent.com/ogw/ADGmqu_b6BOzJY53OJ9W2V6CmpkV_4gcSGQ-H5lV7MFU=s32-c-mo',
  // points: 451
};

export const AccountHeader = () => {
  const [isShow, setShow] = useState(false);
  const ref = useOutsideClick(() => setShow(false));

  return (
    <>
      {user ? (
        <div ref={ref} className="account-header__container">
          <button
            className="account-header__profile"
            onClick={() => setShow(!isShow)}
          >
            <img
              src={user.photo || '/images/default_profile_photo.png'}
              alt="perfil"
            />
            <span>{user.points} pts</span>
          </button>
          <div
            className={`account-header__modal ${
              isShow ? 'account-header__modal--show' : ''
            }`}
          >
            <img
              src={user.photo || '/images/default_profile_photo.png'}
              alt="perfil"
            />
            <p>{user.name}</p>
            <ul>
              <li>
                <Link className="Link" href="/profile">
                  Ver perfil
                </Link>
              </li>
              <li>
                <Link className="Link" href="sign-out">
                  Cerrar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <Link href={routes.login} className="Link">
            Iniciar sesion
          </Link>
          <Link href={routes.register} className="Link fill">
            Registrarse
          </Link>
        </div>
      )}
    </>
  );
};
