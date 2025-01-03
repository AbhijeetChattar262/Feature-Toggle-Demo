import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Feature Toggle Demo</h1>
        <p>This is a demonstration of feature toggling in React</p>
      </header>
      <main className="home-content">
        <section>
          <h2>About This Demo</h2>
          <p>The chatbot feature can be toggled on or off in real time without redeploying the page.</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
