---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quicksort

Quicksort is a sorting algorithm, and much faster one than selection sort (which you learned before). It's good example
of elegant code.

## Divide & conquer

Quicksort employ an algorithm paradigm based on recursion. This paradigm, divide and conquer, breaks
a problem into subproblems that are similar to the original problem, recursevely solve the subproblems, and
finally combines the solutions to the subproblems to solve the original problem. Because D&C solves subproblems
recursevely, each subproblem must be smaller than the orginal problem, and there must be a base case for subproblems.
You should think as D&C algorithm as having 3 parts:

1. **Divide**: the problem into a number of subproblems that are smaller
   instances of the same problem.
2. **Conquer**: the subproblems by solving them recursevely. If they are
   small enough, solve the subproblem as base case.
3. **Combine**: the solutions to the subproblems into the orignal problem.

## Quicksort in practice

Let's use quicksort to sort an array. What's the simplest array that a sorting algorithm
can handle? Well, some arrays don't need to be sorted at all.

Not need to sort array like this:

- An empty array
- Array with one element

Empty arrays and arrays with just one element will be the base case. You can
just return those arrays as is -there's nothing to sort:

```py
def quicksort(array):
 if len(array) < 2:
  return array
```

Let's look at bigger arrays. An array with two elements is pretty easy to
sort, too.

1. Check if first element is smaller than second.
2. If it isn't, swap them.

What about an array of three elements?

```
[24, 10, 7]
```

Remember, you're using D&C. So you want to break downn this array
until you're at the base case. Here's how quicksort works. First, pick
an element from the array. This element is called the pivot.

We'll talk about how to pick a good pivot later. For now, let's say the first
item in the array is the pivot.

```
<24>
pivot
```

Now find the elements smaller than the pivot and the elements larger
than the pivot.

```
SMALLER       GREATER
        <24>
[10, 7]       [ ]
```

This is called partitioning. Now you have

- A sub-array of all the numbers less than the pivot
- The pivot
- A sub-array of all the numbers less than the pivot  
  The two sub-arrays aren't sorted. They're just partitioned. But
  if they were sorted, then sorting the whole array would be pretty easy.

If the sub-arrays are sorted, then you can combine the whole thing like
this-left array + pivot + right array-and you get a sorted
array. In this case, it's `[7, 10] + [24] + [] = [7, 10, 24]`,
which is a sorted array.

How do you sort the sub-arrays? Well, the quicksort base case already
knows how to sort arrays of two elements (the left sub-array) and
empty arrays (the right sub-array). So if you call quicksort on the
two sub-arrays and then combine the results, you get a sorted array!

```py
quicksort([7, 10] + [24] + [])
> 7, 10, 24 <----- A sorted array
```

This will work with any pivot. Suppose you choose 10 as the pivot instead.

```
[7] <10> [24]
```

Both sub-arrays have only elements, and you know how to sort those. So
now you know to sort an array of three elements. Here are the steps.

1. Pick a pivot.
2. Partition the array into two sub-arrays: elements less than the pivot
   and elements greater than the pivot.
3. Call quicksort recursevely on the two sub-arrays.

What about an array of four elements?

```
[24, 10, 12, 7]
```

Suppose you choose 24 as the pivot again

```
[10, 12, 7] <24> []
```

The array on the left has three elements. You already know how to sort
an array of three elements: call quicksort on it recursevely.

```
[10, 12, 7] <24> []

[7] <10> [12]
```

So you can sort an array of four elements. And if you can sort an array of four you can
sort an array of five elements. Why is that?  
Suppose you have this array of five elements.

```
[3, 5, 2, 1, 4]
```

Here are all the ways you can partition this array, depending on what pivot you choose.

```
[]<1> [3, 5, 2, 4]
[1]<2> [3, 5, 4]
[2, 1]<3> [5, 4]
[3, 2, 1]<4> [5]
[3, 2, 1, 4]<5>[]
```

Notice that all of these sub-arrays have somewhere between 0 and 4
elements. And you already know how to sort an array of 0 to 4 elements
using quicksort! So no matter what pivot you pick, you can call
quicksort recursevely on the two sub-arrays.

For example, suppose you pick 3 as the pivot. You call quicksort on the sub-arrays.

```
qsort([2,1])<3> qsort([5,4])
      [1,2]<3> [4,5]
      [1,2,3,4,5]
```

The sub-arrays get sorted, and then you combine the whole thing to get a sorted array.
This works even if you choose 5 as the pivot.

```
qsort([3,2,1,4])<5>qsort([])
[1,2,3,4]<5>[]
[1,2,3,4,5]
```

This works with any elements as the pivot. So you can sort an array of five elements.
Using the same logic, you can sort an array of six elements, and so on.

### Inductive proofs

You just got a sneak peak into inductive proofs! Inductive proofs are one way to prove that
your algorithm works. Eack inductive proof has two steps: the base case and the inductive case.
Sound familiar? For example, suppose I want to prove that I can climb to the top of a ladder. In the
inductive case, if my legs are on a rung, i can put my legs on the next rung. So if I'm on rung, I can
climb to rung 3. That's the inductive case. For the base case, I'll say that my legs are on rung 1.
Therefore, I can climb the entire ladder, going up one rung at a time.

You use similar reasoning for quicksort. In the base case, I showed that algorithm works for the
base case: arrays of size 0 and 1. In the inductive case, I showed that if quicksort works for
an array of size 1, it will work for an array of size 2 and so on.

## Implementation

<Tabs>
<TabItem value="js" label="JavaScript">

```js
function quickSort(arr) {
  // base case: arrays with 0 or 1 element are already "sorted"
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  // partition the list into two sub-lists
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursively sort the two sub-lists
  left = quickSort(left);
  right = quickSort(right);

  // combine the sorted sub-lists back into a single, sorted list
  return left.concat(pivot, right);
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def quicksort(array):
  if len(array) < 2:
    return array
  else:
    pivot = array[0]
    less = [i for i in array[1:] if i <= pivot]
    greater = [i for i in array[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)
```

</TabItem>
</Tabs>

## Big O notation revisited

## Merge sort vs. quicksort

## Average case vs. worst case

## Recap
