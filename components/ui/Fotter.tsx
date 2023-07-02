import NextLink from "next/link";
import { Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "../../styles/fotter.module.scss";

export const Fotter = () => {
  return (
    <>
      <div className={styles["contenedor-fotter"]}>
        <div className="acerca">
          <h3>Acerca de P.I.D.A</h3>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Términos y condiciones</Typography>
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>
              <Typography>¿Quiénes somos?</Typography>
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Aviso de privacidad</Typography>
            </Link>
          </NextLink>
        </div>
        <div className="ayuda">
          <h3>Ayuda</h3>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Preguntas frecuentes</Typography>
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>
              <Typography>¿Cómo comprar una pulsera?</Typography>
            </Link>
          </NextLink>
        </div>
        <div className="contacto">
          <h3>Contáctanos</h3>
          <NextLink href="/" passHref>
            <Link>
              <Typography>WhatsApp 373 735 6060</Typography>
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link>
              <Typography>atencion@pulserapida.org </Typography>
            </Link>
          </NextLink>
        </div>
      </div>
      <div className={styles["derechos-reservados"]}>
        <Typography>Derechos reservados: PIDA 2023</Typography>
        <div className={styles.siguenos}>
          <Typography>Siguenos</Typography>
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </>
  );
};
