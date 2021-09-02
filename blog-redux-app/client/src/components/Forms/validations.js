import * as Yup from 'yup';

/*
This validation used when to Rendering Insert Post Form...
*/
export const InsertFormValidation = () => {
    return Yup.object({
        title: Yup.string().required("عنوان نمیتواند خالی باشد"),
        description: Yup.string().required("توضیحات نمیتواند خالی باشد"),
    })
};