import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'Bebas Neue', cursive;
    font-size: 2rem;
    color: #ffffff;
    background-color: #3CB400;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 8px 45px;
    border: none;
    cursor: pointer;
`;
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 30px;
`;
export const PriceValue = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-size: 2.8rem;
    color: #4A4A4A;
`;
export const PriceValueContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const PriceText = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-size: 1.8rem;
    color: #4A4A4A;
`;
export const PriceTextSmall = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-size: 1.4rem;
    color: #4A4A4A;
    margin-left: 8px;
`;
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;
export const DescriptionLineCentered = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 20px;
`;
export const DescriptionLine = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 8px;
`;
export const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 0px 30px;
`;
export const CardImage = styled.img`
    width: 320px;
    height: 270px;
    border-radius: 20px;
`;
export const CardTitle = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
    color: #262626;
    margin-top: 15px;
    margin-bottom: 15px;
`;
export const Card = styled.div`
    display: flex;
    flex: 1 1 358px;
    margin: 15px;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: #ffffff;
    transition: transform .2s;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    &:hover {
        transform: scale(1.04);
    }
`;
export const CardsContainer = styled.div`
    display: flex;
    max-width: 1200px;
    flex-wrap: wrap;
    margin: 0 auto;
`;
export const Title = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(3.5rem, 5vw + 1.4rem, 6rem);
    text-align: center;
    color: #262626;
    margin-bottom: 20px;
    margin-top: 20px;
`;
export const SectionContainer = styled.div`
    background-color: #f6f6f6;
`;
