import Card from "@components/Card/Card";
import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";

const ServicesPage = () => {
  return (
    <Layout>
      <Header
        title="Services"
      />
      <h2>My Projects</h2>
      <p>A brief review of what I have enjoyed doing</p>
      <div>
        <Card />
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: baseline;
            flex-wrap: wrap;
          }
          h2 {
            font-family: 'Nunito Sans';
          }
          p{
            font-family: 'Open Sans';
            font-size: 0.9em;
          }
        `}
      </style>
    </Layout>
  )
}
export default ServicesPage;