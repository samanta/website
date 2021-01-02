import 'normalize.css'
import './invento.css'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import get from 'lodash/get'
import React, { useEffect, useRef } from 'react'
import Rellax from 'rellax'
import { Helmet } from 'react-helmet'
import ConvertKitForm from 'convertkit-react'

export default function Invento(props) {
  const rootRef = useRef(null)

  const posts = get(props, 'data.allCosmicjsPosts.edges')
  const siteTitle = get(props, 'data.cosmicjsSettings.metadata.site_title')
  const settings = get(props, 'data.cosmicjsSettings.metadata')
  const pages = get(props, 'data.allCosmicjsPages.edges')
  const location = get(props, 'location')

  // ConvertKit
  const config = {
    formId: 1911630,
    template: 'mills',
    emailPlaceholder: 'Enter an email address',
    submitText: 'Sign up',
  }

  // rellax library (parallax animation)
  useEffect(() => {
    let rellax
    if (rootRef) {
      // Start Rellax.
      rellax = new Rellax('.lax')
    }
    return () => {
      if (rellax) {
        // End Rellax and reset parallax elements
        // to their original positions.
        rellax.destroy()
      }
    }
  }, [])

  const url = new window.URL(document.location)
  const source = url.searchParams.get('utm_source')

  // if (source === 'tw') {
  //   return <div>twitter</div>
  // }

  return (
    <div id="home" ref={rootRef}>
      <Helmet title={settings.site_title} />
      <MyFonts />
      {/* <SvgSponge /> */}
      <a class="skip-to-content-link" href="#main">
        Skip to Main Content
      </a>
      <div className="wip-toast">
        This site is being designed and coded "live". Bit by bit, on my free
        time. Currently working on the mentoring page.
      </div>
      <header id="top" className="container">
        <h1>
          <a href="/">
            Samanta.me
            <SvgLogo />
          </a>
        </h1>
        <nav>
          <ul>
            {/* <li><a href="/about/">About me</a></li> */}
            <li>
              <a href="/mentoring/">Mentoring</a>
            </li>
            <li>
              <a href="/links/?utm_source=mysite">Links</a>
            </li>
            <li>
              <a href="mailto:me@samanta.me?subject=I visited your site">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <section id="about-me" className="container">
          <img
            className="about-me-img"
            src={settings.author_avatar.imgix_url}
            alt={`Photo of ${settings.author_name}`}
          />
          <p className="large">{settings.site_description}</p>
        </section>
        <section className="lax bleed-to-edge" data-rellax-speed="-2" id="work">
          <div className="lax container" data-rellax-speed="1">
            <h2 className="heading">Work</h2>
            <p>
              Currently designing things at <a href="">Dreams</a>.
            </p>
            <p>
              Recruiters! I’m not seeking new opportunities at this time, but
              you're welcome to take a look at my skills on LinkedIn.
            </p>
            <p>
              <a
                className="cta secondary dark"
                href="https://www.linkedin.com/in/samantaaquino/"
              >
                See my profile on LinkedIn
              </a>
            </p>
          </div>
        </section>

        <SvgCircle />
        <section
          className="lax bleed-to-edge"
          data-rellax-speed="-2"
          id="mentoring"
        >
          <div className="lax container" data-rellax-speed="1">
            <h2 className="heading">Mentoring</h2>
            <p>
              Are you stuck with a hard problem, at a career crossroad, or
              wishing you had ongoing feedback and support at work? You need
              help from an experienced designer.
            </p>
            <p>
              <a
                className="cta secondary light"
                href="https://www.linkedin.com/in/samantaaquino/"
              >
                What’s mentoring?
              </a>
            </p>
            <p>
              <a
                className="cta primary light"
                href="https://www.linkedin.com/in/samantaaquino/"
              >
                Schedule a call with me
              </a>
            </p>
          </div>
        </section>

        <section id="blog" className="container">
          <h2 className="heading">Blog</h2>
          <ul className="lastest-articles content">
            {posts.map(({ node }) => {
              const title = get(node, 'title') || node.slug
              return (
                <li key={node.slug}>
                  <header>
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={`posts/${node.slug}`}
                    >
                      {title}
                    </Link>
                  </header>
                  <small>{node.created}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.metadata.description,
                    }}
                  />
                </li>
              )
            })}
          </ul>
          <p>
            <a className="cta secondary dark" href="/">
              See more posts
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Footer
export const Footer = () => (
  <footer className="bleed-to-edge">
    <div>{/* <SvgFooter /> */}</div>
    <div className="content container" id="newsletter">
      <h2 className="heading">Subscribe to my newsletter</h2>
      <p>
        Emails are rare but juicy. I share product design career tips and
        resources that you can use on the job.
      </p>
      <ConvertKitForm newTab="true" />
      <p>
        This is a static site build with Gatsby, CosmicJS and deployed with
        Netlify. The typefaces used are Shrikhand and DM Sans. Check out the
        source code on <a href="https://github.com/samanta">Github</a> for more
        details.
      </p>
    </div>
  </footer>
)

// SVGs
const SvgLogo = () => (
  <svg
    width="115"
    height="32"
    viewBox="0 0 115 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <rect width="114.373" height="32" fill="white" />
      <circle cx="16" cy="16" r="16" fill="#2A18D0" />
      <path d="M58.1865 -1L76.3731 30.5H40L58.1865 -1Z" fill="#FDF360" />
      <rect x="84.373" y="1" width="30" height="30" fill="#C6FFE7" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="114.373" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const SvgSponge = () => (
  <svg
    className="svgSponge"
    width="910"
    height="926"
    viewBox="0 0 910 926"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.685 281.8C12.1262 226.575 -0.319985 168.773 45.3614 118.738C109.633 48.3422 618.318 -65.3372 625.813 101.259C627.517 139.129 624.162 175.889 626.553 214.105C628.533 245.756 634.755 297.818 657.41 321.492C726.236 393.417 878.711 408.077 892.112 530.159C910.568 698.291 840.619 800.458 680.76 861.92C563.418 907.035 440.344 915.902 314.175 908.833C173.096 900.928 43.1024 839.804 36.4189 691.253C32.1044 595.357 102.487 520.746 98.0853 422.919C95.7145 370.224 62.4936 327.506 39.685 281.8Z"
      stroke="#FDF360"
      strokeWidth="30"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgCircle = () => (
  <svg
    className="lax svgCircle"
    data-rellax-speed="3"
    width="140"
    height="140"
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="70" cy="70" r="65" stroke="#2A18D0" strokeWidth="10" />
  </svg>
)

export const SvgFooter = () => (
  <svg
    width="100%"
    className="svgFooter"
    preserveAspectRatio="none"
    viewBox="0 0 360 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M-5.24521e-06 13.7823C2.93797 14.1144 6.02617 14.4048 9.25431 14.6534C12.4825 14.902 15.8503 15.1091 19.3462 15.2745C22.8421 15.4399 26.4663 15.5636 30.2076 15.6462C33.9488 15.7287 37.8071 15.7699 41.7716 15.7699C46.0378 15.7699 50.2619 15.7083 54.4486 15.5928C58.6352 15.4774 62.7844 15.3079 66.9015 15.0923C71.0186 14.8767 75.1035 14.6152 79.161 14.3149C83.2185 14.0146 87.2486 13.6757 91.256 13.3061C95.2637 12.9366 99.249 12.536 103.217 12.1125C107.185 11.6891 111.135 11.2427 115.073 10.7808C122.949 9.85686 130.775 8.87134 138.591 7.8858C146.406 6.90026 154.212 5.9148 162.047 4.99084C165.964 4.52888 169.889 4.08253 173.826 3.65907C177.763 3.23561 181.712 2.83505 185.679 2.46549C189.645 2.09594 193.629 1.75697 197.635 1.45671C201.641 1.15643 205.669 0.894865 209.724 0.67928C213.78 0.463701 217.862 0.294249 221.976 0.178758C226.091 0.0632699 230.238 0.00173992 234.422 0.00173992C241.028 0.00173992 247.627 0.0732316 254.156 0.202567C260.685 0.331902 267.145 0.518934 273.473 0.751215C279.801 0.983508 285.999 1.26067 292.004 1.56954C298.009 1.8784 303.822 2.21923 309.382 2.57832C314.941 2.93741 320.247 3.31496 325.238 3.69788C330.229 4.08079 334.905 4.46913 339.205 4.84953C343.505 5.22992 347.428 5.6021 350.915 5.95355C354.401 6.30501 357.45 6.63563 360 6.93181V16.0017H-5.24521e-06V13.7823Z"
        fill="#C6FFE7"
      />
    </g>
  </svg>
)

export const MyFonts = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Shrikhand&display=swap"
    />
  </Helmet>
)

export const CosmicjsData = graphql`
  query CosmicjsData {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 3) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    allCosmicjsPages(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          slug
          title
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        site_description
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
