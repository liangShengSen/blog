import '../../static/styles/detail.less'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Detail = () => {
    const router = useRouter()
    return (
        <Layout showLeftNav={false}>
            <div className="main-area shadow">
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
                                    <div contenteditable="true" spellcheck="false" placeholder="输入评论..." className="rich-input"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Detail