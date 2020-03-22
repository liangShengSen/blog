import '../../static/styles/basic.less'
import Header from '../Header'
import TopNav from '../TopNav'
import LeftNav from '../LeftNav'
import Recommend from '../Recommend'
import AuthModal from '../AuthModal'
import { Store } from '../../redux'

const Layout = props => {
    return (
        <Store>
            <main className="layout">
                <Header />
                <div className="container main-container">
                    <TopNav />
                    <div className="main">
                        <LeftNav />
                        {props.children}
                        <Recommend />
                    </div>
                </div>
            </main>
            <AuthModal />
        </Store>
    )
}

export default Layout