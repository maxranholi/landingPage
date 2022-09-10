import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=Splash&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;700;900&family=Splash&display=swap');
    font-family: 'Poppins', sans-serif;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-size: 16px;
}
`;
 
export default GlobalStyle;