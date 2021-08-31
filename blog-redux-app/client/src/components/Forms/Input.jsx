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
                    icon='navigate'
                    header={meta.error}
                    content=""
                   />
                ) : null
            }
        </div>
    );
};

export default MyTextInput;