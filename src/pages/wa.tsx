import React from 'react';

const Whatsapp = () => {
  React.useEffect(() => {
    window.location.assign(
      'https://api.whatsapp.com/send?phone=6285156026240&text=%5BSaya%20ingin%20bertanya%5D'
    );
  }, []);

  return <></>;
};

export default Whatsapp;
