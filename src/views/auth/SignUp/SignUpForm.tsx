import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuth from '@/utils/hooks/useAuth'
import type { CommonProps } from '@/@types/common'
import { useState } from 'react'
import { Checkbox, Radio, Steps } from '@/components/ui'
import classNames from 'classnames'
import { useAppDispatch } from '@/store/hook'
import { setMode } from '@/store/slices/auth/authMode'

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

const SignUpForm = (props: SignUpFormProps) => {
    const SIGN_UP_STEPS = 2

    const [step, setStep] = useState(1)
    const dispatch = useAppDispatch()

    const { disableSubmit = false, className } = props
    const { signUp } = useAuth()
    const [message, setMessage] = useTimeOutMessage()

    const onChange = (nextStep: number) => {
        if (nextStep < 1) {
            setStep(1)
        } else if (nextStep > SIGN_UP_STEPS) {
            setStep(SIGN_UP_STEPS)
        } else {
            setStep(nextStep)
        }
    }

    const onNext = () => {
        if (step == 2) {
        } else {
            onChange(step + 1)
        }
    }
    const onPrevious = () => onChange(step - 1)

    const onSignUp = async (
        values: SignUpFormSchema,
        setSubmitting: (isSubmitting: boolean) => void,
    ) => {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            phone,
            marketingConsent,
        } = values
        setSubmitting(true)
        const result = await signUp({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            phone,
            marketingConsent,
        })

        if (result?.status === 'failed') {
            setMessage(result.message)
        }

        setSubmitting(false)
    }

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    {message}
                </Alert>
            )}
            <Steps current={step}>
                <Steps.Item title="Start" />
                <Steps.Item title="Finish" />
            </Steps>
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
                        onSignUp(values, setSubmitting)
                    } else {
                        setSubmitting(false)
                    }
                }}
            >
                {({ touched, errors, isSubmitting, values }) => (
                    <Form>
                        <FormContainer>
                            <div
                                className={classNames(
                                    'mt-4 h-max ',
                                    `${step === 1 ? 'block' : 'hidden'}`,
                                )}
                            >
                                <div className="grid grid-cols-2">
                                    <FormItem
                                        label="First name"
                                        invalid={
                                            errors.firstName &&
                                            touched.firstName
                                        }
                                        errorMessage={errors.firstName}
                                    >
                                        <Field
                                            type="firstName"
                                            autoComplete="off"
                                            name="firstName"
                                            placeholder="First name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        className="mx-2"
                                        label="Last name"
                                        invalid={
                                            errors.lastName && touched.lastName
                                        }
                                        errorMessage={errors.lastName}
                                    >
                                        <Field
                                            type="lastName"
                                            autoComplete="off"
                                            name="lastName"
                                            placeholder="Last name"
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
                                        type="email"
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
                            <div
                                className={classNames(
                                    'mt-4 h-[280px]',
                                    `${step === 2 ? 'block' : 'hidden'}`,
                                )}
                            >
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
                                    className="pt-4"
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
                            <div className="mt-4 text-center">
                                <Button
                                    className="mx-2"
                                    disabled={step === 1}
                                    onClick={onPrevious}
                                    type="button"
                                >
                                    {`Previous`}
                                </Button>
                                {step === SIGN_UP_STEPS ? (
                                    <Button
                                        disabled={
                                            !touched.email ||
                                            !!errors.email ||
                                            !touched.password ||
                                            !!errors.password ||
                                            !touched.confirmPassword ||
                                            !!errors.confirmPassword
                                        }
                                        variant="solid"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                ) : null}
                                {step !== SIGN_UP_STEPS ? (
                                    <Button onClick={onNext}>Next</Button>
                                ) : null}
                            </div>
                            <div className="grid grid-cols-1 place-items-center mt-2">
                                <span>Already have an account? </span>
                                {/* <ActionLink to={'/'}>Sign in</ActionLink> */}
                                <p
                                    className="cursor-pointer text-red-500 hover:underline w-min text-nowrap"
                                    onClick={() => dispatch(setMode('signin'))}
                                >
                                    Sign in
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
