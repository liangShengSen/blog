import '../../static/styles/topNav.less'
import ActiveLink from '../ActiveLink'
import React, { useContext } from 'react'
import { StoreContext } from '../../redux'

const topNav = props => {
    const { visiable } = useContext(StoreContext)
    return (
        <nav role="navigation" className={visiable ? 'view-nav navigator' : 'view-nav navigator top'}>
            <ul className="nav-list">
                <li className="nav-item router-link-exact-active route-active active">
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
    )
}

export default topNav