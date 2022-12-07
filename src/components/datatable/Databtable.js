import { React, useState, useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Datatable() {
  // const [meeting, setMeeting] = useState({
  //   fullName: "",
  //   tag: "",
  //   meetingDate: "",
  //   location: "",
  //   purpose: "",
  //   meetingNotes: "",
  //   // rating: "",
  //   // postMeetingAction: " ",
  // });

  const [meetings, setMeetings] = useState([]);
  //hold list of meetings from our db
  const meetingLogCollectionRef = collection(db, "meetingLog");

  useEffect(() => {
    const getMeetings = async () => {
      const data = await getDocs(meetingLogCollectionRef);
      setMeetings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(meetings);
    };
    getMeetings();
  }, []);
  //play around with this later
  //grabbing our data from db

  const columns = [
    {
      field: "fullName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
      valueGetter: (params) => `${params.row.fullName}`,
    },
    {
      field: "tag",
      headerName: "Tag",
      width: 100,
    },
    {
      field: "meetingDate",
      headerName: "Date",
      width: 120,
    },
    {
      field: "location",
      headerName: "Location",
      width: 100,
    },
    {
      field: "purpose",
      headerName: "Purpose",
      width: 100,
    },
    {
      field: "meetingNotes",
      headerName: "Meeting Notes",
      width: 225,
    },
  ];

  const rows = meetings;

  return (
    <div className="datatable">
      <div className="top">
        <h1>View Meeting Records</h1>
      </div>
      <div className="bottom">
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default Datatable;
