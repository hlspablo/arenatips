import styled from 'styled-components';
import sectionTwoBg from 'assets/images/sectionTwo.jpeg';

export const TinyMessage = styled.h4`
    font-family: 'Bebas Neue', cursive;
    font-size: 4rem;
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
`;
export const SubMessage = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: 4rem;
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
`;
export const Message = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: 6rem;
    text-align: center;
    color: #ffffff;
    padding-top: 120px;
`;
export const SectionContainer = styled.div`
    height: 550px;
    background-image: url(${sectionTwoBg});
    background-position: center center;
    background-size: cover;
`;
