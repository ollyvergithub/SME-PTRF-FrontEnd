import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import {PaginasContainer} from "../../paginas/PaginasContainer";
//import { Debug } from './Debug';

const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};
const SignIn = () => (
    <PaginasContainer>
        <div className="row container-404">
            <div className="col-lg-6 col-sm-12 mb-lg-0 align-self-center">
        <h1>Invite friends</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name="friends"
                        render={({ insert, remove, push }) => (
                            <div>
                                {values.friends.length > 0 &&
                                values.friends.map((friend, index) => (
                                    <div className="row" key={index}>
                                        <div className="col">
                                            <label htmlFor={`friends.${index}.name`}>Name</label>
                                            <Field
                                                name={`friends.${index}.name`}
                                                placeholder="Jane Doe"
                                                type="text"
                                            />
                                            <ErrorMessage
                                                name={`friends.${index}.name`}
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor={`friends.${index}.email`}>Email</label>
                                            <Field
                                                name={`friends.${index}.email`}
                                                placeholder="jane@acme.com"
                                                type="email"
                                            />
                                            <ErrorMessage
                                                name={`friends.${index}.name`}
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="secondary"
                                                onClick={() => remove(index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="secondary"
                                    onClick={() => push({ name: '', email: '' })}
                                >
                                    Add Friend
                                </button>
                            </div>
                        )}
                    />
                    <button type="submit">Invite</button>

                </Form>
            )}
        />
    </div>
        </div>
    </PaginasContainer>
);

export default SignIn;