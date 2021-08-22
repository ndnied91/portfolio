
import styled from "styled-components";

const ButtonStyles = styled.ul`
  a {
      text-decoration: none;
    }


  .current{
    color: black;
    /* background-color: green; */

    font-weight: var(--fw-bold);
    border: 2px solid #00008b;
    padding: 15px;
    font-size: 25px;
    border-radius: 10px;
    width: 400px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    box-shadow: var(--bs);

  }

  .current:hover{
    transition-duration: 0.5s;
    transition-timing-function: linear;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(4,112,189,1) 68%, rgba(2,165,224,1) 85%, rgba(0,212,255,1) 100%);;
    color: white;

  }
}


`;




export default ButtonStyles
