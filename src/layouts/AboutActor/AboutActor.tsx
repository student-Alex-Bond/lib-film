import { FC } from 'react';
import { useGetInfoAboutActorQuery } from '../../features/movies.slice';
import { useParams } from 'react-router-dom';

export const AboutActor: FC = () => {
  const { id } = useParams();
  const { data } = useGetInfoAboutActorQuery(id!);
  if (!data) return;
  console.log(data);
  return (
    <div>
      <div>{data.name}</div>
      <img width="280" height="400" src={data.photo} alt="" />
      <div>{data.sex}</div>
    </div>
  );
};
