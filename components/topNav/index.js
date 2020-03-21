import '../../static/styles/topNav.less'
import ActiveLink from '../ActiveLink'

const topNav = props => (
    <nav role="navigation" className="view-nav navigator">
        <ul className="nav-list left">
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

export default topNav