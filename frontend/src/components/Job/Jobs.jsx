import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_API_URL}/job/getall`, {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs && jobs.jobs.length > 0 ? (
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p><strong>{element.title}</strong></p>
                  <p>{element.companyName || "Company"}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <p>
                    Experience Required: {element.experienceYears || 0} years {element.experienceMonths || 0} months
                  </p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })
          ) : (
            <div className="card">
              <p>No jobs are available right now.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
