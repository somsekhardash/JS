var publisherSubscriber = {};

(function (container) {
  var id = 0;

  container.subscribe = function (topic, f) {
    if (!(topic in container)) {
      container[topic] = [];
    }

    container[topic].push({
      id: ++id,
      callback: f,
    });

    return id;
  };

  container.unsubscribe = function (topic, id) {
    var subscribers = [];
    for (var subscriber of container[topic]) {
      if (subscriber.id !== id) {
        subscribers.push(subscriber);
      }
    }
    container[topic] = subscribers;
  };

  container.publish = function (topic, data) {
    for (var subscriber of container[topic]) {
      subscriber.callback(data);
    }
  };
})(publisherSubscriber);

var subscriptionID1 = publisherSubscriber.subscribe(
  "mouseClicked",
  function (data) {
    console.log(
      "I am Bob's callback function for a mouse clicked event and this is my event data: " +
        JSON.stringify(data)
    );
  }
);

var subscriptionID2 = publisherSubscriber.subscribe(
  "mouseClicked",
  function (data) {
    console.log(
      "I am somb's callback function for a mouse clicked event and this is my event data: " +
        JSON.stringify(data)
    );
  }
);
console.log(publisherSubscriber);
