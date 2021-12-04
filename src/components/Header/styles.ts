import styled from 'styled-components';
import headerBg from 'assets/images/headerBg.jpeg';

export const ButtonSeeMore = styled.button`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    color: #262626;
    background-color: #ffffff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding-block: 8px;
    padding-inline: 25px;
    border: none;
    cursor: pointer;
`;
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
export const ButtonsContainer = styled.div`
    display: flex;
    flex: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 600px;
    padding-inline: 20px;
`;
export const BlackFridayContainer = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`;
export const BlackFridayText = styled.h4`
    font-family: 'Bebas Neue', cursive;
    font-size: clamp(2rem, 2.5vw + 1.4rem, 3rem);
    text-align: center;
    font-weight: 500;
    color: #ffffff;
`;
export const SubtitleContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
`;
export const Subtitle = styled.h4`
    font-family: 'Oswald', sans-serif;
    font-size: clamp(2rem, 2.5vw + 1.4rem, 3rem);
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: min(60px, 7vw);
`;
export const Title = styled.h3`
    font-family: 'Bebas Neue', cursive;
    font-size: 5.3rem;
    text-align: center;
    color: #ffffff;
    margin-top: 20px;
`;
export const HeaderContainer = styled.header`
    height: 720px;
    background-image: url(${headerBg});
    background-position: center center;
    background-size: cover;
`;
export const MainLogo = styled.img`
    width: 290px;
    height: 260px;
`;
export const LogoContainer = styled.div`
    display: flex;
    padding-top: 70px;
    justify-content: center;
    align-items: center;
`;
