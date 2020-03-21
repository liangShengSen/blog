const ErrorPage = props => {
    return (
        <p>
            {props.statusCode
                ? `An error ${props.statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

ErrorPage.getInitialProps = async function ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
}

export default ErrorPage