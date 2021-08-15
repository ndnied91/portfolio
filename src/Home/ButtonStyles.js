
import styled from "styled-components";

const ButtonStyles = styled.ul`
  a {
      text-decoration: none;
    }


  .current{
    color: black;
    /* font-weight: 600; */
    font-weight: var(--fw-bold);
    border: 2px solid #00008b;
    padding: 15px;
    font-size: 25px;
    border-radius: 10px;
    width: 400px;
    text-align: center;
    padding: 10px;
    margin: 10px;
  }

  .current:hover{
    transition-duration: 0.5s;
    transition-timing-function: linear;
    background: #090979;
    color: white;
  }
}


`;




export default ButtonStyles
