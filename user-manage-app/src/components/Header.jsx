import { Link } from 'react-router-dom';

const header = () => {
    return(
        <div className="ui menu">
            <div className="header item">
                WRWR
            </div>
            <Link to='/login' className='item'>Login</Link>
            <Link to='/registrition' className='item'>Register</Link>
        </div>
    )
}
export default header;
