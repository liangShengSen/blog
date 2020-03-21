import { useState, useEffect, useCallback } from 'react'
import ActiveLink from '../ActiveLink'
import Link from 'next/link'
import '../../static/styles/header.less'

const Header = () => {
    const [isLogin, setLogin] = useState(true)
    const [show, setShow] = useState(false)
    const [focus, setFocus] = useState(false)
    const [showMenus, setSshowMenus] = useState(false)
    const [visiable, setVisiable] = useState(true)
    const toggleNavs = () => {
        show ? setShow(false) : setShow(true)
    }
    const toggleMenus = () => {
        showMenus ? setSshowMenus(false) : setSshowMenus(true)
    }
    const handleScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 400 ? setVisiable(false) : setVisiable(true)
    })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className="header-box">
            <header className={visiable ? 'visiable' : ''}>
                <div className="container">
                    <Link href="/">
                        <a className="logo">
                            <img src="/static/images/logo.a7995ad.svg" className="logo-img" />
                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg" alt="blog" className="mobile" />
                        </a>
                    </Link>
                    <nav role="navigation" className="main-nav">
                        <ul className="nav-list">
                            <li className="main-nav-list">
                                <div className="phone-show-menu" onClick={() => toggleNavs()}>
                                    <span>沸点</span>
                                    <div className="iconfont icon-f11"></div>
                                </div>
                                <ul className={show ? 'phone-hide show' : 'phone-hide'}>
                                    <li className="nav-item">
                                        <ActiveLink href='/' className="nav-item">首页</ActiveLink>
                                    </li>
                                    <li className="nav-item">
                                        <ActiveLink href='/post' className="nav-item">沸点</ActiveLink>
                                    </li>
                                    <li className="nav-item">
                                        <ActiveLink href='/1' className="nav-item">话题</ActiveLink>
                                    </li>
                                    <li className="nav-item">
                                        <ActiveLink href='/2' className="nav-item">小册</ActiveLink>
                                    </li>
                                    <li className="nav-item">
                                        <ActiveLink href='/3' className="nav-item">活动</ActiveLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item search">
                                <form role="search" className={focus ? 'search-form active' : 'search-form'}>
                                    <input type="search" maxLength="32" placeholder="搜索掘金" className="search-input" onFocus={() => { setFocus(true) }} onBlur={() => { setFocus(false) }}></input>
                                    <img src={focus ? 'https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon-focus.470748c.svg' : 'https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg'} alt="搜索" className="search-icon" />
                                </form>
                            </li>
                            {
                                isLogin ?
                                    <>
                                        <li className="nav-item add">
                                            <div className="add-group">
                                                <button className="add-btn">发沸点</button>
                                                <div className="more">
                                                    <i className="iconfont icon-f11"></i>
                                                </div>
                                                <ul className="more-list">
                                                    <li className="item">写文章</li>
                                                    <li className="item">分享链接</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item notification">
                                            <Link href="/">
                                                <a>
                                                    <i className="iconfont icon-tongzhi"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item menu" onClick={() => toggleMenus()}>
                                            <div className="lazy avatar avatar loaded immediate"></div>
                                            <ul className="nav-menu user-dropdown-list" style={{ 'display': showMenus ? 'block' : 'none' }}>
                                                <div className="nav-menu-item-group">
                                                    <li className="nav-menu-item">
                                                        <Link href="/">
                                                            <a>
                                                                <i className="iconfont icon-shezhi"></i>
                                                                <span>设置</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-menu-item">
                                                        <Link href="/">
                                                            <a>
                                                                <i className="iconfont icon-tuichu"></i>
                                                                <span>登出</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item submit">
                                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg" className="icon" />
                                            <span>写文章</span>
                                        </li>
                                        <li className="nav-item auth">
                                            <span className="login">登录</span>
                                            <span className="register">注册</span>
                                        </li>
                                    </>
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header