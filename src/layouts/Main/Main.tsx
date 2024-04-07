import { FC, useState, ChangeEvent, KeyboardEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { CardList } from "../CardList/CardList";
import { useLazyGetMoviesQuery } from "../../features/movies.slice";
import styles from "./Main.module.css";
import cn from "classnames";
import { MovieType } from "../../types/responseAllMovies";

export const Main: FC = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [titleMovie, setTitleMovie] = useState<string>("");
  const [fetchMovies, { data, isLoading }] = useLazyGetMoviesQuery();
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitleMovie(value);
  };

  const handleClick = () => {
    fetchMovies(titleMovie);
    if (data) {
      setMovies(data.docs);
    }
  };
  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <main>
      <Heading>Поиск</Heading>
      <Paragraph fontSize="16px">
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Input
        value={titleMovie}
        onChange={handleInput}
        isIcon={true}
        placeholder={"Введите название"}
        onKeyDown={(e) => handlePressEnter(e)}
      />
      <div className={cn(styles["mb-20"])}></div>

      <Button type="button" onClick={handleClick}>
        Искать
      </Button>
      <div className={cn(styles["mb-20"])}></div>

      <CardList movies={movies} isLoading={isLoading} />
    </main>
  );
};
