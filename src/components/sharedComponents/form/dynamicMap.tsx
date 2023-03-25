import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./mapPicker'), {
  loading: () => {
    return <div></div>;
  },

  ssr: false,
});

export default Map;
