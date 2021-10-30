import { AccordionButton } from '@chakra-ui/react';
import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    color: #ffffff;
    background-color: #3CB400;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding-block: 8px;
    padding-inline: 25px;
    border: none;
    cursor: pointer;
`;
export const LastButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;
export const QuestionContent = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 20px;
    background-color: #ffffff;
    color: #262626;
    font-size: 1.4rem;
    line-height: 25px;
`;
export const WhiteLine = styled.div`
    width: 100%;
    height: 15px;
    background-color: #ffffff;
`;
export const AccordionButtonMiddle = styled(AccordionButton)`
    background-color: #266336;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    font-size: clamp(1.2rem, 4vw + 0.5rem,1.6rem);
    font-weight: 600;
    border: none;
`;
export const AccordionButtonFirst = styled(AccordionButton)`
    background-color: #266336;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    font-size: clamp(1.2rem, 4vw + 0.5rem,1.6rem);
    font-weight: 600;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: none;
`;
export const Title = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(3.5rem, 5vw + 1.4rem, 6rem);
    text-align: center;
    color: #262626;
    margin-bottom: 40px;
`;
export const SectionContainer = styled.div`
    background-color: #f6f6f6;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;
