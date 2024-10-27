import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import ActionLink from '@/components/shared/ActionLink'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import useAuth from '@/utils/hooks/useAuth'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import type { CommonProps } from '@/@types/common'
import { setMode } from '@/store/slices/auth/authMode'
import { useAppDispatch } from '@/store/hook'
import { themeConfig } from '@/configs/theme.config'
import { useState } from 'react'
import ErrorMessage from '../SignUp/ErrorMessage'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
    forgotPasswordUrl?: string
    signUpUrl?: string
}

type SignInFormSchema = {
    email: string
    password: string
    rememberMe: boolean
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail must be valid.')
        .required('Please enter your e-mail address.'),
    password: Yup.string().required('Please enter your password'),
    rememberMe: Yup.bool(),
})

const SignInForm = (props: SignInFormProps) => {
    const {
        disableSubmit = false,
        className,
        forgotPasswordUrl = '/forgot-password',
        signUpUrl = '/sign-up',
    } = props

    // States
    const [message, setMessage] = useTimeOutMessage()
    const [submitError, setSubmitError] = useState<string>('')

    // Hooks
    const { signIn } = useAuth()
    const dispatch = useAppDispatch()

    const onSignIn = async (
        values: SignInFormSchema,
        setSubmitting: (isSubmitting: boolean) => void,
    ) => {
        const { email, password, rememberMe } = values
        setSubmitting(true)

        const result = await signIn({ email, password, rememberMe })

        if (result?.status === 'failed') {
            setMessage(result.message)
        }

        setSubmitting(false)
    }

    function signUp(values: {
        email: string
        password: string
        rememberMe: boolean
    }) {
        throw new Error('Function not implemented.')
    }

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    <>{message}</>
                </Alert>
            )}
            <Formik
                initialValues={{
                    email: 'usamakr@gmail.com',
                    password: '1234',
                    rememberMe: false,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    if (disableSubmit) {
                        return
                    }
                    setSubmitting(true)
                    setSubmitError('')
                    try {
                        let signinResult = await signIn(values)
                        setSubmitError(signinResult?.message as string)
                    } catch (error: any) {
                        setSubmitError(error.message)
                    }
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                label="E-mail"
                                invalid={
                                    (errors.email && touched.email) as boolean
                                }
                                errorMessage={errors.email}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="E-mail"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Password"
                                invalid={
                                    (errors.password &&
                                        touched.password) as boolean
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
                            <div className="flex justify-between mb-6">
                                <Field
                                    className="mb-0"
                                    name="rememberMe"
                                    component={Checkbox}
                                >
                                    Remember Me
                                </Field>
                                <ActionLink to={forgotPasswordUrl}>
                                    Forgot Password?
                                </ActionLink>
                            </div>
                            <div className="w-full text-center pb-2 mt-2">
                                <Button
                                    block
                                    loading={isSubmitting}
                                    variant="solid"
                                    type="submit"
                                    disabled={false}
                                    color={themeConfig.buttonColor}
                                    className="w-min"
                                >
                                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                                </Button>
                            </div>
                            <ErrorMessage isError={submitError !== ''}>
                                <span className="text-red-500 font-bold">
                                    {submitError}
                                </span>
                            </ErrorMessage>

                            <div className="mt-4 grid grid-cols-1 place-items-center">
                                <span>{`Don't have an account yet?`} </span>
                                {/* <ActionLink to={signUpUrl}>Sign up</ActionLink> */}
                                <p
                                    className="cursor-pointer text-red-500 hover:underline w-min text-nowrap"
                                    onClick={() => dispatch(setMode('signup'))}
                                >
                                    Sign up
                                </p>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm
