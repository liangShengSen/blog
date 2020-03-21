import '../../static/styles/recommend.less'
import Link from 'next/link'

const Recommend = props => (
    <aside className="sidebar">
        <div className="sidebar-wrapper top">
            <div className="profile-box shadow">
                <div className="profile">
                    <Link href="/">
                        <a target="_blank">
                            <div className="lazy avatar avatar loaded"></div>
                        </a>
                    </Link>
                    <div className="user-info">
                        <Link href="/">
                            <a target="_blank" className="username ellipsis">
                                Sam君
                            </a>
                        </Link>
                        <div className="position ellipsis"></div>
                    </div>
                </div>
                <ul className="stat-list">
                    <li target="_blank" className="item">
                        <div className="title">沸点</div>
                        <div className="count">0</div>
                    </li>
                    <li className="item">
                        <div className="title">关注</div>
                        <div className="count">17</div>
                    </li>
                    <li className="item">
                        <div className="title">关注者</div>
                        <div className="count">0</div>
                    </li>
                </ul>
            </div>
            <div className="related-pin-block pin-block">
                <header>推荐沸点</header>
                <ul className="pin-list">
                    <li className="item">
                        <Link href="/">
                            <a className="pin" target="_blank">
                                <div className="content-box">
                                    <div className="content with-picture">【沸点福利】07期：图灵教育 中奖名单出炉啦！
    活动沸点：https://juejin.im/pin/5e5efdc5e51d454a483abb6c</div>
                                    <div className="stat">
                                        <span>6 赞 · </span>
                                        <span>28 评论</span>
                                    </div>
                                </div>
                                <div className="image-box" style={{'backgroundImage':'url("/static/images/logo.a7995ad.svg")'}}></div>
                            </a>
                        </Link>
                    </li>
                    <li className="item">
                        <Link href="/">
                            <a href="/" target="_blank" className="pin">
                                <div className="content-box">
                                    <div className="content">公司代码乱成一堆狗屎了  但是生意却越做越好  你说气人不气人  😭😭😭😭</div>
                                    <div className="stat">
                                        <span>10 赞 · </span>
                                        <span>41 评论</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className="item">
                        <Link href="/">
                            <a href="/" target="_blank" className="pin">
                                <div className="content-box">
                                    <div className="content">有没有好看的剧啊很无聊耶</div>
                                    <div className="stat">
                                        <span >1 赞 · </span>
                                        <span >37 评论</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href="/">
                <a className="guide-link shadow" target="_blank">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/guide-icon.6c1b9a0.svg" className="icon" />
                    <span className="title">如何玩转沸点</span>
                </a>
            </Link>
        </div>
    </aside>
)

export default Recommend