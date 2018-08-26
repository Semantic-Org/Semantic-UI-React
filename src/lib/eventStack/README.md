# Event Stack

## Why?

The `EventStack` solves two design problems:
1. Reduces the number of connected listeners to DOM nodes compared to `element.addListener()`.
2. Respects event ordering. Example, two modals are open and you only want the top modal to close on document click.

## EventStack

The `EventStack` is a public API that allows subscribing a DOM node to events. The event subscription for
each unique DOM node creates a new `EventTarget` object.

```
+------------+          +-------------+
|            |   0..*   |             |
| EventStack | +------> | EventTarget |
|            |          |             |
+------------+          +-------------+
```

## EventTarget

Each `EventTarget` is assigned to an unique DOM node. An `EventTarget` tracks event handlers for
the target's DOM node. Making multiple subscriptions to a `click` event for a single DOM node will
result in a single registered `handler` for that DOM node. An `EventPool` also handles `EventPool`
relations, it stores only unique pools. 

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

A `handler` is a generated function that will notify the corresponding subscribed `EventPool`. 

## EventPool & EventSet

An `EventPool` notifies its `EventSet`, while an `EventSet` stores a set of subscribed 
event handlers. An `EventSet` is also responsible for event ordering and dispatching to
subscribed handlers.

```
+-----------+       +----------+
|           |   1   |          |
| EventPool | +---> | EventSet |
|           |       |          |
+-----------+       +----------+
```
