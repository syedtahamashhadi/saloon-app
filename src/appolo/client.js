import ApoloClient from 'apollo-boost'

const client = new ApoloClient(
    {
        uri: `http://15.165.108.170:8081/user/graphql`
    }
)

export { client }