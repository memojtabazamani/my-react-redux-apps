import { useField } from 'formik';
import Message from "../Utilities/Message";
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='field'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {
                meta.touched && meta.error ? (
                   <Message
                    icon='ban'
                    header="Warning"
                    content={meta.error}
                    type="yellow"
                   />
                ) : null
            }
        </div>
    );
};

export default MyTextInput;