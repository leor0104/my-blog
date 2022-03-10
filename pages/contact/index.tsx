import FormContact from "@components/Form/FormContact/FormContact";
import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
const Contact = () => {
    return (
        <Layout>
            <Header
                title="Contact"
            />
            <FormContact/>
        </Layout>
    );
}
export default Contact;