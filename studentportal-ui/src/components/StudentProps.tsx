import { Class, Student, StudentInfo } from "@/lib/data";

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { getHost } from "@/lib/utils"

import { Link } from "react-router-dom";
import { DatePicker } from "@/components/ui/date-picker";

export const StudentProps: React.FC<{ edit?: Student, title?: string, actionBtn?: string, onAction: React.Dispatch<StudentInfo> }> = ({
  edit = null, title = "Add new student", actionBtn = "Add", onAction
}) => {
  const [classes, setClasses] = React.useState<Class[]>([]);
  const [newInfo, setNewInfo] = React.useState<StudentInfo>(edit ? {
    data: edit,
    class: {
      id: 1,
      name: "One"
    }
  } : {
    data: {
      name: "",
      dob: new Date().toJSON(),
      gender: 0,
      classId: 1
    },
    class: {
      id: 1,
      name: "One"
    }
  });


  React.useEffect(() => {
    fetch(getHost() + '/api/ClassTable')
      .then((res) => {
        try {
          return res.json();
        } catch {
          return [];
        }
      })
      .then((classes: Class[]) => {
        const newClass = classes.find(cl => cl.id ? cl.id == newInfo.data.classId : false);
        if (newClass) {
          newInfo.class = newClass;
        }
        setClasses(classes);
        setNewInfo({ ...newInfo });
      });
  }, []);

  return (
    <Card className="w-full bg-background text-foreground">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input required id="name" placeholder="Name of the student" defaultValue={newInfo.data.name} onChange={(e) => {
                newInfo.data.name = e.target.value;
                setNewInfo({ ...newInfo });
              }} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gender">Gender</Label>
              <RadioGroup className="px-2" defaultValue={newInfo.data.gender.toString()} id="gender"
                onValueChange={(e) => {
                  if (e.trim().length === 0) return;
                  newInfo.data.gender = parseInt(e);
                  setNewInfo({ ...newInfo });
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0" id="r1" />
                  <Label htmlFor="r1">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="r2" />
                  <Label htmlFor="r2">Female</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dob">Date of birth</Label>
              <DatePicker
                id="dob"
                onSetDate={(date) => {
                  newInfo.data.dob = date.toJSON();
                  setNewInfo({ ...newInfo });
                }}
                defaultDate={new Date(newInfo.data.dob)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="class">Class</Label>
              <Select required value={newInfo.class.id ? newInfo.class.id.toString() : undefined}
                onValueChange={(e) => {
                  if (e.trim().length === 0) return;
                  newInfo.data.classId = parseInt(e);
                  const newClass = classes.find(cl => cl.id == newInfo.data.classId);
                  if (newClass) {
                    newInfo.class = newClass;
                  }
                  setNewInfo({ ...newInfo });
                }}
              >
                <SelectTrigger id="class">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="w-full bg-background text-foreground">
                  {classes.map((cl, i) => (<SelectItem value={cl.id.toString()} key={i}>{cl.name}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={"/"} >
          <Button variant="outline" className="bg-border text-foreground">
            Cancel
          </Button>
        </Link>
        <Button onClick={() => {
          if (newInfo.data.name.trim().length == 0) {
            alert("The name shouldn't be empty.");
          } else if (newInfo.data.dob.trim().length == 0) {
            alert("Please pick a valid date of birth.");
          } else {
            onAction(newInfo);
          }
        }}>
          {actionBtn}
        </Button>
      </CardFooter>
    </Card>
  )
}