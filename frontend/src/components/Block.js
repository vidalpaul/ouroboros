import { MILLISECONDS_PY } from '../config';

import React from 'react';

const Block = ({ block }) => {
  const { timestamp, hash, data } = block;
  const hashDisplay = `${hash.substring(0, 15)}...`;
  const timestampDisplay = new Date(
    timestamp / MILLISECONDS_PY
  ).toLocaleDateString();
  return (
    <div className='Block'>
      <div>Hash: {hashDisplay}</div>
      <div>Timestamp: {timestampDisplay}</div>
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  );
};

export default Block;
