import NotFound from '../components/NotFound';
import axios from 'axios';
import React from 'react'
import Head from 'next/head';


export async function getServerSideProps() {

    const getTrainerDetails = async () => {
        try {
            const response = await axios.get(`https://pdworkforcemanagement.com/api/dynamic-coaching-site`);

            if (response.status == 200 && !!response.data) {
                return response.data;
            }
        } catch (error) {
            console.log(error)
        }

        return null;
    }


    const trainerDetails = await getTrainerDetails();

    return { props: { trainerDetails } }
}

export default function Privacy(props) {
    if (!props?.trainerDetails || props.trainerDetails?.length == 0) {
        console.log(props.trainerDetails)
        return <NotFound />;
    }

    const trainerDetails = props.trainerDetails

    const decodedHtml = trainerDetails.privacyPolicy_html.replace(/\\u003c/g, '<').replace(/\\u003e/g, '>');


    return (
        <>
        <Head>
                <title>Emeric - Coming Soon and Portfolio Template</title>
                <link rel="icon" href="img/favicon/favicon.ico" sizes="any" />
                <link rel="icon" href="img/favicon/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
                <link rel="manifest" href="img/favicon/manifest.webmanifest"></link>
            </Head>
            <div className='privacyPolicy'>
                <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
            </div>
        </>
    )
}