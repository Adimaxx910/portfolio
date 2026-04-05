import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adithya Ganiga — Data Analyst | BI | Automation',
  description:
    'Results-driven Data Analyst specializing in Business Intelligence, Data Governance, and Automation. Based in Bangalore, India.',
  keywords: [
    'Data Analyst',
    'Business Intelligence',
    'Power BI',
    'SQL',
    'Python',
    'Data Governance',
    'ETL',
    'Bangalore',
  ],
  authors: [{ name: 'Adithya Ganiga' }],
  openGraph: {
    title: 'Adithya Ganiga — Data Analyst',
    description: 'Turning Data into Business Decisions',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>{children}</body>
    </html>
  );
}
