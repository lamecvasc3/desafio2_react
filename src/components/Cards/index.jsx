import Card from '../Card'
import * as Styled from './style'

const Cards = ({dados=[]}) => {

    return(
        <Styled.Container>
            {dados.map((card) =>{
                return(
                <Card key={card.objectID} title={card.title} author={card.author} url={card.url}/>
                );
            })}            
        </Styled.Container>
    );  

}

export default Cards