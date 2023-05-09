import React from "react";
const CohortDate = ({data, setCohort, setHeading}) => {
    let newList = [...new setCohort(data.map((student) =>student.cohort.cohortCode))];
    
    const year = (year) => {
        return year.split("").slice(0,-4).join("") +" "+ year.slice(1).slice(-4)
    }
};