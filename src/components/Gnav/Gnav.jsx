import React from 'react';
import classNames from 'classnames';
import enhance from './enhancer';

function Gnav(props) {
  const {scroll} = props;

  return (
    <nav id="gnav" className={classNames({fixed: scroll > 766})}>
      <ul>
        {/* <li>
            <a href="#latestworks">LATEST WORKS</a>
          </li> */}
        <li>
          <a href="#profile">PROFILE</a>
        </li>
        <li>
          <a href="#skill">SKILL</a>
        </li>
        <li>
          <a href="#works">WORKS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default enhance(props => <Gnav {...props} />);
