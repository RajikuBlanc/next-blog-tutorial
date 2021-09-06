import Link from 'next/link';
import styled from 'styled-components';
// --------------- Function ---------------
export default function Header() {
  return (
    <HeaderStyles>
      <Link href='/'>
        <a>LOGO</a>
      </Link>
    </HeaderStyles>
  )
}
// --------------- Styles ---------------
const HeaderStyles = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 4rem;
`;
