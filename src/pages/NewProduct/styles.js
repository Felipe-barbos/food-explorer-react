import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
height: 100vh;

display: grid;

gap: 2.5rem;
grid-template-areas:
"header"
"content"
"footer";




`;


export const Form = styled.form`

 margin-top: 4rem;

 height: 100vh;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 padding: 1.5rem;

 

 > h1{
  font-size: 3rem;
  font-family: "Poppins";
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
 }


 .panelOne, .panelTwo{
  display: flex;
  flex-direction: column;
  gap: 1rem;
 }

 .input-wrapper{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;

  label {
   font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;
   line-height: 1.6rem;
  }

  Input{
   height: 4.2rem;
  }

  Button{
   height: 4.2rem;
   background: ${({ theme }) => theme.COLORS.DARK_800};
  }

 > textarea{
   width: 100%;
   height: 17rem;
   display: flex;
   align-items: center;
   color:${({ theme }) => theme.COLORS.LIGHT_500};
   background: ${({ theme }) => theme.COLORS.DARK_900};

   margin-bottom: .8rem;
   border-radius: .8rem;
   padding: 1.2rem;

   border: none;
   outline: none;

   font-size: 1.6rem;

   & ::placeholder{
      color:${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
     
    }

    &:focus{
     border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
    }

  }

  > select{
   width: 100%;
   display: flex;
   align-items: center;
   color:${({ theme }) => theme.COLORS.LIGHT_500};
   background: ${({ theme }) => theme.COLORS.DARK_900};

   margin-bottom: .8rem;
   border-radius: .8rem;
   padding: 1.2rem;

   border: none;
   outline: none;

   font-size: 1.6rem;
  }

 }

 @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
  padding: 3rem;
  justify-content: center;
  .panelOne, .panelTwo{
    flex-direction: row;
    justify-content: space-between;
    
  }

  .input-wrapper{
    width: 100%;
  }
 }
`;

export const IngredientsList = styled.div`
  height: 4.2rem;
  padding: 2rem;
  

  background: ${({ theme }) => theme.COLORS.DARK_800};
  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 1rem;


  border-radius: .8rem;

`