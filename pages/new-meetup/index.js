import NewMeetupForm from './../../components/meetups/NewMeetupForm';
function NewMeetupPage(){
    function addMeetupHandler(enter){
        console.log(enter)
    }
    
    return <NewMeetupForm onAddMeetup = {addMeetupHandler}  />
}

export default NewMeetupPage;