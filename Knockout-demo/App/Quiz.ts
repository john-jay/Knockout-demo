

class Quiz {
    public testItems = ko.observableArray<VocItem>();
    public curerntItem = 0;
    public item = ko.observable<VocItem>();

    constructor() {
        this.loadData();
    }

    loadData() {
        $.getJSON("/Assets/VocTest.json", data => {
            var items: VocItem[] = $.map(data.lesson, item => {
                return new VocItem(item);
            });
            this.testItems(items);
            this.item(items[0]);
        });
    }
}

ko.applyBindings(new Quiz());
