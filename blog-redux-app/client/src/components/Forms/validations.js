import * as Yup from 'yup';

/*
This validation used when to Rendering Insert Post Form...
*/
export const InsertFormValidation = () => {
    return Yup.object({
        title: Yup.string().required("Title Must Be Entred"),
        description: Yup.string().required("Description Must Be Entred"),
    })
};