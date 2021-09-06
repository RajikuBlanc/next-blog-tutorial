import styled from 'styled-components';

// --------------- Function ---------------
export default function Footer() {
  return (
    <FooterStyles>
      <p><small>&copy;2021 TestBlog</small></p>
    </FooterStyles>
  )
}

// --------------- Styles ---------------
const FooterStyles = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  color: var(--white);
`;
