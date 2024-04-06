'use client';

import Link from 'next/link';

import GitHub from '@/components/Icons/Social/GitHub';

import style from './index.module.css';
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import LogoutButton from '@/components/logoutButton';

const NavBar = () => {
  return (
    <nav className={`${style.container}`}>
      <div className={style.nodeIconAndMobileItemsToggler}>
        <Link className={style.nodeIconWrapper} href="/" aria-label="Home">
          {/* logo here */}
        </Link>
      </div>

      <div className={`${style.main} peer-checked:flex`}>
        <div className={style.actionsWrapper}>
          {/* <SearchButton /> */}
          <ModeToggle />
          <Link href="https://github.com/nodejs/node" aria-label="Node.js Github">
            <Button variant="outline" size="icon">
              <GitHub />
            </Button>
          </Link>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
