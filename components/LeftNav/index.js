import '../../static/styles/leftNav.less'
import ActiveLink from '../ActiveLink'
import React, { useContext } from 'react'
import { StoreContext } from '../../redux'

const LeftNav = props => {
    const { visiable } = useContext(StoreContext)
    return (
        <div className="dock shadow">
            <nav className={visiable ? "dock-nav" : "dock-nav top"}>
                <ul className="nav-list">
                    <li className="nav-item active">
                        <ActiveLink href='/2' className="nav-item">推荐</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">热门</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">关注</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">开源推荐</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">内推招聘</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">掘金相亲</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">上班摸鱼</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">应用安利</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">开发工具</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href='/2' className="nav-item">New资讯</ActiveLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LeftNav