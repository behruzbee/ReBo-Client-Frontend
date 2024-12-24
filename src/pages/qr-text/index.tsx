import { useNavigate } from 'react-router-dom'
import { type ChangeEvent, useCallback, useEffect, useState } from 'react'
import { createHistory } from '~api'
import { useCheckAuth, useGetMarketName } from '~hooks'
import { RButton } from '~components/button'
import { RInput } from '~components/input'

import s from './styles.module.scss'

const QrText = () => {
    const navigate = useNavigate()
    const check = useCheckAuth()
    const marketName = useGetMarketName()
    const [typeRequest, setTypeRequest] = useState<'enter' | 'exit'>('enter')
    const [qrCode, setQrCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = useCallback(() => {
        setIsLoading(true)
        createHistory({
            worker_id: qrCode,
            status_type: typeRequest,
            work_place_name: marketName
        }).finally(() => setIsLoading(false))
    }, [typeRequest, qrCode, marketName])

    useEffect(() => {
        check()
    }, [check])

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h4 className={s.title}>{marketName}</h4>
                <div className={s.typeButtons}>
                    <RButton
                        color='green'
                        className={`${typeRequest === 'enter' ? s.active : s.notSelected}`}
                        onClick={() => setTypeRequest('enter')}
                    >
                        Kirish
                    </RButton>
                    <RButton
                        color='red'
                        className={`${typeRequest !== 'enter' ? s.active : s.notSelected}`}
                        onClick={() => setTypeRequest('exit')}
                    >
                        Chiqish
                    </RButton>
                </div>
                <div className={s.scanner}>
                    <RInput type='text' value={qrCode} placeholder='Qr Code ni yozing!' onChange={(e: ChangeEvent<HTMLInputElement>) => setQrCode(e.target.value)} />
                </div>
                <div className={s.buttonsWrapper}>
                    <RButton disabled={isLoading} onClick={handleClick}>Yuborish</RButton>
                    <RButton disabled={isLoading} onClick={() => navigate('/qr-scan')}>QR CAMERA</RButton>
                    <RButton>
                        <a href="https://rebo-worker-dashboard.netlify.app/" target='_blank'>Xodimlar ro'yxati</a>
                    </RButton>
                </div>
            </div>
        </div>
    )
}

export default QrText