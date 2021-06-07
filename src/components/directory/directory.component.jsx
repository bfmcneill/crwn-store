import React, { Component } from 'react';
import { MenuItem } from '../menu-item/menu-item.component';
import { directoryData } from './directory.data';
import './directory.styles.scss';

export class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: directoryData,
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            tabIndex={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}
