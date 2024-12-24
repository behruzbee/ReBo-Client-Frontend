
import { HTMLProps } from 'react'
import s from './styles.module.scss'

interface RButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
    color?: 'red' | 'blue' | 'green'
}

const RButton = ({ children, className, color = 'blue', ...props }: RButtonProps) => {
    return (
        <button className={`${s.button} ${s[color]} ${className}`} {...props}>{children}</button>
    )
}

export default RButton