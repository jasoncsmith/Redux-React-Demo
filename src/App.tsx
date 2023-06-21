import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import PageNotFound from './views/PageNotFound';
import Detail from './views/Detail';
import Spinner from './components/common/Spinner';
import { IUser, IState } from './interfaces';
import './styles/app.css';

interface IPropsApp {
    user: IUser;
}

function App({ user }: IPropsApp) {
    if (Object.keys(user).length === 0) {
        return <Spinner />;
    }

    return (
        <div className="app">
            <div id="sidebar">
                <h5>User State</h5>
                <pre>
                    <code>{JSON.stringify(user.preferences, null, 2)}</code>
                </pre>
            </div>

            <Routes>
                <Route
                    index
                    path="/"
                    element={<Dashboard />}
                />
                <Route
                    path="/:category"
                    element={<Detail />}
                />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
        </div>
    );
}

const mapStateToProps = function (state: IState) {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(App); // make sure to EXPORT THE CONNECT!!!!
