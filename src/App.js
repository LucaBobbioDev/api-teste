import './App.css';
import Crud from './components/Crud'

export default function App() {
  return (
    <>
      <header>
        <h1>Consumindo Api</h1>
      </header>
      <section>
        <div>
          <h2>Executando o CRUD</h2>
        </div>
      </section>
      <Crud/>
      <footer>
        <p>@Luca</p>
      </footer>
    </>
  );
}

