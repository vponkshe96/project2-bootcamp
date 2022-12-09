import { React, useState, useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Datatable() {
  const [meetings, setMeetings] = useState([]);
  //initialized as empty array to match MUI table rows datatype

  const meetingCollection = collection(db, "meetings");
  //provides reference to meeting list stored in fb

  useEffect(() => {
    const getMeetings = async () => {
      const data = await getDocs(meetingCollection);
      //fetches our list of meetings from collection
      //returns a promise
      setMeetings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //special function provided by fb
      //play around with it
      //setting state with our data
    };
    //can't make anonymous function async so doing that to 24
    getMeetings();
    //calling our function
  }, []);
  //grabbing our data from db

  const columns = [
    {
      field: "fullName",
      headerName: "Full Name",
      sortable: false,
      width: 130,
    },
    {
      field: "tag",
      headerName: "Tag",
      width: 130,
    },
    {
      field: "meetingDate",
      headerName: "Date",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 80,
      renderCell: (params) => {
        return (
          <div className={`statusCell ${params.row.status}`}>
            {/* class name will depend on action */}
            {params.row.status}
          </div>
        );
      },
    },
  ];

  const rows = meetings;

  return (
    <div className="datatable">
      <div className="top">
        <h1>View Meeting Records</h1>
      </div>
      <div className="bottom">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowHeight={() => "auto"}
          className="table"
        />
      </div>
    </div>
  );
}

export default Datatable;
