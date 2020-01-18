import React from 'react';

import {
  FaUser,
  FaEnvelope,
  FaQuestion,
  FaComment,
  FaMapPin,
  FaPhone,
  FaRegEnvelope,
} from 'react-icons/fa';

import Grid from '~/components/Grid';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Card, Spacer, Info } from './styles';

export default function ContactForm() {
  return (
    <Container>
      <Grid>
        <Card maxWidth={570} float>
          <h5>Contato</h5>
          <Info>
            <p>
              Você pode nos visitar no escritório ou, caso prefira, entrar em
              contato por telefone, e-mail ou pelo formulário ao lado.
            </p>
            <ul>
              <li>
                <FaMapPin size={24} />
                <p>
                  <span>Avenida Liberdade, 21, Sala 1307</span>
                  <span>Bairro Liberdade, São Paulo, SP</span>
                  <span>CEP: 01503-000</span>
                </p>
              </li>
              <li>
                <FaPhone size={24} />
                <p>
                  <span>(11) 5573-6999</span>
                  <span>(11) 98111-9180</span>
                </p>
              </li>
              <li>
                <FaRegEnvelope size={24} />
                <p>
                  <span>pauloamerico@naturalmed.com.br</span>
                </p>
              </li>
            </ul>
          </Info>
        </Card>
        <Spacer>
          <Card maxWidth={770}>
            <h5>Formulário</h5>
            <form>
              <Input
                name="name"
                icon={FaUser}
                placeholder="Digite o seu nome"
              />
              <Input
                name="email"
                icon={FaEnvelope}
                placeholder="Digite o seu e-mail"
              />
              <Input
                name="subject"
                icon={FaQuestion}
                placeholder="Digite o assunto"
              />
              <Input
                name="message"
                icon={FaComment}
                placeholder="Digite a sua mensagem"
                type="textArea"
              />
              <div className="submit">
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </Card>
        </Spacer>
      </Grid>
    </Container>
  );
}
