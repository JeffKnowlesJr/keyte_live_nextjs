import { SubpageLayout } from '../../../components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Complete Lean Enterprise, 2nd edition',
  description:
    'Explore the 2nd edition of "The Complete Lean Enterprise: Value Stream Mapping for Office and Services," co-authored by Beau Keyte and Drew Locher. This updated version provides a step-by-step approach for implementing Lean initiatives in service and office environments, with a focus on transforming organizational culture for greater effectiveness and efficiency.',
  keywords:
    'The Complete Lean Enterprise, 2nd edition, Beau Keyte, Drew Locher, Lean initiatives, service industry, office environments, organizational culture, continuous improvement, value stream mapping, industry support, teaching, writing, critical thinking, coaching',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'The Complete Lean Enterprise, 2nd edition',
    description:
      'Explore the 2nd edition of "The Complete Lean Enterprise: Value Stream Mapping for Office and Services," co-authored by Beau Keyte and Drew Locher. This updated version provides a step-by-step approach for implementing Lean initiatives in service and office environments, with a focus on transforming organizational culture for greater effectiveness and efficiency.',
    url: 'https://www.keytegroup.com/how-we-think/complete-lean-enterprise-book/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/complete-lean-enterprise-book.jpg',
        width: 800,
        height: 600,
        alt: 'The Complete Lean Enterprise Book Cover'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Lean Enterprise, 2nd edition',
    description:
      'Explore the 2nd edition of "The Complete Lean Enterprise: Value Stream Mapping for Office and Services," co-authored by Beau Keyte and Drew Locher.',
    images: ['https://www.keytegroup.com/images/complete-lean-enterprise-book.jpg']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/how-we-think/complete-lean-enterprise-book/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="complete-lean-enterprise-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: 'The Complete Lean Enterprise: Value Stream Mapping for Office and Services, 2nd edition',
            author: [
              {
                '@type': 'Person',
                name: 'Beau Keyte'
              },
              {
                '@type': 'Person',
                name: 'Drew Locher'
              }
            ],
            description:
              'An updated version of the bestselling book that won a Shingo Prize for Excellence in Manufacturing Research. The second edition expands beyond the "tools focus" to challenge your organization to think and act differently. Part of Beau Keyte\'s professional insights and industry support through teaching and writing.',
            publisher: {
              '@type': 'Organization',
              name: 'Routledge'
            },
            url: 'https://www.keytegroup.com/how-we-think/complete-lean-enterprise-book/',
            mainEntityOfPage:
              'https://www.keytegroup.com/how-we-think/complete-lean-enterprise-book/'
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
                    <span className="current">
                      The Complete Lean Enterprise
                    </span>
                  </div>
                  <h1>The Complete Lean Enterprise, 2nd edition</h1>
                  <h3>Guiding Organizational Transformation</h3>
                  <p className="lead">
                    THE COMPLETE LEAN ENTERPRISE: Value Stream Mapping for
                    Office and Services, 2nd edition, co-authored by Beau Keyte
                    and Drew Locher, is an updated version of the bestselling
                    book that won a Shingo Prize for Excellence in Manufacturing
                    Research. The second edition expands beyond the "tools
                    focus" to challenge your organization to think and act
                    differently in order to change the culture of your
                    organization as you become more effective and efficient.
                  </p>

                  <h4>This updated edition of a Shingo Prize Winner:</h4>
                  <ul>
                    <li>
                      Provides a robust step-by-step approach for implementing
                      Lean initiatives in the service industry and office
                      environments.
                    </li>
                    <li>
                      Features new critical steps in planning and preparing for
                      VSM events.
                    </li>
                    <li>
                      Includes new content and examples from the service
                      industry, including healthcare.
                    </li>
                    <li>
                      Details methods for engaging an entire organization in
                      continuous improvement by focusing on socialization.
                    </li>
                    <li>
                      Discusses the use of experiments to "learn your way" to a
                      future state.
                    </li>
                    <li>
                      Provides examples of tiered visual management and
                      demonstrates the principles of a lean management system.
                    </li>
                  </ul>

                  <h4>Praise for The Complete Lean Enterprise:</h4>

                  <blockquote>
                    <p>
                      "The Complete Lean Enterprise is an excellent tool to
                      guide the enterprising manager to a new lean process
                      solution. The step-by-step instructions are easy for the
                      beginner to follow, and the lean examples, team exercises,
                      and mapping tips add a credible voice of experience to the
                      manuscript. And, best of all, 'It works!'"
                    </p>
                    <cite>
                      — Kent Sears, Vice President Manufacturing Processes and
                      Lean Implementation, General Motors Corporation
                    </cite>
                  </blockquote>

                  <blockquote>
                    <p>
                      "This book is a must-read for leaders struggling to remove
                      waste, reduce time, and improve responsiveness in
                      white-collar processes. I expect to see well-worn copies
                      of The Complete Lean Enterprise in offices everywhere. It
                      deserves a spot next to Learning to See."
                    </p>
                    <cite>
                      — Peter Ward, Professor of Operations Management, Fisher
                      College of Business, Ohio State University
                    </cite>
                  </blockquote>

                  <blockquote>
                    <p>
                      "Their method is practical, pragmatic and can easily be
                      transferred to others. This is the book. This is the
                      Rosetta stone for VSM."
                    </p>
                    <cite>
                      — Tom Berghan, Manager, Lean Systems, Esterline Korry
                    </cite>
                  </blockquote>

                  <blockquote>
                    <p>
                      "Beau and Drew have developed a strategic lean tool that
                      connects the value stream management of manufacturing
                      processes to the rest of the enterprise! This tool applies
                      to Office and Manufacturing processes, providing a
                      systematic approach to eliminate waste along the entire
                      product delivering value stream."
                    </p>
                    <cite>— Ron Fardell, Director of Lean, Textron, Inc.</cite>
                  </blockquote>

                  <p>
                    <a
                      href="https://www.routledge.com/The-Complete-Lean-Enterprise-Value-Stream-Mapping-for-Office-and-Services-Second-Edition/Keyte-Locher/p/book/9781482206135"
                      target="_blank"
                    >
                      Purchase The Complete Lean Enterprise, 2nd edition
                    </a>
                  </p>

                  <p>
                    For more information, visit{' '}
                    <a
                      href="https://www.routledge.com/The-Complete-Lean-Enterprise-Value-Stream-Mapping-for-Office-and-Services-Second-Edition/Keyte-Locher/p/book/9781482206135"
                      target="_blank"
                    >
                      https://www.routledge.com/The-Complete-Lean-Enterprise-Value-Stream-Mapping-for-Office-and-Services-Second-Edition/Keyte-Locher/p/book/9781482206135
                    </a>
                  </p>
                </div>
                <div className="four columns sidebar">
                  <div className="ccm-image-block">
                    <img
                      src="/images/9781482206135.jpg"
                      alt="The Complete Lean Enterprise Book Cover (2nd Edition) by Beau Keyte and Drew Locher"
                    />
                    <p
                      style={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        marginTop: '10px',
                        lineHeight: '1.4'
                      }}
                    >
                      Comprehensive guide to enterprise-wide lean transformation
                    </p>
                  </div>
                  <h3>Book Details</h3>
                  <ul className="book-details">
                    <li>
                      <strong>Authors:</strong> Beau Keyte &amp; Drew Locher
                    </li>
                    <li>
                      <strong>Edition:</strong> 2nd Edition
                    </li>
                    <li>
                      <strong>Publisher:</strong> Routledge
                    </li>
                    <li>
                      <strong>Focus:</strong> Service &amp; Office Environments
                    </li>
                  </ul>
                  <h3>Related Resources</h3>
                  <ul className="sidebar-nav">
                    <li>
                      <a href="/how-we-think/perfecting-patient-journeys-book">
                        Perfecting Patient Journeys
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
                  <h3>Key Concepts</h3>
                  <ul className="concept-list">
                    <li>Value Stream Management</li>
                    <li>Service Industry Applications</li>
                    <li>Office Environment Lean</li>
                    <li>Organizational Culture</li>
                    <li>Continuous Improvement</li>
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
