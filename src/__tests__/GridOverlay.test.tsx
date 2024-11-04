// GridOverlay.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GridOverlay from '../components/GridOverlay';
import  LoadErrorComp  from '../components/LoadErrorComp'; 

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({
  cellVisibility: {
    visibility: { 1: true, 2: false }, 
    hoveredCell: null, // Initial hovered cell
  },
});

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

jest.mock('../components/LoadErrorComp', () => {
  return function MockLoadErrorComp() {
    return <div>Mock Load Error Component</div>;
  };
});

describe('GridOverlay', () => {
  test('renders grid cells correctly when not loading and no error', () => {
    render(
      <Provider store={store}>
        <GridOverlay />
      </Provider>
    );

    // Check that the cells are rendered
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 3')).toBeInTheDocument();
  });

  test('renders loading state', () => {
    jest.mock('../utils/useGridCell', () => ({
      __esModule: true,
      default: jest.fn(() => ({
        list: [],
        isLoading: true,
        isError: false,
      })),
    }));

    render(
      <Provider store={store}>
        <GridOverlay />
      </Provider>
    );

    // Check if LoadErrorComp is rendered with loading state
    expect(screen.getByText('Mock Load Error Component')).toBeInTheDocument();
  });

  test('renders error state', () => {
    jest.mock('../utils/useGridCell', () => ({
      __esModule: true,
      default: jest.fn(() => ({
        list: [],
        isLoading: false,
        isError: true,
      })),
    }));

    render(
      <Provider store={store}>
        <GridOverlay />
      </Provider>
    );

    // Check if LoadErrorComp is rendered with error state
    expect(screen.getByText('Mock Load Error Component')).toBeInTheDocument();
  });
});
