import {useRouter} from 'next/router';

function DetailsPage(){
    const router = useRouter();
    const newId = router.query.newId;

    return <h1>The details Page</h1>
 }
 
 export default DetailsPage;