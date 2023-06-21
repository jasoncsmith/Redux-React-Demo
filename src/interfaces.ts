export interface IPropsButton {
    text: string;
    onClickFn: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IPropsWidgetMenu {
    id: number;
    slug: string;
    isFavorite: boolean;
    onFavoriteClick: Function;
    onVisibilityClick: Function;
    onBackgroundClick: Function;
}

export interface IPropsSpinner {
    scale?: string;
}

export interface IStory {
    title: string;
    content: string;
}

export interface IStoryList {
    stories: IStory[];
}

export interface IWidget {
    id: number;
    title: string;
    getter: string;
    slug: string;
}

export interface IPropsWidget {
    widget: IWidget;
    user: IUser;
    updateUserPrefHiddenWidgetsAdd: (id: number) => number;
    toggleUserPrefFavoriteWidgets: (arr: number[], id: number) => number[];
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    preferences: { favoriteWidgets: number[]; hiddenWidgets: number[] };
}

export interface IState {
    user: IUser;
    widgets: IWidget[];
}

export interface IPropsWidgetList {
    widgets: IWidget[];
}

export interface IPropsDashboard {
    user: IUser;
    widgets: IWidget[];
    updateUserPrefHiddenWidgetsRemove: (id: number) => number;
}
