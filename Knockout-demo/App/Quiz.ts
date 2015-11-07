

class Quiz {
    public testItems = ko.observableArray<VocItem>();
    //public curerntItem = 1;
    //public item: VocItem;

    constructor() {
        this.loadData();
    }

    loadData() {
        $.getJSON("/Assets/VocTest.json", data => {
            var items = $.map(data.lesson, item => {
                return new VocItem(item);
            });
            this.testItems(items);
        });
    }
}

ko.applyBindings(new Quiz());
