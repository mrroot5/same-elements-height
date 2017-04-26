var Utils = {
    is_empty: function(data) {
        var count = 0, i;

        if (typeof data === 'number') {
            return false;
        }

        if (typeof data === 'boolean') {
            return !data;
        }

        if (data === undefined || data === null) {
            return true;
        }

        if (data.length !== undefined) {
            return data.length === 0;
        }

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                count += 1;
            }
        }

        return count === 0;
    },
    sameElementsHeight: function(selector) {
        try {
            var elements = document.querySelectorAll(selector),
            max = 0,
            i = 0;

            if (this.is_empty(elements)) {
                throw "No matched selector";
            }

            for (i = 0; i < elements.length; i++) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].offsetHeight > max) {
                        max = elements[i].offsetHeight;
                    }
                }
            }

            for (i = 0; i < elements.length; i++) {
                if (elements.hasOwnProperty(i)) {
                    if (elements[i].offsetHeight < max) {
                        console.log(elements[i].offsetHeight);
                        elements[i].style.height = max + "px";
                        console.log(elements[i].style.height);
                    }
                }
            }
        } catch (e) {
            window.console.error("Same Elements Height: " + e.message);
        }
    }
};
