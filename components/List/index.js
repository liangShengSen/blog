import '../../static/styles/list.less'
import Router from 'next/router'
import React, { useState } from 'react'

const List = props => {
    const [share, setShare] = useState(false)
    const jumpDetailPage = (id) => {
        Router.push(`/detail/${id}/`)
    }
    return (
        <ul className="pin-list">
            <li className="item shadow">
                <div className="pin">
                    <div className="pin-header-row">
                        <div className="account-group">
                            <div className="user-popover-box">
                                <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="user-link">
                                    <div className="lazy avatar avatar loaded"></div>
                                </a>
                            </div>
                            <div className="pin-header-content">
                                <div className="user-popover-box">
                                    <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="username">迷彩蛙</a>
                                </div>
                                <div className="meta-box">
                                    <div className="position ellipsis">无业游民 @ 浪迹天涯</div>
                                    <div className="dot">·</div>
                                    <a href="/pin/5e6dc31f6fb9a03f70e74cd8" target="_blank" className="time-box">
                                        <time className="time">5小时前</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pin-content-row" onClick={() => { jumpDetailPage(2) }}>
                        <div className="content-box content-box">
                            时间是个好东西，见证了人心，验证了人性，懂得了真的，明白了假的，生活告诉我没有过不去的经历，只有走不出的自己。
                        </div>
                    </div>
                    <div className="pin-action-row">
                        <div className="action-box action-box">
                            <div className="like-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-dianzan"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="comment-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-pinglun"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="share-action action" onClick={() => {setShare(!share)}}>
                                <div className="action-title-box">
                                    <span className="iconfont icon-fenxiang"></span>
                                    <span className="action-title">分享</span>
                                </div>
                                {
                                    share && <div className="share-panel shadow">
                                        <div className="share-item copy-link-btn">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-lianjie"></i>
                                                <span className="share-title">复制链接</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weibo"></i>
                                                <span className="share-title">微博</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weixin"></i>
                                                <span className="share-title">微信扫一扫</span>
                                            </div>
                                            <div className="qr-code"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item shadow">
                <div className="pin">
                    <div className="pin-header-row">
                        <div className="account-group">
                            <div className="user-popover-box">
                                <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="user-link">
                                    <div className="lazy avatar avatar loaded"></div>
                                </a>
                            </div>
                            <div className="pin-header-content">
                                <div className="user-popover-box">
                                    <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="username">迷彩蛙</a>
                                </div>
                                <div className="meta-box">
                                    <div className="position ellipsis">无业游民 @ 浪迹天涯</div>
                                    <div className="dot">·</div>
                                    <a href="/pin/5e6dc31f6fb9a03f70e74cd8" target="_blank" className="time-box">
                                        <time className="time">5小时前</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pin-content-row" onClick={() => { jumpDetailPage(2) }}>
                        <div className="content-box content-box">
                            时间是个好东西，见证了人心，验证了人性，懂得了真的，明白了假的，生活告诉我没有过不去的经历，只有走不出的自己。
                        </div>
                    </div>
                    <div className="pin-action-row">
                        <div className="action-box action-box">
                            <div className="like-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-dianzan"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="comment-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-pinglun"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="share-action action" onClick={() => {setShare(!share)}}>
                                <div className="action-title-box">
                                    <span className="iconfont icon-fenxiang"></span>
                                    <span className="action-title">分享</span>
                                </div>
                                {
                                    share && <div className="share-panel shadow">
                                        <div className="share-item copy-link-btn">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-lianjie"></i>
                                                <span className="share-title">复制链接</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weibo"></i>
                                                <span className="share-title">微博</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weixin"></i>
                                                <span className="share-title">微信扫一扫</span>
                                            </div>
                                            <div className="qr-code"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item shadow">
                <div className="pin">
                    <div className="pin-header-row">
                        <div className="account-group">
                            <div className="user-popover-box">
                                <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="user-link">
                                    <div className="lazy avatar avatar loaded"></div>
                                </a>
                            </div>
                            <div className="pin-header-content">
                                <div className="user-popover-box">
                                    <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="username">迷彩蛙</a>
                                </div>
                                <div className="meta-box">
                                    <div className="position ellipsis">无业游民 @ 浪迹天涯</div>
                                    <div className="dot">·</div>
                                    <a href="/pin/5e6dc31f6fb9a03f70e74cd8" target="_blank" className="time-box">
                                        <time className="time">5小时前</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pin-content-row" onClick={() => { jumpDetailPage(2) }}>
                        <div className="content-box content-box">
                            时间是个好东西，见证了人心，验证了人性，懂得了真的，明白了假的，生活告诉我没有过不去的经历，只有走不出的自己。
                        </div>
                    </div>
                    <div className="pin-action-row">
                        <div className="action-box action-box">
                            <div className="like-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-dianzan"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="comment-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-pinglun"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="share-action action" onClick={() => {setShare(!share)}}>
                                <div className="action-title-box">
                                    <span className="iconfont icon-fenxiang"></span>
                                    <span className="action-title">分享</span>
                                </div>
                                {
                                    share && <div className="share-panel shadow">
                                        <div className="share-item copy-link-btn">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-lianjie"></i>
                                                <span className="share-title">复制链接</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weibo"></i>
                                                <span className="share-title">微博</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weixin"></i>
                                                <span className="share-title">微信扫一扫</span>
                                            </div>
                                            <div className="qr-code"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item shadow">
                <div className="pin">
                    <div className="pin-header-row">
                        <div className="account-group">
                            <div className="user-popover-box">
                                <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="user-link">
                                    <div className="lazy avatar avatar loaded"></div>
                                </a>
                            </div>
                            <div className="pin-header-content">
                                <div className="user-popover-box">
                                    <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="username">迷彩蛙</a>
                                </div>
                                <div className="meta-box">
                                    <div className="position ellipsis">无业游民 @ 浪迹天涯</div>
                                    <div className="dot">·</div>
                                    <a href="/pin/5e6dc31f6fb9a03f70e74cd8" target="_blank" className="time-box">
                                        <time className="time">5小时前</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pin-content-row" onClick={() => { jumpDetailPage(2) }}>
                        <div className="content-box content-box">
                            时间是个好东西，见证了人心，验证了人性，懂得了真的，明白了假的，生活告诉我没有过不去的经历，只有走不出的自己。
                        </div>
                    </div>
                    <div className="pin-action-row">
                        <div className="action-box action-box">
                            <div className="like-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-dianzan"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="comment-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-pinglun"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="share-action action" onClick={() => {setShare(!share)}}>
                                <div className="action-title-box">
                                    <span className="iconfont icon-fenxiang"></span>
                                    <span className="action-title">分享</span>
                                </div>
                                {
                                    share && <div className="share-panel shadow">
                                        <div className="share-item copy-link-btn">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-lianjie"></i>
                                                <span className="share-title">复制链接</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weibo"></i>
                                                <span className="share-title">微博</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weixin"></i>
                                                <span className="share-title">微信扫一扫</span>
                                            </div>
                                            <div className="qr-code"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item shadow">
                <div className="pin">
                    <div className="pin-header-row">
                        <div className="account-group">
                            <div className="user-popover-box">
                                <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="user-link">
                                    <div className="lazy avatar avatar loaded"></div>
                                </a>
                            </div>
                            <div className="pin-header-content">
                                <div className="user-popover-box">
                                    <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="username">迷彩蛙</a>
                                </div>
                                <div className="meta-box">
                                    <div className="position ellipsis">无业游民 @ 浪迹天涯</div>
                                    <div className="dot">·</div>
                                    <a href="/pin/5e6dc31f6fb9a03f70e74cd8" target="_blank" className="time-box">
                                        <time className="time">5小时前</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pin-content-row" onClick={() => { jumpDetailPage(2) }}>
                        <div className="content-box content-box">
                            时间是个好东西，见证了人心，验证了人性，懂得了真的，明白了假的，生活告诉我没有过不去的经历，只有走不出的自己。
                        </div>
                    </div>
                    <div className="pin-action-row">
                        <div className="action-box action-box">
                            <div className="like-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-dianzan"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="comment-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-pinglun"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="share-action action" onClick={() => {setShare(!share)}}>
                                <div className="action-title-box">
                                    <span className="iconfont icon-fenxiang"></span>
                                    <span className="action-title">分享</span>
                                </div>
                                {
                                    share && <div className="share-panel shadow">
                                        <div className="share-item copy-link-btn">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-lianjie"></i>
                                                <span className="share-title">复制链接</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weibo"></i>
                                                <span className="share-title">微博</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weixin"></i>
                                                <span className="share-title">微信扫一扫</span>
                                            </div>
                                            <div className="qr-code"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item shadow">
                <div className="pin">
                    <div className="pin-header-row">
                        <div className="account-group">
                            <div className="user-popover-box">
                                <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="user-link">
                                    <div className="lazy avatar avatar loaded"></div>
                                </a>
                            </div>
                            <div className="pin-header-content">
                                <div className="user-popover-box">
                                    <a href="/user/5e47f8a96fb9a07cab3a8ed9" target="_blank" className="username">迷彩蛙</a>
                                </div>
                                <div className="meta-box">
                                    <div className="position ellipsis">无业游民 @ 浪迹天涯</div>
                                    <div className="dot">·</div>
                                    <a href="/pin/5e6dc31f6fb9a03f70e74cd8" target="_blank" className="time-box">
                                        <time className="time">5小时前</time>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pin-content-row" onClick={() => { jumpDetailPage(2) }}>
                        <div className="content-box content-box">
                            时间是个好东西，见证了人心，验证了人性，懂得了真的，明白了假的，生活告诉我没有过不去的经历，只有走不出的自己。
                        </div>
                    </div>
                    <div className="pin-action-row">
                        <div className="action-box action-box">
                            <div className="like-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-dianzan"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="comment-action action">
                                <div className="action-title-box">
                                    <span className="iconfont icon-pinglun"></span>
                                    <span className="action-title">1</span>
                                </div>
                            </div>
                            <div className="share-action action" onClick={() => {setShare(!share)}}>
                                <div className="action-title-box">
                                    <span className="iconfont icon-fenxiang"></span>
                                    <span className="action-title">分享</span>
                                </div>
                                {
                                    share && <div className="share-panel shadow">
                                        <div className="share-item copy-link-btn">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-lianjie"></i>
                                                <span className="share-title">复制链接</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weibo"></i>
                                                <span className="share-title">微博</span>
                                            </div>
                                        </div>
                                        <div className="share-item">
                                            <div className="share-title-box">
                                                <i className="iconfont icon-weixin"></i>
                                                <span className="share-title">微信扫一扫</span>
                                            </div>
                                            <div className="qr-code"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default List