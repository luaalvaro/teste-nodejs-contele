import styled from 'styled-components';

const media = {
    mobile: '@media(max-width: 720px)'
}

const Header = styled.header`
    padding: 50px 120px;

    ${media.mobile} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Header;