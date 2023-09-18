// libs
import { render, fireEvent, act } from '@testing-library/react';
import { useState } from 'react';
import '@testing-library/jest-dom';

import { useDebounce } from '../use-debounce';

export const TestComponent = () => {
  const [value, setValue] = useState(0);
  const inc = () => {
    setValue(value + 1);
  };
  const debouncedValue = useDebounce(value, 1000);

  return (
    <div>
      <button onClick={inc}>Increment</button>
      <span data-testid="debouncedValue">{debouncedValue}</span>
      <span data-testid="value">{value}</span>
    </div>
  );
};

describe('testing useDebounce hooks', () => {
  test('should debounce and only change value when delay time has passed', async () => {
    jest.useFakeTimers();
    const { getByTestId, getByRole } = render(<TestComponent />);
    const incrementButton = getByRole('button', { name: /Increment/i });
    const debouncedValue = getByTestId('debouncedValue');
    const value = getByTestId('value');

    expect(debouncedValue.textContent).toBe('0');
    fireEvent.click(incrementButton);
    expect(value.textContent).toBe('1');
    expect(debouncedValue.textContent).toBe('0');

    act(() => {
      jest.runAllTimers();
    });

    expect(debouncedValue.textContent).toBe('1');
    jest.useRealTimers();
  });
});
