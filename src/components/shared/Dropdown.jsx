import React from 'react';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import Rotate from '../animation/Rotate';
import Translate from '../animation/Translate';
import DropdownItem from './DropdownItem';

function Dropdown({ name, long, children }) {
  const [open, setOpen] = useState(false);

  let className = 'dropdown';
  if (!long) {
    className += '-short';
  }

  return (
    <article className={className}>
      <div className='dropdown-heading' onClick={() => setOpen(!open)}>
        <h3 className='dropdown-title'>{name}</h3>
        <Rotate arrow={open}>
          <Arrow />
        </Rotate>
      </div>
      <Translate arrow={open}>
        <DropdownItem>{open && children}</DropdownItem>
      </Translate>
    </article>
  );
}

export default Dropdown;
