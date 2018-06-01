### Why?

EventStack solves two design problems:
- reduces the number of connected listeners to DOM nodes in compare with `element.addListener()`
- respects an event priority, for example only top event can be emitted

### EventStack

It's a public API that allows to subscribe a DOM node for events. The subscription to an event for
each unique DOM node creates a new `EventTarget` object.

```
+------------+          +-------------+
|            |   0..*   |             |
| EventStack | +------> | EventTarget |
|            |          |             |
+------------+          +-------------+
```

### EventTarget

Each `EventTarget` is assigned to an unique DOM node. An `EventTarget` handles event handlers for
target's DOM node. For example, after multiple subscription were made for a `click` event, you will have the only
one registered `handler` for a DOM node. An `EventPool` also handles `EvenytPool` relations, it store only
unique pools. 

```
+-------------+          +---------+
|             |   0..*   |         |
| EventTarget | +------> | handler |
|             |          |         |
+-------------+          +---------+

      +                  +-----------+
      |           0..*   |           |
      +----------------> | EventPool |
                         |           |
                         +-----------+
```

A `handler` is a generated function that will notify corresponding subscribed `EventPool`. 

### EventPool & EventSet

An `EventPool` notifies its `EventSet`, while an `EventSet` stores a set of subscribed 
event handlers. An `EventSet` is also responsive for an event priorities and dispatch of
subscribed handlers.

```
+-----------+       +----------+
|           |   1   |          |
| EventPool | +---> | EventSet |
|           |       |          |
+-----------+       +----------+
```
