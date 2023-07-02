import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";

type Data = {
  messege: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ messege: "No hay accesso a los datos" });
  }

  await db.connect();

  await db.disconnect();

  res.status(200).json({
    messege: "Proceso realizado correctamente",
  });
}
