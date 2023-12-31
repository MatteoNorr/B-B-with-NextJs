import Link from "next/link";
import Head from "next/head";
import styles from "../styles/About.module.scss";

const about = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.About}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          optio, quas molestiae eveniet est nesciunt nisi obcaecati quis minus
          nihil expedita ipsum saepe! Voluptas, optio quisquam. Voluptate ab
          quis saepe! Maxime soluta corrupti provident doloribus dolore mollitia
          labore blanditiis, suscipit quo et a harum, expedita inventore. Quasi
          natus ipsum incidunt magni, itaque asperiores, eaque, autem neque
          fugit odit doloremque eveniet? Doloremque aspernatur ipsum excepturi
          iste accusamus, sint sed quae quos, odio nesciunt dolor consequuntur
          quia iure fuga minus vel est illum a facere magnam quidem totam? Cum
          est rerum libero. Molestias fuga aperiam dolore deserunt temporibus
          aspernatur incidunt inventore reprehenderit sed ipsum ut magnam illo
          quaerat ipsa, reiciendis nemo exercitationem! Sequi assumenda quisquam
          quibusdam ut, aliquid animi? Nemo, voluptate veniam. Perspiciatis
          necessitatibus a doloremque vel. Vitae architecto culpa animi,
          adipisci voluptate aperiam natus repellat iure omnis distinctio
          reiciendis neque esse dolore. Nobis nostrum odio praesentium sapiente
          voluptatem inventore est maxime! Natus, nihil adipisci eveniet ea qui
          quaerat minima est! Quo, earum tempora, nemo ipsam hic veniam, facilis
          doloremque modi saepe tempore possimus ullam veritatis sapiente
          excepturi omnis libero dolorem ad. Necessitatibus et odit dolorem ex
          sit veritatis amet perspiciatis ut aperiam. Magnam recusandae facere,
          ratione praesentium aspernatur tenetur vitae, animi asperiores
          pariatur iste cupiditate, possimus dolores incidunt a deleniti?
          Assumenda. Recusandae at quo aliquam veniam distinctio? Culpa
          similique aut error blanditiis vel, voluptas fugit ullam veniam quod
          odio nulla unde eos deleniti ex dolorum amet? Praesentium adipisci
          impedit harum? Consectetur? Earum ducimus architecto ipsum asperiores
          incidunt. Molestiae earum ducimus perferendis provident possimus
          commodi. Nemo consequuntur adipisci, quia consequatur praesentium quos
          eos odio temporibus placeat expedita ipsa enim explicabo totam
          architecto! Ea doloremque voluptates repellendus suscipit magni,
          praesentium delectus, provident sint beatae sit sapiente vel culpa
          ipsum quis saepe voluptatum numquam rerum optio expedita iure harum
          aperiam in? Odio, repudiandae voluptas.
        </p>
        <Link href="/">
          <button>←</button>
        </Link>
      </div>
    </>
  );
};

export default about;
