
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
<<<<<<< HEAD
=======
import Home from './components/Home/Home'
import Favorite from './components/Favorite/Favorite'
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error'
import List from './components/List/List'
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1

const App = () => {
  return (
    <main>
<<<<<<< HEAD
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
=======
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/list/:listId" element={<List />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
</main>
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1
  );
};

export default App;