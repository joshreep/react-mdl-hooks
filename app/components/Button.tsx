import React, { ReactNode } from 'react'
import classNames from 'classnames'
import 'material-design-lite/src/button/button'
import 'material-design-lite/src/button/_button.scss'

export type ButtonProps = {
    [key: string]: any
    accent?: boolean
    children: ReactNode
    className?: string
    colored?: boolean
    href?: string
    primary?: boolean
    raised?: boolean
    ripple?: boolean
}

export default function Button({
    accent,
    children,
    className,
    colored,
    component,
    primary,
    raised,
    ripple,
    href,
    ...props
}: ButtonProps) {
    const buttonClasses = classNames(
        'mdl-button mdl-js-button',
        {
            'mdl-js-ripple-effect': ripple,
            'mdl-button--raised': raised,
            'mdl-button--colored': colored,
            'mdl-button--primary': primary,
            'mdl-button--accent': accent,
        },
        className,
    )

    if (href)
        return (
            <a className={buttonClasses} href={href} {...props}>
                {children}
            </a>
        )

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    )
}
