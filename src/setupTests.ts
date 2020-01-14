import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);
