import { FC, useState, ChangeEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { CardList } from "../CardList/CardList";
import { useLazyGetMoviesQuery } from "../../features/movies.slice";
import styles from "./Main.module.css";
import cn from "classnames";

export const Main: FC = () => {
  const [titleMovie, setTitleMovie] = useState<string>("");
  const [fetchMovies, { data, isLoading }] = useLazyGetMoviesQuery();
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitleMovie(value);
  };
  //  if(!data) return

  const handleClick = () => {
    fetchMovies(titleMovie);
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
      />
      <div className={cn(styles["mb-20"])}></div>

      <Button type="button" onClick={handleClick}>
        Искать
      </Button>
      <div className={cn(styles["mb-20"])}></div>
    
      <CardList movies={data?.docs} isLoading={isLoading} />
    </main>
  );
};
