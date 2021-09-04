import BlogForm from '../Forms/BlogForm';

export default  () => {
    const submitForm = (values) => {
        console.log(values);
    };
    return (
        <BlogForm
            handleMe={(e) => submitForm()}
        />
    )
}