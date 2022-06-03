import {
    HeaderContainer,
    Logo 
} from "./Header.style";

export default function Header() {
    return(
        <HeaderContainer>
            <Logo src="/images/logo.svg" alt="Logotipo do Adote um Pet" />
        </HeaderContainer>
    )
}