import { IWidget } from '../interfaces';

export function apiGetWidgets(): Promise<IWidget[]> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, [
            {
                id: 1,
                title: 'News',
                getter: 'apiGetNews',
                slug: '/news',
            },
            {
                id: 2,
                title: 'Weather',
                getter: 'apiGetWeather',
                slug: '/weather',
            },
            {
                id: 3,
                title: 'Sports',
                getter: 'apiGetSports',
                slug: '/sports',
            },
            {
                id: 4,
                title: 'Hacker',
                getter: 'apiGetHacks',
                slug: '/hacker',
            },
            {
                id: 5,
                title: 'Surf Report',
                getter: 'apiGetSurfReport',
                slug: '/surf',
            },
            {
                id: 6,
                title: 'Stock Report',
                getter: 'apiGetStocks',
                slug: '/stocks',
            },
        ]);
    });
}
