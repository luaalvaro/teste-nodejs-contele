import styled from 'styled-components';
import Row from '../Row';

const media = {
    mobile: '@media(max-width: 720px)'
}

const FormSection = styled.form`
    background-color: #F7F7F7;
    width: 100vw;
    padding: 50px 120px;

    & > ${Row}:last-child {
        margin-top: 50px;
    }

    ${media.mobile} {
        padding: 15px;
    }
`;

export default FormSection;