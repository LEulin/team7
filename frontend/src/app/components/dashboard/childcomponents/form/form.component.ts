import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Record } from "../../../../services/record";
import { ServiceService } from "../../../../services/service.service";
import { Student } from "../../../../services/student";
import { StudentInfo } from "../../../../services/studentInfo";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  record: Record;
  suggestions: Array<StudentInfo>;
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.record = new Record();
    this.suggestions = new Array<StudentInfo>();
  }

  ngOnInit() {
    this.record = new Record();
    this.reset(new Record());
  }
  reset(val) {
    this.myForm = this.fb.group({
      studentName: [val.studentName, Validators.required],
      receivedBy: [val.receivedBy, Validators.required],
      month: [val.month, Validators.required],
      amount: [val.amount, Validators.required]
    });
  }

  validate(value, validation) {
    var valid: number = 0;
    if (this.myForm.get(value).touched) {
      validation.forEach(error => {
        if (this.myForm.get(value).hasError(error)) {
          valid++;
        }
      });
    }
    return valid > 0;
  }

  onSubmit() {
    if (this.record.batch != null || this.record.email != null || this.record.studentId != null) {
    this.service.createRecord(this.record).subscribe(
      (response: Record) => {
        this.reset(new Record());
        console.log(response);
        alert("Record successfully created!");
      },
      error => {
        alert("error occured");
        console.log(error);
      }
    );
    } else {
      alert("No student is selecte!");
    }
  }

  getSuggestions(name) {
    this.service.getSuggestions(name).subscribe(
      (response: StudentInfo[]) => {
        this.suggestions = response;
        if (this.suggestions.length > 0) {
          this.record.batch = this.suggestions[0].batch;
          this.record.studentId = this.suggestions[0]._id;
          this.record.email = this.suggestions[0].email;
          console.log(this.suggestions);
        }
      },
      error => {
        this.suggestions = new Array<StudentInfo>();
      }
    );
  }

  getSelected(student) {
    this.record.studentName = student.name;
    this.record.batch  = student.name;
    this.record.studentId = student._id;
    this.record.email = student.email;
  }
}