import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

AdminBreadCrumb.propTypes = {
  items: PropTypes.array.isRequired
}

export default function AdminBreadCrumb(props) {
  const items = props.items;

  return (
    <nav aria-label="breadcrumb" className="border-bottom pb-2 mb-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item" key={-1}><Link to="/">Home</Link></li>
        {
          items.map((item, index) => 
            items.length - 1 == index
              ? <li className="breadcrumb-item active" key={index}>{item.title}</li>
              : <li className="breadcrumb-item" key={index}><Link to={item.to}>{item.title}</Link></li>
          )
        }
      </ol>
    </nav>
  );
}
