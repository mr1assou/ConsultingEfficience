'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const [openKey, setOpenKey] = useState(null);
  const pathname = usePathname();

  const open = (key) => setOpenKey(key);
  const close = () => setOpenKey(null);

  const isActive = (href) =>
    pathname === href ? { color: '#307926' } : {};

  return (
    <ul className="navigation clearfix">
      {/* Accueil */}
      <li
        className="dropdown"
        onMouseEnter={() => open(1)}
        onMouseLeave={close}
      >
        <Link href="/" style={isActive('/')}>
          Accueil
        </Link>
      </li>

      {/* À propos */}
      {/* <li
        className="dropdown"
        onMouseEnter={() => open(2)}
        onMouseLeave={close}
      >
        <Link href="/a_propos" style={isActive('/a_propos')}>
          À propos
        </Link>
      </li> */}

      {/* Domaines D'interventions */}
      <li
        className="dropdown"
        onMouseEnter={() => open(3)}
        onMouseLeave={close}
      >
        <Link href="/services" style={isActive('/services')}>
          Domaines D&apos;interventions
        </Link>
        <ul style={{ display: openKey === 3 ? 'block' : 'none' }}>
          <li>
            <Link href="/formation" style={isActive('/formation')}>
              Nos Formations
            </Link>
          </li>
          <li>
            <Link href="/coaching" style={isActive('/coaching')}>
              Coaching
            </Link>
          </li>
        </ul>
      </li>

      {/* Expertise financière */}
      <li
        className="dropdown"
        onMouseEnter={() => open(4)}
        onMouseLeave={close}
      >
        <Link
          href="/expertise_financiere"
          style={{
            textTransform: 'uppercase',
            ...isActive('/expertise_financiere'),
          }}
        >
          Expertise financière
        </Link>
      </li>

      {/* ACTUALITÉS */}
      <li
        className="dropdown"
        onMouseEnter={() => open(5)}
        onMouseLeave={close}
      >
        <Link href="/actualite" style={isActive('/actualite')}>
          ACTUALITÉS
        </Link>
      </li>

      {/* Nos engagements */}
      <li
        className="dropdown"
        onMouseEnter={() => open(6)}
        onMouseLeave={close}
      >
        <Link href="/engagement" style={isActive('/engagement')}>
          Nos engagements
        </Link>
      </li>

      {/* Contact */}
      <li>
        <Link href="/contact" style={isActive('/contact')}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
