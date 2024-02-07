import './App.css'
import { Heading } from './components/Heading/Heading';
import { Paragraph } from './components/Paragraph/Paragraph';
import { Button } from './components/Button/Button';

function App() {
  return (
    <>
      <Heading>Поиск</Heading>
      <Paragraph fs='16px'>
        Введите 
        название фильма, сериала или мультфильма 
        для поиска и добавления в избранное.
      </Paragraph>
      <Button>Искать</Button>
    </>
  )
}

export default App;