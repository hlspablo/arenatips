import styled from 'styled-components';
import headerBg from 'assets/images/headerBg.jpeg';

export const ButtonSeeMore = styled.button`
    font-family: 'Bebas Neue', cursive;
    font-size: 2rem;
    color: #262626;
    background-color: #ffffff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 8px 45px;
    border: none;
`;
export const Button = styled.button`
    font-family: 'Bebas Neue', cursive;
    font-size: 2rem;
    color: #ffffff;
    background-color: #3CB400;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 8px 45px;
    border: none;
    margin-right: 100px;
`;
export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
`;
export const SubtitleContainer = styled.div`
    padding: 0px 60px;
    @media only screen and (max-width: 480px) {
        padding: 0px 13px;
    }
`;
export const Subtitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    text-align: center;
    font-weight: 500;
    color: #ffffff;
    @media only screen and (max-width: 480px) {
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 767px) {
        font-size: 2rem;
    }
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