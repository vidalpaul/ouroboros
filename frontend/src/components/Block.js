import { MILLISECONDS_PY } from '../config';
import Transaction from './Transaction';
import Reac, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ToggleTransactionDisplay = ({ block }) => {
  const [displayTransaction, setDisplayTransaction] = useState(false);
  const { data } = block;

  const toggleDisplayTransaction = () => {
    setDisplayTransaction(!displayTransaction);
  };

  if (displayTransaction) {
    return (
      <div>
        {data.map((transaction) => (
          <div key={transaction.id}>
            <hr />
            <Transaction transaction={transaction} />
          </div>
        ))}
        <br />
        <Button variant='danger' size='sm' onClick={toggleDisplayTransaction}>
          Show less
        </Button>
      </div>
    );
  }
  if (block.hash === 'genesis_hash') {
    return <></>;
  }
  return (
    <div>
      <br />
      <Button variant='danger' size='sm' onClick={toggleDisplayTransaction}>
        Show more
      </Button>
    </div>
  );
};

const Block = ({ block }) => {
  const { timestamp, hash } = block;
  const hashDisplay = `${hash.substring(0, 15)}...`;
  const timestampDisplay = new Date(
    timestamp / MILLISECONDS_PY
  ).toLocaleDateString();
  return (
    <div className='Block'>
      <div>Hash: {hashDisplay}</div>
      <div>Timestamp: {timestampDisplay}</div>
      <ToggleTransactionDisplay block={block} />
    </div>
  );
};

export default Block;