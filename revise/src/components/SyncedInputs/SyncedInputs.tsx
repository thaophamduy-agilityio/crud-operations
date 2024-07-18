// Libs
import { ChangeEvent, useState } from 'react';

// Components
import { Input } from '@components/';

const SyncedInputs = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <>
      <Input
        label="First input"
        value={text}
        onChange={handleTextChange}
      />
      <Input
        label="Second input"
        value={text}
        onChange={handleTextChange}
      />
    </>
  );
}

export default SyncedInputs