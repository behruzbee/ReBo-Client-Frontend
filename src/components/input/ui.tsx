
import { HTMLProps } from 'react'
import s from './styles.module.scss'

interface RInputProps extends HTMLProps<HTMLInputElement> { }

const RInput = ({ className, ...props }: RInputProps) => {
    return (
        <input className={`${s.input} ${className}`} {...props} />
    )
}

export default RInput