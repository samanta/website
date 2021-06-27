import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React, { useEffect, useRef } from 'react'
import { Footer, MyFonts } from './index'
import { Helmet } from 'react-helmet'
import './invento.css'

export default function Invento(props) {
  const rootRef = useRef(null)

  const posts = get(props, 'data.allCosmicjsPosts.edges')
  const settings = get(props, 'data.cosmicjsSettings.metadata')
  const links = get(props, 'data.cosmicjsLinks')

  // Get utm source
  // const url = new URLSearchParams(props.location.search)
  const source = '' //url.get('utm_source')

  return (
    <div id="links" ref={rootRef}>
      <Helmet title={`${links.title} | ${settings.site_title}`}>
        <html lang="en" />
      </Helmet>
      <MyFonts />

      <main className="container">
        <div className="author-photo--big">
          <img
            src={settings.author_avatar.imgix_url}
            alt={`Photo of ${settings.author_name}`}
          />
        </div>
        <div>
          <section id="about-me">
            <p>
              <img
                className="author-photo--small"
                src={settings.author_avatar.imgix_url}
                alt={`Photo of ${settings.author_name}`}
              />
            </p>
            <p className="large">
              Hi, person from
              {!source && ' the internet'}
              {source == 'twitter' && ' Twitter'}
              {source == 'youtube' && ' YouTube'}
              {source == 'instagram' && ' Instagram'} 👋🏼
              {source
                ? " My name is Samanta Aquino. I'm a senior product designer based in Stockholm."
                : ' Here are other places you can find me online.'}
            </p>
          </section>
          <section className="quicklinks">
            <div
              dangerouslySetInnerHTML={{ __html: links.metadata.quicklinks }}
            />
            <ul>
              <li>
                <a href="https://www.instagram.com/samanta.ux/">
                  <span>Follow my Instagram about UX</span>
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <title>Instagram icon</title>
                    <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=samanta&tw_p=followbutton">
                  <span>Follow me on Twitter</span>
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <title>Twitter icon</title>
                    <path d="M44.719,10.305C44.424,10,43.97,9.913,43.583,10.091l-0.164,0.075c-0.139,0.064-0.278,0.128-0.418,0.191	c0.407-0.649,0.73-1.343,0.953-2.061c0.124-0.396-0.011-0.829-0.339-1.085c-0.328-0.256-0.78-0.283-1.135-0.066	c-1.141,0.693-2.237,1.192-3.37,1.54C37.4,7.026,35.071,6,32.5,6c-5.247,0-9.5,4.253-9.5,9.5c0,0.005,0,0.203,0,0.5l-0.999-0.08	c-9.723-1.15-12.491-7.69-12.606-7.972c-0.186-0.47-0.596-0.813-1.091-0.916C7.81,6.927,7.297,7.082,6.939,7.439	C6.741,7.638,5,9.48,5,13c0,2.508,1.118,4.542,2.565,6.124c-0.674-0.411-1.067-0.744-1.077-0.753	c-0.461-0.402-1.121-0.486-1.669-0.208c-0.546,0.279-0.868,0.862-0.813,1.473c0.019,0.211,0.445,4.213,5.068,7.235l-0.843,0.153	c-0.511,0.093-0.938,0.444-1.128,0.928C6.914,28.437,6.988,28.984,7.3,29.4c0.105,0.141,2.058,2.68,6.299,4.14	C11.334,34.295,8.222,35,4.5,35c-0.588,0-1.123,0.344-1.366,0.88c-0.244,0.536-0.151,1.165,0.237,1.607	C3.532,37.672,7.435,42,17.5,42C34.213,42,42,26.485,42,16v-0.5c0-0.148-0.016-0.293-0.022-0.439	c2.092-2.022,2.879-3.539,2.917-3.614C45.084,11.067,45.014,10.609,44.719,10.305z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/samantaux?sub_confirmation=1">
                  <span>Subscribe to my YouTube</span>
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <title>YouTube icon</title>
                    <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>
                    {source == 'mysite' && 'Go back to my website'}
                    {source !== 'mysite' && 'Visit my website'}
                  </span>
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <title>Homepage icon</title>
                    <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#newsletter">
                  Sign up for the newsletter
                  <svg
                    role="img"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Newsletter icon</title>
                    <path d="m13.5 8c-5.799 0-10.5 4.701-10.5 10.5v18.455078c0 1.657 1.343 3 3 3h18v-21.455078c0-5.799-4.701-10.5-10.5-10.5zm8.470703 0c3.07 2.48 5.029297 6.26 5.029297 10.5v21.460938h15c1.66 0 3-1.350001 3-3v-18.460938c0-5.8-4.7-10.5-10.5-10.5zm-8.470703 10c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5zm18 1h9c.829 0 1.5.672 1.5 1.5v4c0 .828-.671 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2.5h-7.5c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </section>
          <section className="videos bleed-to-edge">
            <h2 className="heading">YouTube</h2>
            <div dangerouslySetInnerHTML={{ __html: links.metadata.videos }} />
          </section>
          <section className="blog bleed-to-edge">
            <h2 className="heading">Blog</h2>
            <ul className="lastest-articles">
              {posts.map(({ node }) => {
                const title = get(node, 'title') || node.slug
                return (
                  <li key={node.slug}>
                    <header>
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={`/posts/${node.slug}`}
                      >
                        {title}
                      </Link>
                    </header>
                  </li>
                )
              })}
            </ul>{' '}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query InventoQuery {
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
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
    cosmicjsLinks(slug: { eq: "links" }) {
      title
      metadata {
        quicklinks
        videos
      }
    }
  }
`
