import React from 'react';
import { CollectionItem } from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, name, price, imageUrl }) => (
          <CollectionItem
            key={id}
            name={name}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
    </div>
  </div>
);
