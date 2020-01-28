import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Stat } from './monthlystat';
import { Record } from './record';
import { StudentInfo } from './studentInfo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string = "http://localhost:3002"

  constructor( private http: HttpClient) { }

  getData(): Student[] {
    var list: Student[] = [{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    },
    {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    },
    {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    },
    {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }
      , {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }
      , {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }
      , {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }
      , {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }
      , {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }, {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }

    ]
    return list;
  }

  getMonthlyStat(): Stat[] {
    var months: Stat[] = [
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      }, {
        month: "January",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },

    ]
    return months;
  }

  getAnualStat(): Stat[] {
    var year: Stat[] = [
      {
        month: "2017",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "2018",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      },
      {
        month: "2019",
        numOfStudWhoPaid: "213",
        numOfStudWhoDdntPay: "234",
        totalAmountRec: "10234",
        totalAmountToRec: "1023423"
      }


    ]
    return year;
  }

  getSearch(): Student[] {
    var student: Student[] = [{
      _id: "1",
      name: "Merry Cris Ajoc",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }]
    var student: Student[] = [{
      _id: "2",
      name: "Christopher Alonzo",
      monthsPaid: "3",
      amountPaid: "1500",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September", monthsLeft: "12"
    }]
    var student: Student[] = [{
      _id: "3",
      name: "Ma. Theresa Amaquin",
      monthsPaid: "4",
      amountPaid: "2000",
      monthsToPay: "2",
      amountToPay: "1000",
      lastMonthPaid: "December", monthsLeft: "10"
    }]
    return student;
  }

  createRecord(record):Observable<Record> {
    return this.http.post<Record>(`${this.url}${"/record/createRecord"}`, record, httpOptions)
  }

  getSuggestions(name):Observable<StudentInfo[]> {
    return this.http.get<StudentInfo[]>(`${this.url}${"/student/getSuggestions/"}${name}`);
  }

}
