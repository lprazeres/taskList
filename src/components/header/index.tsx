import { HeaderArea, HeaderContainer } from "./styles";
import { AddressBook } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderArea>
                <i><AddressBook size={52} color="#effb09" /></i>
                  <span>TASK LIST</span>
            </HeaderArea>
        </HeaderContainer>
    )
}