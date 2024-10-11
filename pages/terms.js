import NotFound from '../components/NotFound';
import axios from 'axios';
import React from 'react'


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

export default function Terms(props) {
    if (!props?.trainerDetails || props.trainerDetails?.length == 0) {
        return <NotFound />;
    }

    const trainerDetails = props.trainerDetails

    const decodedHtml = trainerDetails.termsAndConditions_html.replace(/\\u003c/g, '<').replace(/\\u003e/g, '>');


    return (
        <>
         <div className='privacyPolicy'>
            <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
        </div>
        </>
       
    )
}