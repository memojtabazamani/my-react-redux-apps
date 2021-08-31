import { useField } from 'formik';
import Message from "../Utilities/Message";
const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="field">
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props}/>
            {
                meta.error && meta.touched ? (
                    <Message
                        icon='navigate'
                        header={meta.error}
                        content=""
                    />
                ) : null
            }
        </div>
    )
};

export default MyTextArea;