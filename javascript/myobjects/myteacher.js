a = "Thomas"
b = "Durate"
c = 43; 

class Teacher{
    constructor(fname,lname,age)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    
    }

    print_all()
    {
        console.log(this.fname + " " + this.lname + " " 
        + this.age.toString());
    }
}

let teacher1 = new Teacher(a,b,c);
teacher1.print_all();