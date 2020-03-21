import '../../static/styles/basic.less'
import Header from '../Header'
import TopNav from '../TopNav'
import LeftNav from '../LeftNav'
import Recommend from '../Recommend'

const Layout = props => (
    <main className="layout">
        <Header />
        <div className="container main-container">
            <TopNav />
            <div className="main">
                <LeftNav />
                    { props.children }
                <Recommend />
            </div>
        </div>
    </main>
)

export default Layout