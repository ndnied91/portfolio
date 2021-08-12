
import styled from "styled-components";

const NavUnlisted = styled.ul`
  a {
    text-decoration: none;
  }


  li{
    margin-right: 20px;
    color: red;
    /* margin: 0 0.8rem; */
    font-size: 1.3rem;
    list-style: none;
  }


  li:hover{
    transition-duration: 0.5s;
    color: black;
    transform: scale(1.1)
  }

  div{
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    list-style: none;
  }

  .current {
    li {
    transition-duration: 0.5s;
    transform: scale(1.2);
    }
  }


  @media screen and (max-width: 920px) {
    .navbar {
        justify-content: center;
    }

    li{
       font-size: 16px;
    }

  }

  @media screen and (max-width: 770px) {
    li {
        flex-direction: column;
        align-items: center;
    }
  }


  @media screen and (max-width: 600px) {
    li{
      color: #818181;
      margin: 0 0.8rem;
      font-size: 1.3rem;
      list-style: none;
      font-size: 45px;
    }

`;




export default NavUnlisted
