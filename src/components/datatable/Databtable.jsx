import { React, useState, useEffect } from "react";
import "./datatable.scss";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import { db } from "../../firebaseConfig";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

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
      //setting state with our data and adding id
    };
    //can't make anonymous function async so doing that to 24
    getMeetings();
    //calling our function
  }, []);
  //grabbing our data from db

  const deleteMeetings = async (id) => {
    await deleteDoc(doc(meetingCollection, id));
    setMeetings(meetings.filter((item) => item.id !== id));
  };
  const columns = [
    {
      field: "fullName",
      headerName: "Full Name",
      editable: "true",
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
      field: "location",
      headerName: "Location",
      width: 130,
    },
    {
      field: "purpose",
      headerName: "Purpose",
      width: 130,
    },
    {
      field: "meetingNotes",
      headerName: "Notes",
      width: 200,
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
    {
      field: "action",
      headerName: "Action",
      width: 75,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => deleteMeetings(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const rows = meetings;

  return (
    <div className="dataTableContainer">
      <div className="top">
        <h1>View Meeting Records</h1>
      </div>
      <div className="bottom">
        <DataGrid
          className="datatable"
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
          getRowHeight={() => "auto"}
          //adding and customizing toolbar
          components={{
            Toolbar: () => {
              return (
                <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
                  <GridToolbarColumnsButton />
                  <GridToolbarDensitySelector />
                  <GridToolbarExport />
                </GridToolbarContainer>
              );
            },
          }}
        />
      </div>
    </div>
  );
}

export default Datatable;
