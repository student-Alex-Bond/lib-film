import { FC, useState, ChangeEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { CardList } from "../CardList/CardList";
import poster from "./../../assets/poster.png";

export const Main: FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleClick = () => {
    console.log("callback from button");
  };
  return (
    <main>
      <Heading>Поиск</Heading>
      <Paragraph fs="16px">
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Input
        value={search}
        onChange={handleInput}
        isIcon={true}
        placeholder={"Введите название"}
      />
      <Button onClick={handleClick}>Искать</Button>
      <CardList poster={poster} filmName={"Black Widow"} rating={324} />
    </main>
  );
};
