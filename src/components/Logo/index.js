import styled from 'styled-components';

const media = {
    mobile: '@media(max-width: 720px)'
}

const Logo = styled.img`
    width: 256px;

    ${media.mobile} {
        width: 200px;
    }
`



export default Logo;