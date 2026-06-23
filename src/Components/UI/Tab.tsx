import { ReactNode, HTMLProps, memo, useState } from 'react';
import { cn } from '../../utils/lib/Cn';
import { Link } from 'react-router-dom';
import LeftArrow from './Icons/LeftArrow';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './DropDown';
import { SubLinks } from '../../Items/navbarTabs';

type Props = HTMLProps<HTMLLIElement> & {
  children: ReactNode;
  isActive: boolean;
  url: string;
  isDropdown?: boolean;
  links?: SubLinks[];
};

const Tab = ({
  children,
  isActive,
  url,
  isDropdown,
  links,
  ...props
}: Props) => {
  if (isDropdown) {
    const [open, setOpen] = useState(false);
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex justify-between items-center border-0 outline-0">
          <li
            {...props}
            className={cn(
              'relative cursor-pointer font-semibold max-w-max p-1 px-2 after:absolute after:w-[65%] after:rounded-full after:bg-purple after:h-1 after:top-full after:scale-0 after:origin-right after:right-0 after:transition after:duration-500 ',
              { 'after:scale-100': isActive },
            )}
          >
            {children}
          </li>
          <LeftArrow className="w-4 h-4 -rotate-90" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ direction: 'rtl' }}
          className="w-56 bg-pink rounded-2xl px-4 z-[100000] "
        >
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup>
            {links?.map((link) => (
              <DropdownMenuRadioItem
                value={link.id}
                className="cursor-pointer hover:translate-x-1 transition-all duration-300 max-w-fit"
                key={link.id}
                onClick={() => setOpen(false)}
              >
                <Link to={link.url}>{link.name}</Link>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Link to={url} className="flex items-center">
      <li
        {...props}
        className={cn(
          'relative cursor-pointer font-semibold max-w-max p-1 px-2 after:absolute after:w-[65%] after:rounded-full after:bg-purple after:h-1 after:top-full after:scale-0 after:origin-right after:right-0 after:transition after:duration-500 ',
          { 'after:scale-100': isActive },
        )}
      >
        {children}
      </li>
    </Link>
  );
};

export default memo(Tab);
