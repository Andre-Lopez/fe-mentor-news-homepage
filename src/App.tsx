import "./App.css"

function App() {
  return (
    <div className="App">
      <nav>
        <img src="logo.svg" alt="news logo" />
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>

      <main>
        <img src="image-web-3-desktop.jpg" alt="abstract main image" />
        <h1>The Bright Future of Web 3.0?</h1>

        <h3>
          We dive into the next evolution of the web that claims to put the power of the platforms back into
          the hands of the people. But is it really fulfilling its promise?
        </h3>
        <button>Read more</button>

        {/* News Section */}
        <article>
          <h2>New</h2>
          <div className="sub-article">
            <h5 className="title">Hydrogen VS Electric Cars</h5>
            <p className="info">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="sub-article">
            <h5 className="title">The Downsides of AI Artistry</h5>
            <p className="info">What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div className="sub-article">
            <h5 className="title">Is VC Funding Drying Up?</h5>
            <p className="info">
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
          </div>
        </article>

        <div>
          {/* Article 01 */}
          <article className="flexbox-row">
            <img src="image-retro-pcs.jpg" alt="retro pc" className="article image" />
            <div className="flexbox-col">
              <h3 className="article-num">01</h3>
              <h4 className="article-title">Reviving Retro PCs</h4>
              <h5>What happens when old PCs are given modern upgrades?</h5>
            </div>
          </article>

          {/* Article 02 */}
          <div className="flexbox-row">
            <img src="image-top-laptops.jpg" alt="retro pc" className="article image" />
            <div className="flexbox-col">
              <h3 className="article-num">02</h3>
              <h4 className="article-title">Top 10 Laptops of 2022</h4>
              <h5>Our best picks for various needs and budgets.</h5>
            </div>
          </div>

          {/* Article 03 */}
          <div className="flexbox-row">
            <img src="image-gaming-growth.jpg" alt="retro pc" className="article image" />
            <div className="flexbox-col">
              <h3 className="article-num">03</h3>
              <h4 className="article-title">The Growth of Gaming</h4>
              <h5>How the pandemic has sparked fresh opportunities.</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
