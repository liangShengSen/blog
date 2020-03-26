import '../../static/styles/authModal.less'
import React, { useState, useContext, useEffect,useRef } from 'react'
import { StoreContext } from '../../redux'
import { SHOW_AUTH_MODAL} from '../../redux/action_type'

const AuthModal = () => {
    const { authModal, dispatch } = useContext(StoreContext)
    const [toggle,setToggle] = useState(null)
    const [title,setTitle] = useState('登陆')
    const [oauth,setOauth] = useState(false)
    const [account,setAccount] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [phone,setPhone] = useState('')
    const [smsCode,setSmsCode] = useState('')
    const [regPassword,setRegPassword] = useState('')
    const accountRef = useRef(null)
    const usernameRef = useRef(null)
    const toggleLoginOrRegister = (status) => {
        setToggle(status)
        if(status) {
            setTitle('登陆')
            // accountRef.current.focus()
        }else{
            setTitle('注册')
            // usernameRef.current.focus()
        }
    }
    const getSmsCode = (event) => {
        event.preventDefault();
        console.log(phone);
    }
    const loginOrRegisrer = (event) => {
        event.preventDefault();
        if(toggle) { // login
            console.log(account)
            console.log(password)
        }else{ // register
            console.log(username)
            console.log(phone)
            console.log(smsCode)
            console.log(regPassword)
        }
    }
    useEffect(()=>{
        setToggle(authModal.toggle)
        toggleLoginOrRegister(authModal.toggle)
        setOauth(false)
    },[authModal.toggle])
    return (
        authModal.show && <div className="auth-modal-box">
            <form className="auth-form">
                {
                    toggle && 
                    <div className="panfish">
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" className="normal" />
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" className="greeting" />
                        <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" className="blindfold" />
                    </div>
                }
                <i title="关闭" className="iconfont icon-close close-btn" onClick={() => {dispatch({type:SHOW_AUTH_MODAL,authModal:{show:false,toggle:null}})}}></i>
                <div className="panel">
                    <h1 className="title">{title}</h1>
                    <div className="input-group">
                        {
                            toggle ? 
                            <>
                                <div className="input-box">
                                    <input ref={accountRef} value={account} onChange={(e)=>{setAccount(e.target.value)}} name="loginPhoneOrEmail" maxLength="64" placeholder="请输入手机号或邮箱" className="input" />
                                </div>
                                <div className="input-box">
                                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} name="loginPassword" type="password" maxLength="64" placeholder="请输入密码" className="input" />
                                </div>
                            </>
                            :
                            <>
                                <div className="input-box">
                                    <input ref={usernameRef}  value={username} onChange={(e)=>{setUsername(e.target.value)}} name="registerUsername" maxLength="20" placeholder="请输入用户名" className="input" />
                                </div>
                                <div className="input-box">
                                    <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="registerPhoneNumber" maxLength="11" placeholder="请输入手机号" className="input" />
                                </div>
                                {
                                    (phone && phone.length == 11) && 
                                    <div className="input-box">
                                        <input value={smsCode} onChange={(e)=>{setSmsCode(e.target.value)}}  name="registerSmsCode" maxLength="6" placeholder="手机验证码" className="input" />
                                        <button className="send-vcode-btn" onClick={getSmsCode}>获取验证码</button>
                                    </div>
                                }
                                <div className="input-box">
                                    <input value={regPassword} onChange={(e)=>{setRegPassword(e.target.value)}}  name="registerPassword" type="password" maxLength="64" autoComplete="new-password" placeholder="请输入密码（不少于 6 位）" className="input" />
                                </div>
                            </>
                        }
                    </div>
                    <button className="btn" onClick={loginOrRegisrer}>{title}</button>
                    <div className={toggle ? 'prompt-box' : 'center prompt-box'}>
                        {
                            toggle ? 
                            <>
                            没有账号？
                            <span className="clickable" onClick={() => {toggleLoginOrRegister(false)}}>注册</span>
                            <a href="/reset-password" className="right clickable">忘记密码</a>
                            </>
                            :
                            <span className="clickable" onClick={() => {toggleLoginOrRegister(true)}}>已有账号登录</span>
                        }
                    </div>
                </div>
                {
                    toggle &&
                    <div className="oauth-box">
                        <div className="hint"></div>
                        <a onClick={() => {setOauth(!oauth)}}>第三方登录</a>
                        {
                            oauth &&
                            <div className="oauth">
                                <div className="oauth-bg">
                                    <img title="微博" alt="微博" src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" className="oauth-btn" />
                                </div>
                                <div className="oauth-bg">
                                    <img title="微信" alt="微信" src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" className="oauth-btn" />
                                </div>
                                <div className="oauth-bg">
                                    <img title="GitHub" alt="GitHub" src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" className="oauth-btn" />
                                </div>
                            </div>
                        }
                    </div>
                }
            </form>
        </div>
    )
}

export default AuthModal