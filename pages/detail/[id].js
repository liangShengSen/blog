import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Detail = () => {
    const router = useRouter()
    return (
        <Layout showLeftNav={false}>
            <h1>{router.query.id}</h1>
            <p>This is a blog post content</p>
        </Layout>
    )
}

export default Detail