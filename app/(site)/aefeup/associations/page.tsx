import { Media } from "@/payload-types";
import { Metadata } from "next";
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "Núcleos e Associações",
  description: "",
};

const AssociationsPage = async () => {

  const associations = await (await getPayload({ config })).find({
    collection: 'association',
  });

  return (
    <>
      <section>
        <section>
          <h1>Núcleos da AEFEUP</h1>
          <ul>
            {associations.docs.filter(association => association.in_aefeup).map((association) => {
              const logo = association.logo as Media;

              return (
                <li key={association.id}>
                  <img src={logo.url ?? ""} alt={logo.alt} />
                  <h2>{association.name}</h2>
                  <p>{association.address}</p>
                  <ul>
                    {association.socials?.map((social) => (
                      <li key={social.type}>
                        <a href={social.link}>{social.type}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>

          <h1>Restantes Associações</h1>
          <ul>
            {associations.docs.filter(association => !association.in_aefeup).map((association) => {
              const logo = association.logo as Media;

              return (
                <li key={association.id}>
                  <img src={logo.url ?? ""} alt={logo.alt} />
                  <h2>{association.name}</h2>
                  <p>{association.address}</p>
                  <ul>
                    {association.socials?.map((social) => (
                      <li key={social.type}>
                        <a href={social.link}>{social.type}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

export default AssociationsPage;
