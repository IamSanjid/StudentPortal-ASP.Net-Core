import { StudentProps } from "@/components/StudentProps";
import { Student } from "@/lib/data";
import { getHost } from "@/lib/utils";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Edit() {
  const { id } = useParams();
  const [details, setDetails] = useState<Student | null>(null);

  const navigate = useNavigate();

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
        setDetails(student);
      });
  }, []);

  if (details == null) {
    return <>Waiting for details...</>
  }

  return (<>
    <div className="dark flex justify-center items-center h-screen w-screen bg-background text-foreground relative">
      <div className="">
        <StudentProps edit={details} title="Edit student details" actionBtn="Save changes" onAction={async (info) => {
          if (info.data.id !== undefined) {
            try {
              const response = await fetch(getHost() + `/api/StudentTable/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(info.data),
              });
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

              alert("Successfully updated...");
            } catch (error) {
              console.error('Error updating student:', error);
              alert('Failed to update student.');
            }

            navigate("/");
          }
        }} />
      </div>
    </div>
  </>);
}