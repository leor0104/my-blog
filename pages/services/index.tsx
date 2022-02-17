import Card from "@components/Card/Card";
import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";

const ServicesPage = () => {
    return (
      <Layout>
          <Header
          title="Services"
          />
          <p>My Projects</p>
          <p>Quick blurb about the work you’ve done</p>
          <Card/>
      </Layout>
    )
}
export default ServicesPage;