import { IUser } from '../interfaces';

export function apiGetAuthUser(): Promise<IUser> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                name: 'You Yourself',
                email: 'you@you.com',
                preferences: {
                    favoriteWidgets: [1, 3, 4, 6],
                    hiddenWidgets: [],
                },
            });
        }, 800);
    });
}
