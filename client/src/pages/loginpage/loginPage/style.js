import styled from "styled-components";
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from "../../../global/common";
import theme from "../../../global/theme";

const S={};
S.Background=styled.div`
    /* width:100vw; 가로 스크롤바 생김*/
    width:100%;
    height:100%;
    /* height:100vh; */
    /* ${flexCenterColumn} */
    
    

`
S.LoginComponent=styled.div`
    ${flexCenterColumn};
    font-family: 'Pretandard';
    ${h3};
    position:relative;
    width:600px;
    height:370px;
    margin:auto;
    transform: translate(0, 30%);
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }

    div:first-child {
        position: absolute;
        top:10%;
        font-size: ${theme.FONT_SIZE.h1};
        font-weight: 800;
        
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
    }
    div:nth-child(3) {
        position: absolute;
        top:40%;
        
    }
    div:nth-child(4) {
        position: absolute;
        top:50%;
        
    }
    span{
        font-family: 'TransformaScript';
    }
`

S.kakaoLoginButton=styled.div`
    position: absolute;
    top:70%;
    cursor: pointer;
    
    img {
        width: 25vw; 
        
        
    }
    
`
S.SignUpText=styled.div`
    position: absolute;
    top:88%;
    cursor: pointer;
    ${b2}
    text-decoration: underline;
    color:#717171;
`
//createnickname

S.NickNameComponent=styled.div`
    ${flexCenterColumn};
    font-family: 'Pretandard';
    position:relative;
    position:relative;
    width:600px;
    height:370px;
    margin:auto;
    transform: translate(0, 30%);
    /* transform: translate(0, -30%); */
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
    border-radius: 20px;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`

S.Title=styled.div`
    ${flexCenterColumn};
     div:first-child {
        position: absolute;
        top:10%;
        ${h1};
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
    }

`
S.NickName=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:30%;
    input{
        position:relative;
        left: 5%;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;              
        width: 55%;                
        /* box-sizing: border-box;       */
        border-radius: 10px;          
        ${b3}
        outline: none;
    }
    div:nth-child(3) {
        ${b4};
        color:#717171;
        padding:2%;
        
    }
        

`
S.SelectCategoryButton=styled.div`
     ${b1};
    font-weight: 700;
    border:2px solid ${theme.PALETTE.green};
    color:${theme.PALETTE.green};
    padding:2%;
    border-radius: 10px ;
    cursor: pointer;
`
S.Category=styled.div`
    width:70%;
    display:flex;
    ${b1};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:45%;

`
S.SignUp=styled.div`
    position: absolute;
    bottom:10%;
    width:70%;
    background-color: ${theme.PALETTE.green};
    text-align: center;
    ${h2};
    color:white;
    border-radius: 5px;
    padding: 1.8%;
    cursor: pointer;
`
S.CategoryButton = styled.button`
    padding: 2px 7px;
    ${b4}
    background-color: ${({ isSelected }) => (isSelected ? 'green' : 'white')};
    /* color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')}; */
    color:#717171;
    border: 1px solid #717171;
    
    border-radius: 30px;

    
`;
S.SelectedButton = styled(S.CategoryButton)`
    padding: 2px 7px;
    /* background-color:rgba(42, 168, 113, 0.09); */
    border: 1px solid #2AA871;
    color: #2AA871;
    /* border-radius: 10px; */
    cursor: pointer;
    margin:1%;
`;

S.SelectedContainer = styled.div`
    position: relative;
    /* min-height: 35.7px; */
    /* padding: 1.5%;  */
    right:0.7%;
    display: flex;
    flex-wrap: wrap;
    width:55%;
    
    background-color: rgba(233, 232, 228, 0.55);
    /* background-color: white; */
    /* border:1px solid green; */
    border-radius: 10px; 
    height:1%;
    padding-left: 1%;
    overflow-y: auto;
    
`;

S.ErrorMessage=styled.div`
    position: absolute;
    top:40%;
    left:35%;
    ${b4}
    color:#DF4545;
`
S.ErrorMessage2=styled.div`
    position: absolute;
    top:48.5%;
    left:35%;
    ${b4}
    color:#DF4545;
`
export default S;