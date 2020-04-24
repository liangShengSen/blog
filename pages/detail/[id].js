import '../../static/styles/detail.less'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Detail = () => {
    const router = useRouter()
    return (
        <Layout showLeftNav={false}>
            <div className="main-area shadow">
                <div className="main-area-inner">
                    <article className="article">
                        <div className="author-info">
                            <Link href="/">
                                <a className="avatar-link">
                                    <div className="avatar"></div>
                                </a>
                            </Link>
                            <div className="author-info-box">
                                <Link href="/">
                                    <a className="username ellipsis">
                                        前端劝退师
                                    </a>
                                </Link>
                                <div className="meta-box">
                                    <time className="time">2020年04月22日</time>
                                    <span className="views-count">阅读 30483</span>
                                </div>
                            </div>
                            <button className="follow-button">关注</button>
                        </div>
                        <h1 className="article-title">ZK客户端Curator使用详解</h1>
                        <div className="article-content">
                            <blockquote className="blockquote">
                                <p>原创：小姐姐味道（微信公众号ID：xjjdog），欢迎分享，转载请保留出处。</p>
                            </blockquote>
                            Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。Curator抽象和简化了很多复杂的zookeeper操作，是zk使用者的福音。而要彻底的幸福，那就是不再使用它。
                        </div>
                    </article>
                    <div className="comment-list-box">
                        <div className="title">评论</div>
                        <div className="comment-form">
                            <div className="avatar-box">
                                <div className="avatar"></div>
                            </div>
                            <div className="form-box">
                                <div className="input-box">
                                    <div className="auth-card">
                                        <div contentEditable="true" spellCheck="false" placeholder="输入评论..." className="rich-input"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommended-area shadow">
                    <div className="recommended-entry-list-title">相关推荐</div>
                    <ul className="recommended-entry-list">
                        <li className="item">
                            <div className="content-box">
                                <div className="info-box">
                                    <div className="info-row meta-row">
                                        <ul className="meta-list">
                                            <li className="item username clickable">敖丙</li>
                                            <li className="item">4天前</li>
                                        </ul>
                                    </div>
                                    <div className="info-row title-row">
                                        <Link href="/">
                                            <a className="title">【蘑菇街裁员回应】覆巢之下无完卵</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-box"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="content-box">
                                <div className="info-box">
                                    <div className="info-row meta-row">
                                        <ul className="meta-list">
                                            <li className="item username clickable">敖丙</li>
                                            <li className="item">4天前</li>
                                        </ul>
                                    </div>
                                    <div className="info-row title-row">
                                        <Link href="/">
                                            <a className="title">【蘑菇街裁员回应】覆巢之下无完卵</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-box"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="content-box">
                                <div className="info-box">
                                    <div className="info-row meta-row">
                                        <ul className="meta-list">
                                            <li className="item username clickable">敖丙</li>
                                            <li className="item">4天前</li>
                                        </ul>
                                    </div>
                                    <div className="info-row title-row">
                                        <Link href="/">
                                            <a className="title">【蘑菇街裁员回应】覆巢之下无完卵</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-box"></div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="content-box">
                                <div className="info-box">
                                    <div className="info-row meta-row">
                                        <ul className="meta-list">
                                            <li className="item username clickable">敖丙</li>
                                            <li className="item">4天前</li>
                                        </ul>
                                    </div>
                                    <div className="info-row title-row">
                                        <Link href="/">
                                            <a className="title">【蘑菇街裁员回应】覆巢之下无完卵</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-box"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Detail