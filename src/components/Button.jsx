
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button ({onClick, className, outline, children}) {

    return (
        <button
          onClick={onClick}
         className={classNames("button", className,{
           'button--outline': outline,
         })}
         >
        {children}
      </button>
    );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,

};
Button.defaultProps = {
  className: "",

}


export default Button;