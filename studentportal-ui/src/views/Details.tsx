import { Button } from "@/components/ui/button";
import { Class, Student, StudentInfo } from "@/lib/data";
import { getFormattedDate, getHost } from "@/lib/utils";
import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
  const { id } = useParams();
  const [classes, setClasses] = React.useState<Class[]>([]);

  React.useEffect(() => {
    fetch(getHost() + '/api/ClassTable')
      .then((res) => {
        try {
          return res.json();
        } catch {
          return [];
        }
      })
      .then((data: Class[]) => {
        setClasses(data);
      });
  }, []);
  const [details, setDetails] = useState<StudentInfo | null>(null);

  React.useEffect(() => {
    fetch(getHost() + `/api/StudentTable/${id}`)
      .then((res) => {
        try {
          return res.json();
        } catch {
          return [];
        }
      })
      .then((student: Student) => {
        setDetails({
          data: student,
          class: classes.find(cl => cl.id == student.classId) ?? { name: "One", id: 1, createdAt: "0", modifiedAt: "0" },
        });
      });
  }, [classes]);

  if (details == null || classes.length == 0) {
    return <>Waiting for details...</>
  }

  return (<>
    <div className="dark flex justify-center items-center h-screen w-screen bg-background text-foreground">
      <div className="">
        <h1>Id: {details.data.id}</h1>
        <h1>Name: {details.data.name}</h1>
        <h1>Gender: {(details.data.gender == 0 ? "Male" : "Female") + `(${details.data.gender})`}</h1>
        <h1>DOB: {getFormattedDate(details.data.dob)}</h1>
        <h1>Class: {`${details.class.name}(${details.data.classId})`}</h1>
        <h1>Created at: {details.data.createdAt}</h1>
        <h1>Modified at: {details.data.modifiedAt}</h1>
        <Link className="" to={"/"} >
          <Button variant="outline" className="my-4">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  </>);
}