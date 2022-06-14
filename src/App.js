import './App.css';
import Articles from './components/articles/Articles';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Passion from './components/passion/Passion';
import Teacher from './components/teacher/Teacher';
import Testimonials from './components/testimonials/Testimonials';
import Workshop from './components/workshop/Workshop';

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <Teacher />
      <Workshop />
      <Testimonials />
      <Passion />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
