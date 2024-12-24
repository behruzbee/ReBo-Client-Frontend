import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner"
import { createHistory } from "~api"
import { useCheckAuth, useGetMarketName } from "~hooks"
import { RButton } from "~components/button"

import s from './styles.module.scss'

const QrScan = () => {
    const navigate = useNavigate()
    const check = useCheckAuth()
    const marketName = useGetMarketName()
    const [typeRequest, setTypeRequest] = useState<'enter' | 'exit'>('enter')
    const [isLoading, setIsLoading] = useState(false)
    const [isActiveScanner, setIsActiveScanner] = useState(false)

    const handleScan = (detected: IDetectedBarcode[]) => {
        setIsLoading(true)
        createHistory({
            worker_id: detected[0].rawValue,
            status_type: typeRequest,
            work_place_name: marketName
        }).finally(() => setIsLoading(false))
    }

    const handleOnScanner = () => {
        setIsActiveScanner(true)
    }

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
                    {isActiveScanner
                        ? <Scanner
                            onScan={handleScan}
                            onError={(err) => { console.log('error', err) }}
                            scanDelay={1000}
                            paused={isLoading}
                        />
                        : <RButton color='green' onClick={() => handleOnScanner()}>Kamerani yoqish</RButton>
                    }
                </div>
                <div className={s.buttonsWrapper}>
                    <RButton onClick={() => navigate('/qr-text')}>QR Code Text</RButton>
                    <RButton>
                        <a href="https://rebo-worker-dashboard.netlify.app/" target='_blank'>Xodimlar ro'yxati</a>
                    </RButton>
                </div>
            </div>
        </div>
    )
}

export default QrScan