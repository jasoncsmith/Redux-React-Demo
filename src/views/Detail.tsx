import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState, IWidget, IStory } from '../interfaces';
import * as apis from '../apis/apiStories';
import { StoryList } from '../components/Story';
import CloseIcon from '@mui/icons-material/Close';
import Spinner from '../components/common/Spinner';
import './detail.css';

interface IIndexable {
    [key: string]: () => Promise<IStory[]>;
}

function Detail(props: any): JSX.Element {
    const { category } = useParams();
    const [data, setData] = useState<IStory[]>([]);
    const [loading, setLoading] = useState(false);
    const widget: IWidget | undefined = props.widgets.find(
        (w: IWidget) => w.slug === '/' + category
    );

    useEffect(() => {
        async function fetchData() {
            if (!widget) {
                return;
            }

            try {
                setLoading(true);
                const resp = await (apis as IIndexable)[widget.getter]();
                setData(resp);
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [widget]);

    if (!widget) {
        return <Spinner />;
    }

    return (
        <div className="view-detail">
            <Link to={'/'}>
                <CloseIcon
                    sx={{
                        color: 'white',
                        position: 'absolute',
                        right: 10,
                        top: 10,
                    }}
                />
            </Link>
            <h1 className="detail__title">{widget.title}</h1>

            {loading === true ? (
                <Spinner />
            ) : (
                <StoryList stories={data}></StoryList>
            )}
        </div>
    );
}

const mapStateToProps = function (state: IState) {
    return {
        widgets: state.widgets || [],
    };
};

export default connect(mapStateToProps)(Detail);
