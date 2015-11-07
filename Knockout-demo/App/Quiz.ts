interface ITestItem {
    def: string;
    word: string;
}

class Quiz {
    private testItems: ITestItem[];
    public curerntItem = 1;
    public item: ITestItem;

    constructor() {
        this.item = { def: "gee whiz", word: "gosh" };
        //this.testItems.push({ def: "gee whiz", word: "gosh" });
    }
}

ko.applyBindings(new Quiz());
