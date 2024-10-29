import { render, screen } from '@testing-library/react';
import Users from './Users';

describe('USERS TEST', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                    { "id": 1, "name": "Leanne Graham" },
                    { "id": 2, "name": "Ervin Howell" },
                    { "id": 3, "name": "Clementine Bauch" },
                ]),
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders users', async () => {
        render(<Users />);
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        screen.debug();
    });
});
