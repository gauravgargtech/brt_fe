import React, { useEffect, useState } from "react";
import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

function Home(props) {
  const [records, setRecords] = useState([]);

  const fetchReferrals = async () => {
    return new Promise((resolve, reject) => {
      let ref = Firebase.database().ref("/referrals");
      ref.on("value", (snapshot) => {
        const data = snapshot.val();
        let resp = [];
        for (let i in data) {
          resp.push(data[i]);
        }
        setRecords(resp);
        resolve(resp);
      });
    });
  };

  useEffect(() => {
    if (!Firebase.apps.length) {
      Firebase.initializeApp({
        databaseURL: "https://bartguy.firebaseio.com",
        storageBucket: "/bartguy",
        projectId: "bartguy",
      });
    }

    const fetchData = async () => {
      await fetchReferrals();
    };
    fetchData();
  }, []);

  return (
    <div className="container pb-2">
      <div className="row" style={{ borderBottom: "1px solid #6c757d" }}>
        <div className="col-sm form-label">GIVEN NAME</div>
        <div className="col-sm form-label">SURNAME</div>
        <div className="col-sm form-label">EMAIL</div>
        <div className="col-sm form-label">PHONE</div>
        <div className="col-sm form-label">ACTIONS</div>
      </div>

      {records.map((record) => {
        return (
          <>
            <div className="row" style={{ borderBottom: "1px solid #6c757d" }}>
              <div className="col-sm form-label__item">{record.given_name}</div>
              <div className="col-sm form-label__item">{record.surname}</div>
              <div className="col-sm form-label__item">{record.email}</div>
              <div className="col-sm form-label__item">{record.phone}</div>
              <div className="col-sm form-label_item"></div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Home;
