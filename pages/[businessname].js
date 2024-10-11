import React from "react"
import axios from 'axios'
import Head from "next/head"
import Loader from "../components/Loader"
import BgGradient from "../components/BgGradient"
import Header from "../components/Header"
import Menu from "../components/Menu"
import HomePage from "../components/HomePage"
import AboutPage from "../components/AboutPage"
import Transformations from "../components/Transformations"
import ContactPage from "../components/ContactPage"
import Popup from "../components/Popup"
import PhotoSwipe from "../components/PhotoSwipe"
import NotFound from "../components/NotFound"


export const getServerSideProps = async (context) => {

    // const businessname = context.query.business;
    const { businessname } = context.params;

    if (!businessname) {
        return {
            notFound: true,
        };
    }

    const getTrainerDetails = async (businessname) => {

        try {
            const response = await axios.get(`https://pdworkforcemanagement.com/api/fitness-coaches/coach/${encodeURIComponent(businessname)}`);

            if (response.status == 200 && !!response.data) {
                console.log(response.data.docs[0])
                return response.data.docs[0];
            }
        } catch (error) {
            console.log(error)
        }

        return null;
    }

    const trainerDetails = await getTrainerDetails(businessname);
    // console.log(trainerDetails);
    if (!trainerDetails) {
        return {
            props: { notFound: true }, 
        };
    }

    return { props: { trainerDetails } }
}

const Coach = (props) => {

    if (props.notFound) {
        return <NotFound />;
    }

    if (!props?.trainerDetails || props.trainerDetails?.length === 0) {
        // console.log(props.trainerDetails);
        return <NotFound />;
    }

    const trainerDetails = props.trainerDetails

    return (
        <div>
            <Head>
                <title>{trainerDetails.business_name}</title>
                <link rel="icon" href="../img/dumbbell.svg" sizes="any" />
                <meta name="description" content="Create a balanced lifestyle with us, your online fitness coach"/>
            </Head>
            <div id="loader11">
                <Loader trainerDetails={trainerDetails} />
            </div>

                <div id="main-content11">
                    <BgGradient trainerDetails={trainerDetails} />
                    <Header trainerDetails={trainerDetails} />
                    <Menu trainerDetails={trainerDetails} />
                    <HomePage
                        trainerDetails={trainerDetails}
                    />
                    <AboutPage />
                    <Transformations />
                    <ContactPage trainerDetails={trainerDetails} />
                    <Popup />
                    <PhotoSwipe />
                </div>

        </div>
    )
}

export default Coach;