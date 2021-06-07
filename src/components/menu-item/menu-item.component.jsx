import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const handleClick = (linkUrl, history, match) => {
  history.push(`${match.url}${linkUrl}`);
};

const _MenuItem = ({
  tabIndex,
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => handleClick(linkUrl, history, match)}
    onKeyDown={() => handleClick(linkUrl, history, match)}
    role="link"
    tabIndex={tabIndex}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export const MenuItem = withRouter(_MenuItem);
