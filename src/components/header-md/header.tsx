import type { FC } from "react";
import logo from '../../images/logo.png'
import './header.scss'

const Header: FC = () => {
    return (
        <div className="header-of-div">
            <div>
                <img src={logo} alt="logo" />
                <h1>ReactConf</h1>
            </div>
            <div>
                <span>contacts</span>
                <span>info</span>
            </div>
            <div>registration</div>
        </div>
    )
}

export default Header