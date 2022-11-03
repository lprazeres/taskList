import { Header } from "../../components/header";
import { Form } from '../home/form/index';
import { HomeContainer } from "./styles";
import { Posts } from "./posts";

export function Home() {
    return (
        <HomeContainer>
                <Header />
                <Form />
                <Posts />
        </HomeContainer>
    )
}