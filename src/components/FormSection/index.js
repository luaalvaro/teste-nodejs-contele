import styled from 'styled-components';
import Row from '../Row';

const FormSection = styled.section`
    background-color: #F7F7F7;
    width: 100vw;
    padding: 50px 120px;

    & > ${Row}:last-child {
        margin-top: 50px;
    }
`;

export default FormSection;