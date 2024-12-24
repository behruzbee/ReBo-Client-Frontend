import { createBrowserRouter, Navigate } from "react-router-dom";

import QrScan from "~pages/qr-scan";
import QrText from "~pages/qr-text";

export const router = createBrowserRouter([
    {
        path: '/qr-scan',
        element: <QrScan />
    },
    {
        path: '/qr-text',
        element: <QrText />
    },
    {
        path: '*',
        element: <Navigate to='/qr-text' />
    },
])