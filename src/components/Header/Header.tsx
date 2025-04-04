import { FC } from "react";
import { HeaderContainer, HeaderSection } from "./Header.styled";
import { Container } from "../../GlobalStyle";

const Header: FC = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>Task manager</HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
export default Header;
