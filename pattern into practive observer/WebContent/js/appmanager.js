require([ "observer", "observers", "subject"], function ( observer, observers, subject) {


            var subject, observer, otherObserver, data, moreData,
                Subject = require('subject'),
                Observer = require('observer');

            subject = new Subject();
            observer = new Observer('observer1');
            otherObserver = new Observer('observer2');

            data = {
                prop: 'something'
            };
            moreData = {
                prop: 'something else'
            };

            subject.observe(observer);
            subject.observe(otherObserver);

            subject.add(data);
            subject.add(moreData);

            subject.unObserve(observer);

            subject.remove(data);
            alert('hi');

});