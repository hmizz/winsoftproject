import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function Body() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-medium leading-relaxed max-w-5xl">
        Maîtrisez chaque aspect de votre entreprise en adoptant des stratégies
        performantes et des solutions adaptées pour piloter vos activités avec
        précision, optimiser vos ressources et atteindre vos objectifs avec
        succès.
      </h1>
      <p className="text-gray-500 text-base mt-2">
        Prendre un rendez-vous pour une demo
      </p>
      <div className="space-x-4">
        <Button>Demander une demo</Button>
        <Button>Demander un devis</Button>
      </div>
      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-medium leading-relaxed max-w-5xl">
        Nos services
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Développement de logiciels informatiques</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Winsoft Informatique est une société de service en conseil et
              ingénierie des systèmes informatiques. Nous avons pour mission de
              concevoir et de développer pour vous des applications de gestion
              en mettant en oeuvre des outils technologiques modernes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revente de matériel informatique</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Etant un distributeur de marques leaders dans leurs domaines
              telles que DELL,HP,LENOVO,EPSON, HONEYWELL,SAMSUNG … Winsoft
              Informatique vous offre un large choix d’équipements et de
              solutions évolutives, sécurisées et adaptées à vos besoins dans le
              but de garantir à votre entreprise une infrastructure solide et
              performante.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>S.A.V</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Winsoft Informatique assure la maintenance de votre environnement
              numérique : le dépannage, l’assistance informatique, l’élimination
              de virus, l’installation de logiciels et la récupération de
              données.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Body;
