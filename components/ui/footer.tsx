import React from "react";
import { Separator } from "./separator";
import { Label } from "./label";
import { ImageSvgFB, ImageSvgLI } from "../../app/Ressource/ImageSvg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center w-full text-center shadow-[35px_35px_60px_15px_rgba(0,0,0,0.6)] mt-auto">
      <address>
        <p>
          Adresse: Résidence Zayzafoun, app.3, 1er étage, 11 rue Belhassen Jrad,
          2080 Ariana, Tunisie
        </p>
        <p>
          Email:{" "}
          <a href="mailto:contact@winsoftinformatique.tn">
            contact@winsoftinformatique.tn
          </a>
        </p>
        <p>Tél: (+216) 71712 227 / (+216) 93 662 068</p>
      </address>
      <p>© 1998-{currentYear} Winsoft Informatique</p>
      <div className=" flex items-center">
        <ImageSvgFB />

        <ImageSvgLI />
      </div>
    </footer>
  );
};

export default Footer;
