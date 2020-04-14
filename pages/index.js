import Layout from "../components/Layout"
import List from "../components/List"
import axios from 'axios'

const Index = props => {
  return (
    <Layout showLeftNav={true}>
      <div className="stream">
        <div className="stream-wrapper">
          <div className="page-header">
            <div className="feed-tip-wrapper">
              <div className="feed-tip">有 0 条更新，点击查看</div>
            </div>
          </div>
          <div className="pin-list-view">
            <List />
          </div>
        </div>
      </div>
    </Layout>
  )
}

Index.getInitialProps = async ({req,res,err}) => {
  return {}
  // const resp = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  // return {
  //   shows: resp.data.map(entry => entry.show)
  // }
}

export default Index

