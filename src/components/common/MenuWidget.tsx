import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    IconButton,
    Select,
    MenuItem,
    Popover,
    Typography,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ColorLens } from '@mui/icons-material';
import { IPropsWidgetMenu } from '../../interfaces';
import { usePopover } from '../../hooks/usePopover';
import './menuWidget.css';

function MenuWidget(props: IPropsWidgetMenu) {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [bgColor, setBgColor] = useState('');
    const navigate = useNavigate();

    const {
        anchorElPopOver,
        handlePopoverOpen,
        handlePopoverClose,
        popOverText,
    } = usePopover('');

    const handleClose = () => {
        setIsOpen(false);
        setAnchorEl(null);
    };

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        setIsOpen(true);
    };

    function handleLaunchClick() {
        handlePopoverClose();
        navigate(`${props.slug}`);
    }

    function handleFavoriteClick() {
        handlePopoverClose();
        props.onFavoriteClick(props.id);
    }

    function handleHideClick() {
        handlePopoverClose();
        props.onVisibilityClick(props.id);
    }

    const isPopOverOpen = !!anchorElPopOver;

    return (
        <div className="widget__menu">
            <IconButton
                size="small"
                color="primary"
                sx={{
                    color: props.isFavorite ? 'red' : 'primary',
                }}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e, 'Set Favorite')}
                onMouseLeave={handlePopoverClose}
                onClick={handleFavoriteClick}
            >
                {props.isFavorite ? (
                    <FavoriteIcon sx={{ fontSize: 20 }} />
                ) : (
                    <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                )}
            </IconButton>
            <IconButton
                size="small"
                color="primary"
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e, 'Hide')}
                onMouseLeave={handlePopoverClose}
                onClick={handleHideClick}
            >
                <VisibilityOffIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e, 'Launch')}
                onMouseLeave={handlePopoverClose}
                onClick={handleLaunchClick}
                color="primary"
            >
                <OpenInNewIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
                size="small"
                color="primary"
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e, 'Set Background')}
                onMouseLeave={handlePopoverClose}
                onClick={handleOpen}
            >
                <ColorLens sx={{ fontSize: 20 }} />
            </IconButton>
            <Select
                id={`select-${props.id}`}
                value={bgColor}
                open={isOpen}
                onClose={handleClose}
                onChange={(e) => props.onBackgroundClick(e.target.value)}
                variant="standard"
                inputProps={{
                    IconComponent: () => null,
                }}
                sx={{
                    pr: '0 !important',
                    width: '0 !important',
                }}
            >
                <MenuItem value="#121212">Default</MenuItem>
                <MenuItem value={'#000'}>Black</MenuItem>
                <MenuItem value={'#262626'}>Grey</MenuItem>
                <MenuItem value={'#333'}>Light Grey</MenuItem>
            </Select>
            <Popover
                id="mouse-over-popover-menu-widget"
                sx={{
                    pointerEvents: 'none',
                }}
                open={isPopOverOpen}
                anchorEl={anchorElPopOver}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{popOverText}</Typography>
            </Popover>{' '}
        </div>
    );
}

export default MenuWidget;
