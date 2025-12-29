//Interface segregation principles means 
//Clients shouldn't not forcefully depending on methods they don't use.

//Large interfaces = hidden coupling.

interface IWork {
    working(): void;
}

interface IFood {
    eating(): void;
}

interface IPower {
    charging(): void;
}

abstract class Work implements IWork {
    working(): void {
        console.log('working...')
    }
}

class HumanWorker extends Work implements IFood {
    eating(): void {
        console.log('eating...')
    }
}

class RobotWorker extends Work implements IPower {
    charging(): void {
        console.log('charging...')
    }
}