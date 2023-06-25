---
sidebar_position: 3
---

# Hash Tables

Suppose you work at a grocery store. When customer buys a product, you have to look up the price in a book.
If the book is unalphbetized, it can take long time to look through every single line for banana. You'd be doing
simple search, where you have to look at every line. As you already know simple search take O(n) time. If the
book is alphabetized, you could run binary search to find the price of a banana. That would only take O(log n) time.

You already know that binary search is faster. But as a cashier, looking things up in a book is a pain, even if 
the book is sorted. What do you really need is something with all the names and prices memorized. Then you don't need to 
look up anything: you ask, and you will get the answer instantly.

The system can give you the price in O(1) time for any item, no matter how big the book is. It's even faster than binary search. 

Awesome! How do you get that? 

The answer is simple: hash functions.

## Hash functions

A hash function is a function where you put in a string and you get back a number.

## Use cases

Hash tables are used everywhere.

### Using hash tables for lookups

Your phone has a nice phone-book built in.

Each name has a phone number associated with it.

This is a perfect use case for hash tables! Hash tables are
great when you want to:

- Create a mapping from one thing to another thing.
- Look something up.

How to create a phone-book?

1. Make a new hash table:

`>>> phone_book = {}`

2. Add the phone number of some people:

`>>> phone_book["john"] = 1234`
`>>> phone_book["Kay"] = 4288`

That's all! Now suppose you want to find 
the John's number. Just pass the key in the hash:

`>>> print phone_book["john"]`

1234 <------------- John's phone number

Hash tables are used for lookups on a much large scale. For example,
suppose you go to a website like `https://google.com`. Your computer
has to translate `https://google.com` to an IP address.

For any website you go to, the address has to be translated to an IP
address.

`https://google.com`. ----> 64.233.160.0

A perfect use case for hash tables. This process is called DNS resolution.
Hash tables are one way to provide this functionality.

### Preventing duplicates entries



### Using hash tables as a cache

## Collisions

## Performance

### Load factor

### A good hash functions

## Recap
