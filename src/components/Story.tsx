import React from 'react';

import { IStory, IStoryList } from '../interfaces';

export function Story({ title, content }: IStory) {
    return (
        <div className="story">
            <h5 className="story__subtitle">{title}</h5>
            <p className="story__content">{content}</p>
        </div>
    );
}

export function StoryList({ stories }: IStoryList) {
    return (
        <div>
            {stories.map((story: IStory, idx: number) => (
                <Story
                    key={idx}
                    title={story.title}
                    content={story.content}
                />
            ))}
        </div>
    );
}
