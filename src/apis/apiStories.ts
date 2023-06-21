import { IStory } from '../interfaces';

// ASYNC
export function apiGetSurfReport(): Promise<IStory[]> {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve([
                {
                    title: 'Surf Incoming',
                    content: 'Tracking big swell from North East.',
                },
                {
                    title: 'Pacific Beach',
                    content: 'Waist to knee-high surf.',
                },
                {
                    title: 'Mission Beach',
                    content: "Flat, don't go out.",
                },
            ]);
        }, 1000);
    });
}

export function apiGetNews(): Promise<IStory[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    title: 'Breaking Story',
                    content: 'There was a pothole located on Main Street.',
                },
                {
                    title: 'This Just In',
                    content:
                        'A dangerous criminal was apprehended today, wanted for jaywalking.',
                },
            ]);
        }, 1500);
    });
}

export function apiGetWeather(): Promise<IStory[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    title: 'Hot Today in Ireland',
                    content:
                        'Expecting highs of 85 degrees and lows of 52 degrees.',
                },
                {
                    title: 'More Cold Weather Coming to Antarctica.',
                    content:
                        'Surprise, surprise it is going to be cold again on the bottom of the Earth.',
                },
            ]);
        }, 1800);
    });
}

export function apiGetHacks(): Promise<IStory[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    title: 'What is TypeScript?',
                    content:
                        'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor.',
                },
                {
                    title: 'What is React?',
                    content:
                        'React is a JavaScript library created by Facebook.',
                },
            ]);
        }, 1600);
    });
}

export function apiGetSports(): Promise<IStory[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    title: 'The Colorado Rockies Win',
                    content:
                        'Colorado Rockies secure their 3rd win over the San Diego Padres tonight.',
                },
                {
                    title: 'Hockey Tonight',
                    content:
                        'The Avs face off against Edmonton tonight at the Ball Arena.',
                },
            ]);
        }, 1800);
    });
}

export function apiGetStocks(): Promise<IStory[]> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    title: 'DOW Up Today',
                    content: 'The DOW closed up 325 points from yesterday.',
                },
                {
                    title: 'DOW Down Today',
                    content: 'The DOW is down 650 points today.',
                },
            ]);
        }, 1800);
    });
}
