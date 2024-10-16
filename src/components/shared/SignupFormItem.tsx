import React, {
    ElementType,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react'

// Components
import { FormItem, FormContainer } from '@/components/ui/Form'
import { Field, Form, Formik } from 'formik'
import Input, { InputProps } from '@/components/ui/Input'

// Types
import { IconType } from 'react-icons'

interface ISignupFormItem {
    className?: string
    label: string
    type: string
    placeholder: string
    touched: boolean | undefined
    errors: string | undefined
    component: ElementType
    Icon: IconType
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SignupFormItem({
    className,
    label,
    type,
    placeholder,
    errors,
    touched,
    Icon,
    component,
    value,
    onChange,
}: ISignupFormItem) {
    return (
        <FormItem
            className={className}
            label={label}
            invalid={errors && touched}
            errorMessage={errors}
        >
            <div className="relative">
                <Field
                    type={type}
                    autoComplete="off"
                    name={type}
                    placeholder={placeholder}
                    component={component}
                    onChange={onChange}
                />
                {touched && !errors && (
                    <Icon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
                )}
            </div>
        </FormItem>
    )
}

export default SignupFormItem
