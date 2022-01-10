import React from 'react';

const BreadCrumb = ({ pages = [] }) => {
  return (
    <nav className="breadcrumb-wrapper">
      {pages.map(({ id, name, href }) => (
        <a key={id} href={href} className="breadcrumb">
          {name}
        </a>
      ))}
    </nav>
  );
};

export default BreadCrumb;
