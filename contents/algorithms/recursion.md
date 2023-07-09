---
sidebar_position: 3
---

# Recursion

Recursion is like unpacking boxes that contain smaller boxes. You keep opening the boxes until you reach
the smallest one, and then you start putting everything back together.

Now, imagine that one of this boxes contain an item that you're looking for. What's your algorithm
to search for the object?  
Think of an algorithm before you read on.

Here's one approach.

1. Make a pile of boxes to look through.
2. Grab a box, and look through it.
3. If you find a box, add it to the pile to look through later.
4. If you find the object, you're done!
5. Repeat.

Here's an alternate approach.

1. Look through the box.
2. If you find a box, go to step 1.
3. If you find the object, you're done!

Which approach seems easier to you? The first approach uses a while loop. While the pile isn't empty, grab a box
and look through it:

```py
def look_for_object(main_box):
  pile = main_box.make_a_pile_to_look_through()
  while pile is not empty:
    box = pile.grab_a_box()
    for item in box:
      if item.is_a_box():
        pile.append(item)
      elif item.is_object():
        print "found the object"
```

The second way uses recursion. Recursion is where a function calls itself.
Here's the second way in pseudo-code:

```py
def look_for_object(box):
  for item in box:
    if item.is_a_box():
      look_for_object():
    elif item.is_object():
      print "found the object"
```

Both approaches accomplish the same thing, but the second approach is clearer to me. Recursion is used when it
makes the solution clearer. There's no performance benefit to using recursion; in fact, loops are sometimes better
for performance.

## The stack

Suppose you're throwing a barbecue. You keep a to-do list for the
barbecue, in the form of a stack of sticky notes.

Remember back when we talked about arrays and lists, and you had a to-do list?
You could add to-do items anywhere to the list or delete random items. The stack
of sticky notes is much simpler. When you insert an item, it gets added to the top
of the list. When you read an item, you only read the topmost item, and it's taken
off the list. So your to-do list has only two actions: push (insert) and pop (remove and read).

The stack is a simple data structure.  
You've using a stack this whole time without realizing it!

## The call stack

Your computer uses a stack internally called the call stack. Let's see it in action.
Here's a simple functions:

```py
def greet(name):
  print "hello, " + name + "!"
  greet2(name)
  print "getting ready to say bye..."
  bye()
```

This function greets you and then calls two other functions. Here are
those two functions:

```py
def greet2(name):
  print "how are you, " + name + "?"
```

```py
def bye():
  print "ok bye!"
```

Let's walk through what happens when you call a function.

> **Note**
> print is a function in Python, but to make things easier for this example, we're pretending it isn't.

Suppose you call `greet("maggie)`. First, your computer allocates a box
of memory for that function call.

Now let's use the memory. The variable `name` is set to "maggie". That
needs to be saved in memory.

Every time you make a function call, your computer saves the values
for all the variables for that call in memory like this. Next, you print
`hello maggie!` Then you call `greet2("maggie")`. Again, your computer
allocates a box of memory for this function call.

Your computer is using a stack for these boxes. The second box is added
on top of the first one. You print `how are you, maggie?` Then you return
from the function call. When this happens, the box on top of the stack
gets popped off.

Now the topmost box on the stack is for the `greet` function, which means
you returned back to the `greet` function. When you called the `greet2` function,
the `greet` function was partially completed. This is the big idea behind this section:
when you call a function from another function, the calling function is paused in a partially
completed state. All the values of the variables for that function are still stored in memory.
Now that you're done with the greet2 function, you're back to the `greet` function, and you
pick up where you left off. First you print `getting ready to say bye...` You call the `bye` function.

A box for that function is added to the top of the stack. Then you print `ok bye!` and return from the
function call.

And you're back to the `greet` function. There's nothing else to be done, so you return from the `greet`
function too. This stack, used to save the variables for multiple functions, is called call stack.

## The call stack with recursion

Let’s look this in action with the factorial function. `factorial(5)`, and it’s defined like this: `5! = 5*4*3*2*1`.
Similarly, `factorial(3` is `3*2*1`. Heres a recursive function to calculate the factorial of a number:

```py
def fact(x):
  if x == 1:
    return 1
  else:
    return x * fact(x-1)
```

Now you call fact(3). Let’s step through this call line by line and see how the stack changes. Remember,
the topmost box in the stack tells you what call to fact you’re currently on.

```markdown
CODE CALL STACK
fact(3): |x = 3|

---

## if x == 1: |x = 3|

## else: |x = 3|

// A RECURSIVE CALL:
return x\*fact(x-1): |x = 3||x = 2|

---

// NOW WE ARE IN THE SECOND CALL TO fact. x is 2
if x == 1: |x = 3||x = 2| <- THE TOPMOST FUNCTION
CALL IS THE CALL WE ARE
CURRENTLY IN

---

else: |x = 3||x = 2| NOTE: BOTH FUNCTION CALL
👆 👆 HAVE A VARIABLE NAMED X
AND THE VALUE OF X IS DIFERENT
IN BOTH.

---

return x\*fact(x-1): |x = 3||x = 2||x = 1|👈[3] YOU CAN'T ACCESS THIS[3]
👆[2] CALL X FROM THIS[2] CALL
AND VICE VERSA.

---

## if x == 1 |x = 3||x = 2||x = 1|

return 1: |x = 3||x = 2| ↪️|x = 1|⤵ THIS THE FIRST BOX TO GET
POPPED OFF THE STACK,
WHICH MEANS ITS THE FIRST
CALL WE RETURN FROM

---

return x \* fact(x-1) |x = 3| ↪️ |x = 2|⤵ RETURNS 2
👆 👆 THIS CALL RETURN 1
X IS 2

---

return x \* fact(x-1) ↪️ |x = 3| ⤵ RETURNS 6
👆 👆 THIS CALL RETURN 2
X IS 3
```

Notice that each call to `fact` has its own copy of `x`. You can’t access a different function’s copy of x.

## Recap

- Recursion is when a function calls itself.
- Every recursive function has two cases: the base case and the recursive case.
- All functions calls go onto the call stack.
- The call stack can get very large which takes up a lot of memory.
