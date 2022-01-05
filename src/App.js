import './App.scss';
import UserBody from './Views/user';
import Header from './Components/header/Header';

const App = () => (
  <main className="container-fluid border border-danger App">
    <section className="row border border-warning justify-content-center App__column-row">
      <div className="col-md-4 border border-danger gx-0">
        <Header />
        <UserBody />
      </div>
    </section>
  </main>
);

export default App;
