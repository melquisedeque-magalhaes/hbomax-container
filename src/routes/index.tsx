import { lazy, Suspense } from 'react'
import { BrowserRouter,Route, Routes as Switch } from 'react-router-dom'

const HboAuth = lazy(() => import("hboAuth/HboAuth"))

export default function Routes() {
    
    return(
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path='login/*' element={<HboAuth />} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

function Loading() {
    return (
        <div>loading ...</div>
    )
}