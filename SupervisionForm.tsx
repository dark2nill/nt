
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";
import { format } from "date-fns";

const schools = {
  "เมือง 1": [
    "โรงเรียนบ้านต๋อม",
    "โรงเรียนบ้านต๊ำพระแล",
    "โรงเรียนบ้านต๊ำม่อน",
    "โรงเรียนบ้านต๊ำเหล่า",
    "โรงเรียนบ้านป่าคา",
    "โรงเรียนบ้านโป่ง",
    "โรงเรียนบ้านภูเงิน",
    "โรงเรียนบ้านห้วยบง",
    "โรงเรียนบ้านสาง",
    "โรงเรียนบ้านสันเวียงใหม่",
    "โรงเรียนบ้านใหม่",
    "โรงเรียนบ้านดอกบัว (ราษฎร์บำรุง)",
    "โรงเรียนบ้านร่องห้า",
    "โรงเรียนตำบลสันป่าม่วง",
    "โรงเรียนชุมชนบ้านตุ้มท่า"
  ]
};

const supervisors = [
  "นายธงชัย คำปวง - ผอ.สพป.พะเยา เขต 1",
  "นายสุวัฒน์ โยปัญญา - รองผอ.",
  "นายชนธัญ ติ๊บเมืองมา - รองผอ.",
  "นายสุภัทร์ เขียนโพธิ์ - รองผอ.",
  "นางภัทรภร รัตนชมภู - ศึกษานิเทศก์",
  "นางสาวประภาพัฒน์ เพ็ชรรัตน์บำรุง - ศึกษานิเทศก์",
  "นางสาวรุสนันท์ แก้วตา - ศึกษานิเทศก์",
  "นางธมนวรรณ คำเรื่อง - ศึกษานิเทศก์",
  "นางสาวคริษฐา เผ่าปินตา - ศึกษานิเทศก์",
  "นางวันวิสาข์ วังชุมทอง - ศึกษานิเทศก์",
  "นางสาวอัญชลี โทกุล - ศึกษานิเทศก์",
  "นายธนากรณ์ เจริญยิ่ง - ศึกษานิเทศก์",
  "นางสาวทวิวสรร เศรษฐประสิทธิ์ - ศึกษานิเทศก์",
  "นางพินทุสร แรงทน - ศึกษานิเทศก์",
  "นางสาวนันทัชพร ปัญญาภู - ศึกษานิเทศก์",
  "นางสาวรัตนาภรณ์ เผ่าฟู - ศึกษานิเทศก์",
  "นางตรีรัตน์ แก้วมูลคำ - ศึกษานิเทศก์",
  "นางวิไลพร สร้อยวงค์ - ศึกษานิเทศก์",
  "นางสาวปราชญา อมิตเดชโชติ - ศึกษานิเทศก์"
];

export default function SupervisionForm() {
  const [group, setGroup] = useState("เมือง 1");
  const [school, setSchool] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [director, setDirector] = useState("");
  const [selectedSupervisors, setSelectedSupervisors] = useState([]);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">ระบบบันทึกการนิเทศ ติดตามฯ</h2>

      <Card>
        <CardContent className="space-y-4 p-4">
          <Label>กลุ่มโรงเรียน</Label>
          <Select onValueChange={(value) => { setGroup(value); setSchool(""); }}>
            {Object.keys(schools).map((key) => (
              <SelectItem key={key} value={key}>{key}</SelectItem>
            ))}
          </Select>

          <Label>โรงเรียน</Label>
          <Select onValueChange={setSchool} value={school}>
            {(schools[group] || []).map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </Select>

          <Label>วันที่ออกนิเทศ</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <Label>ข้อความการนิเทศ</Label>
          <Textarea value={note} onChange={(e) => setNote(e.target.value)} />

          <Label>ผู้รับการนิเทศ (ผู้อำนวยการสถานศึกษา)</Label>
          <Input value={director} onChange={(e) => setDirector(e.target.value)} placeholder="ชื่อ - สกุล / ตำแหน่ง" />

          <Label>ผู้บันทึกการนิเทศ (ศึกษานิเทศก์)</Label>
          <Select multiple value={selectedSupervisors} onValueChange={setSelectedSupervisors}>
            {supervisors.map((sup) => (
              <SelectItem key={sup} value={sup}>{sup}</SelectItem>
            ))}
          </Select>

          <Label>อัปโหลดภาพประกอบ</Label>
          <Input type="file" multiple />

          <Button onClick={() => alert("บันทึกข้อมูลเรียบร้อย")}>บันทึกข้อมูล</Button>
        </CardContent>
      </Card>
    </div>
  );
}
