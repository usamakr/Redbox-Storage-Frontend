// Template components
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import useAuth from '@/utils/hooks/useAuth'
import { Card, Checkbox, Radio, Steps } from '@/components/ui'
import type { CommonProps } from '@/@types/common'

// Utilities
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'

// 3rd party
import axios from 'axios'
import classNames from 'classnames'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'

// React
import { useEffect, useRef, useState } from 'react'

// Config
import appConfig from '@/configs/app.config'

// Hooks
import { useAppDispatch } from '@/store/hook'
import { setMode } from '@/store/slices/auth/authMode'
import { useDebounce } from '@/utils/useDebounce'
import { themeConfig } from '@/configs/theme.config'

interface SignUpFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
}

type SignUpFormSchema = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    phone: string
    marketingConsent: boolean
}

const SignUpForm = (props: SignUpFormProps) => {
    // Props
    const { disableSubmit = false, className } = props

    // Hooks

    const { signUp } = useAuth()
    const [message, setMessage] = useTimeOutMessage()

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Please enter your first name'),
        lastName: Yup.string().required('Please enter your last name'),
        email: Yup.string()
            .email('Invalid email')
            .required('Please enter your email'),
        password: Yup.string().required('Please enter your password'),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref('password')],
            'Your passwords do not match',
        ),
        phone: Yup.string()
            .required('Please enter your mobile number.')
            .matches(/^[0-9]+$/, 'Phone number must contain only digits')
            .min(10, 'Phone number must be at least 10 digits')
            .max(15, 'Phone number must be at most 15 digits'),
        marketingConsent: Yup.boolean(),
    })

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    {message}
                </Alert>
            )}

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    phone: '',
                    marketingConsent: true,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if (!disableSubmit) {
                    } else {
                        setSubmitting(false)
                    }
                }}
            >
                {({ touched, errors, values }) => (
                    <Form>
                        <FormContainer>
                            <div className={classNames('mt-4 h-max ')}>
                                <div className="grid grid-cols-2 gap-2">
                                    <FormItem
                                        label="First name"
                                        invalid={
                                            errors.firstName &&
                                            touched.firstName
                                        }
                                        errorMessage={errors.firstName}
                                    >
                                        <Field
                                            autoComplete="off"
                                            name="firstName"
                                            placeholder="First Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Last name"
                                        invalid={
                                            errors.lastName && touched.lastName
                                        }
                                        errorMessage={errors.lastName}
                                    >
                                        <Field
                                            autoComplete="off"
                                            name="lastName"
                                            placeholder="Last Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <FormItem
                                    label="Email"
                                    invalid={errors.email && touched.email}
                                    errorMessage={errors.email}
                                >
                                    <Field
                                        autoComplete="off"
                                        name="email"
                                        placeholder="Email"
                                        component={Input}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Password"
                                    invalid={
                                        errors.password && touched.password
                                    }
                                    errorMessage={errors.password}
                                >
                                    <Field
                                        autoComplete="off"
                                        name="password"
                                        placeholder="Password"
                                        component={PasswordInput}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Confirm Password"
                                    invalid={
                                        errors.confirmPassword &&
                                        touched.confirmPassword
                                    }
                                    errorMessage={errors.confirmPassword}
                                >
                                    <Field
                                        autoComplete="off"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        component={PasswordInput}
                                    />
                                </FormItem>
                            </div>
                            <div className={classNames('mt-4')}>
                                <FormItem
                                    label="Phone"
                                    invalid={errors.phone && touched.phone}
                                    errorMessage={errors.phone}
                                >
                                    <Field
                                        autoComplete="off"
                                        name="phone"
                                        placeholder="Phone number"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    className="pt-2"
                                    label="Would you like to recieve marketing and logistics notifications?"
                                >
                                    <Radio.Group
                                        value={values.marketingConsent}
                                    >
                                        <Radio value={true}>Yes</Radio>
                                        <Radio value={false}>No</Radio>
                                    </Radio.Group>
                                </FormItem>
                            </div>
                            <div className="mt-2 pb-8 text-center">
                                <Button
                                    disabled={false}
                                    variant="solid"
                                    type="submit"
                                    size="md"
                                    color={themeConfig.buttonColor}
                                >
                                    Let's go...
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 place-items-center mt-2">
                                <span>Already have an account? </span>
                                {/* <ActionLink to={'/'}>Sign in</ActionLink> */}
                                <p
                                    className="cursor-pointer text-red-500 hover:underline w-min text-nowrap"
                                    onClick={() => {}}
                                >
                                    Sign In
                                </p>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm
