import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import { API_BASE_URL } from '../config';
import Block from './Block';

const PAGE_RANGE = 5;

const Blockchain = () => {
  const [blockchain, setBlockchain] = useState([]);
  const [blockchainLength, setBlockchainLength] = useState(0);

  const fetchBlockchainPage = ({ start, end }) => {
    fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
      .then((response) => response.json())
      .then((json) => setBlockchain(json));
  };
  useEffect(() => {
    fetchBlockchainPage({ start: 0, end: PAGE_RANGE });

    fetch(`${API_BASE_URL}/blockchain/length`)
      .then((response) => response.json())
      .then((json) => setBlockchainLength(json));
  }, []);

  const buttonNames = [];
  for (let i = 0; i < blockchainLength / PAGE_RANGE; i++) {
    buttonNames.push(i);
  }
  return (
    <div className='Blockchain'>
      <h3>Blockchain</h3>
      <div>
        {blockchain.map((block) => (
          <div key={block.hash}>
            <Block key={block.hash} block={block} />
          </div>
        ))}
      </div>
      <div>
        {buttonNames.map((number) => {
          const start = number * PAGE_RANGE;
          const end = (number + 1) * PAGE_RANGE;
          return (
            <span key={number}>
              <Button
                variant='danger'
                size='sm'
                onClick={() => fetchBlockchainPage({ start, end })}
              >
                {number + 1}
              </Button>{' '}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Blockchain;
