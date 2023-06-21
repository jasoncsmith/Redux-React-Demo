import { connect } from 'react-redux';
import { List, Chip, Typography, Popover } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Widget from '../components/Widget';
import Spinner from '../components/common/Spinner';
import { usePopover } from '../hooks/usePopover';
import {
    IWidget,
    IPropsWidgetList,
    IPropsDashboard,
    IState,
} from '../interfaces';
import { updateUserPrefHiddenWidgetsRemove } from '../redux/actions/actionUser';
import './dashboard.css';

function WidgetList({ widgets }: IPropsWidgetList): JSX.Element {
    return (
        <div className="dashboard__widgets">
            {widgets.map((widget: IWidget) => (
                <Widget
                    key={widget.id}
                    widget={widget}
                />
            ))}
        </div>
    );
}

function getWidgetTitle(params: IWidget[], id: number): string {
    const w: IWidget | undefined = params.find(
        (widg: IWidget): boolean => widg.id === id
    );
    return w ? w.title : '';
}

function Dashboard({
    user,
    widgets,
    updateUserPrefHiddenWidgetsRemove,
}: IPropsDashboard): JSX.Element {
    const {
        popOverText,
        anchorElPopOver,
        handlePopoverOpen,
        handlePopoverClose,
    } = usePopover('');

    let prefsFavorite: number[] = [];
    let numWidgetsHidden: number = 0;
    let hiddenWidgets: number[] = [];

    if (user.preferences) {
        // could be async delay
        prefsFavorite = user.preferences.favoriteWidgets;
        hiddenWidgets = user.preferences.hiddenWidgets;
        numWidgetsHidden = hiddenWidgets.length;
    }

    function handleSetVisibility(id: number) {
        updateUserPrefHiddenWidgetsRemove(id);
        handlePopoverClose();
    }

    widgets.sort((a: IWidget, b: IWidget): number => {
        const a1: number = prefsFavorite.indexOf(a.id) === -1 ? 0 : 1;
        const b1: number = prefsFavorite.indexOf(b.id) === -1 ? 0 : 1;
        return b1 - a1;
    });

    const isPopOverOpen = !!anchorElPopOver;

    return (
        <>
            <div className="dashboard">
                <header className="dashboard__header">
                    <h1>Dashboard</h1>

                    <div>
                        <span className="header__title-num-hidden">
                            You have <strong>{numWidgetsHidden} hidden</strong>{' '}
                            widget
                            {numWidgetsHidden === 1 ? '' : 's'}
                        </span>

                        <List
                            component="nav"
                            aria-label="hidden-widgets"
                        >
                            {hiddenWidgets.map((id: number, idx: number) => (
                                <Chip
                                    key={idx}
                                    aria-owns={
                                        isPopOverOpen
                                            ? 'mouse-over-popover-dashboard'
                                            : undefined
                                    }
                                    color="primary"
                                    size="small"
                                    variant="filled"
                                    icon={<VisibilityIcon />}
                                    label={getWidgetTitle(widgets, id)}
                                    sx={{ mr: 0.75, mt: 0.75 }}
                                    aria-haspopup="true"
                                    onMouseEnter={(e) =>
                                        handlePopoverOpen(e, 'Show')
                                    }
                                    onMouseLeave={handlePopoverClose}
                                    onClick={(e) => handleSetVisibility(id)}
                                />
                            ))}
                        </List>
                    </div>
                </header>

                {widgets.length === 0 ? (
                    <Spinner />
                ) : (
                    <WidgetList widgets={widgets} />
                )}
            </div>

            <Popover
                id="mouse-over-popover-dashboard"
                sx={{
                    pointerEvents: 'none',
                }}
                open={isPopOverOpen}
                anchorEl={anchorElPopOver}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{popOverText}</Typography>
            </Popover>
        </>
    );
}

const mapStateToProps = function (state: IState) {
    return {
        widgets: state.widgets || [],
        user: state.user || [],
    };
};

const mapDispatchToProps = {
    updateUserPrefHiddenWidgetsRemove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); // make sure to EXPORT THE CONNECT!!!!
