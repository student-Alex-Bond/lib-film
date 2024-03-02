import { FC, useState, useEffect, ChangeEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { CardList } from "../CardList/CardList";
import axios from "axios";
import { IResponse } from "../../mocha";

export const token = "A89918E-7GDM97V-MS5WP2R-AE4JAWN";
export const Main: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<IResponse | undefined>();
  const fetchMovies = (searchParam: string) => {
    if (!searchParam) return;
    const options = {
      method: "GET",
      url: "https://api.kinopoisk.dev/v1.4/movie/search",
      params: { page: "1", limit: "20", query: searchParam },
      headers: { accept: "application/json", " X-API-KEY": token },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleClick = () => {
    fetchMovies(search);
  };
  return (
    <main>
      <Heading>Поиск</Heading>
      <Paragraph fontSize="16px">
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Input
        value={search}
        onChange={handleInput}
        isIcon={true}
        placeholder={"Введите название"}
      />
      <Button type="button" onClick={handleClick}>
        Искать
      </Button>
      <CardList props={movies} />
    </main>
  );
};
