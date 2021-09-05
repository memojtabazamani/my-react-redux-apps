import "./login.css";
import LoginForm from '../../Forms/LoginForm';
export default () => {
    const handleForm = (values) => {
        console.log(values);
    }
    return (
        <div class="ui middle">
            <div class="column">
                <h2 class="ui teal image header">
                    <div class="content">
                        Log-in to your account
                    </div>
                </h2>
                <LoginForm handleMe={handleForm}/>
            </div>
        </div>

    )
}