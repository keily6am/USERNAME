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

    set_age(n)
    {
        this.age = n;
    }

    get_age()
    {
        return this.age;
    }

    happy_birthday()
    {
        this.age = this.age + 1;
    }
}

let teacher1 = new Teacher(a,b,c);
teacher1.print_all();

let teacher2 = new Teacher("Jason", "Larson",50);
teacher2.print_all();

teacher2.set_age(55);
teacher2.print_all();

teacher2.happy_birthday();
teacher2.print_all();