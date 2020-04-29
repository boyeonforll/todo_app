import {createGlobalStyle} from "styled-components"
import reset from "styled-reset"

export default createGlobalStyle`
    ${reset};
    input{
        :focus{
            outline: none;
        }
    }
    button{
        cursor: pointer;
    }
`;
