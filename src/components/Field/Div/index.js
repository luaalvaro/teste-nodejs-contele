import styled from 'styled-components';

const media = {
    mobile: '@media(max-width: 720px)'
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 25px;
    margin-bottom: 25px;

    ${media.mobile} {
        width: auto;
        margin-bottom: 5px;
    }
`;

export default Div;