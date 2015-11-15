

class Quiz {
    public testItems = ko.observableArray<VocItem>();
    public seq = 0;
    public curItem = ko.observable<VocItem>();
    public showCorrect = ko.observable(false);

    constructor() {
        this.loadData();
    }

    loadData() {
        $.getJSON("/Assets/VocTest.json", data => {
            var items: VocItem[] = $.map(data.lesson, item => {
                return new VocItem(item);
            });
            this.testItems(items);
            this.curItem(items[0]);
        });
    }
    clickWord = (clickedItem: VocItem) => {
        // show if correct and next button
        var isCorrect = clickedItem.word === this.curItem().word;
        this.showCorrect(isCorrect);
    }
    goNext = () => {
        this.seq++;
        this.curItem(this.testItems()[this.seq]);
        this.showCorrect(false);
    }
}

ko.applyBindings(new Quiz());
