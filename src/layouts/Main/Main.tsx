import { FC, useEffect } from 'react';
import { CardList } from '../CardList/CardList';
import { useLazyGetMoviesQuery } from '../../features/movies.slice';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Separator } from '../../components/Separator';
import { Paragraph } from '../../components/Paragraph';
import { InputSearch } from '../../components/InputSearch';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading/Loading';
import { formDefaultValues, SearchType } from './types';


export const Main: FC = () => {
  const [fetchMovies, { data, isLoading }] = useLazyGetMoviesQuery();
  useEffect(() => {
    fetchMovies('');
  }, [fetchMovies]);
  const { control, reset, handleSubmit } = useForm<SearchType>({
    defaultValues: formDefaultValues,
  });
  const handleClick: SubmitHandler<SearchType> = (data) => {
    fetchMovies(data.title);
    reset(formDefaultValues);
  };
  return (
    <main>
      <Heading>Поиск</Heading>
      <Paragraph fontSize="16px">
        Введите название фильма, сериала или мультфильма для поиска и добавления в
        избранное.
      </Paragraph>
      <form>
        <Controller
          control={control}
          name={'title'}
          rules={{ maxLength: 20 }}
          render={({ field }) => (
            <InputSearch
              value={field.value}
              onChange={field.onChange}
              placeholder={'Введите название'}
            />
          )}
        />
        <Separator />
        <Button type="button" onClick={handleSubmit(handleClick)}>
          {isLoading ? <Loading height={20} width={20} /> : 'Искать'}
        </Button>
        <Separator />
      </form>
      <CardList movies={data?.docs} isLoading={isLoading} />
    </main>
  );
};
