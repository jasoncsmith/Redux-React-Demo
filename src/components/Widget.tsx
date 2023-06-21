import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import * as apis from '../apis/apiStories';
import { IStory, IPropsWidget, IState } from '../interfaces';
import {
    toggleUserPrefFavoriteWidgets,
    updateUserPrefHiddenWidgetsAdd,
    updateUserPrefWidgetBackground,
} from '../redux/actions/actionUser';
import MenuWidget from './common/MenuWidget';
import { StoryList } from './Story';
import Spinner from './common/Spinner';
import './widget.css';

interface IIndexable {
    [key: string]: () => Promise<IStory[]>;
}

function Widget({
    user,
    widget,
    toggleUserPrefFavoriteWidgets,
    updateUserPrefHiddenWidgetsAdd,
}: IPropsWidget): JSX.Element {
    const isFavorite =
        user.preferences.favoriteWidgets.indexOf(widget.id) !== -1;
    const isHidden = user.preferences.hiddenWidgets.indexOf(widget.id) !== -1;

    const [backgroundColor, setBackground] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<IStory[]>([]);

    let prefsFavorite: number[] = [];

    if (user.preferences) {
        // could be async delay
        prefsFavorite = user.preferences.favoriteWidgets;
    }

    useEffect(
        function () {
            if (data.length === 0) {
                setIsLoading(true);
                (apis as IIndexable)
                    [widget.getter]()
                    .then((data: IStory[]) => setData(data))
                    .finally(() => setIsLoading(false));
            }

            return () => {
                // console.log('unmounted');
            };
        },
        [data, widget.getter]
    );

    function handleSetFavorite(id: number) {
        toggleUserPrefFavoriteWidgets(prefsFavorite, id);
    }

    function handleSetVisibility(id: number) {
        updateUserPrefHiddenWidgetsAdd(id);
    }
    function handleSetBackground(color: string) {
        setBackground(color === '' ? '#333333' : color);
    }

    // function handleSetBackground() {
    //     updateUserPrefWidgetBackground();
    // }

    return (
        <div
            style={{ backgroundColor, display: isHidden ? 'none' : 'block' }}
            className={isFavorite ? 'widget--is-favorite widget' : 'widget'}
        >
            <h2>{widget.title}</h2>

            <MenuWidget
                id={widget.id}
                slug={widget.slug}
                isFavorite={isFavorite}
                onFavoriteClick={handleSetFavorite}
                onVisibilityClick={handleSetVisibility}
                onBackgroundClick={handleSetBackground}
            />

            {isLoading === true ? (
                <Spinner scale="40%" />
            ) : (
                <StoryList stories={data} />
            )}
        </div>
    );
}

const mapStateToProps = function (state: IState) {
    return {
        user: state.user,
        widgets: [],
    };
};

const mapDispatchToProps = {
    toggleUserPrefFavoriteWidgets,
    updateUserPrefHiddenWidgetsAdd,
    updateUserPrefWidgetBackground,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
