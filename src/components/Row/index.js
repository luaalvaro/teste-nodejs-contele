import styled from 'styled-components';

const media = {
    mobile: '@media(max-width: 720px)'
}

const Row = styled.div`
    display: flex;

    ${media.mobile} {
        display: flex;
        flex-direction: column;
    }
`;

export default Row;