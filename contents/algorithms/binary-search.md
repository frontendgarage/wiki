---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Binary Search

Suppose you're searching for a person in the phone book. Their name starts with K.
You could start at the beginning and keep flipping pages until you get to the Ks. But
you're more likely to start at a page in the middle, because you know the Ks are going
to be near the middle of the phone book.

Now suppose you log on to Twitter. When you do, Twitter has to verify that you have an
account on the site. So, it needs to search for your username in its database. Imagine your
username is kemilbeltre. Twitter could start from the begging and search for your name- but it makes more
sense for it to begin somewhere in the middle.

This is a search problem. And all these cases use the same algorithm to solve
the problem: _binary search_.

Binary search is an algorithm; its input is a sorted list of elements. If an element
you're looking for is in that list, binary search returns the position where it's located.
Otherwise, binary search returns _null_.

For example:

Imagine you're playing a game where you have to guess a number between 1 and 100. You start by guessing 50. If the
answer is higher than 50, you eliminate all numbers below 50 and repeat the process with the numbers between
51 and 100. If the answer is lower than 50, you eliminate all numbers above 50 and repeat the process
with the numbers between 1 and 49.

> **Note:**
> Binary search only works when your list is in sorted order.

## Animate representation

> In this case we are looking for `47` in a sorted list of numbers.

![Binary search animation](../../static/img/bs_animation)

## Binary search implementation

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
export default function binarySearch(
  haystack: number[],
  needle: number,
): boolean {
  let low = 0; // low and high keep track of which part of the list you'll search in.
  let high = haystack.length;

  do {
    const mid = Math.floor(low + (high - low) / 2); // check middle element...
    const value = haystack[mid];

    if (value === needle) {
      // Found needle.
      return true;
    } else if (value > needle) {
      // The needle was too high.
      high = mid;
    } else {
      // The needle was too low.
      low = mid + 1;
    }
  } while (low < high); // while you haven't narrowed it down to one element...

  return false; // The needle wasn't found.
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def binarySearch(haystack, needle):
    low = 0
    high = len(haystack)

    while low < high:
        mid = low + (high - low) // 2
        value = haystack[mid]

        if value == needle:
            return True
        elif value > needle:
            high = mid
        else:
            low = mid + 1

    return False
```

</TabItem>
</Tabs>

## EXERCISES

- Suppose you have a sorted list of 200 names, and you're searching through it using binary search. What's the
  maximum number of steps it would take?
- Suppose you doble the size of the list. What's the maximum number of steps now?
