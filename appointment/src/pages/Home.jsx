import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import AddModal from "../components/AddModal";
import { appointmentData, doctorData } from "../helpers/Data";

const Home = () => {

  return (
    <>
      <h1>NORDLYS HOSPITAL</h1>

      <h3>OUR DOCTORS</h3>

      <Doctors />
      <AddModal />
      <AppointmentList />
      <appointmentData/>
    </>
  );
};

export default Home;
