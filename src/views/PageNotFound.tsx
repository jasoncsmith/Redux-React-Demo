import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function PageNotFound() {
    return (
        <div
            className="view-detail"
            style={{ textAlign: 'center' }}
        >
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
            <h1 style={{ fontSize: 100, fontWeight: 'bold' }}>404</h1>
            <p style={{ fontSize: 18 }}>We know not what you seeketh</p>
        </div>
    );
}

export default PageNotFound;
