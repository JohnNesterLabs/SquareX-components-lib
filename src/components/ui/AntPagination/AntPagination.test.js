import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AntPagination from './AntPagination';

// Mock matchMedia for antd components
// This is a standard mock for antd components in Jest
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe('AntPagination Component', () => {
    test('renders basic pagination', () => {
        render(<AntPagination defaultCurrent={1} total={50} />);
        // Ant Design pagination items have title attribute with page number
        const page1 = screen.getByTitle('1');
        const page2 = screen.getByTitle('2');
        expect(page1).toBeInTheDocument();
        expect(page2).toBeInTheDocument();
    });

    test('calls onChange when page is clicked', () => {
        const handleChange = jest.fn();
        render(<AntPagination defaultCurrent={1} total={50} onChange={handleChange} />);

        const page2 = screen.getByTitle('2');
        fireEvent.click(page2);

        expect(handleChange).toHaveBeenCalled();
    });

    test('renders with showSizeChanger', () => {
        render(<AntPagination total={50} showSizeChanger />);
        const sizeChanger = screen.getByRole('combobox');
        expect(sizeChanger).toBeInTheDocument();
    });

    test('renders with showQuickJumper', () => {
        render(<AntPagination total={50} showQuickJumper />);
        const quickJumper = screen.getByRole('textbox');
        expect(quickJumper).toBeInTheDocument();
    });

    test('renders in small size', () => {
        const { container } = render(<AntPagination total={50} size="small" />);
        expect(container.querySelector('.ant-pagination-mini')).toBeInTheDocument();
    });

    test('renders in simple mode', () => {
        render(<AntPagination simple total={50} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('is disabled when disabled prop is true', () => {
        const { container } = render(<AntPagination disabled total={50} />);
        expect(container.querySelector('.ant-pagination-disabled')).toBeInTheDocument();
    });
});
