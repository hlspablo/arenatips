import { AccordionButton } from '@chakra-ui/react';
import styled from 'styled-components';

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
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
`;
export const AccordionButtonFirst = styled(AccordionButton)`
    background-color: #266336;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 600;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: none;
`;
export const Title = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: 5.3rem;
    text-align: center;
    color: #262626;
    margin-bottom: 40px;
`;
export const SectionContainer = styled.div`
    background-color: #f6f6f6;
    padding: 50px 180px;
`;
