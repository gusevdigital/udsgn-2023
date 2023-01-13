'use client';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import { TextInput, TextareaInput, RadioInput } from './Inputs';
import { timeout } from '../inc/utils';

const initialValues = {
    name: '',
    email: '',
    budget: 'do not know',
    text: '',
};

const budgetOptions = [
    {
        value: '$300 - $1000',
        label: '$300 - $1000',
    },
    {
        value: '$1000 - $5000',
        label: '$1000 - $5000',
    },
    {
        value: 'do not know',
        label: `¯\\_(ツ)_/¯`,
    },
];

const From = () => {
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) =>
                formData.append(key, value)
            );

            const response = await Promise.race([
                fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/contact-form`, {
                    method: 'POST',
                    body: formData,
                }),
                timeout(30),
            ]);

            const data = await response.json();
            if (response.status !== 200) throw new Error(data.message);

            toast.success(data.message);
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = object().shape({
        name: string().required('Required'),
        email: string().email('Wrong format').required('Required'),
        text: string().required('Required'),
    });

    return (
        <div className="form animate" data-scroll>
            <h3 className="text-green">Let's Create Something Together</h3>
            <p>
                Fill in the form below, or wave at{' '}
                <a href="mailto:ulia@u-dsgn.com" title="Email me">
                    ulia@u-dsgn.com
                </a>
            </p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <TextInput type="text" placeholder="Name" name="name" />
                        <TextInput
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <div className="budget">
                            <div className="budget__container">
                                <div className="budget__label">Budget</div>
                                <ul className="budget__options">
                                    {budgetOptions.map(option => (
                                        <RadioInput
                                            key={option.value}
                                            name="budget"
                                            value={option.value}
                                            label={option.label}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <TextareaInput
                            placeholder="Tell me about your project"
                            name="text"
                        />
                        <button
                            type="submit"
                            className={`button ${
                                isSubmitting ? 'loading' : ''
                            }`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'sending...' : 'send message'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default From;
