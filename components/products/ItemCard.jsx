import React from 'react';
import Link from 'next/link';
import Button from '../button/Button';

const ItemCard = ({ id, src, title, description }) => (
  <div className="item-card">
    <img src={src} alt="Not Available" className="item-card-img" />
    <a href={`/products/${id}`}>
      <h3 className="text-center">{title}</h3>
    </a>

    <p className="text-center my-1">{description}</p>

    <div className="d-flex justify-content-center mt-3">
      <Link href={`/products/${id}`}>
        <Button title="Add to cart" />
      </Link>
    </div>
  </div>
);

export default ItemCard;
