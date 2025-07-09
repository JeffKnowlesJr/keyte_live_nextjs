import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Beau Keyte - Organization and Management Expert | Keyte Group',
  description:
    'Learn about Beau Keyte and his unique background, career, and philosophy on organization and management.',
  keywords:
    'Beau Keyte, organization, management, Lean Thinking, consulting, industry support, teaching, writing',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Beau Keyte - Organization and Management Expert | Keyte Group',
    description:
      'Learn about Beau Keyte and his unique background, career, and philosophy on organization and management.',
    url: 'https://www.keytegroup.com/who-we-are/beau-keyte/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/beau.jpg',
        width: 200,
        height: 200,
        alt: 'Beau Keyte - Organization and Management Expert'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beau Keyte - Keyte Group',
    description:
      'Organization and management expert with unique background in Lean Thinking',
    images: ['https://www.keytegroup.com/images/beau.jpg']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/who-we-are/beau-keyte/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="beau-keyte-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Beau Keyte',
            jobTitle: 'Organization and Management Expert',
            alumniOf: 'University of Michigan',
            description:
              'Organization and management expert with unique background in Lean Thinking and continuous improvement',
            sameAs: 'https://www.linkedin.com/in/beaukeyte',
            knowsAbout: [
              'Lean Thinking',
              'Organization Management',
              'Continuous Improvement',
              'Industry Support',
              'Teaching and Writing'
            ],
            hasOccupation: {
              '@type': 'Occupation',
              name: 'Management Consultant',
              description:
                'Helping organizations find their own way through listening, teaching, and facilitating'
            }
          })
        }}
      />
      <div className="foundation-row">
        <div id="headerdots">
          <img src="/images/headerdots.png" alt="" role="presentation" />
        </div>
        <div className="eleven columns centered">
          <div id="maincontent" className="content">
            <div className="foundation-row">
              <div className="three columns hide-for-small">
                <ul className="side-nav">
                  <li>
                    <a href="/who-we-are/">Who We Are</a>
                  </li>
                  <li className="divider"></li>
                  <li className="active">
                    <a href="beau-keyte" target="_self" className="">
                      Beau Keyte
                    </a>
                  </li>
                </ul>
                <img
                  className="ccm-image-block"
                  alt="Heroic Efforts Mean Broken System"
                  src="/images/stopping-train.jpg"
                  width="209"
                  height="167"
                />
                <p>
                  <em>Heroic efforts are a symptom of a broken system.</em>
                </p>
              </div>
              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/who-we-are/">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Beau Keyte</a>
                  </li>
                </ul>
                <img className="right profilePic" src="/images/beau.jpg" />
                <h2>Beau Keyte</h2>
                <h3>Guiding Organizational Transformation</h3>
                <p>
                  Beau Keyte learned very early on about the uniqueness of
                  people, and by extension, the uniqueness of every
                  organization. Raised in tiny Bradford, Pennsylvania, his home
                  was part of an exchange program that brought individuals from
                  literally the four corners of the globe to live in his home
                  for brief periods. "By the time I was 15," he says, "We had
                  hosted 12-15 exchange students in our home, and I had even
                  taught a Kuwaiti teenager to speak English."
                </p>
                <p>
                  He also learned a great deal from his father, a welding
                  engineer in high demand after the war, who ran four
                  manufacturing plants from his base at the Bradford plant. "He
                  traveled a lot to the other plants in Alabama and Belgium,"
                  says Beau. "And even though he was in management, he got along
                  great with the unions for one simple reason. He made a point
                  of getting to know everyone. They and their opinions mattered
                  very much to him."
                </p>
                <p>
                  With his background as a guide and his father as a role model,
                  Beau set out to build a career, one that not surprisingly has
                  required him to adapt quickly to different corporate cultures,
                  and get to know the people in them. After graduating with a
                  B.S. in engineering from the University of Michigan, Beau
                  continued to learn and add tools to his knowledge, acquiring
                  an MBA, and gaining invaluable experience in a variety of
                  companies.
                </p>
                <p>
                  In 2003, he was selected to work on a high-profile General
                  Motors project led by Lean Thinking guru and pioneer John
                  Shook. After finishing their work together with GM, John,
                  Beau, and five others formed the core of Lean Transformations
                  Group. Beau left LTG in 2014.
                </p>
                <p>
                  Beau enjoys helping organizations find their own way by
                  listening, teaching, and facilitating. His interactions are
                  high energy and effective. One of his favorite moments
                  involved a client who told him that they had learned more from
                  each other in their session together than they did from him.
                  "It made me feel good that they were comfortable telling me
                  that," he says, "And, it made me better understand how
                  effective one can be without grabbing the spotlight. It was
                  great to hear because I strive to make that happen every
                  time."
                </p>
                <p>
                  When asked about the one thing he would change in companies
                  these days, he echoes his father's democratic view of the
                  importance and value of everyone: "If I could, I would change
                  management's perceptions about front line people and affirm
                  for them what a great resource they can be if you just give
                  them a chance, and empower them to help solve their problems.
                  A big part of why I love the Lean principles is that they
                  aspire to do just that."
                </p>
                <p>Beau lives in Ann Arbor, Michigan with wife Debi.</p>
                <div className="testimonial">
                  <h3>Testimonial</h3>
                  <blockquote>
                    <p>
                      "A lot of what 'lean' is about is a structured way to
                      focus attention, quantify information, and place deadlines
                      on common sense practices."{' '}
                      <cite>Custom ironwork manufacturer</cite>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
