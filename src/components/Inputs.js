import { useField, useFormikContext } from 'formik';

export const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="input">
            <input
                {...field}
                {...props}
                className={`input__field ${
                    meta.touched && meta.error ? 'input__field--error' : ''
                }`}
            />
            {meta.touched && meta.error ? (
                <span className="input__error">{meta.error}</span>
            ) : null}
        </div>
    );
};

export const RadioInput = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    const { values, setFieldValue } = useFormikContext();

    return (
        <li>
            <input
                type="radio"
                {...field}
                {...props}
                id={props.value}
                checked={values[field.name] === field.value}
                onChange={() => {
                    setFieldValue(field.name, field.value);
                }}
            />
            <label htmlFor={props.value}>{label}</label>
        </li>
    );
};

export const TextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="input input--textarea">
            <textarea
                {...field}
                {...props}
                className={`input__field ${
                    meta.touched && meta.error ? 'input__field--error' : ''
                }`}
            />
            {meta.touched && meta.error ? (
                <span className="input__error">{meta.error}</span>
            ) : null}
        </div>
    );
};
