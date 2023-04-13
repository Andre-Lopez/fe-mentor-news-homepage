import { useState } from "react"
import "./App.css"

function App() {
  const [menuToggle, setMenuToggle] = useState(false)

  function toggleMenu() {
    setMenuToggle((prev) => !prev)
  }

  return (
    <div className="App flex flex-col relative max-w-5xl w-full mx-auto px-4">
      {/* Mobile Nav Menu */}
      {menuToggle && (
        <div className="absolute top-0 bottom-0 right-0 z-40 w-1/2 pr-0 mr-0">
          <button className="absolute top-5 right-5">
            <img
              src="icon-menu-close.svg"
              alt="menu toggle"
              className="md:hidden hover:cursor-pointer"
              onClick={toggleMenu}
            />
          </button>
          <ul className="flex flex-col bg-soft-red pl-4 pt-24">
            <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">Home</li>
            <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">New</li>
            <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">
              Popular
            </li>
            <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">
              Trending
            </li>
            <li className="font-inter font-medium mx-2 hover:text-soft-orange hover:cursor-pointer">
              Categories
            </li>
          </ul>
        </div>
      )}

      {/* Nav bar */}
      <nav className="flex flex-row justify-between mt-8 md:mt-14 mb-6 items-center">
        <img src="logo.svg" alt="news logo" />
        <ul className="hidden md:flex">
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
        {!menuToggle && (
          <img
            src="icon-menu.svg"
            alt="menu toggle"
            className="md:hidden hover:cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </nav>

      <main>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:mr-6 md:basis-2/3">
            <img src="image-web-3-mobile.jpg" alt="abstract main image" className="md:hidden" />
            <img src="image-web-3-desktop.jpg" alt="abstract main image" className="hidden md:block" />

            <div className="flex flex-col md:flex-row align-top py-5 md:pr-6">
              <h1 className="font-inter text-5xl font-bold md:mr-8 md:basis-1/2 mb-4">
                The Bright Future of Web 3.0?
              </h1>

              <div className="flex-col justify-between md:basis-1/2">
                <h3 className="font-inter text-dark-grayish-blue mb-4">
                  We dive into the next evolution of the web that claims to put the power of the platforms
                  back into the hands of the people. But is it really fulfilling its promise?
                </h3>
                <button className="bg-soft-red hover:bg-very-dark-blue text-off-white text-xs tracking-supa-wide px-9 py-2">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* News Section */}
          <article className="flex flex-col self-center px-6 bg-very-dark-blue h-min pt-2 md:basis-1/3 mt-8 md:mt-0">
            <h2 className="text-soft-orange font-bold text-3xl mt-4">New</h2>
            <div className="sub-article border-b-[1px] border-solid border-grayish-blue py-6">
              <h5 className="title font-inter text-off-white my-1 font-semibold text-lg hover:text-soft-orange hover:cursor-pointer">
                Hydrogen VS Electric Cars
              </h5>
              <p className="info text-grayish-blue text-normal text-[15px] tracking-wider">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="sub-article border-b-[1px] border-solid border-grayish-blue py-6">
              <h5 className="title font-inter text-off-white my-1 font-semibold text-lg hover:text-soft-orange hover:cursor-pointer">
                The Downsides of AI Artistry
              </h5>
              <p className="info text-grayish-blue text-normal text-[15px] tracking-wider">
                What are the possible adverse effects of on-demand AI image generation?
              </p>
              <hr />
            </div>
            <div className="sub-article py-6">
              <h5 className="title font-inter text-off-white my-1 font-semibold text-lg hover:text-soft-orange hover:cursor-pointer">
                Is VC Funding Drying Up?
              </h5>
              <p className="info text-grayish-blue text-normal text-[15px] tracking-wider">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
              </p>
            </div>
          </article>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mt-10 mb-12">
          {/* Article 01 */}
          <article className="flex md:pr-4 my-2 max-w-md">
            <img src="image-retro-pcs.jpg" alt="retro pc" className="h-36 pr-4" />
            <div className="flex flex-col">
              <h3 className="article-num font-inter font-bold text-2xl text-grayish-blue">01</h3>
              <h4 className="article-title font-inter my-2 font-bold hover:text-soft-red hover:cursor-pointer">
                Reviving Retro PCs
              </h4>
              <h5 className="font-inter text-dark-grayish-blue font-semibold">
                What happens when old PCs are given modern upgrades?
              </h5>
            </div>
          </article>

          {/* Article 02 */}
          <article className="flex md:pr-4 my-2 max-w-md">
            <img src="image-top-laptops.jpg" alt="retro pc" className="h-36 pr-4" />
            <div className="flex flex-col">
              <h3 className="article-num font-inter font-bold text-2xl text-grayish-blue">02</h3>
              <h4 className="article-title font-inter my-2 font-bold hover:text-soft-red hover:cursor-pointer">
                Top 10 Laptops of 2022
              </h4>
              <h5 className="font-inter text-dark-grayish-blue font-semibold">
                Our best picks for various needs and budgets.
              </h5>
            </div>
          </article>

          {/* Article 03 */}
          <article className="flex md:mb-4 my-2 max-w-md">
            <img src="image-gaming-growth.jpg" alt="retro pc" className="h-36 pr-4" />
            <div className="flex flex-col">
              <h3 className="article-num font-inter font-bold text-2xl text-grayish-blue">03</h3>
              <h4 className="article-title font-inter my-2 font-bold hover:text-soft-red hover:cursor-pointer">
                The Growth of Gaming
              </h4>
              <h5 className="font-inter text-dark-grayish-blue font-semibold">
                How the pandemic has sparked fresh opportunities.
              </h5>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

export default App
