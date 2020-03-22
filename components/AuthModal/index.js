import '../../static/styles/authModal.less'
import React, { useContext } from 'react'
import { StoreContext } from '../../redux'
import { SHOW_AUTH_MODAL} from '../../redux/action_type'

const AuthModal = () => {
    const { authModal, dispatch } = useContext(StoreContext)
    return (
        authModal ? <div className="auth-modal-box">
            <form className="auth-form">
                <div className="panfish">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" className="normal" />
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" className="greeting" />
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" className="blindfold" />
                </div>
                <i title="关闭" className="iconfont icon-close close-btn" onClick={() => {dispatch({type:SHOW_AUTH_MODAL,authModal:false})}}></i>
                <div className="panel">
                    <h1 className="title">登录</h1>
                    <div className="input-group">
                        <div className="input-box">
                            <input name="loginPhoneOrEmail" maxLength="64" placeholder="请输入手机号或邮箱" className="input" />
                        </div>
                        <div className="input-box">
                            <input name="loginPassword" type="password" maxLength="64" placeholder="请输入密码" className="input" />
                        </div>
                        <div className="input-box">
                            <input name="registerSmsCode" maxLength="6" placeholder="手机验证码" className="input" />
                            <button className="send-vcode-btn">获取验证码</button>
                        </div>
                        <div className="input-box">
                            <input name="registerPassword" type="password" maxLength="64" autoComplete="new-password" placeholder="请输入密码（不少于 6 位）" className="input" />
                        </div>
                    </div>
                    <button className="btn">登录</button>
                    <div className="prompt-box">
                        没有账号？
                    <span className="clickable">注册</span>
                        <a href="/reset-password" className="right clickable">忘记密码</a>
                        <span className="clickable">已有账号登录</span>
                    </div>
                </div>
                <div className="agreement-box">
                    注册登录即表示同意
                <a href="/terms" target="_blank">用户协议</a>、
                <a href="/privacy" target="_blank">隐私政策</a>
                </div>
                <div className="oauth-box">
                    <div className="hint"></div>
                    <a>第三方登录</a>
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
                </div>
            </form>
        </div> : ''
    )
}

export default AuthModal