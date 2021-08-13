import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../actions';



const header = (props) => {
    const handleLogOut = () => {
        props.logOutUser();
    }
    const checkAuthenticate = () => {
        if(props.auth.isSignedIn == true ) { // if logined
            return (
                <>
                    <Link to='/dashboard' className='item'>داشبورد</Link>
                    <div className='item right'>
                        <button  className="ui red button " onClick={
                                (e) => handleLogOut()
                            }>
<i class="icon sign-out"></i>
                            خروج از حساب
                        </button >
                    </div>
                </>
            )
        } else { // if not logined
            return (
                <>
                    <Link to='/login' className='item'>ورود</Link>
                    <Link to='/registrition' className='item'>دریافت کد توکن</Link>
                </>
            )
        }
    }
    return(
        <div className="ui menu">
            { checkAuthenticate() }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {
    logOutUser
})(header);
