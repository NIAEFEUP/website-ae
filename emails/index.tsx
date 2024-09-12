import { EventRequestInfo } from "@/types/eventRequestInfo";
import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Preview,
    Row,
    Section,
    Text,
    Hr,
  } from "@react-email/components";
  import * as React from "react";

  export const EmailTemplate= ({requestEventInfo} : {requestEventInfo: EventRequestInfo }) => (
    <Html>
      <Head />
      <Preview>
        {
          requestEventInfo.isEvent 
          ? `A organização ${requestEventInfo.name} submeteu uma requisição para um evento através de ${requestEventInfo.responsible_name}.`
          : `A organização ${requestEventInfo.name} através de ${requestEventInfo.responsible_name} requisitou materiais.`
        }
      </Preview>
  
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column style={tableCell}>
                <Text style={heading}> {requestEventInfo.isEvent ? "Marcação de Evento" : "Pedido de Material"}</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            <Text style={cupomText}>
              {
                requestEventInfo.isEvent 
                ? `A organização ${requestEventInfo.name} submeteu uma requisição para um evento.`
                : `A organização ${requestEventInfo.name} requisitou os seguintes materiais.`
              }
            </Text>
          </Section>
            <Section style={informationTable}>
              <Row style={informationTableRow}>
                <Column colSpan={2}>
                  <Section>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Nome da Organização</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.name}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Nome do responsável</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.responsible_name}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Email</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.email}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Contacto Telefónico</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.contact_number}</Text>
                      </Column>
                    </Row>
          {requestEventInfo.isEvent ? (
            <div>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Local do Evento</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.space}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Data de Início</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.start_date}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Data de Fim</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.end_date}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column style={informationTableColumn}>
                        <Text style={informationTableLabel}>Descrição do Evento</Text> 
                        <Text style={informationTableValue}>{requestEventInfo.event_description}</Text>
                      </Column>
                    </Row>
            </div>
          ) : (
            <div/>
          )}
                  </Section>
                </Column>
              </Row>
            </Section>
          {requestEventInfo.requestedMaterial.length !== 0 ?
          (
            <div>
              <Section>
                <Text style={cupomText}>
                  O seguinte material foi requisitado:
                </Text>
              </Section>
              <Section style={informationTable}>
                <Row style={informationTableRow}>
                  {requestEventInfo.requestedMaterial.map((material) => (
                    <Row>
                      <Hr />
                      <Column style={centeredElement}>
                        <Text>{material.name}</Text> 
                      </Column>
                      <Column style={centeredElement}>
                        <Text>{material.quantity}</Text>
                      </Column>
                    </Row>
                  ))}
                </Row>
              </Section> 
            </div>
          )
          : <div/>}

        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplate;
  
  const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ffffff",
  };
  
  const resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
  };

  const centeredElement = {
    width: "50%",
    textAlign: "center" as const
  }

  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
    maxWidth: "100%",
  };
  
  const tableCell = { display: "table-cell" };
  
  const heading = {
    fontSize: "32px",
    fontWeight: "300",
    color: "#888888",
  };
  
  const cupomText = {
    textAlign: "center" as const,
    margin: "36px 0 40px 0",
    fontSize: "14px",
    fontWeight: "500",
    color: "#111111",
  };
  
  const informationTable = {
    borderCollapse: "collapse" as const,
    borderSpacing: "0px",
    color: "rgb(51,51,51)",
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "3px",
    fontSize: "12px",
  };
  
  const informationTableRow = {
    height: "46px",
  };
  
  const informationTableColumn = {
    paddingLeft: "20px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "0px 1px 1px 0px",
    height: "44px",
  };
  
  const informationTableLabel = {
    ...resetText,
    color: "rgb(102,102,102)",
    fontSize: "10px",
  };
  
  const informationTableValue = {
    fontSize: "12px",
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
  };
  