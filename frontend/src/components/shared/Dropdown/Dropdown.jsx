import React from 'react';

import Icon from 'components/shared/Icon';

function Dropdown(props) {
  const {
    open,
    toggle,
    triggerElement,
    children,
    menuStickTo,
  } = props;

  return (
    <div className="dropdown">
      <div className="trigger-container">
        <button
          type="button"
          className="trigger-button"
          onClick={toggle}
        >
          {triggerElement}
          <Icon
            name="chevron-down"
            className="svg-baseline"
          />
        </button>
        {
          open && (
            <div className={`dropdown-menu stick-${menuStickTo}`}>
              {children}
            </div>
          )
        }
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  menuStickTo: 'left',
};

export default Dropdown;
