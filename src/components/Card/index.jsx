import * as Styled from './styles'
import Title from '../Title'
import { FaUserAlt, FaBook, FaLink } from 'react-icons/fa'

const Card = ({ author, title, url }) => {
    return (
        <Styled.Container>
            <Title as='h3'>
                <FaUserAlt />
                {author ? author : 'Não identificado' }
            </Title>
            <Title as='h2'>
                <FaBook />
                {title ? title : 'Não identificado' }
            </Title>
            <a href={url ? url : '#'}>
                <FaLink />
                {url ? url : 'Não identificado' }
            </a>
        </ Styled.Container>
    );
}

export default Card