import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ShopLayout } from "../components/layouts";
import styles from "../styles/home.module.scss";
import Pulsera from "../images/Pulsera.jpeg";
import Care from "../images/Care.jpg";
import Servicio from "../images/Servicio.jpeg";
import Seguridad from "../images/Seguridad.jpg";
import FacilUsar from "../images/FacilUsar.jpg";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Pida - Home"}
      pageDescription={
        "Pulsera inteligente diseñada para la localización de personas con padecimiento de Alzheimer"
      }
    >
      <div className={styles["info-pulsera"]}>
        <Typography
          variant="h1"
          component="h1"
          className={styles["titulo-pulsera"]}
        >
          Pulsera inteligente diseñada para la localización de personas con
          padecimiento de Alzheimer
        </Typography>
        <div style={{ textAlign: "center" }}>
          <img src={Pulsera.src}></img>
        </div>
      </div>
      <div className={styles.tarjetas}>
        <Card sx={{ maxWidth: 345 }} style={{ width: "25%" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={Care.src}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cuida de tu familia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Con tu pulsera P.I.D.A, tu familiar estará protegido en todo
              momento por nosotros.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Leer más..</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ width: "25%" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={FacilUsar.src}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Facil de usar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Posterior a la entrega de la pulsera, está se activara después de
              5 minutos y estará lista para usarse.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Leer más..</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ width: "25%" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={Servicio.src}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Garantía y servicio de por vida
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nuestro producto esta garantizado de por vida. Si tienes cualquier
              duda, podrás comunicarte con un asesor P.I.D.A en todo momento.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Leer más..</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} style={{ width: "25%" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={Seguridad.src}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Protección y seguridad de información
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Los datos personales de tu familiar estarán en total
              confidencialidad y serán protegidos por nosotros, ya que contamos
              con la tecnología y seguridad necesaria.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Leer más..</Button>
          </CardActions>
        </Card>
      </div>
    </ShopLayout>
  );
};

export default Home;
