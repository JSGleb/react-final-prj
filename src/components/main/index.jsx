import { Route, Routes } from 'react-router-dom'

import Chat from '../chat'
import Home from '../home'
import TestApi from '../test-api'

import styles from "./style.module.css"


const Main = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/test' element={<TestApi />} />
            </Routes>
        </div>
    )
}

export default Main;
