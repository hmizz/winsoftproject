"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { format } from "date-fns";
import { Check, ChevronsUpDown, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Bosch from "../../app/images/Clients/Bosch.png";
import Cave_BD from "../../app/images/Clients/Cave_BD.png";
import Chery from "../../app/images/Clients/Chery.png";
import Citroen from "../../app/images/Clients/Citroen.png";
import Cosmetica from "../../app/images/Clients/Cosmetica.png";
import Eurorepar from "../../app/images/Clients/Eurorepar.png";
import FAW_TLM from "../../app/images/Clients/FAW-TLM.png";
import Fiat from "../../app/images/Clients/Fiat.png";
import Ford from "../../app/images/Clients/Ford.png";
import Haval from "../../app/images/Clients/Haval.png";
import hyundai from "../../app/images/Clients/hyundai.png";
import Italcar from "../../app/images/Clients/Italcar.png";
import Kia from "../../app/images/Clients/Kia.png";
import Kleos from "../../app/images/Clients/Kleos.png";
import Mercedes_Benz from "../../app/images/Clients/Mercedes-Benz.png";
import Once_Again from "../../app/images/Clients/Once_Again.png";
import Peugeot from "../../app/images/Clients/Peugeot.png";
import Renault from "../../app/images/Clients/Renault.png";
import stafim_marque from "../../app/images/Clients/stafim marque.png";
import The_Closet from "../../app/images/Clients/The_Closet.png";
import Total from "../../app/images/Clients/Total.png";
import Toyota from "../../app/images/Clients/Toyota.png";
import un_autre_temps_dv from "../../app/images/Clients/un_autre_temps_dv.png";
import Vitale_médicale from "../../app/images/Clients/Vitale_médicale.png";
import WV from "../../app/images/Clients/WV.png";

import stafim from "../../app/images/stafim.png";
import tecalliance from "../../app/images/tecalliance.png";
import italcar from "../../app/images/italcar.png";
import { StaticImageData } from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const carouselItems: { title: string; image: StaticImageData }[] = [
  {
    title: "stafim",
    image: stafim,
  },
  {
    title: "tecalliance",
    image: tecalliance,
  },
  {
    title: "italcar",
    image: italcar,
  },
];
const carouselClients: { title: string; image: StaticImageData }[] = [
  {
    title: "Bosch",
    image: Bosch,
  },
  {
    title: "Cave_BD",
    image: Cave_BD,
  },
  {
    title: "Chery",
    image: Chery,
  },
  {
    title: "Citroen",
    image: Citroen,
  },
  {
    title: "Cosmetica",
    image: Cosmetica,
  },
  {
    title: "Eurorepar",
    image: Eurorepar,
  },
  {
    title: "FAW-TLM",
    image: FAW_TLM,
  },
  {
    title: "Fiat",
    image: Fiat,
  },
  {
    title: "Ford",
    image: Ford,
  },
  {
    title: "Haval",
    image: Haval,
  },
  {
    title: "hyundai",
    image: hyundai,
  },
  {
    title: "Italcar",
    image: Italcar,
  },
  {
    title: "Kia",
    image: Kia,
  },
  {
    title: "Kleos",
    image: Kleos,
  },
  {
    title: "Mercedes-Benz",
    image: Mercedes_Benz,
  },
  {
    title: "Once_Again",
    image: Once_Again,
  },
  {
    title: "Peugeot",
    image: Peugeot,
  },
  {
    title: "Renault",
    image: Renault,
  },
  {
    title: "stafim marque",
    image: stafim_marque,
  },
  {
    title: "The_Closet",
    image: The_Closet,
  },
  {
    title: "Total",
    image: Total,
  },
  {
    title: "Toyota",
    image: Toyota,
  },
  {
    title: "un_autre_temps_dv",
    image: un_autre_temps_dv,
  },
  {
    title: "Vitale_médicale",
    image: Vitale_médicale,
  },
  {
    title: "WV",
    image: WV,
  },
];
const services: { title: string; content: string }[] = [
  {
    title: "Développement de logiciels informatiques",
    content:
      " Winsoft Informatique est une société de service en conseil et ingénierie des systèmes informatiques. Nous avons pour mission de concevoir et de développer pour vous des applications de gestion en mettant en oeuvre des outils technologiques modernes.",
  },
  {
    title: "Revente de matériel informatique",
    content:
      " Etant un distributeur de marques leaders dans leurs domaines telles que DELL,HP,LENOVO,EPSON, HONEYWELL,SAMSUNG … Winsoft Informatique vous offre un large choix d’équipements et de solutions évolutives, sécurisées et adaptées à vos besoins dans le but de garantir à votre entreprise une infrastructure solide et performante.",
  },
  {
    title: "S.A.V",
    content:
      "Winsoft Informatique assure la maintenance de votre environnement numérique : le dépannage, l’assistance informatique, l’élimination de virus, l’installation de logiciels et la récupération de données.",
  },
];
const logiciels: { title: string; description: string }[] = [
  {
    title: "Winsoft Garage Plus",
    description:
      "Winsoft Garage Plus est une solution de gestion performante et sûre qui va vous permettre de mieux administrer votre garage.",
  },
  {
    title: "Winsoft Commercial Plus",
    description:
      "Winsoft Commercial Plus est un environnement de travail personnalisable pour la gestion de votre activité entrepreneuriale.",
  },
  {
    title: "WinsoftNet ",
    description:
      "WinsoftNet est La plateforme qui relie la concession à ses concessionnaires.",
  },
  {
    title: "Winsoft Comptabilié",
    description:
      " Winsoft Comptabilité  vous offre les fonctionnalités requises et nécessaires pour mieux organiser la comptabilité de votre entreprise.",
  },
];
const FAQ: { Question: string; Answer: string }[] = [
  {
    Question:
      " Comment Winsoft Garage Plus aide-t-il à gérer mon garage automobile ?",
    Answer:
      "Winsoft Garage Plus est conçu pour automatiser et centraliser la gestion d'un garage. Il permet de gérer les réparations, les pièces détachées, le stock, la facturation, les clients et les fournisseurs . L'objectif est d'améliorer l'efficacité opérationnelle, de réduire les erreurs humaines et de fournir des outils puissants pour suivre les performances du garage.",
  },
  {
    Question:
      "Comment l'intégration de TecDoc fonctionne-t-elle avec les solutions Winsoft ?",
    Answer:
      "L'intégration de TecDoc avec nos solutions, notamment Winsoft Garage Plus et Winsoft Commercial Plus, permet aux utilisateurs d'accéder à une base de données complète de pièces détachées automobiles. Cette fonctionnalité permet de rechercher des pièces, d’afficher les prix et la disponibilité . L'intégration facilite également la gestion du stock.",
  },
  {
    Question: "Comment winsoft SMSing aide à booster mes ventes ? ",
    Answer:
      "Informez vos clients instantanément par SMS et faites-leur découvrir vos offres et vos promotions.",
  },
  {
    Question: "Le support client est-il disponible quand j'ai besoin d'aide ?",
    Answer:
      "Winsoft propose un support client réactif et de haute qualité. Notre équipe de support est disponible et prête à vous assister rapidement en cas de problèmes techniques ou de questions, garantissant ainsi une expérience utilisateur optimale.",
  },
];
function TimeSelect() {
  const generateTimeOptions = () => {
    const times = [];
    let currentTime = new Date();
    currentTime.setHours(8, 30, 0, 0); // Start from 08:30

    // Loop to generate time options up to 17:00
    while (
      currentTime.getHours() < 17 ||
      (currentTime.getHours() === 17 && currentTime.getMinutes() === 0)
    ) {
      const hours = currentTime.getHours().toString().padStart(2, "0");
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      times.push(`${hours}:${minutes}`);

      // Increment time by 1 hour
      currentTime.setHours(currentTime.getHours() + 1);
    }

    return times;
  };
}
function Body() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const generateTimeOptions = () => {
    const times = [];
    let currentTime = new Date();
    currentTime.setHours(8, 30, 0, 0); // Start from 08:30

    // Loop to generate time options up to 17:00
    while (
      currentTime.getHours() < 17 ||
      (currentTime.getHours() === 17 && currentTime.getMinutes() === 0)
    ) {
      const hours = currentTime.getHours().toString().padStart(2, "0");
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      times.push(`${hours}:${minutes}`);

      // Increment time by 1 hour
      currentTime.setHours(currentTime.getHours() + 1);
    }

    return times;
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-bold leading-relaxed max-w-5xl my-8">
        Maîtrisez chaque aspect de votre entreprise en adoptant des stratégies
        performantes et des solutions adaptées pour piloter vos activités avec
        précision, optimiser vos ressources et atteindre vos objectifs avec
        succès.
      </h1>
      <p className="text-gray-500 text-base my-4">
        Prendre un rendez-vous pour une demo ?
      </p>
      <div className="space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Demander une demo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Demande de démonstration</DialogTitle>
              <DialogDescription>
                Complétez le formulaire ci-dessous pour nous envoyer une demande
                de démonstration.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nom :
                </Label>
                <Input id="name" placeholder="Nom" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Prénom :
                </Label>
                <Input
                  id="username"
                  placeholder="Prénom"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telephone" className="text-left">
                  Téléphone :
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" // This pattern is for a phone number format like 123-456-7890
                  className="col-span-3"
                  placeholder="Ex: +216 27494519" // Placeholder text for the user
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  E-mail :
                </Label>
                <Input
                  id="email"
                  type="email"
                  // You may want to update this value dynamically
                  className="col-span-3"
                  placeholder="Ex: example@email.com" // Placeholder text for the user
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right ">
                  Solution :
                </Label>
                <div className="col-span-3">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between "
                      >
                        {value
                          ? logiciels.find(
                              (logiciels) => logiciels.title === value
                            )?.title
                          : "Selectionner un logiciel"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Selectionner un logiciel" />
                        <CommandList>
                          <CommandEmpty>
                            Pas de logiciel selectionné.
                          </CommandEmpty>
                          <CommandGroup>
                            {logiciels.map((logiciels) => (
                              <CommandItem
                                key={logiciels.title}
                                value={logiciels.title}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === logiciels.title
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {logiciels.title}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>{" "}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Date :
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Veuillez choisir une date.</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>{" "}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Heure : <span className="text-sm text-gray-500">GMT+1</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sélectionnez l'heure" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateTimeOptions().map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Envoyer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Demander un devis</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Demande de devis</DialogTitle>
              <DialogDescription>
                Complétez le formulaire ci-dessous pour nous envoyer une demande
                de devis.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nom :
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Prénom :
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telephone" className="text-left">
                  Téléphone :
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  // You may want to update this value dynamically
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" // This pattern is for a phone number format like 123-456-7890
                  className="col-span-3"
                  placeholder="Ex: +216 27494519" // Placeholder text for the user
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  E-mail :
                </Label>
                <Input
                  id="email"
                  type="email"
                  // You may want to update this value dynamically
                  className="col-span-3"
                  placeholder="Ex: example@email.com" // Placeholder text for the user
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right ">
                  Solution :
                </Label>
                <div className="col-span-3">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between "
                      >
                        {value
                          ? logiciels.find(
                              (logiciels) => logiciels.title === value
                            )?.title
                          : "Selectionner un logiciel"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Selectionner un logiciel" />
                        <CommandList>
                          <CommandEmpty>
                            Pas de logiciel selectionné.
                          </CommandEmpty>
                          <CommandGroup>
                            {logiciels.map((logiciels) => (
                              <CommandItem
                                key={logiciels.title}
                                value={logiciels.title}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === logiciels.title
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {logiciels.title}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>{" "}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Envoyer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-bold leading-relaxed max-w-5xl my-8 text-black border-b-2 border-black">
        Nos services
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 mx-20">
          {services.map((services) => (
            <Card key={services.title} className="mx-auto">
              <CardHeader>
                <CardTitle>{services.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{services.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-bold leading-relaxed max-w-5xl my-8 text-black border-b-2 border-black">
        Nos Logiciel Phares
      </h1>
      <div className="grid grid-cols-4 gap-4 mx-20">
        {logiciels.map((logiciels) => (
          <Card key={logiciels.title}>
            <CardHeader>
              <CardTitle> {logiciels.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{logiciels.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-bold leading-relaxed max-w-5xl my-8 text-black border-b-2 border-black">
        Nos Clients
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-16 md:h-40 lg:h-32">
          {carouselClients.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-0 pr-0 md:pl-1 md:pr-1 lg:pl-1 lg:pr-1 md:basis-1/12 lg:basis-1/8" // Reduced padding and adjusted basis
            >
              <img
                src={item.image.src} // Use item.image.src to access the static image URL
                alt={item.title} // Use the title as the alt text
                className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-35 object-contain" // Reduced size
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-bold leading-relaxed max-w-5xl my-8 text-black border-b-2 border-black">
        FAQ
      </h1>

      <div className="grid grid-cols-1 gap-4 justify-center">
        {FAQ.map((item, index) => (
          <Collapsible
            key={index}
            className="flex flex-col gap-2 items-center max-w-lg w-full mx-auto"
          >
            {/* Centered Trigger */}
            <CollapsibleTrigger className="font-bold cursor-pointer text-center hover:text-black hover:bg-orange-500 hover:scale-105 transition-all duration-300">
              {item.Question}
            </CollapsibleTrigger>
            {/* Centered Content */}
            <CollapsibleContent className="text-gray-700 text-center w-full">
              {item.Answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <h1 className="text-center text-xl md:text-2xl lg:text-1xl font-bold leading-relaxed max-w-5xl my-8 text-black border-b-2 border-black">
        Nos Partenaires
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-16 md:h-40 lg:h-32 my-4">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/10 lg:basis-1/2"
            >
              <img
                src={item.image.src} // Use item.image.src to access the static image URL
                alt={item.title} // Use the title as the alt text
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Body;
