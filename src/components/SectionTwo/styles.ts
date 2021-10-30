import styled from 'styled-components';
import sectionTwoBg from 'assets/images/sectionTwo.jpeg';

export const TinyMessage = styled.h4`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(2.6rem, 4vw + 1.4rem, 5rem);
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
`;
export const SubMessage = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(3rem, 4vw + 1.4rem, 4.5rem);
    text-align: center;
    color: #ffffff;
    margin-top: 30px;
`;
export const Message = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(4rem, 5vw + 1.4rem, 6rem);
    text-align: center;
    color: #ffffff;
    padding-top: min(6rem, 14vw);
`;
export const SectionContainer = styled.div`
    height: 550px;
    background-image: url(${sectionTwoBg});
    background-position: center center;
    background-size: cover;
    padding: 20px;
`;
