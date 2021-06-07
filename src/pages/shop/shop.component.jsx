import { Component } from 'react';
import { SHOP_DATA } from './shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { shopData: SHOP_DATA };
  }

  render() {
    const { shopData } = this.state;
    return (
      <div className="shop-page">
        {shopData.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}
