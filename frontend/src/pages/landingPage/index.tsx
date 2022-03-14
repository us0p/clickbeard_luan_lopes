import React from "react";
import { Container, ContentBox, DescriptiveBox, ButtonBox } from "./styles";
import { OutlinedButton, H1, TitleBox } from "../../components";

const LandingPage: React.FC = () => {
    return (
        <Container>
            <ContentBox>
                <DescriptiveBox>
                    <TitleBox>
                        <H1>A verdadeira experiência de fazer a barba</H1>
                    </TitleBox>
                    <p>
                        Nossos barbeiros especializados irão lhe oreferecer a
                        melhor experiência de corte imaginavel.
                    </p>
                    <p>
                        Escolha sua necessidade e agende agora mesmo com o seu
                        barbeiro preferido.
                    </p>
                    <p>Controle sobre seus horários.</p>
                </DescriptiveBox>
                <ButtonBox>
                    <OutlinedButton>Login</OutlinedButton>
                </ButtonBox>
            </ContentBox>
        </Container>
    );
};

export default LandingPage;
