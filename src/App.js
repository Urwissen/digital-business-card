
import './App.css';

function App() {
  return (
    <div className="app--container">
      <img src="#" alt="A smiling person" />
      <h1>Freya Skóholm</h1>
      <p>Fullstack Developer</p>
      <a href='https://github.com/Urwissen'>freyas.website</a>
      <button>Email</button>
      <button>LinkedIN</button>
      <div className='description'>
        <h2 className='description--about'>About</h2>
        <p className='description--about_content'>Ullamco ad minim aliquip id ad mollit non labore. In aliquip minim Lorem dolor incididunt consequat proident in quis ea irure culpa dolor amet. Cupidatat ad officia id exercitation anim excepteur fugiat proident.</p>
        <h2 className='description--interests'>Interests</h2>
        <p className='description--interests_content'>Consequat laborum quis do ut Lorem nisi proident ut. Amet sit non Lorem nostrud nisi elit nostrud laboris voluptate. Excepteur culpa cupidatat anim irure aliquip nulla.</p>
      </div>
      <footer className='footer'>
        <img src="#" alt="follow me on Xing"/>
        <img src="#" alt="follow me on GitHub"/>
      </footer>
    </div>
  );
}

export default App;
