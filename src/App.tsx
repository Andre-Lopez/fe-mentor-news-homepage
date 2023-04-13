import { useState } from "react"
import "./App.css"

function App() {
  const [menuToggle, setMenuToggle] = useState(false)

  function toggleMenu() {
    setMenuToggle((prev) => !prev)
  }

  return (
    <div className="App flex flex-col relative max-w-5xl w-full mx-auto px-3">
      {/* Mobile Nav Menu */}
      {menuToggle && (
        <>
          <div className="menu-blur absolute top-0 bottom-0 right-0 left-0 z-30 max-h-screen bg-dark-grayish-blue opacity-70"></div>
          <div className="mobile-menu absolute top-0 bottom-0 right-0 z-40 w-2/3 sm:w-1/2 max-h-screen bg-off-white">
            <button className="close-btn absolute top-10 right-5">
              <img
                src="icon-menu-close.svg"
                alt="menu toggle"
                className="md:hidden hover:cursor-pointer"
                onClick={toggleMenu}
              />
            </button>
            <ul className="nav-list flex flex-col pl-4 pt-24 max-h-none">
              <li className="nav-link-mobile">Home</li>
              <li className="nav-link-mobile">New</li>
              <li className="nav-link-mobile">Popular</li>
              <li className="nav-link-mobile">Trending</li>
              <li className="nav-link-mobile">Categories</li>
            </ul>
          </div>
        </>
      )}

      {/* Nav bar */}
      <nav className="nav-bar flex flex-row justify-between mt-14 md:mt-14 mb-8 items-center">
        <img src="logo.svg" alt="news logo" />
        <ul className="nav-links hidden md:flex">
          <li className="nav-link-desktop">Home</li>
          <li className="nav-link-desktop">New</li>
          <li className="nav-link-desktop">Popular</li>
          <li className="nav-link-desktop">Trending</li>
          <li className="nav-link-desktop">Categories</li>
        </ul>
        {!menuToggle && (
          <img
            src="icon-menu.svg"
            alt="menu toggle"
            className="hamburger-menu md:hidden hover:cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </nav>

      <main>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mx-auto md:mr-5 max-w-[660px]">
            <img src="image-web-3-mobile.jpg" alt="abstract main image" className="md:hidden" />
            <img src="image-web-3-desktop.jpg" alt="abstract main image" className="hidden md:inline" />

            <div className="flex flex-col justify-center md:flex-row md:justify-between py-5">
              <h1 className="font-Inter font-extrabold text-4xl md:text-5xl md:max-w-[300px] md:mr-10 mb-4">
                The Bright Future of Web 3.0?
              </h1>

              <div className="flex-col items-center justify-between md:max-w-[325px]">
                <h3 className="font-Inter text-dark-grayish-blue mb-4 text-[14px] font-semibold">
                  We dive into the next evolution of the web that claims to put the power of the platforms
                  back into the hands of the people. But is it really fulfilling its promise?
                </h3>
                <button className="bg-soft-red hover:bg-very-dark-blue text-off-white text-xs tracking-supa-wide px-6 py-3 mt-2 font-semibold">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* News Section */}
          <article className="news-section flex flex-col px-6 bg-very-dark-blue h-min pt-2 mt-8 md:mt-0 mx-auto">
            <h2 className="text-soft-orange font-bold text-3xl mt-3">New</h2>
            <div className="sub-article border-b-[1px] border-solid border-grayish-blue/30 py-2">
              <h5 className="news-article-title">Hydrogen VS Electric Cars</h5>
              <p className="info news-article-details">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="sub-article border-b-[1px] border-solid border-grayish-blue/30 py-6">
              <h5 className="news-article-title">The Downsides of AI Artistry</h5>
              <p className="info news-article-details">
                What are the possible adverse effects of on-demand AI image generation?
              </p>
              <hr />
            </div>
            <div className="sub-article py-6">
              <h5 className="news-article-title">Is VC Funding Drying Up?</h5>
              <p className="info news-article-details">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
              </p>
            </div>
          </article>
        </div>

        <div className="numbered-articles flex flex-col items-center md:items-start md:flex-row md:justify-between mt-4 mb-12 gap-x-5">
          {/* Article 01 */}
          <article className="flex md:pr-4 my-4 max-w-xs">
            <img src="image-retro-pcs.jpg" alt="retro pc" className="h-28 pr-4" />
            <div className="flex flex-col">
              <h3 className="article-num">01</h3>
              <h4 className="article-title numbered-article-title">Reviving Retro PCs</h4>
              <h5 className="font-Inter text-dark-grayish-blue font-semibold text-[14px]">
                What happens when old PCs are given modern upgrades?
              </h5>
            </div>
          </article>

          {/* Article 02 */}
          <article className="flex md:pr-4 my-4 max-w-xs">
            <img src="image-top-laptops.jpg" alt="retro pc" className="h-28 pr-4" />
            <div className="flex flex-col">
              <h3 className="article-num">02</h3>
              <h4 className="article-title numbered-article-title">Top 10 Laptops of 2022</h4>
              <h5 className="font-Inter text-dark-grayish-blue font-semibold text-[14px]">
                Our best picks for various needs and budgets.
              </h5>
            </div>
          </article>

          {/* Article 03 */}
          <article className="flex md:mb-4 my-4 max-w-xs">
            <img src="image-gaming-growth.jpg" alt="retro pc" className="h-28 pr-4" />
            <div className="flex flex-col">
              <h3 className="article-num">03</h3>
              <h4 className="article-title numbered-article-title">The Growth of Gaming</h4>
              <h5 className="font-Inter text-dark-grayish-blue font-semibold text-[14px]">
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
