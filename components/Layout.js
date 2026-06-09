import Head from 'next/head'
export default function Layout({ children }){
  return (
    <>
      <Head>
        <title>Rohit Mahajan — Data Analyst</title>
        <meta name="description" content="Rohit Mahajan — Data Analyst | Power BI | SQL | Excel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen relative">
        {children}
      </div>
    </>
  )
}
