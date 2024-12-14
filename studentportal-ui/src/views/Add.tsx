import { StudentProps } from "@/components/StudentProps";
import { getHost } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function Add() {
  const navigate = useNavigate();

  return (<>
    <div className="dark flex justify-center items-center h-screen w-screen bg-background text-foreground">
      <div className="">
        <StudentProps title="Add new student" actionBtn="Add new student" onAction={async (info) => {
          try {
            const response = await fetch(getHost() + `/api/StudentTable/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(info.data),
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            alert("Successfully added new student...");
          } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add new student.');
          }

          navigate("/");
        }} />
      </div>
    </div>
  </>);
}