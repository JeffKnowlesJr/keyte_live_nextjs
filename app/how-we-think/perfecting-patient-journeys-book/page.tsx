import { SubpageLayout } from '@/components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Perfecting Patient Journeys - Keyte Group',
  description:
    'Learn about the book "Perfecting Patient Journeys," co-authored by Beau Keyte with other experts. This guide is for leaders of healthcare organizations looking to implement lean thinking and improve the quality and safety of healthcare delivery. Explore the remarkable results achieved by implementing lean thinking in healthcare, including reduced staff turnover, shorter emergency department stays, increased patient satisfaction, and more.',
  keywords:
    'Perfecting Patient Journeys, healthcare, lean thinking, quality improvement, patient care, healthcare delivery, book, co-authors, Beau Keyte, industry support, teaching, writing, critical thinking, coaching',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Perfecting Patient Journeys - Keyte Group',
    description:
      'Learn about the book "Perfecting Patient Journeys," co-authored by Beau Keyte with other experts. This guide is for leaders of healthcare organizations looking to implement lean thinking and improve the quality and safety of healthcare delivery. Explore the remarkable results achieved by implementing lean thinking in healthcare, including reduced staff turnover, shorter emergency department stays, increased patient satisfaction, and more.',
    url: 'https://www.keytegroup.com/how-we-think/perfecting-patient-journeys-book/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/perfecting-patient-journeys-book.jpg',
        width: 800,
        height: 600,
        alt: 'Perfecting Patient Journeys Book Cover'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfecting Patient Journeys - Keyte Group',
    description:
      'Learn about the book "Perfecting Patient Journeys," co-authored by Beau Keyte with other experts. This guide is for leaders of healthcare organizations looking to implement lean thinking and improve the quality and safety of healthcare delivery.',
    images: [
      'https://www.keytegroup.com/images/perfecting-patient-journeys-book.jpg'
    ]
  },
  alternates: {
    canonical:
      'https://www.keytegroup.com/how-we-think/perfecting-patient-journeys-book/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="perfecting-patient-journeys-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: 'Perfecting Patient Journeys',
            author: [
              {
                '@type': 'Person',
                name: 'Beau Keyte'
              },
              {
                '@type': 'Person',
                name: 'Judy Worth'
              },
              {
                '@type': 'Person',
                name: 'Tom Shuker'
              },
              {
                '@type': 'Person',
                name: 'Karl Ohaus'
              },
              {
                '@type': 'Person',
                name: 'Jim Luckman'
              },
              {
                '@type': 'Person',
                name: 'David Verble'
              },
              {
                '@type': 'Person',
                name: 'Kirk Paluska'
              },
              {
                '@type': 'Person',
                name: 'Todd Nickel'
              }
            ],
            description:
              'A guide for leaders of healthcare organizations who want to implement lean thinking in their organizations with all of the improvement in the quality and safety that it brings to the delivery of healthcare. Part of Beau Keyte\'s professional insights and industry support through teaching and writing.',
            publisher: {
              '@type': 'Organization',
              name: 'Lean Enterprise Institute'
            },
            url: 'https://www.keytegroup.com/how-we-think/perfecting-patient-journeys-book/',
            mainEntityOfPage:
              'https://www.keytegroup.com/how-we-think/perfecting-patient-journeys-book/'
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
              <div className="twelve columns">
                <div className="eight columns">
                  <div id="breadcrumbs">
                    <a href="/index">Home</a> &gt;{' '}
                    <a href="index">How We Think</a> &gt;{' '}
                    <span className="current">Perfecting Patient Journeys</span>
                  </div>
                  <h1>Perfecting Patient Journeys</h1>
                  <h3>Guiding Organizational Transformation</h3>
                  <p className="lead">
                    PERFECTING PATIENT JOURNEYS, co-authored by Beau Keyte with
                    Judy Worth, Tom Shuker, Karl Ohaus, Jim Luckman, David
                    Verble, Kirk Paluska and Todd Nickel, is a guide for leaders
                    of healthcare organizations who want to implement lean
                    thinking in their organizations with all of the improvement
                    in the quality and safety that it brings to the delivery of
                    healthcare.{' '}
                    <a
                      href="http://www.amazon.com/Perfecting-Patient-Journeys-Judy-Worth/dp/1934109363"
                      target="_blank"
                    >
                      Purchase Perfecting Patient Journeys.
                    </a>
                  </p>

                  <p>
                    Over the past eight years, the authors of this book have
                    helped healthcare organizations learn how to make real and
                    sustainable change using the value-stream improvement
                    method. Implementing lean thinking has helped healthcare
                    providers develop an adaptive, problem-solving culture with
                    notable results:
                  </p>

                  <ul>
                    <li>Reduced annual staff turnover by 20%</li>
                    <li>
                      Average length of stay (LOS) in a large emergency
                      department was reduced by 30%
                    </li>
                    <li>
                      The number of patients who left without being seen (LWOBS)
                      dropped by 60% in the same hospital
                    </li>
                    <li>Customer (patient) satisfaction increased by 73%</li>
                    <li>
                      Operating room changeover time was reduced, which
                      increased the number of surgical procedures performed by
                      20%
                    </li>
                  </ul>

                  <p>
                    The method described here does not rely on huge training
                    budgets or teams of consultants. It focuses on solving real
                    organizational problems, and at the end of the day doing
                    what healthcare organizations and those who labor there
                    aspire to do every day: provide safe, effective, efficient,
                    and timely patient care.
                  </p>

                  <p>
                    <a
                      href="http://www.amazon.com/Perfecting-Patient-Journeys-Judy-Worth/dp/1934109363"
                      target="_blank"
                    >
                      Purchase Perfecting Patient Journeys.
                    </a>
                  </p>

                  <h4>Praise for Perfecting Patient Journeys</h4>

                  <blockquote>
                    <p>
                      "We have found in healthcare organizations throughout
                      North America that this approach unleashes the talent and
                      creativity of thousands of workers all focused on solving
                      problems every day. The result? Remarkably higher-quality,
                      lower-cost care. Given the worldwide problem of declining
                      value in healthcare I cannot think of a more timely and
                      practical resource for pursuing perfect health care
                      delivery."
                    </p>
                    <cite>
                      — Dr. John Toussaint, Author, Potent Medicine and On the
                      Mend
                    </cite>
                  </blockquote>

                  <blockquote>
                    <p>
                      "In healthcare it is difficult to see the entire process
                      in one's own department, never mind fully understand what
                      the patients and families experience as they receive care
                      throughout the hospital. Hospitals, like many companies,
                      are set up in separate and distinct departments so a
                      patient must enter and exit these distinct vertical silos
                      even for a simple doctor's visit and face even more
                      fragmentation for an inpatient stay. This book helps one
                      to 'see' across the silos by teaching you a way to
                      visualize the current flow (or anti-flow) of patients as
                      they navigate their way to better health and in turn,
                      makes obvious the waits and delays, the hand-off issues,
                      the redundancies, and the pain our patients experience so
                      that you can design a much better system of care delivery.
                      Perfecting Patient Journeys provides a step-wise approach
                      that is practical and clear and will jump start efforts of
                      your process improvement teams."
                    </p>
                    <cite>
                      — Alice Lee, Vice President of Business Transformation,
                      Beth Israel Deaconess Medical Center
                    </cite>
                  </blockquote>

                  <blockquote>
                    <p>
                      "Perfecting Patient Journeys is the perfect field guide
                      for leading self-directed improvement teams in healthcare.
                      It is the Learning To See for healthcare providers and
                      lean coaches. Our work at Martin Health Systems now
                      follows the value-stream mapping and PDCA methodology
                      outlined in the book, and we recently initiated a major
                      Inpatient Service Line Value Stream Improvement Strategy
                      applying the same process. Having buy-in from multiple
                      stakeholders and structured follow-through on small rapid
                      improvement events is critical to learning the concepts
                      and maintaining progress."
                    </p>
                    <cite>
                      — Roger Chen, Corporate Director of Performance
                      Excellence, Martin Health Systems
                    </cite>
                  </blockquote>

                  <blockquote>
                    <p>
                      "Few healthcare leaders have been trained to understand
                      the existing state of care processes in their hospital or
                      clinic. Perfecting Patient Journeys describes the
                      team-based, value-stream improvement method which allows
                      frontline healthcare staff to standardize and improve care
                      processes."
                    </p>
                  </blockquote>

                  <p>
                    <a
                      href="http://www.amazon.com/Perfecting-Patient-Journeys-Judy-Worth/dp/1934109363"
                      target="_blank"
                    >
                      Purchase Perfecting Patient Journeys.
                    </a>
                  </p>

                  <p>
                    For further information, contact Beau Keyte to learn more
                    about how the Keyte Group can help transform your
                    organization.
                  </p>
                </div>
                <div className="four columns sidebar">
                  <div className="ccm-image-block">
                    <img
                      src="/images/71gPRR1JfXL._SL1500_.jpg"
                      alt="Perfecting Patient Journeys Book Cover by Judy Worth, Tom Shuker, Beau Keyte, et al."
                    />
                    <p
                      style={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        marginTop: '10px',
                        lineHeight: '1.4'
                      }}
                    >
                      Transforming healthcare through patient-centered lean
                      thinking
                    </p>
                  </div>
                  <h3>Book Details</h3>
                  <ul className="book-details">
                    <li>
                      <strong>Co-authors:</strong> Beau Keyte, Judy Worth, Tom
                      Shuker, Karl Ohaus, Jim Luckman, David Verble, Kirk
                      Paluska, Todd Nickel
                    </li>
                    <li>
                      <strong>Focus:</strong> Healthcare Lean Implementation
                    </li>
                    <li>
                      <strong>Approach:</strong> Value Stream Improvement
                    </li>
                    <li>
                      <strong>Target:</strong> Healthcare Leaders
                    </li>
                  </ul>
                  <h3>Related Resources</h3>
                  <ul className="sidebar-nav">
                    <li>
                      <a href="/how-we-think/complete-lean-enterprise-book">
                        Complete Lean Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="/what-we-did/value-stream-mapping">
                        Value Stream Mapping
                      </a>
                    </li>
                    <li>
                      <a href="/how-we-think/articles-and-thoughts">Articles and Thoughts</a>
                    </li>
                  </ul>
                  <h3>Healthcare Applications</h3>
                  <ul className="concept-list">
                    <li>Patient Journey Mapping</li>
                    <li>Clinical Flow Improvement</li>
                    <li>Error Prevention</li>
                    <li>Patient Experience</li>
                    <li>Healthcare Value Streams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
