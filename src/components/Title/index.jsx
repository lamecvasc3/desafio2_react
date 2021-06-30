import * as Styled from './style'

const Title = ({children, as = 'h1'}) => {
    return(
        <Styled.Title as={as}>{children}</Styled.Title>
    );
}

export default Title