import '../../static/styles/header.less'
import utils from '../../static/plugins/utils'
import Link from 'next/link'
import ActiveLink from '../ActiveLink'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StoreContext } from '../../redux'
import { UPDATE_VISIABLE, SHOW_AUTH_MODAL } from '../../redux/action_type'


const Header = () => {
    const { login, visiable, dispatch } = useContext(StoreContext)
    const [focus, setFocus] = useState(false)
    const [show, setShow] = useState(false)
    const [edit,setEdit] = useState(false)
    const [showMenus, setShowMenus] = useState(false)
    const handleScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const action = {
            type: UPDATE_VISIABLE,
            visiable: scrollTop > 450 ? false : true
        }
        dispatch(action)
    })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.body.addEventListener('click',(event) => {
            const navFlag = utils.findParents(event.target, "is-nav")
            setShow(navFlag)
            if(login) {
                const menuFlag = utils.findParents(event.target, "is-menu")
                setShowMenus(menuFlag)
            }else{
                const editFlag = utils.findParents(event.target, "is-edit")
                setEdit(editFlag)
            }
        })
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
                                <div className="phone-show-menu is-nav">
                                    <span>沸点</span>
                                    <div className="iconfont icon-f11"></div>
                                </div>
                                <ul className={show ? 'phone-hide show' : 'phone-hide'}>
                                    <li className="nav-item">
                                        <ActiveLink href='/' className="nav-item">首页</ActiveLink>
                                    </li>
                                    <li className="nav-item">
                                        <ActiveLink href='/detail' className="nav-item">沸点</ActiveLink>
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
                                login ?
                                    <>
                                        <li className="nav-item add">
                                            <ActiveLink href='/editor/markdownRules'>写文章</ActiveLink>
                                        </li>
                                        <li className="nav-item notification">
                                            <Link href="/">
                                                <a>
                                                    <i className="iconfont icon-tongzhi"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item menu is-menu">
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
                                        <li className="nav-item submit is-edit">
                                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg" className="icon" />
                                            <span>写文章</span>
                                            {
                                                edit && <div className="submit-panel">
                                                    <div className="title">来分享谷写文章，您将有机会</div>
                                                    <ul className="benefit-list">
                                                        <li className="item">与众多开发者分享您的经验和观点</li>
                                                        <li className="item">被点赞分享，获得更多曝光和关注</li>
                                                        <li className="item">文章审核通过后，获得可观的收入</li>
                                                    </ul>
                                                    <button onClick={() => {dispatch({type:SHOW_AUTH_MODAL,authModal:{show:true,toggle:false}})}}>开始写文章</button>
                                                </div>
                                            }
                                        </li>
                                        <li className="nav-item auth">
                                            <span className="login" onClick={() => {dispatch({type:SHOW_AUTH_MODAL,authModal:{show:true,toggle:true}})}}>登录</span>
                                            <span className="register" onClick={() => {dispatch({type:SHOW_AUTH_MODAL,authModal:{show:true,toggle:false}})}}>注册</span>
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