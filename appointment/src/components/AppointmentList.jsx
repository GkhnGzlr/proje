import Stack from "react-bootstrap/Stack";

const AppointmentList = () => {
  return (
    <>
      <h3>Appointment List</h3>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-around bg-secondary text-light"
        gap={3}
      >
        <div>
          <div className="p-2">Patient Name</div>
          <div className="p-2">Doctor Name</div>
        </div>

        <div>
          <div className="p-2 ms-auto">Consulted</div>
          <div className="p-2 ms-auto">Date</div>
        </div>

        <div className="p-2">Third item</div>
      </Stack>
    </>
  );
};

export default AppointmentList;
