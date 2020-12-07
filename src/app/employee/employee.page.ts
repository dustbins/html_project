import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  public employees = [
    {
      name: "Steve Ming Gatsby the Sixth",
      position: "CEO",
      salary: "220K",
      phone: "123-456-7890",
      img_src: "../../assets/images/employees/image.jpg"
    },
    {
      name: "Dan Robinson",
      position: "VP Sales",
      salary: "110K",
      phone: "123-654-7890",
      img_src: "../../assets/images/employees/image2.jpg"
    },
    {
      name: "Craig Door",
      position: "VP Marketing",
      salary: "100K",
      phone: "662-523-5263",
      img_src: "../../assets/images/employees/image3.jpg"
    },
    {
      name: "Silvester Tree",
      position: "VP Operations",
      salary: "150K",
      phone: "323-224-9534",
      img_src: "../../assets/images/employees/image4.jpg"
    },
    {
      name: "Sierra Kay",
      position: "Project Manager",
      salary: "95K",
      phone: "212-331-4534",
      img_src: "../../assets/images/employees/image5.jpg"
    },
    {
      name: "Daniel Shark",
      position: "HR Manager",
      salary: "102K",
      phone: "555-666-7777",
      img_src: "../../assets/images/employees/image6.jpg"
    },
    {
      name: "Corey Pore",
      position: "IT Team Lead",
      salary: "85K",
      phone: "667-778-9901",
      img_src: "../../assets/images/employees/image7.jpg"
    },
    {
      name: "Zachary Olson",
      position: "CIO",
      salary: "155K",
      phone: "112-334-4456",
      img_src: "../../assets/images/employees/image8.jpg"
    },
    {
      name: "Jack Mate",
      position: "COO",
      salary: "199K",
      phone: "221-332-2321",
      img_src: "../../assets/images/employees/image9.jpg"
    },
    {
      name: "Martha Lewis",
      position: "CTO",
      salary: "199K",
      phone: "667-777-6677",
      img_src: "../../assets/images/employees/image10.jpg"
    },
    {
      name: "Tyler Terry",
      position: "CFO",
      salary: "188K",
      phone: "234-453-3322",
      img_src: "../../assets/images/employees/image11.jpg"
    },
    {
      name: "Jorge Bush",
      position: "Service Tech",
      salary: "44K",
      phone: "614-534-2423",
      img_src: "../../assets/images/employees/image12.jpg"
    },
    {
      name: "Obama Thrump",
      position: "Service Tech",
      salary: "10K",
      phone: "513-434-2222",
      img_src: "../../assets/images/employees/image13.jpg"
    },
    {
      name: "Ivanka Dood",
      position: "Service Tech",
      salary: "15K",
      phone: "666-090-4341",
      img_src: "../../assets/images/employees/image14.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  // picture name salary role phone number menu
  // picture item vendor price quantity quantity par menu

}
