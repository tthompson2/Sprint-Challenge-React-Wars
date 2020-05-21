import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('shows that the App is rendering successfully', () => { 
    const testMessage = 'Hello World';
    render(<App>{testMessage}</App>)

    expect(screen.queryByText(testMessage).toBeNull())

    fireEvent.click(screen.getByLabelText(/show/i))

    expect(screen.getByText(testMessage)).toBeinTheDocument()
})