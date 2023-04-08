import "./App.css"

function App() {
  return (
    <div className="App flex flex-col mx-36">
      <nav className="flex justify-between my-10">
        <img src="logo.svg" alt="news logo" />
        <ul className="flex">
          <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">Home</li>
          <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">New</li>
          <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">Popular</li>
          <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">
            Trending
          </li>
          <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">
            Categories
          </li>
        </ul>
      </nav>

      <main>
        <div className="flex justify-between">
          <div className="flex-col">
            <img src="image-web-3-desktop.jpg" alt="abstract main image" />

            <div className="flex align-top py-8">
              <h1 className="font-inter text-4xl pr-8 font-bold">The Bright Future of Web 3.0?</h1>

              <div className="flex-col justify-between">
                <h3 className="font-inter text-dark-grayish-blue">
                  We dive into the next evolution of the web that claims to put the power of the platforms
                  back into the hands of the people. But is it really fulfilling its promise?
                </h3>
                <button className="bg-bright-orange hover:bg-very-dark-blue text-off-white px-2 py-2 w-36">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* News Section */}
          <article className="flex flex-col px-4 bg-very-dark-blue w-[500px] h-min">
            <h2 className="text-soft-orange font-bold text-3xl my-6">New</h2>
            <div className="sub-article border-b-[1px] border-solid border-grayish-blue pb-6">
              <h5 className="title font-inter text-off-white my-1 font-semibold text-lg hover:text-soft-orange hover:cursor-pointer">
                Hydrogen VS Electric Cars
              </h5>
              <p className="info text-grayish-blue text-normal text-[15px]">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="sub-article border-b-[1px] border-solid border-grayish-blue py-6">
              <h5 className="title font-inter text-off-white my-1 font-semibold text-lg hover:text-soft-orange hover:cursor-pointer">
                The Downsides of AI Artistry
              </h5>
              <p className="info text-grayish-blue text-normal text-[15px]">
                What are the possible adverse effects of on-demand AI image generation?
              </p>
              <hr />
            </div>
            <div className="sub-article py-6 px-1">
              <h5 className="title font-inter text-off-white my-1 font-semibold text-lg hover:text-soft-orange hover:cursor-pointer">
                Is VC Funding Drying Up?
              </h5>
              <p className="info text-grayish-blue text-normal text-[15px]">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
              </p>
            </div>
          </article>
        </div>

        <div className="flex flex-col md:flex-row my-12 justify-between">
          {/* Article 01 */}
          <article className="flex w-[350px] my-3">
            <img src="image-retro-pcs.jpg" alt="retro pc" className="h-36 pr-4" />
            <div className="flexbox-col">
              <h3 className="article-num font-inter font-bold text-2xl text-grayish-blue">01</h3>
              <h4 className="article-title font-inter my-2 font-bold hover:text-bright-orange hover:cursor-pointer">
                Reviving Retro PCs
              </h4>
              <h5 className="font-inter text-dark-grayish-blue font-semibold">
                What happens when old PCs are given modern upgrades?
              </h5>
            </div>
          </article>

          {/* Article 02 */}
          <div className="flex w-[350px] my-3">
            <img src="image-top-laptops.jpg" alt="retro pc" className="h-36 pr-4" />
            <div className="flexbox-col">
              <h3 className="article-num font-inter font-bold text-2xl text-grayish-blue">02</h3>
              <h4 className="article-title font-inter my-2 font-bold hover:text-bright-orange hover:cursor-pointer">
                Top 10 Laptops of 2022
              </h4>
              <h5 className="font-inter text-dark-grayish-blue font-semibold">
                Our best picks for various needs and budgets.
              </h5>
            </div>
          </div>

          {/* Article 03 */}
          <div className="flex w-[350px] my-3">
            <img src="image-gaming-growth.jpg" alt="retro pc" className="h-36 pr-4" />
            <div className="flexbox-col">
              <h3 className="article-num font-inter font-bold text-2xl text-grayish-blue">03</h3>
              <h4 className="article-title font-inter my-2 font-bold hover:text-bright-orange hover:cursor-pointer">
                The Growth of Gaming
              </h4>
              <h5 className="font-inter text-dark-grayish-blue font-semibold">
                How the pandemic has sparked fresh opportunities.
              </h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
