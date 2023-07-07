import NextLink from "next/link";
import Logo from "../../images/Logo.png";
import styles from "../../styles/navbar.module.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar className={styles["app-bar"]}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <img
              src={Logo.src}
              className={styles["img-logo"]}
              alt="Logotipo de P.I.D.A"
            />
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button>Registro</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button>Acerca</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button>Servicios</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button>Dudas</Button>
            </Link>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Link>
              <Button>Contacto</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <NextLink href="/cart" passHref>
          <Link className={styles["enlace-telefono"]}>
            <LocalPhoneIcon />
            <Typography>373 735 6060</Typography>
          </Link>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
