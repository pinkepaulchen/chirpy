import Menu from '@geist-ui/react-icons/menu';
import Dismiss from '@geist-ui/react-icons/x';
import { m, useCycle, Variants } from 'framer-motion';
import * as React from 'react';
import tw, { TwStyle } from 'twin.macro';

import { IconButton } from '$/components/Button';
import { useClickOutside } from '$/hooks/useClickOutside';
import { ssrMode } from '$/utilities/env';

import { SideMenuContextProvider, useSideMenuContext } from './SideMenuContext';

export type SideMenuProps = {
  direction?: 'tl' | 'br';
  styles?: {
    items?: TwStyle;
  };
  children: React.ReactNode;
};

const circlePosStyle = {
  tl: '30px 32px',
  br: `calc(100% - 30px) calc(100% - 30px)`,
};

const navVariants: Variants = {
  open: {
    zIndex: 21,
  },
  closed: {
    transitionEnd: {
      zIndex: 0,
    },
  },
};

/**
 * SideMenu is a toggle menu on mobile views.
 */
export function SideMenu({ children, direction = 'tl', styles }: SideMenuProps): JSX.Element {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useClickOutside(() => isOpen && toggleOpen(0));
  const [containerStyles, buttonStyles] = posStyles[direction];
  const backgroundVariant = React.useMemo(() => {
    const pos = circlePosStyle[direction];
    return {
      open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at ${pos})`,
        transition: {
          type: 'spring',
          stiffness: 20,
          restDelta: 2,
        },
      }),
      closed: {
        clipPath: `circle(18px at ${pos})`,
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
    };
  }, [direction]);
  return (
    <m.nav
      initial={false}
      variants={navVariants}
      animate={isOpen ? 'open' : 'closed'}
      custom={!ssrMode ? document.body.clientHeight : undefined}
      tw="w-[250px] h-[100vh] fixed top-0 bottom-0"
      css={[containerStyles]}
      ref={containerRef}
    >
      <m.div tw="bg-gray-200 absolute inset-0" variants={backgroundVariant} />
      <SideMenuContextProvider onClickMenuItem={() => toggleOpen(0)}>
        <SideMenuItems css={styles?.items}>{children}</SideMenuItems>
      </SideMenuContextProvider>
      <IconButton aria-expanded={isOpen} onClick={() => toggleOpen()} tw="" css={buttonStyles}>
        <span tw="sr-only">Open navigation menu</span>
        <Menu css={[isOpen && tw`hidden`]} />
        <Dismiss css={[!isOpen && tw`hidden`]} />
      </IconButton>
    </m.nav>
  );
}

SideMenu.Item = SideMenuItem;

const posStyles = {
  tl: [tw`left-0`, tw`absolute top-[18px] left-[18px]`],
  br: [tw`right-0`, tw`fixed bottom-[18px] right-[18px]`],
};

type SideMenuItemsProps = {
  children: React.ReactNode;
  className?: string;
};

const itemsVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function SideMenuItems({ children, className }: SideMenuItemsProps): JSX.Element {
  return (
    <m.ul
      css={[tw`flex flex-col absolute top-[75px] space-y-4`]}
      variants={itemsVariants}
      className={className}
    >
      {children}
    </m.ul>
  );
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    zIndex: 0,
  },
  closed: {
    y: 50,
    opacity: 0,
    transitionEnd: {
      zIndex: -1,
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export type SideMenuItemProps = {
  children: React.ReactNode;
};

function SideMenuItem({ children }: SideMenuItemProps): JSX.Element {
  const { onClickMenuItem } = useSideMenuContext();
  return (
    <m.li variants={itemVariants} onClick={onClickMenuItem}>
      {children}
    </m.li>
  );
}