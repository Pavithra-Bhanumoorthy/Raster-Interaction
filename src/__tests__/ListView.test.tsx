// src/__tests__/ListView.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ListView from '../components/ListView';
import useGridCell from '../utils/useGridCell';

// Create a mock store
const mockStore = configureStore([]);

jest.mock('../utils/useGridCell', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    list: [
      { id: 1, name: 'Cell 1' },
      { id: 2, name: 'Cell 2' },
      { id: 3, name: 'Cell 3' },
    ],
    isLoading: false,
    isError: false,
  })),
}));

describe('ListView', () => {
  test('renders list of cells', () => {
    const store = mockStore({
      cellVisibility: {  
        visibility: {
          1: true,   // Cell 1 is visible
          2: true,   // Cell 2 is visible
          3: true,   // Cell 3 is visible
        },
        hoveredCell: null, 
      },
    });

    render(
      <Provider store={store}>
        <ListView />
      </Provider>
    );

    // Check if the items are rendered in the document
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 3')).toBeInTheDocument();
  });
});
